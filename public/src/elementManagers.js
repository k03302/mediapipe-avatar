import { Landmark, VirtualLandmark, Bone, VirtualBone } from './elements.js'
export { PoseElementManager, BoneManager, VirtualBoneManager };

class PoseElementManager {
    constructor() {
        this.container = [];

        this.initKalmanFilter = () => {
            for (let element of this.container) {
                element.initKalmanFilter();
            }
        };

        this.setUseKalmanFilter = (useKalmanFilter) => {
            for (let element of this.container) {
                element.setUseKalmanFilter(useKalmanFilter);
            }
        };

        this.add = (poseElement) => {
            this.container.push(poseElement);
        };
        this.configure = (poseElementConfigures) => {
            this.container = [];
            poseElementConfigures.forEach(config => {
                if (!config) return;
                let type = config.type;
                if (type === 'Landmark') {
                    this.add(new Landmark(this, config.poseElementConfig));
                } else if (type === 'VirtualLandmark') {
                    this.add(new VirtualLandmark(this, config.poseElementConfig, config.virtualLandmarkConfig));
                } else if (type === 'VirtualBone') {
                    this.add(new VirtualBone(this, config.poseElementConfig, config.virtualBoneConfig, config.otherName));
                } else if (type === 'Bone') {
                    this.add(new Bone(this, config.poseElementConfig, config.otherName));
                }
            });
        };

        this.update = (data = null) => {
            this.container.forEach(poseElement => { poseElement.update(data); });
        };
        this.setFromArray = (dataArray, format) => {
            if (!dataArray) return;
            for (let poseEl of this.container) {
                let index = poseEl.index;
                let data = dataArray[index];
                if (data) {
                    if (format === 'xyzv') {
                        poseEl.setFromXYZV(data);
                    } else if (format === 'array') {
                        poseEl.setFromArray(data);
                    } else if (format === 'mat') {
                        poseEl.setFromMat(data);
                    }
                } else {
                    poseEl.update();
                }
            }
        };


        this.get = (index) => {
            for (let i = 0; i < this.container.length; i++) {
                let poseElement = this.container[i];
                if (poseElement.index === index) {
                    return poseElement;
                }
            }
            return null;
        };
        this.getByName = (name) => {
            for (let poseElement of this.container) {
                if (poseElement.name === name) {
                    return poseElement;
                }
            }
            return null;
        };
    }
}


class BoneManager extends PoseElementManager {
    constructor() {
        super();
        this.avatar = null
        this.avatarType = null
        this.avatarBones = null;
        let slerpRatio = 1;

        this.setSlerpRatio = (ratio) => {
            slerpRatio = ratio;
        }

        this.bindAvatar = (avatar, type, coordinateSystem = null) => {
            this.avatar = avatar;
            this.avatarType = type;
            this.avatarBones = [];
            this.coordinateSystem = coordinateSystem;


            for (let bone of this.container) {

                let otherName = bone.otherName[this.avatarType];
                let index = bone.index;
                let avatarBone = this.avatar.getObjectByName(otherName);
                if (avatarBone && avatarBone.isBone) {
                    this.avatarBones[index] = avatarBone;
                }
            }
        };

        this.getAvatarRoot = () => {
            return this.avatar;
        }

        this.getAvatarBone = (virtualBoneName, type) => {
            let virtualBone = this.getByName(virtualBoneName);
            let avatarBoneName = virtualBone && type && virtualBone.otherName[type];
            let avatarBone = avatarBoneName && this.avatar && this.avatar.getObjectByName(avatarBoneName);

            if (!avatarBone) {
                return null;
            }
            return avatarBone;
        };

        this.add = (bone) => {
            this.container.push(bone);
            if (this.avatar) {
                let otherName = bone.otherName[this.avatarType];
                let index = bone.index;
                let avatarBone = this.avatar.getObjectByName(otherName);
                if (avatarBone && avatarBone.isBone) {
                    this.avatarBones[index] = avatarBone;
                }
            }
        };

        this.updateVisibility = () => {
            for (let bone of this.container) {
                bone.updateVisibility();
            }
        }

        const leftQuatAdjust = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, Math.PI / 2));
        const rightQuatAdjust = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, -Math.PI / 2));
        const midQuatAdjust = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, Math.PI / 2));

        let avatarWorldQuaternion = new THREE.Quaternion();
        let coordinateSystemInverseQuaternion = new THREE.Quaternion();

        this.updateAvatar = () => {
            if (!this.avatar || !this.avatarBones) return;
            if (this.coordinateSystem) {
                this.coordinateSystem.getWorldQuaternion(coordinateSystemInverseQuaternion);
                coordinateSystemInverseQuaternion.invert();
            }

            this.container.forEach((bone, i) => {
                let avatarBone = this.avatarBones[i];
                // if(avatarBone && (bone.name === 'RightArm' || bone.name === 'LeftArm')) {
                //     let armBone = avatarBone;
                //     let shoulderBone = avatarBone.parent;

                //     avatarBone.parent.getWorldQuaternion(avatarWorldQuaternion);
                //     let vec = new THREE.Vector3(1, 0, 0);
                //     let zeroQuat = new THREE.Quaternion();
                //     vec.applyQuaternion(avatarWorldQuaternion);

                //     if(vec.x  > 0) {
                //         armBone.quaternion.slerp(zeroQuat, 0.1);
                //         avatarBone = shoulderBone;
                //     } else {
                //         shoulderBone.quaternion.slerp(zeroQuat, 0.1);
                //         avatarBone = armBone;
                //     }
                // }


                if (avatarBone) {
                    avatarBone.parent.getWorldQuaternion(avatarWorldQuaternion);

                    if (this.coordinateSystem) {
                        avatarWorldQuaternion.premultiply(coordinateSystemInverseQuaternion);
                    }
                    let avatarLocalQuaternion;
                    if (this.avatarType === 'bipedRobot') {
                        if (bone.side === 'right') {
                            avatarLocalQuaternion = avatarWorldQuaternion.invert().multiply(bone.worldQuaternion).multiply(rightQuatAdjust);
                        } else if (bone.side === 'left') {
                            avatarLocalQuaternion = avatarWorldQuaternion.invert().multiply(bone.worldQuaternion).multiply(leftQuatAdjust)
                        } else if (avatarBone.name !== 'hips_joint') {
                            avatarLocalQuaternion = avatarWorldQuaternion.invert().multiply(bone.worldQuaternion).multiply(midQuatAdjust);
                        } else {
                            avatarLocalQuaternion = avatarWorldQuaternion.invert().multiply(bone.worldQuaternion);
                        }
                    } else {
                        avatarLocalQuaternion = avatarWorldQuaternion.invert().multiply(bone.worldQuaternion);
                    }
                    avatarBone.quaternion.slerp(avatarLocalQuaternion, slerpRatio * bone.visibility);
                }
            });
        }

        this.getWorldQuaternionArray = () => {
            let worldQuaternionArray = [];
            for (let bone of this.container) {
                worldQuaternionArray.push(bone.worldQuaternion.toArray());
            }
            return worldQuaternionArray;
        };
    }
}

class VirtualBoneManager extends BoneManager {
    constructor(landmarkManager) {
        super();
        this.landmarkManager = landmarkManager;
    }
}