$( document ).ready(function() { 
  console.log( "ready!" ); 
  var draw = SVG('drawing').size('100%', '100%');
  var rotate = 0;
  var character = {};

  function drawProp(prop) {
    var wrapper = draw.nested();
    var group = wrapper.group();

    character[prop] = wrapper.rect(paperdoll[prop].width, paperdoll[prop].height).attr({ fill: '#00F', opacity: 0.5 });
    character[prop].wrapper = wrapper;
    character[prop].group = group;
    wrapper.viewbox(0,0,800,800);
    wrapper.width(800);
    wrapper.height(800);
    character[prop].radius(15)
          
    character[prop].center(
      character[prop].wrapper.width()/2+paperdoll[prop].offsetX,
      character[prop].wrapper.height()/2+paperdoll[prop].offsetY
    );

    character[prop].group.add(character[prop]);

    drawAxlePoint(prop);
    drawConnectionPoints(prop);
  }

  function drawAxlePoint(prop) {
    character[prop].axle = character[prop].wrapper.rect(5, 5).attr({ fill: '#0f0' });
    //axle

    character[prop].group.add(character[prop].axle);
  }

  function updateAxlePoint(prop) {
    character[prop].axle.cx(character[prop].wrapper.width()/2)
                        .cy(character[prop].wrapper.height()/2)
  }

  function drawConnectionPoints(prop) {
    //connectionpoints
    for (var connectionFor in paperdoll[prop].connectionsFor) {
      var connection = paperdoll[prop].connectionsFor[connectionFor];
      connection.point = character[prop].wrapper.rect(5, 5).attr({ fill: '#f00' });
      connection.point.cx(character[prop].wrapper.width()/2)
                      .cy(character[prop].wrapper.height()/2)
      //character[prop].group.add(connection.point);
    }
  }

  function updateConnectionPoints(prop) {
    //connectionpoints
    for (var connectionFor in paperdoll[prop].connectionsFor) {
      var connection = paperdoll[prop].connectionsFor[connectionFor];


      let pointDir = pointDirection({x:character[prop].wrapper.width()/2,y:character[prop].wrapper.height()/2},{x:character[prop].wrapper.width()/2+connection.offsetX,y:character[prop].wrapper.height()/2+connection.offsetY});
      let pointDist = pointDistance({x:character[prop].wrapper.width()/2,y:character[prop].wrapper.height()/2},{x:character[prop].wrapper.width()/2+connection.offsetX,y:character[prop].wrapper.height()/2+connection.offsetY});
      
      let pdir1 = ((((pointDir % 360) + 360) % 360) / 57);
      let pdir2 = character[prop].parent().transform().rotation/57;
      let pdir3 = pdir1+pdir2;

      let offset = lengthDir(pointDist,pdir3);

      connection.point.center(
        (character[prop].wrapper.width()/2)+offset.x,
        (character[prop].wrapper.height()/2)+offset.y
      );

    }
  }

  function create() {
    for (var prop in paperdoll) {

      drawProp(prop);

    }

  }

  function update() {
    let part = 'head';
    //console.log(normalizeAngle(character.torso.transform().rotation));
    rotate++;
    //character[part].group.rotate(rotate, character[part].wrapper.width()/2, character[part].wrapper.height()/2);
    if (rotate >= 360) {
      rotate = 0;
    }


    for (var prop in paperdoll) {
      updateAxlePoint(prop);
      updateConnectionPoints(prop);

      //prop has connection
      if (paperdoll[prop].connectsTo) {
        let connectsTo = paperdoll[paperdoll[prop].connectsTo];
        let connection = connectsTo.connectionsFor[prop];
        character[prop].wrapper.center(
          character[paperdoll[prop].connectsTo].wrapper.x() + connection.point.cx(),
          character[paperdoll[prop].connectsTo].wrapper.y() + connection.point.cy()
        );

      }

      if (paperdoll[prop].rotation) {
        character[prop].group.rotate(paperdoll[prop].rotation, character[prop].wrapper.width()/2, character[prop].wrapper.height()/2);
      }
    }

  }

  document.getElementById("drawing").onclick = function(event) {
      character['torso'].wrapper.center(event.clientX, event.clientY);
  };

  create();
  setInterval(update, 10);
}); 





var paperdoll = {
  torso: {
    width: 70,
    height: 80,
    offsetX: 0,
    offsetY: 0,
    connectionsFor: {
      'head': {
        'offsetX': 0,
        'offsetY': -40
      },
      'armLeftUpper': {
        'offsetX': -45,
        'offsetY': -25
      },
      'armRightUpper': {
        'offsetX': 45,
        'offsetY': -25
      },
      'belly': {
        'offsetX': 0,
        'offsetY': 65
      }
    }
  },
  head: {
    width: 50,
    height: 50,
    offsetX: 0,
    offsetY: -40,
    connectsTo: 'torso'
  },
  armLeftUpper: {
    width: 25,
    height: 75,
    offsetX: 0,
    offsetY: 25,
    rotation: 20,
    connectsTo: 'torso',
    connectionsFor: {
      'armLeftLower': {
        'offsetX': 0,
        'offsetY': 50
      }
    }
  },
  armLeftLower: {
    width: 20,
    height: 75,
    offsetX: 0,
    offsetY: 25,
    connectsTo: 'armLeftUpper'
  },
  armRightUpper: {
    width: 25,
    height: 75,
    offsetX: 0,
    offsetY: 25,
    connectsTo: 'torso',
    rotation: 340,
    connectionsFor: {
      'armRightLower': {
        'offsetX': 0,
        'offsetY': 50
      }
    }
  },
  armRightLower: {
    width: 20,
    height: 75,
    offsetX: 0,
    offsetY: 25,
    connectsTo: 'armRightUpper'
  },
  belly: {
    width: 60,
    height: 50,
    offsetX: 0,
    offsetY: 0,
    connectsTo: 'torso',
    connectionsFor: {
      'legLeftUpper': {
        'offsetX': -20,
        'offsetY': 55
      },
      'legRightUpper': {
        'offsetX': 20,
        'offsetY': 55
      }
    }
  },
  legLeftUpper: {
    width: 25,
    height: 85,
    offsetX: 0,
    offsetY: 25,
    rotation: 10,
    connectsTo: 'belly',
    connectionsFor: {
      'legLeftLower': {
        'offsetX': 0,
        'offsetY': 50
      }
    }
  },
  legLeftLower: {
    width: 20,
    height: 75,
    offsetX: 0,
    offsetY: 25,
    connectsTo: 'legLeftUpper'
  },
  legRightUpper: {
    width: 25,
    height: 85,
    offsetX: 0,
    offsetY: 25,
    connectsTo: 'belly',
    rotation: 350,
    connectionsFor: {
      'legRightLower': {
        'offsetX': 0,
        'offsetY': 50
      }
    }
  },
  legRightLower: {
    width: 20,
    height: 75,
    offsetX: 0,
    offsetY: 25,
    connectsTo: 'legRightUpper'
  },
};



function pointDirection(pointA, pointB) {
  // Returns angle between two vectors
  return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
}

function pointDistance(pointA, pointB) {
  //Returns Distance between two points
  //pythagoras squareRoot(a*a + b*b = c*c) = c
  return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)); 
}


function lengthDir(length, direction) { //vector, magnitude
  if (direction < 0) direction += 360;

  return {
    x: length*Math.cos(direction),
    y: length*Math.sin(direction)
  }
}

function normalizeAngle(angle) {
  return (angle+360)%360;
}