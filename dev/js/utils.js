

//Todo merge into one function
//Todo make percentages possible
function positionFromEdge(part, wrapper) {
  var horizontal, vertical;

  if (part.data.left) {
    var templeft = part.data.left;
    if (isNaN(templeft)) {templeft = part.element.width()/2;}
    horizontal = (wrapper.width()/2)-(part.element.width()/2)+templeft;
  } else if (part.data.right) {
    var tempright = part.data.right;
    if (isNaN(tempright)) {tempright = part.element.width()/2;}
    horizontal = (wrapper.width()/2)+(part.element.width()/2)-tempright;
  }

  if (part.data.top) {
    var temptop = part.data.top;
    if (isNaN(temptop)) {temptop = part.element.height()/2;}
    vertical = (wrapper.height()/2)+(part.element.height()/2)-temptop;
  } else if (part.data.bottom) {
    var tempbottom = part.data.bottom;
    if (isNaN(tempbottom)) {tempbottom = part.element.height()/2;}
    vertical = (wrapper.height()/2)-(part.element.height()/2)+tempbottom;
  }
  return {x:horizontal, y:vertical};
}

function positionFromEdge2(info, prop) {
  var horizontal, vertical;

  if (info.left !== undefined) {
    var templeft = info.left;
    if (isNaN(templeft)) {templeft = prop.parts[0].element.width()/2;}
    horizontal = prop.parts[0].element.x() + templeft;
  } else if (info.right !== undefined) {
    var tempright = info.right;
    if (isNaN(tempright)) {tempright = prop.parts[0].element.width()/2;}
    horizontal = prop.parts[0].element.x() + prop.parts[0].element.width() - tempright;
  }

  if (info.top !== undefined) {
    var temptop = info.top;
    if (isNaN(temptop)) {temptop = prop.parts[0].element.height()/2;}
    vertical = prop.parts[0].element.y() + temptop;
  } else if (info.bottom !== undefined) {
    var tempbottom = info.bottom;
    if (isNaN(tempbottom)) {tempbottom = prop.parts[0].element.height()/2;}
    vertical = prop.parts[0].element.y() + prop.parts[0].element.height() - tempbottom;
  }
  return {x:horizontal, y:vertical};
}




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