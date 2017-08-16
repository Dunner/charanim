

var animationInterval;

var animation = {}


function initAnimation(keyframes, char) {
  animation = {
    keyframes: [],
    msBetweenFrames: 10,
    frameCurrent: 0,
    framesRemaining: 0,
    currentAnimations: {}
  }
  animation.keyframes = keyframes;
  if (animation.keyframes[0].time !== 0) {
    keyframes.unshift(window.freshState);
  }
  clearInterval(animationInterval);
  animationInterval = setInterval(animationPlay, animation.msBetweenFrames);

  //reset
  for (var g in keyframes[0].groups) {
    for (var prop in keyframes[0].groups[g]) {
      character[g][prop] = keyframes[0].groups[g][prop];
    }
  }

}


function animationPlay() {
  animation.framesRemaining = animation.keyframes[animation.keyframes.length-1];

  for (var k in animation.keyframes) {
    var keyframe = animation.keyframes[k];
    if (keyframe.time == animation.frameCurrent) {
      processKeyframe(keyframe, animation.frameCurrent);
      animation.framesRemaining = (animation.keyframes.length-1)-animation.keyframes.indexOf(keyframe);
    }
  }

  for (var g in animation.currentAnimations) {
    for (var prop in animation.currentAnimations[g]) {
      var values = animation.currentAnimations[g][prop];

      if (character[g][prop] < animation.currentAnimations[g][prop].to) {
        character[g][prop] = character[g][prop] + values.stepPerFrame;
      }
      if (character[g][prop] > animation.currentAnimations[g][prop].to) {
        character[g][prop] = character[g][prop] - values.stepPerFrame;
      }

      if (Math.round(character[g][prop]) == Math.round(values.to)) {
        delete animation.currentAnimations[g][prop];
      }
    }
  }
  updateTimeline(animation.keyframes);
  animation.frameCurrent += 10;
}

function processKeyframe(keyframe, frameCurrent) {
  console.log(animation.keyframes.indexOf(keyframe)+1)

  //Info from this keyframe
  for (var g in keyframe.groups) {
    var group = keyframe.groups[g];
    animation.currentAnimations[g] = {};
    for (var prop in group) {
      var value = group[prop];
      animation.currentAnimations[g][prop] = {
        from: character[g][prop]
      }
    }
  }

  //Add info from next relevant keyframe
  for (var g in animation.currentAnimations) {
    var currentGroupAnim = animation.currentAnimations[g];
    for (var i = animation.keyframes.indexOf(keyframe)+1; i < animation.keyframes.length; i++) {
      var nextGroupAnimInfo = animation.keyframes[i].groups[g];
      for (var prop in nextGroupAnimInfo) {

        if (currentGroupAnim[prop] == undefined) {continue;}
        if (currentGroupAnim[prop].to) {continue;}
        if (currentGroupAnim[prop].from == nextGroupAnimInfo[prop]) {continue;}
        currentGroupAnim[prop].to = nextGroupAnimInfo[prop];
          
        var framesToPlayWith = (animation.keyframes[i].time - frameCurrent) / animation.msBetweenFrames;
        var stepSize = Math.abs(currentGroupAnim[prop].from-currentGroupAnim[prop].to);
        currentGroupAnim[prop].stepPerFrame = stepSize/ framesToPlayWith;
        currentGroupAnim[prop].current = currentGroupAnim[prop].from;
        
      }
    }
  }
  if (animation.keyframes.indexOf(keyframe) == animation.keyframes.length-1) {
    clearInterval(animationInterval);
  }
}

function createKeyframe(char){
  var groups = {};
  var props = [
    'rotation',
    'xscale',
    'yscale',
  ];
  
  for (var group in char) {
    groups[group] = {};
    for (var index in props) {
      var prop = props[index];
      groups[group][prop] = char[group][prop];
    }
  }
  return groups;
}