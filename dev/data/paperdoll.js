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
          'left': 'center',
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
          'left': 'center',
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
        'eyeLeft': {
          'left': 'center',
          'top': 'center'
        },
        'eyeRight': {
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
        'earLeft': {
          'left': 0,
          'top': 'center'
        },
        'earRight': {
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
        },
        'beard': {
          'left': 'center',
          'bottom': 5
        }
      }
    },
    eyeLeft: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        {id: 'eye1', flip: false}
      ],
      connectsTo: 'head'
    },
    eyeRight: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        {id: 'eye1', flip: true}
      ],
      connectsTo: 'head'
    },
    nose: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        {id: 'nose1', flip: false}
      ],
      connectsTo: 'head'
    },
    mouth: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        {id: 'mouth1', flip: false}
      ],
      connectsTo: 'head'
    },
    earLeft: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        {id: 'ear1', flip: false}
      ],
      connectsTo: 'head'
    },
    earRight: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        {id: 'ear1', flip: true}
      ],
      connectsTo: 'head'
    },
    hair: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        //{id: 'hair1', flip: false}
      ],
      connectsTo: 'head'
    },
    hat: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        {id: 'hat1', flip: false}
      ],
      connectsTo: 'head'
    },
    beard: {
      xscale: 1,
      yscale: 1,
      rotation: 0,
      inheritsRotation: true,
      sets: [
        {id: 'beard1', flip: false}
      ],
      connectsTo: 'head'
    },
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