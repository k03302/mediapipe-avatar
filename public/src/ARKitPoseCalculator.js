import ARKIT_BONES_CONFIG from './ARKitConfig.js';
import { BoneManager } from './elementManagers.js';

class ARKitPoseCalculator {
    constructor() {
        let poseBoneManager = this.poseBoneManager = new BoneManager(this);
        poseBoneManager.configure(ARKIT_BONES_CONFIG);

        const leftQuatAdjust = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, Math.PI / 2)).invert();
        const rightQuatAdjust = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, -Math.PI / 2)).invert();
        const midQuatAdjust = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI / 2, Math.PI / 2)).invert();


        this.updatePose = (poseData, dtype, coordinateSystem) => {
            poseBoneManager.setFromArray(poseData, dtype, coordinateSystem);
            for (let poseBone of poseBoneManager.container) {
                let side = poseBone.side;
                let name = poseBone.name;
                if (side === 'left') {
                    poseBone._worldQuaternion.multiply(leftQuatAdjust);
                } else if (side === 'right') {
                    poseBone._worldQuaternion.multiply(rightQuatAdjust);
                } else if (name !== 'hips_joint') {
                    poseBone._worldQuaternion.multiply(midQuatAdjust);
                }
            }
        };
    }
}

export default ARKitPoseCalculator;