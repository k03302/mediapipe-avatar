import { BoneManager } from './elementManagers.js';
import {
    MEDIAPIPE_VIRTUAL_BONES_CONFIG,
    MEDIAPIPE_LEFT_HAND_BONES_CONFIG,
    MEDIAPIPE_RIGHT_HAND_BONES_CONFIG
} from './MediapipeConfig.js';

class MediapipeAvatarController {
    constructor() {
        let leftHandBoneManager = this.leftHandBoneManager = new BoneManager();
        leftHandBoneManager.configure(MEDIAPIPE_LEFT_HAND_BONES_CONFIG);

        let rightHandBoneManager = this.rightHandBoneManager = new BoneManager();
        rightHandBoneManager.configure(MEDIAPIPE_RIGHT_HAND_BONES_CONFIG);

        let poseBoneManager = this.poseBoneManager = new BoneManager();
        poseBoneManager.configure(MEDIAPIPE_VIRTUAL_BONES_CONFIG);

        this.useHand = true;

        this.initKalmanFilter = () => {
            this.poseBoneManager.initKalmanFilter();
            this.leftHandBoneManager.initKalmanFilter();
            this.rightHandBoneManager.initKalmanFilter();
        };

        this.setUseKalmanFilter = (useKalmanFilter) => {
            this.poseBoneManager.setUseKalmanFilter(useKalmanFilter);
            this.leftHandBoneManager.setUseKalmanFilter(useKalmanFilter);
            this.rightHandBoneManager.setUseKalmanFilter(useKalmanFilter);
            this.initKalmanFilter();
        };

        this.bindAvatar = (avatar, type, coordinateSystem) => {
            poseBoneManager.bindAvatar(avatar, type, coordinateSystem);
            leftHandBoneManager.bindAvatar(avatar, type, coordinateSystem);
            rightHandBoneManager.bindAvatar(avatar, type, coordinateSystem);
        };

        this.setUseHand = (useHand) => {
            this.useHand = useHand;
        };

        this.setSlerpRatio = (slerpRatio) => {
            this.poseBoneManager.setSlerpRatio(slerpRatio);
            this.leftHandBoneManager.setSlerpRatio(slerpRatio);
            this.rightHandBoneManager.setSlerpRatio(slerpRatio);
        }

        this.update = (data) => {
            const poseQuatArr = data['poseQuatArr'];
            const rootPos = data['rootPos'];
            const leftHandQuatArr = data['leftHandQuatArr'];
            const rightHandQuatArr = data['rightHandQuatArr'];

            if (poseQuatArr) {
                this.updatePose(poseQuatArr, 'array');
            }
            if (rootPos) {
                this.updateRootPos(rootPos);
            }
            if (leftHandQuatArr) {
                this.updateHand(leftHandQuatArr, 'array', true);
            }
            if (rightHandQuatArr) {
                this.updateHand(rightHandQuatArr, 'array', false);
            }
        }

        this.updatePose = (poseData, dtype) => {
            this.poseBoneManager.setFromArray(poseData, dtype);
            this.poseBoneManager.updateAvatar();
        };

        this.updateHand = (handData, dtype, isLeft) => {
            if (!this.useHand) return;
            let handBoneManager = isLeft ? this.leftHandBoneManager : this.rightHandBoneManager;
            handBoneManager.setFromArray(handData, dtype);
            handBoneManager.updateAvatar();
        };

        this.updateRootPos = (rootPos) => {
            const rootBone = this.poseBoneManager.getAvatarRoot();
            rootBone.position.fromArray(rootPos);
        }

    }
}

export default MediapipeAvatarController;