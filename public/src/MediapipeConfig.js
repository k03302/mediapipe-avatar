export {
    MEDIAPIPE_LANDMARKS_CONFIG,
    MEDIAPIPE_VIRTUAL_BONES_CONFIG,
    MEDIAPIPE_LEFT_HAND_LANDMARKS_CONFIG,
    MEDIAPIPE_RIGHT_HAND_LANDMARKS_CONFIG,
    MEDIAPIPE_LEFT_HAND_BONES_CONFIG,
    MEDIAPIPE_RIGHT_HAND_BONES_CONFIG
}

// Configurations of mediapipe landmarks (Landmarks except virtual ones are in the same order of mediapipe blazepose landmark index.
// Tracked pose data is array in order of this landmark index order.)
const MEDIAPIPE_LANDMARKS_CONFIG = [
    { type: 'Landmark', poseElementConfig: { index: 0, name: 'nose', parentIndex: 35, childrenIndex: [], counterpartIndex: null, side: 'mid' } },
    { type: 'Landmark', poseElementConfig: { index: 1, name: 'left_eye_inner', parentIndex: 35, childrenIndex: [], counterpartIndex: 4, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 2, name: 'left_eye', parentIndex: 35, childrenIndex: [], counterpartIndex: 5, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 3, name: 'left_eye_outer', parentIndex: 35, childrenIndex: [], counterpartIndex: 6, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 4, name: 'right_eye_inner', parentIndex: 35, childrenIndex: [], counterpartIndex: 1, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 5, name: 'right_eye', parentIndex: 35, childrenIndex: [], counterpartIndex: 2, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 6, name: 'right_eye_outer', parentIndex: 35, childrenIndex: [], counterpartIndex: 3, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 7, name: 'left_ear', parentIndex: 35, childrenIndex: [], counterpartIndex: 8, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 8, name: 'right_ear', parentIndex: 35, childrenIndex: [], counterpartIndex: 7, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 9, name: 'left_mouth', parentIndex: 35, childrenIndex: [], counterpartIndex: 10, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 10, name: 'right_mouth', parentIndex: 35, childrenIndex: [], counterpartIndex: 9, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 11, name: 'left_shoulder', parentIndex: 34, childrenIndex: [13], counterpartIndex: 12, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 12, name: 'right_shoulder', parentIndex: 34, childrenIndex: [14], counterpartIndex: 11, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 13, name: 'left_elbow', parentIndex: 11, childrenIndex: [15], counterpartIndex: 14, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 14, name: 'right_elbow', parentIndex: 12, childrenIndex: [16], counterpartIndex: 13, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 15, name: 'left_wrist', parentIndex: 13, childrenIndex: [17, 19, 21, 36], counterpartIndex: 16, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 16, name: 'right_wrist', parentIndex: 14, childrenIndex: [18, 20, 22, 37], counterpartIndex: 15, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 17, name: 'left_pinky', parentIndex: 15, childrenIndex: [], counterpartIndex: 18, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 18, name: 'right_pinky', parentIndex: 16, childrenIndex: [], counterpartIndex: 17, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 19, name: 'left_index', parentIndex: 15, childrenIndex: [], counterpartIndex: 20, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 20, name: 'right_index', parentIndex: 16, childrenIndex: [], counterpartIndex: 19, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 21, name: 'left_thumb', parentIndex: 15, childrenIndex: [], counterpartIndex: 22, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 22, name: 'right_thumb', parentIndex: 16, childrenIndex: [], counterpartIndex: 21, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 23, name: 'left_hip', parentIndex: 33, childrenIndex: [25], counterpartIndex: 24, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 24, name: 'right_hip', parentIndex: 33, childrenIndex: [26], counterpartIndex: 23, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 25, name: 'left_knee', parentIndex: 23, childrenIndex: [27], counterpartIndex: 26, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 26, name: 'right_knee', parentIndex: 24, childrenIndex: [28], counterpartIndex: 25, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 27, name: 'left_ankle', parentIndex: 25, childrenIndex: [29, 31], counterpartIndex: 28, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 28, name: 'right_ankle', parentIndex: 26, childrenIndex: [30, 32], counterpartIndex: 27, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 29, name: 'left_heel', parentIndex: 27, childrenIndex: [], counterpartIndex: 30, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 30, name: 'right_heel', parentIndex: 28, childrenIndex: [], counterpartIndex: 29, side: 'right' } },
    { type: 'Landmark', poseElementConfig: { index: 31, name: 'left_foot_index', parentIndex: 27, childrenIndex: [], counterpartIndex: 32, side: 'left' } },
    { type: 'Landmark', poseElementConfig: { index: 32, name: 'right_foot_index', parentIndex: 28, childrenIndex: [], counterpartIndex: 31, side: 'right' } },

    {
        type: 'VirtualLandmark',
        poseElementConfig: { index: 33, name: 'hips', parentIndex: null, childrenIndex: [23, 24, 34], counterpartIndex: null, side: 'mid' },
        virtualLandmarkConfig: { startLandmarkIndex: 23, endLandmarkIndex: 24, alpha: 0.5 },
    },
    {
        type: 'VirtualLandmark',
        poseElementConfig: { index: 34, name: 'neck', parentIndex: 33, childrenIndex: [35], counterpartIndex: null, side: 'mid' },
        virtualLandmarkConfig: { startLandmarkIndex: 11, endLandmarkIndex: 12, alpha: 0.5 },
    },
    {
        type: 'VirtualLandmark',
        poseElementConfig: { index: 35, name: 'head', parentIndex: 34, childrenIndex: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], counterpartIndex: null, side: 'mid' },
        virtualLandmarkConfig: { startLandmarkIndex: 7, endLandmarkIndex: 8, alpha: 0.5 },
    },
];


// Configurations of mediapipe virtual bones
const MEDIAPIPE_VIRTUAL_BONES_CONFIG = [
    /* container, poseElementConfig, virtualBoneConfig, otherName */
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 0, name: 'Hips', parentIndex: null, childrenIndex: [1, 4, 7], counterpartIndex: null, side: 'mid' },
        virtualBoneConfig: { startLandmarkIndex: null, endLandmarkIndex: 33 },
        otherName: { RPM: 'Hips', bipedRobot: 'hips_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 1, name: 'LeftUpLeg', parentIndex: 0, childrenIndex: [2], counterpartIndex: 4, side: 'left' },
        virtualBoneConfig: { startLandmarkIndex: 23, endLandmarkIndex: 25 },
        otherName: { RPM: 'LeftUpLeg', bipedRobot: 'left_upLeg_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 2, name: 'LeftLeg', parentIndex: 1, childrenIndex: [3], counterpartIndex: 5, side: 'left' },
        virtualBoneConfig: { startLandmarkIndex: 25, endLandmarkIndex: 27 },
        otherName: { RPM: 'LeftLeg', bipedRobot: 'left_leg_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 3, name: 'LeftFoot', parentIndex: 2, childrenIndex: [], counterpartIndex: 6, side: 'left' },
        virtualBoneConfig: { startLandmarkIndex: 27, endLandmarkIndex: 31 },
        otherName: { RPM: 'LeftFoot', bipedRobot: 'left_foot_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 4, name: 'RightUpLeg', parentIndex: 0, childrenIndex: [5], counterpartIndex: 1, side: 'right' },
        virtualBoneConfig: { startLandmarkIndex: 24, endLandmarkIndex: 26 },
        otherName: { RPM: 'RightUpLeg', bipedRobot: 'right_upLeg_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 5, name: 'RightLeg', parentIndex: 4, childrenIndex: [6], counterpartIndex: 2, side: 'right' },
        virtualBoneConfig: { startLandmarkIndex: 26, endLandmarkIndex: 28 },
        otherName: { RPM: 'RightLeg', bipedRobot: 'left_leg_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 6, name: 'RightFoot', parentIndex: 5, childrenIndex: [], counterpartIndex: 3, side: 'right' },
        virtualBoneConfig: { startLandmarkIndex: 28, endLandmarkIndex: 32 },
        otherName: { RPM: 'RightFoot', bipedRobot: 'right_foot_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 7, name: 'Spine', parentIndex: 0, childrenIndex: [8, 11, 13], counterpartIndex: null, side: 'mid' },
        virtualBoneConfig: { startLandmarkIndex: 33, endLandmarkIndex: 34 },
        otherName: { RPM: 'Spine', bipedRobot: 'spine_1_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 8, name: 'RightArm', parentIndex: 7, childrenIndex: [9], counterpartIndex: 12, side: 'right' },
        virtualBoneConfig: { startLandmarkIndex: 12, endLandmarkIndex: 14 },
        otherName: { RPM: 'RightArm', bipedRobot: 'right_arm_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 9, name: 'RightForeArm', parentIndex: 8, childrenIndex: [], counterpartIndex: 13, side: 'right' },
        virtualBoneConfig: { startLandmarkIndex: 14, endLandmarkIndex: 16 },
        otherName: { RPM: 'RightForeArm', bipedRobot: 'right_forearm_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 10, name: 'Neck', parentIndex: 7, childrenIndex: [11], counterpartIndex: null, side: 'mid' },
        virtualBoneConfig: { startLandmarkIndex: 34, endLandmarkIndex: 35 },
        otherName: { RPM: 'Neck', bipedRobot: 'neck_1_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 11, name: 'Head', parentIndex: 10, childrenIndex: [], counterpartIndex: null, side: 'mid' },
        virtualBoneConfig: { startLandmarkIndex: 35, endLandmarkIndex: null },
        otherName: { RPM: 'Head', bipedRobot: 'head_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 12, name: 'LeftArm', parentIndex: 7, childrenIndex: [13], counterpartIndex: 8, side: 'left' },
        virtualBoneConfig: { startLandmarkIndex: 11, endLandmarkIndex: 13 },
        otherName: { RPM: 'LeftArm', bipedRobot: 'left_arm_joint' },
    },
    {
        type: 'VirtualBone',
        poseElementConfig: { index: 13, name: 'LeftForeArm', parentIndex: 12, childrenIndex: [], counterpartIndex: 9, side: 'left' },
        virtualBoneConfig: { startLandmarkIndex: 13, endLandmarkIndex: 15 },
        otherName: { RPM: 'LeftForeArm', bipedRobot: 'left_forearm_joint' },
    },
];



let getMediapipeHandLandmarks = (isLeft) => {
    const handSide = (isLeft === true) ? 'left' : 'right';
    return [
        { type: 'Landmark', poseElementConfig: { index: 0, name: 'wrist', parentIndex: null, childrenIndex: [1, 5, 9, 13, 17], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 1, name: 'thumb_cmc', parentIndex: 0, childrenIndex: [2], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 2, name: 'thumb_mcp', parentIndex: 1, childrenIndex: [3], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 3, name: 'thumb_ip', parentIndex: 2, childrenIndex: [4], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 4, name: 'thumb_tip', parentIndex: 3, childrenIndex: [], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 5, name: 'index_finger_mcp', parentIndex: 0, childrenIndex: [6], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 6, name: 'index_finger_pip', parentIndex: 5, childrenIndex: [7], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 7, name: 'index_finger_dip', parentIndex: 6, childrenIndex: [8], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 8, name: 'index_finger_tip', parentIndex: 7, childrenIndex: [], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 9, name: 'middle_finger_mcp', parentIndex: 0, childrenIndex: [10], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 10, name: 'middle_finger_pip', parentIndex: 9, childrenIndex: [11], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 11, name: 'middle_finger_dip', parentIndex: 10, childrenIndex: [12], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 12, name: 'middle_finger_tip', parentIndex: 11, childrenIndex: [], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 13, name: 'ring_finger_mcp', parentIndex: 0, childrenIndex: [14], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 14, name: 'ring_finger_pip', parentIndex: 13, childrenIndex: [15], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 15, name: 'ring_finger_dip', parentIndex: 14, childrenIndex: [16], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 16, name: 'ring_finger_tip', parentIndex: 15, childrenIndex: [], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 17, name: 'pinky_mcp', parentIndex: 0, childrenIndex: [18], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 18, name: 'pinky_pip', parentIndex: 17, childrenIndex: [19], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 19, name: 'pinky_dip', parentIndex: 18, childrenIndex: [20], counterpartIndex: null, side: handSide } },
        { type: 'Landmark', poseElementConfig: { index: 20, name: 'pinky_tip', parentIndex: 19, childrenIndex: [], counterpartIndex: null, side: handSide } },
    ];
};
const MEDIAPIPE_LEFT_HAND_LANDMARKS_CONFIG = getMediapipeHandLandmarks(true);
const MEDIAPIPE_RIGHT_HAND_LANDMARKS_CONFIG = getMediapipeHandLandmarks(false);
getMediapipeHandLandmarks = undefined;

let getMediapipeHandBones = (isLeft) => {
    const RPMprefix = (isLeft === true) ? 'Left' : 'Right';
    const handSide = (isLeft === true) ? 'left' : 'right';
    return [
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 0, name: 'wrist', parentIndex: null, childrenIndex: [1, 4, 8, 12, 16], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: null, endLandmarkIndex: 0 },
            otherName: { RPM: RPMprefix + 'Hand' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 1, name: 'thumb-metacarpal', parentIndex: 0, childrenIndex: [2], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 1, endLandmarkIndex: 2 },
            otherName: { RPM: RPMprefix + 'HandThumb1' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 2, name: 'thumb-phalanx-proximal', parentIndex: 1, childrenIndex: [3], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 2, endLandmarkIndex: 3 },
            otherName: { RPM: RPMprefix + 'HandThumb2' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 3, name: 'thumb-phalanx-distal', parentIndex: 2, childrenIndex: [], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 3, endLandmarkIndex: 4 },
            otherName: { RPM: RPMprefix + 'HandThumb3' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 4, name: 'index-finger-metacarpal', parentIndex: 0, childrenIndex: [5], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 0, endLandmarkIndex: 5 },
            otherName: { RPM: null },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 5, name: 'index-finger-phalanx-proximal', parentIndex: 4, childrenIndex: [6], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 5, endLandmarkIndex: 6 },
            otherName: { RPM: RPMprefix + 'HandIndex1' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 6, name: 'index-finger-phalanx-intermediate', parentIndex: 5, childrenIndex: [7], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 6, endLandmarkIndex: 7 },
            otherName: { RPM: RPMprefix + 'HandIndex2' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 7, name: 'index-finger-phalanx-distal', parentIndex: 6, childrenIndex: [], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 7, endLandmarkIndex: 8 },
            otherName: { RPM: RPMprefix + 'HandIndex3' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 8, name: 'middle-finger-metacarpal', parentIndex: 0, childrenIndex: [9], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 0, endLandmarkIndex: 9 },
            otherName: { RPM: null },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 9, name: 'middle-finger-phalanx-proximal', parentIndex: 8, childrenIndex: [10], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 9, endLandmarkIndex: 10 },
            otherName: { RPM: RPMprefix + 'HandMiddle1' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 10, name: 'middle-finger-phalanx-intermediate', parentIndex: 9, childrenIndex: [11], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 10, endLandmarkIndex: 11 },
            otherName: { RPM: RPMprefix + 'HandMiddle2' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 11, name: 'middle-finger-phalanx-distal', parentIndex: 10, childrenIndex: [], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 11, endLandmarkIndex: 12 },
            otherName: { RPM: RPMprefix + 'HandMiddle3' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 12, name: 'ring-finger-metacarpal', parentIndex: 0, childrenIndex: [13], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 0, endLandmarkIndex: 13 },
            otherName: { RPM: null },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 13, name: 'ring-finger-phalanx-proximal', parentIndex: 12, childrenIndex: [14], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 13, endLandmarkIndex: 14 },
            otherName: { RPM: RPMprefix + 'HandRing1' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 14, name: 'ring-finger-phalanx-intermediate', parentIndex: 13, childrenIndex: [15], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 14, endLandmarkIndex: 15 },
            otherName: { RPM: RPMprefix + 'HandRing2' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 15, name: 'ring-finger-phalanx-distal', parentIndex: 14, childrenIndex: [], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 15, endLandmarkIndex: 16 },
            otherName: { RPM: RPMprefix + 'HandRing3' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 16, name: 'pinky-finger-metacarpal', parentIndex: 0, childrenIndex: [17], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 0, endLandmarkIndex: 17 },
            otherName: { RPM: null },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 17, name: 'pinky-finger-phalanx-proximal', parentIndex: 16, childrenIndex: [18], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 17, endLandmarkIndex: 18 },
            otherName: { RPM: RPMprefix + 'HandPinky1' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 18, name: 'pinky-finger-phalanx-intermediate', parentIndex: 17, childrenIndex: [19], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 18, endLandmarkIndex: 19 },
            otherName: { RPM: RPMprefix + 'HandPinky2' },
        },
        {
            type: 'VirtualBone',
            poseElementConfig: { index: 19, name: 'pinky-finger-phalanx-distal', parentIndex: 18, childrenIndex: [], counterpartIndex: null, side: handSide },
            virtualBoneConfig: { startLandmarkIndex: 19, endLandmarkIndex: 20 },
            otherName: { RPM: RPMprefix + 'HandPinky3' },
        },
    ];
}
const MEDIAPIPE_LEFT_HAND_BONES_CONFIG = getMediapipeHandBones(true);
const MEDIAPIPE_RIGHT_HAND_BONES_CONFIG = getMediapipeHandBones(false);






