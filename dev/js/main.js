
var draw = SVG('drawing').size('100%', '100%');
var rotate = 0;
var character = {};

$( document ).ready(function() { 
  console.log( "ready!" ); 


  create();
  var updateInterval = setInterval(update, 10);
  window.freshState = {
    time:0,
    groups: createKeyframe(character)
  };

}); 






