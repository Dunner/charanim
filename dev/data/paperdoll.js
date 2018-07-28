window.paperdoll = {
  belly: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 60,
      height: 50,
      top: 'center',
      left: 'center',
      rotation: 0,
      radius: 15
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'legLeftUpper': {
        'left': 17,
        'bottom': 10
      },
      'legRightUpper': {
        'right': 17,
        'bottom': 10
      }
    }
  },
  legLeftUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 60,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'belly',
    connectionsFor: {
      'legLeftLower': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  legLeftLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 60,
      top: 10,
      left: 'center',
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
      width: 20,
      height: 60,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'belly',
    connectionsFor: {
      'legRightLower': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  legRightLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 60,
      top: 10,
      left: 'center',
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
      width: 70,
      height: 80,
      top: 'center',
      right: 'center',
      rotation: 0,
      radius: 30
    }],
    connectionsFor: {
      'neck': {
        'left': 'center',
        'top': 2
      },
      'armLeftUpper': {
        'left': 7,
        'top': 15
      },
      'armRightUpper': {
        'right': 7,
        'top': 15
      },
      'belly': {
        'left': 'center',
        'bottom': 0
      }
    }
  },
  neck: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 50,
      left: 'center',
      bottom: 10,
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'head': {
        'left': 'center',
        'top': 5
      }
    }
  },
  head: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 50,
      height: 70,
      left: 'center',
      bottom: 'center',
      rotation: 0,
      radius: 20,
      fill: '#f7cbc4'
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
      }
    }
  },
  leftEye: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      width: 12,
      height: 10,
      left: -4,
      bottom: 'center',
      rotation: 0,
      radius: 10,
      fill: '#000000'
    }],
    connectsTo: 'head'
  },
  rightEye: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    inheritsRotation: true,
    parts: [{
      width: 12,
      height: 10,
      right: -4,
      bottom: 'center',
      rotation: 0,
      radius: 10,
      fill: '#000000'
    }],
    connectsTo: 'head'
  },
  armLeftUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'armLeftLower': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  armLeftLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armLeftUpper',
    connectionsFor: {
      'handLeft': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  handLeft: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 30,
      top: 1,
      left: 'center',
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'armLeftLower'
  },
  armRightUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'armRightLower': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  armRightLower: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armRightUpper',
    connectionsFor: {
      'handRight': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  handRight: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 30,
      top: 1,
      left: 'center',
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'armRightLower'
  },
};