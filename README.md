# Introduction
- This is framework for the avatar puppeting with mediapipe holistic tracking.
- This project is originally for implementing WXR body tracking feature. ![More information about WXR]()
- Mediapipe is body tracking framework developed by Google. ![More information about mediapipe](https://developers.google.com/mediapipe)
- Basically, mediapipe holistic tracking offers only the position of the landmarks, not the transformation of each bone. Therefore implementing avatar puppeting with mediapipe requires additional calculation transforming from landmark positions to rotation of each avatar bone.
![](./img/landmarks.png)
- In contrast, ARKit body tracking offers the transformation matrix of each bone, not requiring additional calculation.
- There's already similar project using mediapipe to control avatar: Kalido Kit. Check this link. ![Kalioface](https://3d.kalidoface.com/)
- But this project is a v-tuber tracking application with mediapipe, so that it does not aims to provide exact tracking of full body pose. It's enough to provide v-tubers with face and upper-body tracking.
- In other hand, this project aims to provide exact tracking of full body pose to implement human body degital tween on workspace of WXR.
 

# How to run
1. Execute `npm run` on terminal
2. Access `localhost:8080` on chrome browser
