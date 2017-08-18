function create() {


  for (var prop in paperdoll) {

    drawProp(prop);

  }

}



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
    });
    drawnPart.center(
      character[prop].wrapper.width()/2+part.offsetX,
      character[prop].wrapper.height()/2+part.offsetY
    );
    characterPart = {element: drawnPart, data: part};
    character[prop].parts.push(characterPart);
    character[prop].group.add(drawnPart);
  }




  drawConnectionPoints(prop);
  drawAxlePoint(prop);
}


function drawAxlePoint(prop) {
  character[prop].axle = character[prop].wrapper.rect(5, 5).attr({ fill: '#0f0', opacity: 0.2 });
  //axle

  //character[prop].group.add(character[prop].axle);
}
function drawConnectionPoints(prop) {
  //connectionpoints
  for (var connectionFor in paperdoll[prop].connectionsFor) {
    var connection = paperdoll[prop].connectionsFor[connectionFor];
    connection.point = character[prop].wrapper.rect(5, 5).attr({ fill: '#f00', opacity: 0.2 });
    connection.point.center(
      character[prop].wrapper.width()/2,
      character[prop].wrapper.height()/2
    );
    //character[prop].group.add(connection.point);
  }
}