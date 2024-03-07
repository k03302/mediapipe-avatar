import KalmanFilter from "./KalmanFilter.js";
import { PoseElementManager } from "./elementManagers.js";
export { PoseElement, Landmark, VirtualLandmark, Bone, VirtualBone };


THREE.Vector3.rightVector = new THREE.Vector3(1, 0, 0);
THREE.Vector3.upVector = new THREE.Vector3(0, 1, 0);
THREE.Vector3.frontVector = new THREE.Vector3(0, 0, 1);



THREE.Vector3.prototype.eliminateComponent = function (vector, target) {
    let coef = vector.dot(target) / target.dot(target);
    this.copy(vector).addScaledVector(target, -coef);
};


/*
Projects argument vectors start, end onto the plane which has this as normal vector
and returns radian angle from start vector to end vector
*/
THREE.Vector3.prototype.getProjectedAngle = (function () {
    let cross = new THREE.Vector3();
    let projectedStart = new THREE.Vector3();
    let projectedEnd = new THREE.Vector3();
    return function (start, end) {
        if (!start || !end) return null;
        projectedStart.eliminateComponent(start, this);
        projectedEnd.eliminateComponent(end, this);
        cross.crossVectors(this, projectedStart);

        let projectedAngle = projectedStart.angleTo(projectedEnd);
        if (cross.angleTo(projectedEnd) < Math.PI / 2) {
            projectedAngle = -projectedAngle;
        }
        return projectedAngle;
    };
})();


class PoseElement {
    constructor(manager, { index, name, parentIndex, childrenIndex, counterpartIndex, side }) {
        this.manager = manager;
        this.name = name;
        this.index = index;
        this.parentIndex = parentIndex;
        this.childrenIndex = childrenIndex;
        this.counterpartIndex = counterpartIndex;
        this.side = side;
        this.kalmanFilters = null;
        this.useKalmanFilter = true;

        this._parent = null;
        this._children = null;
        this._counterpart = null;


        this.update = (data) => { }
        this.getChild = (num) => {
            let children = this.children;
            if (children) {
                let child = children.container[num];
                if (child) {
                    return child;
                }
            }
            return null;
        }
        this.getChildByIndex = (index) => {
            let children = this.children;
            if (children) {
                return children.get(index);
            }
            return null;
        }
        this.getChildByName = (name) => {
            let children = this.children;
            if (children) {
                return children.getByName(name);
            }
            return null;
        }

        this.initKalmanFilter = () => {
            this.kalmanFilters = null;
        };
        this.setUseKalmanFilter = (useKalmanFilter) => {
            this.useKalmanFilter = useKalmanFilter;
        };
        this._updateKalmanFilter = (_x, _y, _z) => {
            if (this.useKalmanFilter === false) {
                return [_x, _y, _z];
            }
            if (this.kalmanFilters === null) {
                this.kalmanFilters = {
                    x: new KalmanFilter(_x, 1, 1, 0.01, 0.01),
                    y: new KalmanFilter(_y, 1, 1, 0.01, 0.01),
                    z: new KalmanFilter(_z, 1, 1, 0.01, 0.01),
                }
            }
            let x = this.kalmanFilters.x.predict();
            let y = this.kalmanFilters.y.predict();
            let z = this.kalmanFilters.z.predict();
            this.kalmanFilters.x.update(_x);
            this.kalmanFilters.y.update(_y);
            this.kalmanFilters.z.update(_z);

            return [x, y, z];
        }
    }

    get parent() {
        if (this.parentIndex === null) this._parent = null;
        else if (this._parent === null) this._parent = this.manager.get(this.parentIndex);
        return this._parent;
    }
    get children() {
        if (this.childrenIndex === null) this._children = null;
        else if (this._children === null) {
            this._children = new PoseElementManager();
            this.childrenIndex.forEach(i => {
                this._children.add(this.manager.get(i));
            });
        }
        return this._children;
    }
    get counterpart() {
        if (this.counterpartIndex === null) this._counterpart = this;
        else if (this._counterpart === null) this._counterpart = this.manager.get(this.counterpartIndex);
        return this._counterpart;
    }
    get isVirtual() { return false; }
    get isBone() { return false; }
    get isLandmark() { return false; }
}


class Landmark extends PoseElement {
    constructor(manager, poseElementConfig) {
        super(manager, poseElementConfig);

        this._worldPosition = new THREE.Vector3();
        this.visibility = 0;
        this._vectorToCounterpart = new THREE.Vector3();
        this._vectorFromParent = new THREE.Vector3();

        let landmarkPosition1 = new THREE.Vector3();
        let landmarkPosition2 = new THREE.Vector3();
        this.lerpLandmarks = (landmark1, landmark2, alpha) => {
            landmarkPosition1.copy(landmark1.worldPosition);
            landmarkPosition2.copy(landmark2.worldPosition);
            landmarkPosition1.multiplyScalar(1 - alpha);
            landmarkPosition2.multiplyScalar(alpha);
            this._worldPosition.copy(landmarkPosition1).add(landmarkPosition2);
            this.visibility = landmark1.visibility * (1 - alpha) + landmark2.visibility * alpha;
        };

        this.update = (landmarkData) => { };

        this.setFromXYZV = (xyzv) => {
            let [x, y, z] = this._updateKalmanFilter(xyzv.x, xyzv.y, xyzv.z);

            this._worldPosition.set(x, y, z);
            this.visibility = xyzv.visibility;
        };

        this.setFromArray = (array) => {
            let [x, y, z] = this._updateKalmanFilter(array[0], array[1], array[2]);

            this._worldPosition.set(x, y, z);
            this.visibility = array[3];
        };

        this.getVectorToChild = (num) => {
            let child = this.getChild(num);
            if (child !== null) {
                return child.vectorFromParent;
            } else {
                return null;
            }
        };
    }

    get worldPosition() { return this._worldPosition; }

    get vectorFromParent() {
        let parent = this.parent;
        if (parent !== null) {
            this._vectorFromParent.subVectors(this.worldPosition, parent.worldPosition);
            return this._vectorFromParent;
        } else {
            return null;
        }
    }

    get vectorToCounterpart() {
        let counterpart = this.counterpart;
        if (counterpart !== null) {
            this._vectorToCounterpart.subVectors(counterpart.worldPosition, this.worldPosition);
            return this._vectorToCounterpart;
        } else {
            return null;
        }
    }

    get isLandmark() { return true; }
}

// Virtual landmarks are not provied by mediapipe but calculated using real landmarks
class VirtualLandmark extends Landmark {
    constructor(manager, poseElementConfig, { startLandmarkIndex, endLandmarkIndex, alpha }) {
        super(manager, poseElementConfig);

        this.startLandmarkIndex = startLandmarkIndex;
        this.endLandmarkIndex = endLandmarkIndex;
        this.alpha = alpha;

        this._startLandmark = null;
        this._endLandmark = null;

        this.update = (data) => {
            if (this.startLandmark && this.endLandmark) {
                this.lerpLandmarks(this.startLandmark, this.endLandmark, this.alpha);
            }
        };
    }
    get startLandmark() {
        if (this.startLandmarkIndex === null) this._startLandmark = null;
        else if (this._startLandmark === null) {
            this._startLandmark = this.manager.get(this.startLandmarkIndex);
        }
        return this._startLandmark;
    };
    get endLandmark() {
        if (this.endLandmarkIndex === null) this._endLandmark = null;
        else if (this._endLandmark === null) {
            this._endLandmark = this.manager.get(this.endLandmarkIndex);
        }
        return this._endLandmark;
    }
    get isVirtual() { return true; }
}

class Bone extends PoseElement {
    constructor(manager, poseElementConfig, otherName) {
        super(manager, poseElementConfig);
        this.otherName = otherName;
        //this.visibility = 1;
        this._worldQuaternion = new THREE.Quaternion();

        this.setFromMat = (mat) => {
            this._worldQuaternion.setFromRotationMatrix(mat);
        };
        this.setFromArray = (array) => {
            this._worldQuaternion.fromArray(array);
        };
        this.update = (boneData) => { };
        this.updateVisibility = () => { };
    }
    get isBone() { return true; }
    get worldQuaternion() { return this._worldQuaternion; }
}


class VirtualBone extends Bone {

    constructor(manager, poseElementConfig, { startLandmarkIndex, endLandmarkIndex }, otherName) {
        super(manager, poseElementConfig, otherName);

        this.startLandmarkIndex = startLandmarkIndex;
        this.endLandmarkIndex = endLandmarkIndex;
        this._startLandmark = null;
        this._endLandmark = null;
        this._xDirection = new THREE.Vector3(1, 0, 0);
        this._yDirection = new THREE.Vector3(0, 1, 0);
        this._zDirection = new THREE.Vector3(0, 0, 1);
        this._rotationMatrix = new THREE.Matrix4();
        this.visibility = 1;
        this.update = () => {
            let parent = this.parent;
            if (parent) {
                this.updateYDirection();
                this.updateZDirection(parent.zDirection);
            } else {
                this.updateYDirection();
                this.updateZDirection(this._zDirection);
            }
        };

        this.updateVisibility = () => {
            let count = 0;
            let visibility = 0;
            if (this.startLandmark) {
                visibility += this.startLandmark.visibility;
                count += 1;
            }
            if (this.endLandmark) {
                visibility += this.endLandmark.visibility;
                count += 1;
            }
            this.visibility = (count > 0) ? visibility / count : 0;
        };

        this.updateYDirection = (yDirection) => {
            if (!yDirection) {
                let startLandmark = this.startLandmark;
                let endLandmark = this.endLandmark;
                if (startLandmark && endLandmark) {
                    this._yDirection.subVectors(startLandmark.worldPosition, endLandmark.worldPosition);
                } else {
                    return false;
                }
            } else {
                this._yDirection.copy(yDirection);
            }

            updateWorldQuaternion();
            return true;
        };

        this.updateZDirection = (zDirection) => {
            if (!zDirection) {
                return false;
            } else {
                this._zDirection.copy(zDirection);
            }

            updateWorldQuaternion();
            return true;
        };


        let worldEuler = new THREE.Euler();
        let updateWorldQuaternion = () => {
            this._yDirection.normalize();
            this._zDirection.eliminateComponent(this._zDirection, this._yDirection);
            this._zDirection.normalize();
            this._xDirection.crossVectors(this._yDirection, this._zDirection);
            this._rotationMatrix.makeBasis(this._xDirection, this._yDirection, this._zDirection);
            worldEuler.setFromRotationMatrix(this._rotationMatrix);

            let [x, y, z] = this._updateKalmanFilter(worldEuler.x, worldEuler.y, worldEuler.z);

            worldEuler.set(x, y, z);

            this._worldQuaternion.setFromEuler(worldEuler);
        }
    }
    get xDirection() { return this._xDirection; }
    get yDirection() { return this._yDirection; }
    get zDirection() { return this._zDirection; }
    get startLandmark() {
        let landmarkManager = this.manager && this.manager.landmarkManager;

        if (this.startLandmarkIndex === null) this._startLandmark = null;
        else if (this._startLandmark === null && landmarkManager) {
            this._startLandmark = landmarkManager.get(this.startLandmarkIndex);
        }
        return this._startLandmark;
    };
    get endLandmark() {
        let landmarkManager = this.manager && this.manager.landmarkManager;
        if (this.endLandmarkIndex === null) this._endLandmark = null;
        else if (this._endLandmark === null && landmarkManager) {
            this._endLandmark = landmarkManager.get(this.endLandmarkIndex);
        }
        return this._endLandmark;
    }
    get isVirtual() { return true; }
    get length() {
        return this.endLandmark.vectorFromParent.length();
    }
}