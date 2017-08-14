$( document ).ready(function() { 
  console.log( "ready!" ); 
  var draw = SVG('drawing').size('100%', '100%');
  var rotate = 0;
  var character = {};

  function drawProp(prop) {
    var wrapper = draw.nested();
    var group = wrapper.group();
    character[prop] = Object.assign({},paperdoll[prop]);
    character[prop].wrapper = wrapper;
    character[prop].group = group;
    character[prop].parts = [];
    wrapper.viewbox(0,0,800,800);
    wrapper.width(800);
    wrapper.height(800);

    character[prop].wrapper.center(
      character[prop].wrapper.parent().node.clientWidth/2,
      character[prop].wrapper.parent().node.clientHeight/3.3      
    );


    for (var partIndex in paperdoll[prop].parts) {
      var part = paperdoll[prop].parts[partIndex];
      var drawnPart = 
      wrapper.rect(
        part.width, 
        part.height
      ).attr({ 
        fill: part.fill, 
        opacity: 1, 
        id: prop,
        rx: part.radius,
        ry: part.radius
      })
      drawnPart.center(
        character[prop].wrapper.width()/2+part.offsetX,
        character[prop].wrapper.height()/2+part.offsetY
      );
      characterPart = {element: drawnPart, data: part}
      character[prop].parts.push(characterPart);
      character[prop].group.add(drawnPart);
    }




    //drawAxlePoint(prop);
    drawConnectionPoints(prop);
  }



  function drawAxlePoint(prop) {
    character[prop].axle = character[prop].wrapper.rect(5, 5).attr({ fill: '#0f0' });
    //axle

    //character[prop].group.add(character[prop].axle);
  }

  function updateAxlePoint(prop) {
    if (character[prop].axle) {
      character[prop].axle.center(
        character[prop].wrapper.width()/2,
        character[prop].wrapper.height()/2
      );
    }
  }

  function drawConnectionPoints(prop) {
    //connectionpoints
    for (var connectionFor in paperdoll[prop].connectionsFor) {
      var connection = paperdoll[prop].connectionsFor[connectionFor];
      connection.point = character[prop].wrapper.rect(5, 5).attr({ fill: '#f00' });
      connection.point.center(
        character[prop].wrapper.width()/2,
        character[prop].wrapper.height()/2
      );
      //character[prop].group.add(connection.point);
    }
  }

  function updateConnectionPoints(prop) {
    //connectionpoints
    for (var connectionFor in character[prop].connectionsFor) {
      var connection = character[prop].connectionsFor[connectionFor];
      var posFromEdge = positionFromEdge2(connection, character[prop]);

      var pointDir = pointDirection({x:character[prop].wrapper.width()/2,y:character[prop].wrapper.height()/2},{x:posFromEdge.x,y:posFromEdge.y});
      var pointDist = pointDistance({x:character[prop].wrapper.width()/2,y:character[prop].wrapper.height()/2},{x:posFromEdge.x,y:posFromEdge.y});
      
      var pdir1 = ((((pointDir % 360) + 360) % 360) / 57);
      var pdir2 = character[prop].group.transform().rotation/57;
      var pdir3 = pdir1+pdir2;

      var offset = lengthDir(pointDist,pdir3);

      connection.point.center(
        ((character[prop].wrapper.width()/2)+offset.x),
        ((character[prop].wrapper.height()/2)+offset.y)
      );

    }
  }


  //Todo merge into one function
  //Todo make percentages possible
  function positionFromEdge(part, wrapper) {
    var horizontal, vertical;

    if (part.data.left) {
      if (isNaN(part.data.left)) {part.data.left = part.element.width()/2}
      horizontal = (wrapper.width()/2)-(part.element.width()/2)+part.data.left;
    } else if (part.data.right) {
      if (isNaN(part.data.right)) {part.data.right = part.element.width()/2}
      horizontal = (wrapper.width()/2)+(part.element.width()/2)-part.data.right;
    }

    if (part.data.top) {
      if (isNaN(part.data.top)) {part.data.top = part.element.height()/2}
      vertical = (wrapper.height()/2)+(part.element.height()/2)-part.data.top;
    } else if (part.data.bottom) {
      if (isNaN(part.data.bottom)) {part.data.bottom = part.element.height()/2}
      vertical = (wrapper.height()/2)-(part.element.height()/2)+part.data.bottom;
    }
    return {x:horizontal, y:vertical}
  }

  function positionFromEdge2(info, prop) {
    var horizontal, vertical;

    if (info.left !== undefined) {
      if (isNaN(info.left)) {info.left = prop.parts[0].element.width()/2}
      horizontal = prop.parts[0].element.x() + info.left;
    } else if (info.right !== undefined) {
      if (isNaN(info.right)) {info.right = prop.parts[0].element.width()/2; }
      horizontal = prop.parts[0].element.x() + prop.parts[0].element.width() - info.right;
    }

    if (info.top !== undefined) {
      if (isNaN(info.top)) {info.top = prop.parts[0].element.height()/2}
      vertical = prop.parts[0].element.y() + info.top;
    } else if (info.bottom !== undefined) {
      if (isNaN(info.bottom)) {info.bottom = prop.parts[0].element.height()/2}
      vertical = prop.parts[0].element.y() + prop.parts[0].element.height() - info.bottom;
    }
    return {x:horizontal, y:vertical}
  }

  function create() {
    for (var prop in paperdoll) {

      drawProp(prop);

    }

  }

  function update() {
    var part = 'head';
    //console.log(normalizeAngle(character.torso.transform().rotation));
    rotate++;
    //character[part].group.rotate(rotate, character[part].wrapper.width()/2, character[part].wrapper.height()/2);
    if (rotate >= 360) {
      console.log(character)
      rotate = 0;
    }



    for (var prop in character) {

      //broken
      //character[prop].group.width(character[prop].width);
      //character[prop].group.height(character[prop].height);


      for (var i = 0; i < character[prop].parts.length; i++) {
        var part = character[prop].parts[i];
        part.element.width(part.data.width*character[prop].xscale)
        part.element.height(part.data.height*character[prop].yscale)


        var posFromEdge = positionFromEdge(part, character[prop].wrapper);
        part.element.center(
          posFromEdge.x,
          posFromEdge.y
        );
        /*  Centering from wrapper origin    
        part.element.center(
          character[prop].wrapper.width()/2+(part.data.offsetX*(character[prop].xscale)),
          character[prop].wrapper.height()/2+(part.data.offsetY*(character[prop].yscale))
        );*/

      }

      updateAxlePoint(prop);
      updateConnectionPoints(prop);

      //prop has connection
      if (character[prop].connectsTo) {
        var connectsTo = character[character[prop].connectsTo];
        var connection = connectsTo.connectionsFor[prop];
        character[prop].wrapper.center(
          connectsTo.wrapper.x() + connection.point.cx(),
          connectsTo.wrapper.y() + connection.point.cy()
        );

      }

      if (character[prop].rotation) {
        character[prop].group.rotate(character[prop].rotation, character[prop].wrapper.width()/2, character[prop].wrapper.height()/2);
      }



    }

  }

  $('#drawing').on('click',function(event) {
      // Move doll with click
      //character['torso'].wrapper.center(event.clientX, event.clientY);


      if (event.target.nodeName == 'rect') {
        var prop = event.target.id;
        var part = character[prop];

        var options_name = prop;
        var options_width = character.width;
        var options_height = character.height;
        var options_rotation = character.rotation;
        var options_offsetX = character.offsetX;
        var options_offsetY = character.offsetY;

        $('#options__name').text(options_name);
        $('#options__width').val(options_width);
        $('#options__height').val(options_height);
        $('#options__rotation').val(options_rotation);
        $('#options__offsetX').val(options_offsetX);
        $('#options__offsetY').val(options_offsetY);
      }
  });
  $('#options__width').on('keyup', function(e){character[$('#options__name').text()].width = parseInt($(this).val())});
  $('#options__height').on('keyup', function(e){character[$('#options__name').text()].height = parseInt($(this).val())});
  $('#options__rotation').on('keyup', function(e){character[$('#options__name').text()].rotation = parseInt($(this).val())});
  $('#options__offsetX').on('keyup', function(e){character[$('#options__name').text()].offsetX = parseInt($(this).val())});
  $('#options__offsetY').on('keyup', function(e){character[$('#options__name').text()].offsetY = parseInt($(this).val())});

  create();
  setInterval(update, 10);
}); 





var paperdoll = {
  torso: {
    xscale: 1,
    yscale: 1,
    parts: [{
      width: 70,
      height: 80,
      top: 'center',
      right: 'center',
      rotation: 0,
      radius: 30
    }],
    connectionsFor: {
      'head': {
        'left': 'center',
        'top': 10
      },
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
    parts: [{
      width: 20,
      height: 50,
      left: 'center',
      bottom: 10,
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'torso'
  },
  head: {
    xscale: 1,
    yscale: 1,
    parts: [{
      width: 50,
      height: 70,
      left: 'center',
      bottom: -10,
      rotation: 0,
      radius: 20,
      fill: '#f7cbc4'
    }],
    connectsTo: 'torso'
  },
  armLeftUpper: {
    xscale: 1,
    yscale: 1,
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
  belly: {
    xscale: 1,
    yscale: 1,
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
  };
}

function normalizeAngle(angle) {
  return (angle+360)%360;
}