window.paperdoll = {
  belly: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M52,103.3c-3.7,0-7.4-1.2-10.5-3.5L5.5,62.3c-3.9-2.9-5.8-7.8-4.7-12.6l7-30.7C10.3,8.2,19.9,0.5,31,0.5 c0,0,21.4,0,21.4,0h21.4C84.9,0.5,94.5,8.2,97,19l7,30.7c1.1,4.7-0.8,9.7-4.7,12.6L63.2,99.8c-3.1,2.3-6.8,3.4-10.5,3.5H52z',
      width: 105,
      height: 104,
      opacity: 1,
      top: 15,
      left: 'center',
      rotation: 0,
      radius: 15
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'legLeftUpper': {
        'left': 22,
        'bottom': 35
      },
      'legRightUpper': {
        'right': 22,
        'bottom': 35
      }
    }
  },
  legLeftUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M22.7,171.7c-18.8-2.1-26.3-56.9-20-99.1S20-2.1,38.7,0.7s34.4,39.8,23,81C48.7,128.7,54.2,175.2,22.7,171.7z',
      width: 66,
      height: 172,
      opacity: 1,
      top: 25,
      left: 25,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'belly',
    connectionsFor: {
      'legLeftLower': {
        'left': 27,
        'bottom': 10
      }
    }
  },
  legLeftLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M34.9,0.6c14.3,1.7,26,8,14,38c-6.9,17.2,1.4,48.8-7.2,65.1c-20.5,38.5-14,71.6-25.8,69.9s-17-31-15-76 C2.9,54,14.1-1.9,34.9,0.6z',
      width: 54,
      height: 174,
      opacity: 1,
      top: 16,
      left: 17,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'legLeftUpper'
  },
  legRightUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M4.4,81.7C-7,40.5,8.7,3.4,27.4,0.7s29.7,29.6,36,71.9s-1.2,97-20,99.1C11.8,175.2,17.4,128.7,4.4,81.7z',
      width: 66,
      height: 172,
      opacity: 1,
      top: 25,
      right: 25,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'belly',
    connectionsFor: {
      'legRightLower': {
        right: 27,
        'bottom': 10
      }
    }
  },
  legRightLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M53.5,97.6c2,45-3.2,74.3-15,76s-5.3-31.4-25.8-69.9C4,87.4,12.4,55.8,5.5,38.6c-12-30-0.3-36.3,14-38 C40.3-1.9,51.5,54,53.5,97.6z',
      width: 54,
      height: 174,
      opacity: 1,
      top: 16,
      right: 17,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'legRightUpper'
  },
  torso: {
    xscale: 1,
    yscale: 1,
    rotation: 1,
    parts: [{
      shape: 'path',
      points: 'M70.1,163.5H44.8c-9.3,0-15.9-5.5-16.6-14.7c-1.5-18.8-16-60-17-62.3C7.6,77.6,3.4,58.6,0.9,46.6 C-0.5,40,2.1,33.1,7.7,29.2c1.8-1.3,3.4-2.3,4.3-2.7c29.2-11,37.3-26,48.4-26c0,0,9.7,0,9.7,0h9.7c11.1,0,19.2,15,48.4,26 c0.9,0.3,2.5,1.4,4.3,2.7c5.6,3.9,8.2,10.8,6.8,17.5c-2.5,12-6.8,31-10.4,39.9c-0.9,2.2-15.5,43.5-17,62.3 c-0.7,9.3-7.3,14.7-16.6,14.7C95.5,163.5,70.1,163.5,70.1,163.5z',
      width: 140,
      height: 164,
      opacity: 1,
      top: 'center',
      left: 'center',
      rotation: 0,
      radius: 30
    },/*
    {
      shape: 'rect',
      width: 70,
      height: 80,
      opacity: 0.6,
      top: 'center',
      right: 'center',
      rotation: 0,
      radius: 30,
      texture: {
        uri: 'images/texture-torso.png',
        width: 70,
        height: 90
      }
    }*/
    ],
    connectionsFor: {
      'neck': {
        'left': 67,
        'top': 22
      },
      'armLeftUpper': {
        'left': 6,
        'top': 50
      },
      'armRightUpper': {
        'right': 6,
        'top': 45
      },
      'belly': {
        'left': 73,
        'bottom': 0
      }
    }
  },
  neck: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M32.7,63.5H12.3c-6.5,0-11.8-5.3-11.8-11.8l1-39.3c0-6.5,4.3-11.8,10.8-11.8h20.3 c6.5,0,10.8,5.3,10.8,11.8l1,39.3C44.5,58.2,39.2,63.5,32.7,63.5z',
      width: 40,
      height: 64,
      opacity: 1,
      left: 'center',
      bottom: 10,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'head': {
        'left': 18,
        'top': 5
      }
    }
  },
  head: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M33.9,96.8c-2.4-0.1-4.8-0.4-6.3-0.9c-6.2-2-20-11.7-20.8-14.6c-1.3-4.9-2.5-12.5-3.4-21.6 c-0.1-1-2.2-7-2.3-8.1c-1.3-13.3,0-22.5,0-22.5c0-15.9,12.9-28.7,28.7-28.7h3.4h0.1h3.4c15.9,0,28.7,12.9,28.7,28.7 c0,0,1.3,9.2,0,22.5c-0.1,1-2.2,7-2.3,8.1c-0.9,9.1-2,16.7-3.4,21.6C59,84.2,45.1,93.9,38.9,95.9c-1.5,0.5-3.9,0.8-6.3,0.9',
      width: 66,
      height: 97,
      opacity: 1,
      left: 'center',
      bottom: 30,
      rotation: 0,
      radius: 20
    }],
    connectsTo: 'neck',
    connectionsFor: {
      'leftEye': {
        'left': 'center',
        'top': 'center'
      },
      'rightEye': {
        'left': 'center',
        'top': 'center'
      },
      'nose': {
        'left': 'center',
        'top': 'center'
      },
      'mouth': {
        'left': 'center',
        'top': 'center'
      },
      'leftEar': {
        'left': 0,
        'top': 'center'
      },
      'rightEar': {
        'right': 0,
        'top': 'center'
      },
      'hair': {
        'left': 'center',
        'top': 15
      },
      'hat': {
        'left': 'center',
        'top': 5
      }
    }
  },
  leftEye: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      shape: 'path',
      points: 'M0.9,2.6l1.6-1.1c0.6-0.4,1.3-0.6,2-0.7c2.1-0.2,6.6-0.6,8.9,0.1c3,1,3,3,3,3s1,3-8,2c-5-0.6-6.9-1.4-7.6-2.1 C0.4,3.5,0.4,2.9,0.9,2.6z',
      width: 17,
      height: 7,
      opacity: 0.1,
      left: -4,
      bottom: 'center',
      rotation: 0,
      radius: 10,
      fill: '#000'
    },/*{
      shape: 'rect',
      width: 9,
      height: 9,
      opacity: 1,
      left: -4,
      bottom: 4,
      rotation: 0,
      radius: 10,
      fill: '#3E2116'
    }*/],
    connectsTo: 'head'
  },
  rightEye: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      shape: 'path',
      points: 'M16,2.6l-1.6-1.1c-0.6-0.4-1.3-0.6-2-0.7c-2.1-0.2-6.6-0.6-8.9,0.1c-3,1-3,3-3,3c0,0-1,3,8,2 c5-0.6,6.9-1.4,7.6-2.1C16.5,3.5,16.5,2.9,16,2.6z',
      width: 17,
      height: 7,
      opacity: 0.1,
      right: -4,
      bottom: 'center',
      rotation: 0,
      radius: 10,
      fill: '#000'
    },/*{
      shape: 'rect',
      width: 9,
      height: 9,
      opacity: 1,
      right: -4,
      bottom: 4,
      rotation: 0,
      radius: 10,
      fill: '#3E2116'
    }*/],
    connectsTo: 'head'
  },
  nose: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      shape: 'path',
      points: 'M0.5,2.2l8.5,18c0.3,0.6,0,1.2-0.6,1.5l-4.7,2c-0.6,0.3-1.3-0.1-1.4-0.8L0.5,5.2V2.2z',
      width: 10,
      height: 24,
      opacity: 0.1,
      right: -1,
      top: 1,
      rotation: 0,
      radius: 10,
      fill: '#000'
    }],
    connectsTo: 'head'
  },
  mouth: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      shape: 'rect',
      width: 10,
      height: 3,
      opacity: 0.1,
      right: 'center',
      top: -30,
      rotation: 0,
      radius: 10,
      fill: '#000'
    },
    {
      shape: 'rect',
      width: 18,
      height: 2,
      opacity: 0.1,
      right: 'center',
      top: -26,
      rotation: 0,
      radius: 10,
      fill: '#000'
    }
    ],
    connectsTo: 'head'
  },
  leftEar: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      shape: 'rect',
      width: 10,
      height: 12,
      opacity: 1,
      left: 5,
      bottom: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'head'
  },
  rightEar: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      shape: 'rect',
      width: 10,
      height: 12,
      opacity: 1,
      right: 5,
      bottom: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'head'
  },
  hair: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      shape: 'path',
      points: 'M9.1,6.9c0,0,0,9,1,5s4-7,4-7s18-6,13-4s-7,4-7,4s3-3,21-4s29,15,29,15s2.4,16.5,2,23c-0.1,1-1,4-1,4l-2,12 l-1-13l-3-6l-19-4c0,0,14,8,11,8s-19-9-19-9s15,11,11,10s-12-7-12-7s4,12,1,10s-10-15-10-15l-10-4c0,0-4-3-6-1s0,14,0,14s-2,2-4,6 s-2,11-2,11s1-3-4-18s3-24,3-24L9.1,6.9z',
      width: 72,
      height: 59,
      opacity: 0.7,
      right: 39,
      bottom: 38,
      rotation: 0,
      radius: 10,
      texture: {
        uri: 'images/texture-fur.jpg',
        width: 350,
        height: 235
      }
    }],
    connectsTo: 'head'
  },
  hat: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      shape: 'polygon',
      points: '50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40',
      width: 5,
      height: 5,
      opacity: 1,
      right: 'center',
      bottom: 'center',
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'head'
  },
  armLeftUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M40.3,54.4c-9.2,39.8-17.2,49.9-26.9,47.5C-8.9,96.2,4.4,69.8,4.9,48C5.6,18.7,13-0.5,31.7,0.5 C63.1,2.2,52.1,29.2,40.3,54.4z',
      width: 52,
      height: 102,
      opacity: 1,
      top: 15,
      left: 18,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'armLeftLower': {
        'left': 15,
        'bottom': 14
      }
    }
  },
  armLeftLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M30.7,67c-15,25-15.1,30.3-18,29c-16-7-12.5-25.4-10-47c2-17,20.4-53.3,32-48C49.1,7.6,48.4,37.5,30.7,67z',
      width: 45,
      height: 96,
      opacity: 1,
      top: 10,
      left: 14,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armLeftUpper',
    connectionsFor: {
      'handLeft': {
        'left': 15,
        'bottom': 10
      }
    }
  },
  handLeft: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'rect',
      width: 30,
      height: 55,
      opacity: 1,
      top: 1,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armLeftLower'
  },
  armRightUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M21,0.5c18.7-1,26.1,18.2,26.9,47.5c0.5,21.8,13.8,48.2-8.6,53.9c-9.6,2.4-17.6-7.7-26.9-47.5 C0.6,29.2-10.4,2.2,21,0.5z',
      width: 52,
      height: 102,
      opacity: 1,
      top: 15,
      right: 18,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'armRightLower': {
        'right': 12,
        'bottom': 14
      }
    }
  },
  armRightLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'path',
      points: 'M10.6,1c11.6-5.3,30,31,32,48c2.5,21.6,6,40-10,47c-2.9,1.3-3-4-18-29C-3.1,37.5-3.8,7.6,10.6,1z',
      width: 45,
      height: 96,
      opacity: 1,
      top: 10,
      right: 14,
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armRightUpper',
    connectionsFor: {
      'handRight': {
        right: 15,
        'bottom': 10
      }
    }
  },
  handRight: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      shape: 'rect',
      width: 30,
      height: 55,
      opacity: 1,
      top: 1,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armRightLower'
  },
};