const ARKIT_BONES_CONFIG = [
    {
        type: 'Bone',
        poseElementConfig: { index: 0, name: 'root', parentIndex: null, childrenIndex: [1], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'root', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 1, name: 'hips_joint', parentIndex: 0, childrenIndex: [2, 7, 12], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: 'Hips', bipedRobot: 'hips_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 2, name: 'left_upLeg_joint', parentIndex: 1, childrenIndex: [3], counterpartIndex: 7, side: 'left' },
        otherName: { RPM: 'LeftUpLeg', bipedRobot: 'left_upLeg_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 3, name: 'left_leg_joint', parentIndex: 2, childrenIndex: [4], counterpartIndex: 8, side: 'left' },
        otherName: { RPM: 'LeftLeg', bipedRobot: 'left_leg_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 4, name: 'left_foot_joint', parentIndex: 3, childrenIndex: [5], counterpartIndex: 9, side: 'left' },
        otherName: { RPM: 'LeftFoot', bipedRobot: 'left_foot_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 5, name: 'left_toes_joint', parentIndex: 4, childrenIndex: [6], counterpartIndex: 10, side: 'left' },
        otherName: { RPM: 'LeftToeBase', bipedRobot: 'left_toes_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 6, name: 'left_toesEnd_joint', parentIndex: 5, childrenIndex: [], counterpartIndex: 11, side: 'left' },
        otherName: { RPM: 'LeftToe_End', bipedRobot: 'left_toesEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 7, name: 'right_upLeg_joint', parentIndex: 1, childrenIndex: [8], counterpartIndex: 2, side: 'right' },
        otherName: { RPM: 'RightUpLeg', bipedRobot: 'right_upLeg_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 8, name: 'right_leg_joint', parentIndex: 7, childrenIndex: [9], counterpartIndex: 3, side: 'right' },
        otherName: { RPM: 'RightLeg', bipedRobot: 'right_leg_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 9, name: 'right_foot_joint', parentIndex: 8, childrenIndex: [10], counterpartIndex: 4, side: 'right' },
        otherName: { RPM: 'RightFoot', bipedRobot: 'right_foot_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 10, name: 'right_toes_joint', parentIndex: 9, childrenIndex: [11], counterpartIndex: 5, side: 'right' },
        otherName: { RPM: 'RightToeBase', bipedRobot: 'right_toes_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 11, name: 'right_toesEnd_joint', parentIndex: 10, childrenIndex: [], counterpartIndex: 6, side: 'right' },
        otherName: { RPM: 'RightToe_End', bipedRobot: 'right_toesEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 12, name: 'spine_1_joint', parentIndex: 1, childrenIndex: [13], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: 'Spine', bipedRobot: 'spine_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 13, name: 'spine_2_joint', parentIndex: 12, childrenIndex: [14], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'spine_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 14, name: 'spine_3_joint', parentIndex: 13, childrenIndex: [15], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'spine_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 15, name: 'spine_4_joint', parentIndex: 14, childrenIndex: [16], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: 'Spine2', bipedRobot: 'spine_4_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 16, name: 'spine_5_joint', parentIndex: 15, childrenIndex: [17], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'spine_5_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 17, name: 'spine_6_joint', parentIndex: 16, childrenIndex: [18], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'spine_6_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 18, name: 'spine_7_joint', parentIndex: 17, childrenIndex: [47, 63, 19], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: 'Spine3', bipedRobot: 'spine_7_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 19, name: 'left_shoulder_1_joint', parentIndex: 18, childrenIndex: [20], counterpartIndex: 63, side: 'left' },
        otherName: { RPM: 'LeftShoulder', bipedRobot: 'left_shoulder_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 20, name: 'left_arm_joint', parentIndex: 19, childrenIndex: [21], counterpartIndex: 64, side: 'left' },
        otherName: { RPM: 'LeftArm', bipedRobot: 'left_arm_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 21, name: 'left_forearm_joint', parentIndex: 20, childrenIndex: [22], counterpartIndex: 65, side: 'left' },
        otherName: { RPM: 'LeftForeArm', bipedRobot: 'left_forearm_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 22, name: 'left_hand_joint', parentIndex: 21, childrenIndex: [33, 38, 28, 23, 43], counterpartIndex: 66, side: 'left' },
        otherName: { RPM: 'LeftHand', bipedRobot: 'left_hand_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 23, name: 'left_handIndexStart_joint', parentIndex: 22, childrenIndex: [24], counterpartIndex: 67, side: 'left' },
        otherName: { RPM: null, bipedRobot: 'left_handIndexStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 24, name: 'left_handIndex_1_joint', parentIndex: 23, childrenIndex: [25], counterpartIndex: 68, side: 'left' },
        otherName: { RPM: 'LeftHandIndex1', bipedRobot: 'left_handIndex_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 25, name: 'left_handIndex_2_joint', parentIndex: 24, childrenIndex: [26], counterpartIndex: 69, side: 'left' },
        otherName: { RPM: 'LeftHandIndex2', bipedRobot: 'left_handIndex_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 26, name: 'left_handIndex_3_joint', parentIndex: 25, childrenIndex: [27], counterpartIndex: 70, side: 'left' },
        otherName: { RPM: 'LeftHandIndex3', bipedRobot: 'left_handIndex_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 27, name: 'left_handIndexEnd_joint', parentIndex: 26, childrenIndex: [], counterpartIndex: 71, side: 'left' },
        otherName: { RPM: 'LeftHandIndex4', bipedRobot: 'left_handIndexEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 28, name: 'left_handMidStart_joint', parentIndex: 22, childrenIndex: [29], counterpartIndex: 72, side: 'left' },
        otherName: { RPM: null, bipedRobot: 'left_handMidStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 29, name: 'left_handMid_1_joint', parentIndex: 28, childrenIndex: [30], counterpartIndex: 73, side: 'left' },
        otherName: { RPM: 'LeftHandMiddle1', bipedRobot: 'left_handMid_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 30, name: 'left_handMid_2_joint', parentIndex: 29, childrenIndex: [31], counterpartIndex: 74, side: 'left' },
        otherName: { RPM: 'LeftHandMiddle2', bipedRobot: 'left_handMid_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 31, name: 'left_handMid_3_joint', parentIndex: 30, childrenIndex: [32], counterpartIndex: 75, side: 'left' },
        otherName: { RPM: 'LeftHandMiddle3', bipedRobot: 'left_handMid_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 32, name: 'left_handMidEnd_joint', parentIndex: 31, childrenIndex: [], counterpartIndex: 76, side: 'left' },
        otherName: { RPM: 'LeftHandMiddle4', bipedRobot: 'left_handMidEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 33, name: 'left_handPinkyStart_joint', parentIndex: 22, childrenIndex: [34], counterpartIndex: 77, side: 'left' },
        otherName: { RPM: null, bipedRobot: 'left_handPinkyStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 34, name: 'left_handPinky_1_joint', parentIndex: 33, childrenIndex: [35], counterpartIndex: 78, side: 'left' },
        otherName: { RPM: 'LeftHandPinky1', bipedRobot: 'left_handPinky_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 35, name: 'left_handPinky_2_joint', parentIndex: 34, childrenIndex: [36], counterpartIndex: 79, side: 'left' },
        otherName: { RPM: 'LeftHandPinky2', bipedRobot: 'left_handPinky_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 36, name: 'left_handPinky_3_joint', parentIndex: 35, childrenIndex: [37], counterpartIndex: 80, side: 'left' },
        otherName: { RPM: 'LeftHandPinky3', bipedRobot: 'left_handPinky_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 37, name: 'left_handPinkyEnd_joint', parentIndex: 36, childrenIndex: [], counterpartIndex: 81, side: 'left' },
        otherName: { RPM: 'LeftHandPinky4', bipedRobot: 'left_handPinkyEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 38, name: 'left_handRingStart_joint', parentIndex: 22, childrenIndex: [39], counterpartIndex: 82, side: 'left' },
        otherName: { RPM: null, bipedRobot: 'left_handRingStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 39, name: 'left_handRing_1_joint', parentIndex: 38, childrenIndex: [40], counterpartIndex: 83, side: 'left' },
        otherName: { RPM: 'LeftHandRing1', bipedRobot: 'left_handRing_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 40, name: 'left_handRing_2_joint', parentIndex: 39, childrenIndex: [41], counterpartIndex: 84, side: 'left' },
        otherName: { RPM: 'LeftHandRing2', bipedRobot: 'left_handRing_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 41, name: 'left_handRing_3_joint', parentIndex: 40, childrenIndex: [42], counterpartIndex: 85, side: 'left' },
        otherName: { RPM: 'LeftHandRing3', bipedRobot: 'left_handRing_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 42, name: 'left_handRingEnd_joint', parentIndex: 41, childrenIndex: [], counterpartIndex: 86, side: 'left' },
        otherName: { RPM: 'LeftHandRing4', bipedRobot: 'left_handRingEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 43, name: 'left_handThumbStart_joint', parentIndex: 22, childrenIndex: [44], counterpartIndex: 87, side: 'left' },
        otherName: { RPM: 'LeftHandThumb1', bipedRobot: 'left_handThumbStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 44, name: 'left_handThumb_1_joint', parentIndex: 43, childrenIndex: [45], counterpartIndex: 88, side: 'left' },
        otherName: { RPM: 'LeftHandThumb2', bipedRobot: 'left_handThumb_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 45, name: 'left_handThumb_2_joint', parentIndex: 44, childrenIndex: [46], counterpartIndex: 89, side: 'left' },
        otherName: { RPM: 'LeftHandThumb3', bipedRobot: 'left_handThumb_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 46, name: 'left_handThumbEnd_joint', parentIndex: 45, childrenIndex: [], counterpartIndex: 90, side: 'left' },
        otherName: { RPM: 'LeftHandThumb4', bipedRobot: 'left_handThumbEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 47, name: 'neck_1_joint', parentIndex: 18, childrenIndex: [48], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: 'Neck', bipedRobot: 'neck_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 48, name: 'neck_2_joint', parentIndex: 47, childrenIndex: [49], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'neck_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 49, name: 'neck_3_joint', parentIndex: 48, childrenIndex: [50], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'neck_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 50, name: 'neck_4_joint', parentIndex: 49, childrenIndex: [51], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'neck_4_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 51, name: 'head_joint', parentIndex: 50, childrenIndex: [52, 58, 59, 54], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: 'Head', bipedRobot: 'head_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 52, name: 'jaw_joint', parentIndex: 51, childrenIndex: [53], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'jaw_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 53, name: 'chin_joint', parentIndex: 52, childrenIndex: [], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'chin_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 54, name: 'left_eye_joint', parentIndex: 51, childrenIndex: [56, 55, 57], counterpartIndex: 59, side: 'left' },
        otherName: { RPM: 'LeftEye', bipedRobot: 'left_eye_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 55, name: 'left_eyeLowerLid_joint', parentIndex: 54, childrenIndex: [], counterpartIndex: 60, side: 'left' },
        otherName: { RPM: null, bipedRobot: 'left_eyeLowerLid_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 56, name: 'left_eyeUpperLid_joint', parentIndex: 54, childrenIndex: [], counterpartIndex: 61, side: 'left' },
        otherName: { RPM: null, bipedRobot: 'left_eyeUpperLid_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 57, name: 'left_eyeball_joint', parentIndex: 54, childrenIndex: [], counterpartIndex: 62, side: 'left' },
        otherName: { RPM: null, bipedRobot: 'left_eyeball_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 58, name: 'nose_joint', parentIndex: 51, childrenIndex: [], counterpartIndex: null, side: 'mid' },
        otherName: { RPM: null, bipedRobot: 'nose_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 59, name: 'right_eye_joint', parentIndex: 51, childrenIndex: [61, 60, 62], counterpartIndex: 54, side: 'right' },
        otherName: { RPM: 'RightEye', bipedRobot: 'right_eye_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 60, name: 'right_eyeLowerLid_joint', parentIndex: 59, childrenIndex: [], counterpartIndex: 55, side: 'right' },
        otherName: { RPM: null, bipedRobot: 'right_eyeLowerLid_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 61, name: 'right_eyeUpperLid_joint', parentIndex: 59, childrenIndex: [], counterpartIndex: 56, side: 'right' },
        otherName: { RPM: null, bipedRobot: 'right_eyeUpperLid_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 62, name: 'right_eyeball_joint', parentIndex: 59, childrenIndex: [], counterpartIndex: 57, side: 'right' },
        otherName: { RPM: null, bipedRobot: 'right_eyeball_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 63, name: 'right_shoulder_1_joint', parentIndex: 18, childrenIndex: [64], counterpartIndex: 19, side: 'right' },
        otherName: { RPM: 'RightShoulder', bipedRobot: 'right_shoulder_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 64, name: 'right_arm_joint', parentIndex: 63, childrenIndex: [65], counterpartIndex: 20, side: 'right' },
        otherName: { RPM: 'RightArm', bipedRobot: 'right_arm_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 65, name: 'right_forearm_joint', parentIndex: 64, childrenIndex: [66], counterpartIndex: 21, side: 'right' },
        otherName: { RPM: 'RightForeArm', bipedRobot: 'right_forearm_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 66, name: 'right_hand_joint', parentIndex: 65, childrenIndex: [77, 82, 72, 67, 87], counterpartIndex: 22, side: 'right' },
        otherName: { RPM: 'RightHand', bipedRobot: 'right_hand_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 67, name: 'right_handIndexStart_joint', parentIndex: 66, childrenIndex: [68], counterpartIndex: 23, side: 'right' },
        otherName: { RPM: null, bipedRobot: 'right_handIndexStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 68, name: 'right_handIndex_1_joint', parentIndex: 67, childrenIndex: [69], counterpartIndex: 24, side: 'right' },
        otherName: { RPM: 'RightHandIndex1', bipedRobot: 'right_handIndex_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 69, name: 'right_handIndex_2_joint', parentIndex: 68, childrenIndex: [70], counterpartIndex: 25, side: 'right' },
        otherName: { RPM: 'RightHandIndex2', bipedRobot: 'right_handIndex_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 70, name: 'right_handIndex_3_joint', parentIndex: 69, childrenIndex: [71], counterpartIndex: 26, side: 'right' },
        otherName: { RPM: 'RightHandIndex3', bipedRobot: 'right_handIndex_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 71, name: 'right_handIndexEnd_joint', parentIndex: 70, childrenIndex: [], counterpartIndex: 27, side: 'right' },
        otherName: { RPM: 'RightHandIndex4', bipedRobot: 'right_handIndexEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 72, name: 'right_handMidStart_joint', parentIndex: 66, childrenIndex: [73], counterpartIndex: 28, side: 'right' },
        otherName: { RPM: null, bipedRobot: 'right_handMidStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 73, name: 'right_handMid_1_joint', parentIndex: 72, childrenIndex: [74], counterpartIndex: 29, side: 'right' },
        otherName: { RPM: 'RightHandMiddle1', bipedRobot: 'right_handMid_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 74, name: 'right_handMid_2_joint', parentIndex: 73, childrenIndex: [75], counterpartIndex: 30, side: 'right' },
        otherName: { RPM: 'RightHandMiddle2', bipedRobot: 'right_handMid_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 75, name: 'right_handMid_3_joint', parentIndex: 74, childrenIndex: [76], counterpartIndex: 31, side: 'right' },
        otherName: { RPM: 'RightHandMiddle3', bipedRobot: 'right_handMid_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 76, name: 'right_handMidEnd_joint', parentIndex: 75, childrenIndex: [], counterpartIndex: 32, side: 'right' },
        otherName: { RPM: 'RightHandMiddle4', bipedRobot: 'right_handMidEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 77, name: 'right_handPinkyStart_joint', parentIndex: 66, childrenIndex: [78], counterpartIndex: 33, side: 'right' },
        otherName: { RPM: null, bipedRobot: 'right_handPinkyStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 78, name: 'right_handPinky_1_joint', parentIndex: 77, childrenIndex: [79], counterpartIndex: 34, side: 'right' },
        otherName: { RPM: 'RightHandPinky1', bipedRobot: 'right_handPinky_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 79, name: 'right_handPinky_2_joint', parentIndex: 78, childrenIndex: [80], counterpartIndex: 35, side: 'right' },
        otherName: { RPM: 'RightHandPinky2', bipedRobot: 'right_handPinky_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 80, name: 'right_handPinky_3_joint', parentIndex: 79, childrenIndex: [81], counterpartIndex: 36, side: 'right' },
        otherName: { RPM: 'RightHandPinky3', bipedRobot: 'right_handPinky_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 81, name: 'right_handPinkyEnd_joint', parentIndex: 80, childrenIndex: [], counterpartIndex: 37, side: 'right' },
        otherName: { RPM: 'RightHandPinky4', bipedRobot: 'right_handPinkyEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 82, name: 'right_handRingStart_joint', parentIndex: 66, childrenIndex: [83], counterpartIndex: 38, side: 'right' },
        otherName: { RPM: null, bipedRobot: 'right_handRingStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 83, name: 'right_handRing_1_joint', parentIndex: 82, childrenIndex: [84], counterpartIndex: 39, side: 'right' },
        otherName: { RPM: 'RightHandRing1', bipedRobot: 'right_handRing_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 84, name: 'right_handRing_2_joint', parentIndex: 83, childrenIndex: [85], counterpartIndex: 40, side: 'right' },
        otherName: { RPM: 'RightHandRing2', bipedRobot: 'right_handRing_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 85, name: 'right_handRing_3_joint', parentIndex: 84, childrenIndex: [86], counterpartIndex: 41, side: 'right' },
        otherName: { RPM: 'RightHandRing3', bipedRobot: 'right_handRing_3_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 86, name: 'right_handRingEnd_joint', parentIndex: 85, childrenIndex: [], counterpartIndex: 42, side: 'right' },
        otherName: { RPM: 'RightHandRing4', bipedRobot: 'right_handRingEnd_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 87, name: 'right_handThumbStart_joint', parentIndex: 66, childrenIndex: [88], counterpartIndex: 43, side: 'right' },
        otherName: { RPM: 'RightHandThumb1', bipedRobot: 'right_handThumbStart_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 88, name: 'right_handThumb_1_joint', parentIndex: 87, childrenIndex: [89], counterpartIndex: 44, side: 'right' },
        otherName: { RPM: 'RightHandThumb2', bipedRobot: 'right_handThumb_1_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 89, name: 'right_handThumb_2_joint', parentIndex: 88, childrenIndex: [90], counterpartIndex: 45, side: 'right' },
        otherName: { RPM: 'RightHandThumb3', bipedRobot: 'right_handThumb_2_joint', },
    },
    {
        type: 'Bone',
        poseElementConfig: { index: 90, name: 'right_handThumbEnd_joint', parentIndex: 89, childrenIndex: [], counterpartIndex: 46, side: 'right' },
        otherName: { RPM: 'RightHandThumb4', bipedRobot: 'right_handThumbEnd_joint', },
    },

];

export default ARKIT_BONES_CONFIG;