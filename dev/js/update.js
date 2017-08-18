

function update() {
  rotate++;
  if (rotate >= 360) {
    rotate = 0;
  }

  for (var prop in character) {


    for (var i = 0; i < character[prop].parts.length; i++) {
      var part = character[prop].parts[i];

      part.element.width(part.data.width*character[prop].xscale);
      part.element.height(part.data.height*character[prop].yscale);

      var posFromEdge = positionFromEdge(part, character[prop].wrapper);
      part.element.center(
        posFromEdge.x,
        posFromEdge.y
      );
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
    if (character[prop].rotation !== undefined) {
      character[prop].group.rotate(character[prop].rotation, character[prop].wrapper.width()/2, character[prop].wrapper.height()/2);
    }

  }


}

function updateAxlePoint(prop) {
  if (character[prop].axle) {
    character[prop].axle.center(
      character[prop].wrapper.width()/2,
      character[prop].wrapper.height()/2
    );
  }
}


function updateConnectionPoints(prop) {
  //connectionpoints
  for (var connectionFor in character[prop].connectionsFor) {
    var connection = character[prop].connectionsFor[connectionFor];
    var posFromEdge = positionFromEdge2(connection, character[prop]);

    var pointDir = pointDirection({x:character[prop].wrapper.width()/2,y:character[prop].wrapper.height()/2},{x:posFromEdge.x,y:posFromEdge.y});
    var pointDist = pointDistance({x:character[prop].wrapper.width()/2,y:character[prop].wrapper.height()/2},{x:posFromEdge.x,y:posFromEdge.y});
    
    var pdir1 = normalizeAngle(pointDir) / 57;
    var pdir2 = normalizeAngle(character[prop].group.transform().rotation) / 57;
    var pdir3 = pdir1+pdir2;

    var offset = lengthDir(pointDist,pdir3);

    connection.point.center(
      ((character[prop].wrapper.width()/2)+offset.x),
      ((character[prop].wrapper.height()/2)+offset.y)
    );

  }
}



