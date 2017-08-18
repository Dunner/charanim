var basisPoint = $('#timeline')[0].offsetWidth/10000;
var timeline = {}


function updateTimeline(keyframes) {
  timeline.keyframes = keyframes;
  (timeline.keyframes).sort(function(a, b) { 
      return a.time - b.time;
  })
  $('#timeline__keyframes').empty();
  for(index in timeline.keyframes) {
    var keyframe = timeline.keyframes[index];
    var keyframeElement = $('<div class="keyframe"></div>');
    keyframeElement.css({'left':(keyframe.time*basisPoint)-10});
    $('#timeline__keyframes').append(keyframeElement);
    keyframe.element = keyframeElement;
  }
  $(timeline.keyframes[timeline.keyframes.length-1].element).addClass('keyframe--selected');
  $('#timeline__indicator').css({'left': animation.frameCurrent*basisPoint});
}

function createKeyframe() {
  /*HASN'T BEEN USED FOR A WHILE, MIGHT BE OUTDATED*/
  var newKeyframe = createKeyframeObject(character);
  var time = (timeline.keyframes.length+1)*200;
  if (timeline.keyframeSelected) {
    time = timeline.keyframeSelected.time+200
  } else {
    time = animation.frameCurrent;
  }
  newKeyframe = {
    time: time,
    groups: newKeyframe
  };
  timeline.keyframes.push(newKeyframe);
  updateTimeline(timeline.keyframes);
  selectKeyframe(timeline.keyframes.length-1);
}

function moveKeyframe(element){
  $(element).css({'left':window.mouseLocation.x-10});
  var newFrameTime = Math.round((window.mouseLocation.x/basisPoint) / 10) * 10;
  var frameIndex = $(element).parent().children().index(element);
  var keyframe = timeline.keyframes[frameIndex];
  keyframe.time = newFrameTime;
  $('#timeline__indicator').css({'left': keyframe.time*basisPoint});
  
}

function selectKeyframe(index){
  $('.keyframe').removeClass('keyframe--selected');
  var keyframe;
  if (index != undefined) {
    keyframe = timeline.keyframes[index];
    poseCharacter(keyframe);
    $('#timeline__indicator').css({'left': keyframe.time*basisPoint});
    animation.frameCurrent = keyframe.time;
    $(keyframe.element).addClass('keyframe--selected');
  }
  timeline.keyframeSelected = keyframe;

}

function updateCurrentKeyframe() {


  if (!timeline.keyframeSelected) {
    //No keyframe on current timestamp, create one
    var newKeyframe = createKeyframeObject(character);
    var time = animation.frameCurrent;
    newKeyframe = {
      time: time,
      groups: newKeyframe
    };
    timeline.keyframes.push(newKeyframe);
    updateTimeline(timeline.keyframes);
    selectKeyframe(timeline.keyframes.indexOf(newKeyframe));

  } else {
    //keyframe selected, update it
    timeline.keyframeSelected.groups = createKeyframeObject(character);
  }
}

var keyframedragging;
$('#timeline__keyframes').on('mousedown',function (event) {
  clearInterval(animationInterval);
  if ( $(event.target).hasClass('keyframe') ) {
    var keyframeIndex = $(event.target).parent().children().index(event.target);
    selectKeyframe(keyframeIndex);

    keyframedragging = setInterval(function () {
      moveKeyframe(event.target);
    }, 100);
  }
  if ( $(event.target).is($('#timeline__keyframes')) ) {
    var newFrameTime = Math.round((window.mouseLocation.x/basisPoint) / 10) * 10;
    animation.frameCurrent = newFrameTime;
    timeline.keyframeSelected = undefined;
    selectKeyframe();
    $('#timeline__indicator').css({'left': animation.frameCurrent*basisPoint});

  }
  return false;
});
