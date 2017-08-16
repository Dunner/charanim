var basisPoint = $('#timeline')[0].offsetWidth/10000;
var timeline = {}


function updateTimeline(keyframes) {
  timeline.keyframes = keyframes;
  $('#timeline__keyframes').empty();
  for(index in keyframes) {
    var keyframe = keyframes[index];
    var keyframeElement = $('<div class="keyframe"></div>');
    keyframeElement.css({'left':(keyframe.time*basisPoint)-4});
    $('#timeline__keyframes').append(keyframeElement);
  }
  $('#timeline__indicator').css({'left': animation.frameCurrent*basisPoint});
}

function moveKeyFrame(element){
  $(element).css({'left':window.mouseLocation.x-4});
  var newFrameTime = Math.round((window.mouseLocation.x/basisPoint) / 10) * 10;
  var frameIndex = $(element).parent().children().index(element);
  timeline.keyframes[frameIndex].time = newFrameTime;
  
}


var keyframedragging;
$('#timeline__keyframes').on('mousedown',function (event) {
  if ( $(event.target).hasClass('keyframe') ) {
    keyframedragging = setInterval(function () {
      moveKeyFrame(event.target);
    }, 100); 
  }
  return false;
});
