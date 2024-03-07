
import MediapipeAvatarController from "./MediapipeAvatarController.js";
import MediapipePoseCalculator from "./MediapipePoseCalculator.js";

class MediapipeAvatarManager {
    constructor() {
        this.poseCalculator = new MediapipePoseCalculator();
        this.avatarController = new MediapipeAvatarController();
    }

    update(results) {
        const calculatedResult = this.poseCalculator.update(results);
        this.avatarController.update(calculatedResult);
    }

    bindAvatar(avatar, type) {
        this.avatarController.bindAvatar(avatar, type);
    }

    setUseHand(useHand) {
        this.poseCalculator.setUseHand(useHand);
        this.avatarController.setUseHand(useHand);
    }

    setSlerpRatio(ratio) {
        this.avatarController.setSlerpRatio(ratio);
    }

    initKalmanFilter() {
        this.poseCalculator.initKalmanFilter();
        this.avatarController.initKalmanFilter();
    }

    setUseKalmanFilter(useKalmanFilter) {
        this.poseCalculator.setUseKalmanFilter(useKalmanFilter);
        this.avatarController.setUseKalmanFilter(useKalmanFilter);
    }
}

export default MediapipeAvatarManager;