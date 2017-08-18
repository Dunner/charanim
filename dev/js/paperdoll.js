var paperdoll = {
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
    connectsTo: 'neck'
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
    connectsTo: 'armLeftUpper'
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
    connectsTo: 'armRightUpper'
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
};
