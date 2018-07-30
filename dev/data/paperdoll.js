$( document ).ready(function() {
  window.paperdoll = {
    hip: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      sets: [
        {id:'hip1',flip:false}
      ],
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
      sets: [
        {id: 'legUpper1', flip: false}
      ],
      connectsTo: 'hip',
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
      sets: [
        {id: 'legLower1', flip: false}
      ],
      connectsTo: 'legLeftUpper'
    },
    legRightUpper: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      sets: [
        {id: 'legUpper1', flip: true}
      ],
      connectsTo: 'hip',
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
      sets: [
        {id: 'legLower1', flip: true}
      ],
      connectsTo: 'legRightUpper'
    },
    torso: {
      xscale: 1,
      yscale: 1,
      rotation: 1,
      sets: [
        {id: 'torso1', flip: false}
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
        'hip': {
          'left': 73,
          'bottom': 0
        }
      }
    },
    neck: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      sets: [
        {id: 'neck1', flip: false}
      ],
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
      sets: [
        {id: 'head1', flip: false}
      ],
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
    /*leftEye: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      parts: [{
        type: 'path',
        points: 'M0.9,2.6l1.6-1.1c0.6-0.4,1.3-0.6,2-0.7c2.1-0.2,6.6-0.6,8.9,0.1c3,1,3,3,3,3s1,3-8,2c-5-0.6-6.9-1.4-7.6-2.1 C0.4,3.5,0.4,2.9,0.9,2.6z',
        width: 17,
        height: 7,
        opacity: 0.1,
        left: -4,
        bottom: 'center',
        rotation: 0,
        radius: 10,
        fill: '#000'
      },{
        type: 'rect',
        width: 9,
        height: 9,
        opacity: 1,
        left: -4,
        bottom: 4,
        rotation: 0,
        radius: 10,
        fill: '#3E2116'
      }],
      connectsTo: 'head'
    },
    rightEye: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      parts: [{
        type: 'path',
        points: 'M16,2.6l-1.6-1.1c-0.6-0.4-1.3-0.6-2-0.7c-2.1-0.2-6.6-0.6-8.9,0.1c-3,1-3,3-3,3c0,0-1,3,8,2 c5-0.6,6.9-1.4,7.6-2.1C16.5,3.5,16.5,2.9,16,2.6z',
        width: 17,
        height: 7,
        opacity: 0.1,
        right: -4,
        bottom: 'center',
        rotation: 0,
        radius: 10,
        fill: '#000'
      },{
        type: 'rect',
        width: 9,
        height: 9,
        opacity: 1,
        right: -4,
        bottom: 4,
        rotation: 0,
        radius: 10,
        fill: '#3E2116'
      }],
      connectsTo: 'head'
    },
    nose: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      parts: [{
        type: 'path',
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
        type: 'rect',
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
        type: 'rect',
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
        type: 'rect',
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
        type: 'rect',
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
        type: 'texture',
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
        type: 'polygon',
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
    },*/
    armLeftUpper: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      sets: [
        {id: 'armUpper1', flip: false}
      ],
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
      sets: [
        {id: 'armLower1', flip: false}
      ],
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
      sets: [
        {id: 'hand1', flip: false}
      ],
      connectsTo: 'armLeftLower'
    },
    armRightUpper: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      sets: [
        {id: 'armUpper1', flip: true}
      ],
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
      sets: [
        {id: 'armLower1', flip: true}
      ],
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
      sets: [
        {id: 'hand1', flip: true}
      ],
      connectsTo: 'armRightLower'
    },
  };
});