import ARKIT_BONES_CONFIG from './ARKitConfig.js';
import { BoneManager } from './elementManagers.js';

class ARKitAvatarController {
    constructor() {
        let poseBoneManager = this.poseBoneManager = new BoneManager(this);
        poseBoneManager.configure(ARKIT_BONES_CONFIG);
        this.bindAvatar = (avatar, type, coordinateSystem) => {
            this.poseBoneManager.bindAvatar(avatar, type, coordinateSystem);
        };
        this.updatePose = (poseData, dtype) => {
            this.poseBoneManager.setFromArray(poseData, dtype);
            this.poseBoneManager.updateAvatar();
        };
    }
}

export default ARKitAvatarController;