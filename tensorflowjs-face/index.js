// https://morioh.com/p/d8eb41b1d365?f=5c21fb01c16e2556b555ab32&fbclid=IwAR2_8Y0Iae6pAlBUzMVDUVNLICxgLoEmONo6G2wQ6xDKcYfpRYAfMp7MDek

import * as facemesh from '@tensorflow-models/facemesh';

async function main() {
    // Load the MediaPipe facemesh model.
    const model = await facemesh.load();
  
    // Pass in a video stream (or an image, canvas, or 3D tensor) to obtain an
    // array of detected faces from the MediaPipe graph.
    const predictions = await model.estimateFaces(document.querySelector("video"));
  
    if (predictions.length > 0) {
      /*
      `predictions` is an array of objects describing each detected face, for example:
  
      [
        {
          faceInViewConfidence: 1, // The probability of a face being present.
          boundingBox: { // The bounding box surrounding the face.
            topLeft: [232.28, 145.26],
            bottomRight: [449.75, 308.36],
          },
          mesh: [ // The 3D coordinates of each facial landmark.
            [92.07, 119.49, -17.54],
            [91.97, 102.52, -30.54],
            ...
          ],
          scaledMesh: [ // The 3D coordinates of each facial landmark, normalized.
            [322.32, 297.58, -17.54],
            [322.18, 263.95, -30.54]
          ],
          annotations: { // Semantic groupings of the `scaledMesh` coordinates.
            silhouette: [
              [326.19, 124.72, -3.82],
              [351.06, 126.30, -3.00],
              ...
            ],
            ...
          }
        }
      ]
      */
  
      for (let i = 0; i < predictions.length; i++) {
        const keypoints = predictions[i].scaledMesh;
  
        // Log facial keypoints.
        for (let i = 0; i < keypoints.length; i++) {
          const [x, y, z] = keypoints[i];
  
          console.log(`Keypoint ${i}: [${x}, ${y}, ${z}]`);
        }
      }
    }
  }
  
  main();
  