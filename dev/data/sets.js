window.sets = {}
sets.hip = [
  {
    id: 'hip1',
    parts: [
    {
      type: 'path',
      points: 'M52,103.3c-3.7,0-7.4-1.2-10.5-3.5L5.5,62.3c-3.9-2.9-5.8-7.8-4.7-12.6l7-30.7C10.3,8.2,19.9,0.5,31,0.5 c0,0,21.4,0,21.4,0h21.4C84.9,0.5,94.5,8.2,97,19l7,30.7c1.1,4.7-0.8,9.7-4.7,12.6L63.2,99.8c-3.1,2.3-6.8,3.4-10.5,3.5H52z',
      width: 105,
      height: 104,
      opacity: 1,
      top: 24,
      left: 53,
    },
    {
      type: 'texture',
      width: 105,
      height: 104,
      opacity: 0.3,
      top: 15,
      right: 'center',
      texture: {
        uri: 'images/texture-hip.png',
        width: 105,
        height: 104
      }
    },
    {
      type: 'texture',
      width: 105,
      height: 107,
      opacity: 1,
      top: 6,
      right: 'center',
      texture: {
        uri: 'images/texture-mancover.png',
        width: 105,
        height: 107
      }
    }
    ]
  }
];

sets.legUpper = [
  {
    id: 'legUpper1',
    parts: [
      {
        type: 'path',
        points: 'M22.7,171.7c-18.8-2.1-26.3-56.9-20-99.1S20-2.1,38.7,0.7s34.4,39.8,23,81C48.7,128.7,54.2,175.2,22.7,171.7z',
        width: 66,
        height: 172,
        opacity: 1,
        top: 25,
        left: 25,
      },
      {
        type: 'texture',
        width: 66,
        height: 172,
        opacity: 0.3,
        top: 25,
        left: 25,
        texture: {
          uri: 'images/texture-legupper.png',
          width: 66,
          height: 172
        }
      }
    ]
  }
];

sets.legLower = [
  {
    id: 'legLower1',
    parts: [
      {
        type: 'path',
        points: 'M34.9,0.6c14.3,1.7,26,8,14,38c-6.9,17.2,1.4,48.8-7.2,65.1c-20.5,38.5-14,71.6-25.8,69.9s-17-31-15-76 C2.9,54,14.1-1.9,34.9,0.6z',
        width: 54,
        height: 174,
        opacity: 1,
        top: 16,
        left: 17
      }
    ]
  }
];

sets.torso = [
  {
    id: 'torso1',
    parts: [
      {
        type: 'path',
        points: 'M70.1,163.5H44.8c-9.3,0-15.9-5.5-16.6-14.7c-1.5-18.8-16-60-17-62.3C7.6,77.6,3.4,58.6,0.9,46.6 C-0.5,40,2.1,33.1,7.7,29.2c1.8-1.3,3.4-2.3,4.3-2.7c29.2-11,37.3-26,48.4-26c0,0,9.7,0,9.7,0h9.7c11.1,0,19.2,15,48.4,26 c0.9,0.3,2.5,1.4,4.3,2.7c5.6,3.9,8.2,10.8,6.8,17.5c-2.5,12-6.8,31-10.4,39.9c-0.9,2.2-15.5,43.5-17,62.3 c-0.7,9.3-7.3,14.7-16.6,14.7C95.5,163.5,70.1,163.5,70.1,163.5z',
        width: 140,
        height: 164,
        opacity: 1,
        top: 'center',
        left: 'center',
      },
      {
        type: 'texture',
        width: 140,
        height: 164,
        opacity: 0.3,
        top: 'center',
        right: 'center',
        texture: {
          uri: 'images/texture-torso.png',
          width: 140,
          height: 164
        }
      }
    ]
  }
];

sets.head = [
  {
    id: 'head1',
    parts: [
      {
        type: 'path',
        points: 'M33.9,96.8c-2.4-0.1-4.8-0.4-6.3-0.9c-6.2-2-20-11.7-20.8-14.6c-1.3-4.9-2.5-12.5-3.4-21.6 c-0.1-1-2.2-7-2.3-8.1c-1.3-13.3,0-22.5,0-22.5c0-15.9,12.9-28.7,28.7-28.7h3.4h0.1h3.4c15.9,0,28.7,12.9,28.7,28.7 c0,0,1.3,9.2,0,22.5c-0.1,1-2.2,7-2.3,8.1c-0.9,9.1-2,16.7-3.4,21.6C59,84.2,45.1,93.9,38.9,95.9c-1.5,0.5-3.9,0.8-6.3,0.9',
        width: 66,
        height: 97,
        opacity: 1,
        left: 'center',
        bottom: 30,
      }
    ]
  }
];

sets.neck = [
  {
    id: 'neck1',
    parts: [
      {
        type: 'path',
        points: 'M32.7,63.5H12.3c-6.5,0-11.8-5.3-11.8-11.8l1-39.3c0-6.5,4.3-11.8,10.8-11.8h20.3 c6.5,0,10.8,5.3,10.8,11.8l1,39.3C44.5,58.2,39.2,63.5,32.7,63.5z',
        width: 40,
        height: 64,
        opacity: 1,
        left: 'center',
        bottom: 10,
      },
      {
        type: 'texture',
        width: 40,
        height: 64,
        opacity: 0.3,
        bottom: 10,
        right: 'center',
        texture: {
          uri: 'images/texture-neck.png',
          width: 40,
          height: 64
        }
      }
    ]
  }
]

sets.hand = [
  {
    id: 'hand1',
    parts: [
      {
        type: 'rect',
        width: 30,
        height: 55,
        opacity: 1,
        radius: 5,
        top: 1,
        left: 'center',
      }
    ]
  }
];

sets.armUpper = [
  {
    id: 'armUpper1',
    parts: [
      {
        type: 'path',
        points: 'M40.3,54.4c-9.2,39.8-17.2,49.9-26.9,47.5C-8.9,96.2,4.4,69.8,4.9,48C5.6,18.7,13-0.5,31.7,0.5 C63.1,2.2,52.1,29.2,40.3,54.4z',
        width: 52,
        height: 102,
        opacity: 1,
        top: 15,
        left: 18
      },
      {
        type: 'texture',
        width: 52,
        height: 102,
        opacity: 0.2,
        top: 15,
        left: 18,
        texture: {
          uri: 'images/texture-armupper.png',
          width: 52,
          height: 102
        }
      }
    ]
  }
];

sets.armLower = [
  {
    id: 'armLower1',
    parts: [
      {
        type: 'path',
        points: 'M30.7,67c-15,25-15.1,30.3-18,29c-16-7-12.5-25.4-10-47c2-17,20.4-53.3,32-48C49.1,7.6,48.4,37.5,30.7,67z',
        width: 45,
        height: 96,
        opacity: 1,
        top: 10,
        left: 14
      }, {
        type: 'texture',
        width: 45,
        height: 96,
        opacity: 0.2,
        top: 10,
        left: 14,
        texture: {
          uri: 'images/texture-armlower.png',
          width: 45,
          height: 96
        }
      }
    ]
  }
];

sets.eye = [
  {
    id: 'eye1',
    parts: [
      {
        type: 'path',
        points: 'M0.9,2.6l1.6-1.1c0.6-0.4,1.3-0.6,2-0.7c2.1-0.2,6.6-0.6,8.9,0.1c3,1,3,3,3,3s1,3-8,2c-5-0.6-6.9-1.4-7.6-2.1 C0.4,3.5,0.4,2.9,0.9,2.6z',
        width: 17,
        height: 7,
        opacity: 0.1,
        left: -4,
        bottom: 'center',
        fill: '#000'
      }
    ]
  }
]

sets.nose = [
  {
    id: 'nose1',
    parts: [{
      type: 'path',
      points: 'M0.5,2.2l8.5,18c0.3,0.6,0,1.2-0.6,1.5l-4.7,2c-0.6,0.3-1.3-0.1-1.4-0.8L0.5,5.2V2.2z',
      width: 10,
      height: 24,
      opacity: 0.1,
      right: -1,
      top: 1,
      fill: '#000'
    }]
  }
];


sets.mouth = [
  {
    id: 'mouth1',
    parts: [{
      type: 'rect',
      width: 10,
      height: 3,
      opacity: 0.1,
      right: 'center',
      top: -30,
      radius: 10,
      fill: '#000'
    },
    {
      type: 'rect',
      width: 18,
      height: 2,
      opacity: 0.1,
      right: 'center',
      top: -26,
      radius: 10,
      fill: '#000'
    }]
  }
];

sets.ear = [
  {
    id: 'ear1',
    parts: [{
      type: 'rect',
      width: 10,
      height: 12,
      opacity: 1,
      left: 5,
      bottom: 'center',
      radius: 10
    }]
  }
]

sets.hair = [
  {
    id: 'hair1',
    parts: [{
      type: 'texture',
      points: 'M9.1,6.9c0,0,0,9,1,5s4-7,4-7s18-6,13-4s-7,4-7,4s3-3,21-4s29,15,29,15s2.4,16.5,2,23c-0.1,1-1,4-1,4l-2,12 l-1-13l-3-6l-19-4c0,0,14,8,11,8s-19-9-19-9s15,11,11,10s-12-7-12-7s4,12,1,10s-10-15-10-15l-10-4c0,0-4-3-6-1s0,14,0,14s-2,2-4,6 s-2,11-2,11s1-3-4-18s3-24,3-24L9.1,6.9z',
      width: 72,
      height: 59,
      opacity: 0.7,
      right: 39,
      bottom: 38,
      texture: {
        uri: 'images/texture-fur.jpg',
        width: 350,
        height: 235
      }
    }]
  }
]

sets.hat = [
  {
    id: 'hat1',
    parts: [{
      type: 'polygon',
      points: '50,0 60,40 100,50 60,60 50,100 40,60 0,50 40,40',
      width: 5,
      height: 5,
      opacity: 1,
      right: 'center',
      bottom: 'center',
      fill: '#c8a7a5'
    }]
  }
]

sets.beard = [
  {
    id: 'beard1',
    parts: [    {
      type: 'texture',
      width: 125,
      height: 125,
      opacity: 1,
      top: 52,
      right: 57,
      texture: {
        uri: 'images/texture-mancover.png',
        width: 125,
        height: 125
      }
    }]
  }
]

window.getSet = function(slotType, setID) {
  for(var key in window.sets) {
    if (key === slotType) {
      for(var set of sets[key]) {
        if (set.id === setID) {
          return set;
        }
      };
    }
  }
}