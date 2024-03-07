import {
    MEDIAPIPE_LANDMARKS_CONFIG,
    MEDIAPIPE_VIRTUAL_BONES_CONFIG,
    MEDIAPIPE_LEFT_HAND_LANDMARKS_CONFIG,
    MEDIAPIPE_RIGHT_HAND_LANDMARKS_CONFIG,
    MEDIAPIPE_LEFT_HAND_BONES_CONFIG,
    MEDIAPIPE_RIGHT_HAND_BONES_CONFIG
} from './MediapipeConfig.js';
import { PoseElementManager, VirtualBoneManager } from './elementManagers.js';

class MediapipePoseCalculator {
    constructor() {

        let leftHandLandmarkManager = this.leftHandLandmarkManager = new PoseElementManager();
        leftHandLandmarkManager.configure(MEDIAPIPE_LEFT_HAND_LANDMARKS_CONFIG);
        let leftHandBoneManager = this.leftHandBoneManager = new VirtualBoneManager(leftHandLandmarkManager);
        leftHandBoneManager.configure(MEDIAPIPE_LEFT_HAND_BONES_CONFIG);

        let rightHandLandmarkManager = this.rightHandLandmarkManager = new PoseElementManager();
        rightHandLandmarkManager.configure(MEDIAPIPE_RIGHT_HAND_LANDMARKS_CONFIG);
        let rightHandBoneManager = this.rightHandBoneManager = new VirtualBoneManager(rightHandLandmarkManager);
        rightHandBoneManager.configure(MEDIAPIPE_RIGHT_HAND_BONES_CONFIG);

        let poseLandmarkManager = this.poseLandmarkManager = new PoseElementManager();
        poseLandmarkManager.configure(MEDIAPIPE_LANDMARKS_CONFIG);
        let poseBoneManager = this.poseBoneManager = new VirtualBoneManager(poseLandmarkManager);
        poseBoneManager.configure(MEDIAPIPE_VIRTUAL_BONES_CONFIG);

        this.useHand = true;

        this.initKalmanFilter = () => {
            this.poseLandmarkManager.initKalmanFilter();
            this.leftHandBoneManager.initKalmanFilter();
            this.rightHandLandmarkManager.initKalmanFilter();
            this.poseBoneManager.initKalmanFilter();
            this.leftHandBoneManager.initKalmanFilter();
            this.rightHandBoneManager.initKalmanFilter();
        }

        this.setUseKalmanFilter = (useKalmanFilter) => {
            this.poseLandmarkManager.setUseKalmanFilter(useKalmanFilter);
            this.leftHandBoneManager.setUseKalmanFilter(useKalmanFilter);
            this.rightHandLandmarkManager.setUseKalmanFilter(useKalmanFilter);
            this.poseBoneManager.setUseKalmanFilter(useKalmanFilter);
            this.leftHandBoneManager.setUseKalmanFilter(useKalmanFilter);
            this.rightHandBoneManager.setUseKalmanFilter(useKalmanFilter);
            this.initKalmanFilter();
        }

        this.setUseHand = (useHand) => {
            this.useHand = useHand;
        };


        this.update = (data) => {
            const poseData = data['poseLandmarks'];
            const results = {};

            if (poseData) {
                results['poseQuatArr'] = this.updatePose(poseData, 'xyzv');
                results['rootPos'] = this.getWorldRootPos();
            }
            if (this.useHand) {
                const leftHandData = data['leftHandLandmarks'];
                const rightHandData = data['rightHandLandmarks'];
                if (leftHandData) {
                    results['leftHandQuatArr'] = this.updateHand(leftHandData, 'xyzv', true);
                }
                if (rightHandData) {
                    results['rightHandQuatArr'] = this.updateHand(rightHandData, 'xyzv', false);
                }
            }

            return results;
        };



        this.updatePose = (poseData, dtype) => {
            poseData.forEach(d => {
                d.x = -d.x;
            });
            if (poseData) {
                this.poseLandmarkManager.setFromArray(poseData, dtype);
                this.poseBoneManager.update();
                this.poseBoneManager.updateVisibility();
            }
            return this.poseBoneManager.getWorldQuaternionArray();
        };


        this.getWorldRootPos = () => {
            const leftHip = this.poseLandmarkManager.getByName('left_hip');
            const rightHip = this.poseLandmarkManager.getByName('right_hip');
            const worldRootPos = (new THREE.Vector3()).add(leftHip.worldPosition).add(rightHip.worldPosition).multiplyScalar(0.5);
            worldRootPos.x = -worldRootPos.x;
            worldRootPos.y = -worldRootPos.y;
            return worldRootPos.toArray();
        };


        this.updateHand = (handData, dtype, isLeft) => {
            handData.forEach(d => {
                d.x = -d.x;
            })
            let handLandmarkManager = isLeft ? this.leftHandLandmarkManager : this.rightHandLandmarkManager;
            let handBoneManager = isLeft ? this.leftHandBoneManager : this.rightHandBoneManager;
            if (handData) {
                handLandmarkManager.setFromArray(handData, dtype);
                handBoneManager.update();
                handBoneManager.updateVisibility();
            }
            return handBoneManager.getWorldQuaternionArray();
        };


        let setPoseBoneCalculator = () => {

            const Hips = poseBoneManager.getByName('Hips');
            const LeftUpLeg = poseBoneManager.getByName('LeftUpLeg');
            const LeftLeg = poseBoneManager.getByName('LeftLeg');
            const LeftFoot = poseBoneManager.getByName('LeftFoot');
            const RightUpLeg = poseBoneManager.getByName('RightUpLeg');
            const RightLeg = poseBoneManager.getByName('RightLeg');
            const RightFoot = poseBoneManager.getByName('RightFoot');
            const Spine = poseBoneManager.getByName('Spine');
            const LeftArm = poseBoneManager.getByName('LeftArm');
            const LeftForeArm = poseBoneManager.getByName('LeftForeArm');
            const Neck = poseBoneManager.getByName('Neck');
            const Head = poseBoneManager.getByName('Head');
            const RightArm = poseBoneManager.getByName('RightArm');
            const RightForeArm = poseBoneManager.getByName('RightForeArm');




            let zDirection = new THREE.Vector3();


            Hips.update = function () {
                let leftUpLeg = this.getChild(1);

                let hipVector = leftUpLeg && leftUpLeg.startLandmark && leftUpLeg.startLandmark.vectorToCounterpart;
                let spine = this.getChild(2);
                let spineYDirection = spine && spine.yDirection;
                if (hipVector && spineYDirection) {
                    zDirection.crossVectors(spineYDirection, hipVector);
                    this.updateYDirection(spineYDirection);
                    this.updateZDirection(zDirection);
                }
            };

            Spine.update = function () {
                let leftArm = this.getChild(0);
                let shoulderVector = leftArm && leftArm.startLandmark && leftArm.startLandmark.vectorToCounterpart;

                if (shoulderVector && this.yDirection) {
                    zDirection.crossVectors(this.yDirection, shoulderVector);
                    this.updateYDirection();
                    this.updateZDirection(zDirection);
                }
            };



            LeftArm.update = RightArm.update = LeftForeArm.update = RightForeArm.update = function () {
                let spine = Spine;
                let spineXDirection = spine && spine.xDirection;
                let spineZDirection = spine && spine.zDirection;
                let armYDirection = this.yDirection;
                if (spineXDirection && spineZDirection && armYDirection) {
                    let angle = spineXDirection.angleTo(armYDirection);
                    if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
                        zDirection.crossVectors(spineXDirection, armYDirection);
                    } else {
                        zDirection.crossVectors(spineZDirection, armYDirection);
                        zDirection.crossVectors(zDirection, armYDirection);
                    }
                    this.updateYDirection();
                    this.updateZDirection(zDirection);
                }

            };


            LeftUpLeg.update = RightUpLeg.update = LeftLeg.update = RightLeg.update = LeftFoot.update = RightFoot.update = function () {
                let hips = Hips;
                let hipsXDirection = hips && hips.xDirection;
                let hipsZDirection = hips && hips.zDirection;
                if (hipsXDirection && hipsZDirection && this.yDirection) {
                    let angle = hipsXDirection.angleTo(this.yDirection);
                    if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
                        zDirection.crossVectors(hipsXDirection, this.yDirection);
                        zDirection.negate();
                    } else {
                        zDirection.crossVectors(hipsZDirection, this.yDirection);
                        zDirection.crossVectors(zDirection, this.yDirection);
                        zDirection.negate();
                    }
                    this.updateYDirection();
                    this.updateZDirection(zDirection);
                }
            };

            //LeftFoot.update = RightFoot.update = function () {


            let yDirection = new THREE.Vector3();
            Head.update = function () {
                let lm_head = this.startLandmark;
                let lm_nose = lm_head && lm_head.getChild(0);
                let lm_right_ear = lm_head.getChild(7);
                let earVector = lm_right_ear && lm_right_ear.vectorToCounterpart;

                let neck = this.parent;
                let neckYDirection = neck && neck.yDirection;

                if (lm_nose && earVector && neckYDirection) {
                    zDirection.subVectors(lm_head.worldPosition, lm_nose.worldPosition);
                    yDirection.crossVectors(earVector, zDirection);

                    this.updateYDirection(neckYDirection);
                    this.updateZDirection(zDirection);
                }
            };


        };
        let setHandBoneCalculator = (isLeft) => {
            let handBoneManager = isLeft ? leftHandBoneManager : rightHandBoneManager;
            const Wrist = handBoneManager.getByName('wrist');
            const ThumbMetacarpal = handBoneManager.getByName('thumb-metacarpal');
            const ThumbProximal = handBoneManager.getByName('thumb-phalanx-proximal');
            const ThumbDistal = handBoneManager.getByName('thumb-phalanx-distal');

            const IndexMetacarpal = handBoneManager.getByName('index-finger-metacarpal');
            const IndexProximal = handBoneManager.getByName('index-finger-phalanx-proximal');
            const IndexIntermediate = handBoneManager.getByName('index-finger-phalanx-intermediate');
            const IndexDistal = handBoneManager.getByName('index-finger-phalanx-distal');

            const MiddleMetacarpal = handBoneManager.getByName('middle-finger-metacarpal');
            const MiddleProximal = handBoneManager.getByName('middle-finger-phalanx-proximal');
            const MiddleIntermediate = handBoneManager.getByName('middle-finger-phalanx-intermediate');
            const MiddleDistal = handBoneManager.getByName('middle-finger-phalanx-distal');

            const RingMetacarpal = handBoneManager.getByName('ring-finger-metacarpal');
            const RingProximal = handBoneManager.getByName('ring-finger-phalanx-proximal');
            const RingIntermediate = handBoneManager.getByName('ring-finger-phalanx-intermediate');
            const RingDistal = handBoneManager.getByName('ring-finger-phalanx-distal');

            const PinkyMetacarpal = handBoneManager.getByName('pinky-finger-metacarpal');
            const PinkyProximal = handBoneManager.getByName('pinky-finger-phalanx-proximal');
            const PinkyIntermediate = handBoneManager.getByName('pinky-finger-phalanx-intermediate');
            const PinkyDistal = handBoneManager.getByName('pinky-finger-phalanx-distal');

            let zDirection = new THREE.Vector3();
            let yDirection = new THREE.Vector3();

            Wrist.update = function () {
                let lm_wrist = this.endLandmark;
                let vectorToPinky = lm_wrist && lm_wrist.getVectorToChild(1);
                let vectorToIndex = lm_wrist && lm_wrist.getVectorToChild(4);

                if (vectorToPinky && vectorToIndex) {
                    zDirection.crossVectors(vectorToIndex, vectorToPinky);
                    yDirection.copy(vectorToPinky).add(vectorToIndex).negate();

                    if (this.side === 'right') {
                        zDirection.negate();
                    }
                    this.updateYDirection(yDirection);
                    this.updateZDirection(zDirection);
                }
            };

            ThumbMetacarpal.update = IndexMetacarpal.update = MiddleMetacarpal.update = RingMetacarpal.update = PinkyMetacarpal.update = function () {
                let wrist = Wrist;
                this.updateYDirection();
                this.updateZDirection(wrist.zDirection);
            };

            ThumbProximal.update = ThumbDistal.update = function () {
                let thisYDirection = this.yDirection;
                let thumbXDirection = ThumbMetacarpal.xDirection;
                let thumbZDirection = ThumbMetacarpal.zDirection;
                if (thumbXDirection && thumbZDirection && thisYDirection) {
                    let angle = thisYDirection.angleTo(thumbXDirection);
                    if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
                        zDirection.crossVectors(thumbXDirection, thisYDirection);
                        zDirection.negate();
                    } else {
                        zDirection.crossVectors(thumbZDirection, thisYDirection);
                        zDirection.crossVectors(zDirection, thisYDirection);
                    }
                    zDirection.negate();
                    this.updateYDirection();
                    this.updateZDirection(zDirection);
                }
            };
            IndexProximal.update = IndexIntermediate.update = IndexDistal.update = function () {
                let thisYDirection = this.yDirection;
                let thumbXDirection = IndexMetacarpal.xDirection;
                let thumbZDirection = IndexMetacarpal.zDirection;
                if (thumbXDirection && thumbZDirection && thisYDirection) {
                    let angle = thisYDirection.angleTo(thumbXDirection);
                    if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
                        zDirection.crossVectors(thumbXDirection, thisYDirection);
                        zDirection.negate();
                    } else {
                        zDirection.crossVectors(thumbZDirection, thisYDirection);
                        zDirection.crossVectors(zDirection, thisYDirection);
                    }
                    zDirection.negate();
                    this.updateYDirection();
                    this.updateZDirection(zDirection);
                }
            };
            MiddleProximal.update = MiddleIntermediate.update = MiddleDistal.update = function () {
                let thisYDirection = this.yDirection;
                let thumbXDirection = MiddleMetacarpal.xDirection;
                let thumbZDirection = MiddleMetacarpal.zDirection;
                if (thumbXDirection && thumbZDirection && thisYDirection) {
                    let angle = thisYDirection.angleTo(thumbXDirection);
                    if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
                        zDirection.crossVectors(thumbXDirection, thisYDirection);
                        zDirection.negate();
                    } else {
                        zDirection.crossVectors(thumbZDirection, thisYDirection);
                        zDirection.crossVectors(zDirection, thisYDirection);
                    }
                    zDirection.negate();
                    this.updateYDirection();
                    this.updateZDirection(zDirection);
                }
            };
            RingProximal.update = RingIntermediate.update = RingDistal.update = function () {
                let thisYDirection = this.yDirection;
                let thumbXDirection = RingMetacarpal.xDirection;
                let thumbZDirection = RingMetacarpal.zDirection;
                if (thumbXDirection && thumbZDirection && thisYDirection) {
                    let angle = thisYDirection.angleTo(thumbXDirection);
                    if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
                        zDirection.crossVectors(thumbXDirection, thisYDirection);
                        zDirection.negate();
                    } else {
                        zDirection.crossVectors(thumbZDirection, thisYDirection);
                        zDirection.crossVectors(zDirection, thisYDirection);
                    }
                    zDirection.negate();
                    this.updateYDirection();
                    this.updateZDirection(zDirection);
                }
            };
            PinkyProximal.update = PinkyIntermediate.update = PinkyDistal.update = function () {
                let thisYDirection = this.yDirection;
                let thumbXDirection = PinkyMetacarpal.xDirection;
                let thumbZDirection = PinkyMetacarpal.zDirection;
                if (thumbXDirection && thumbZDirection && thisYDirection) {
                    let angle = thisYDirection.angleTo(thumbXDirection);
                    if (angle > Math.PI / 4 && angle < 3 * Math.PI / 4) {
                        zDirection.crossVectors(thumbXDirection, thisYDirection);
                        zDirection.negate();
                    } else {
                        zDirection.crossVectors(thumbZDirection, thisYDirection);
                        zDirection.crossVectors(zDirection, thisYDirection);
                    }
                    zDirection.negate();
                    this.updateYDirection();
                    this.updateZDirection(zDirection);
                }
            };



            /*
            ThumbMetacarpal.update = function () { };
            ThumbProximal.update = function () { };
            ThumbDistal.update = function () { };
            IndexMetacarpal.update = function () { };
            IndexProximal.update = function () { };
            IndexIntermediate.update = function () { };
            IndexDistal.update = function () { };
            MiddleMetacarpal.update = function () { };
            MiddleProximal.update = function () { };
            MiddleIntermediate.update = function () { };
            MiddleDistal.update = function () { };
            RingMetacarpal.update = function () { };
            RingProximal.update = function () { };
            RingIntermediate.update = function () { };
            RingDistal.update = function () { };
            PinkyMetacarpal.update = function () { };
            PinkyProximal.update = function () { };
            PinkyIntermediate.update = function () { };
            PinkyDistal.update = function () { };
            */
        }



        setPoseBoneCalculator();
        setHandBoneCalculator(true);
        setHandBoneCalculator(false);



    }
}

export default MediapipePoseCalculator;