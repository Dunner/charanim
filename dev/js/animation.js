

var animationInterval;

var animation = {}


function initAnimation(keyframes, char) {
  console.log(keyframes)
  animation = {
    keyframes: [],
    msBetweenFrames: 10,
    frameCurrent: 0,
    framesRemaining: 0,
    currentAnimations: {}
  }
  animation.keyframes = keyframes ? keyframes : [];
  if (animation.keyframes.length == 0) {
    animation.keyframes.unshift(window.freshState);
    setTimeout(function(){selectKeyframe(0)},300);
  }
  
  clearInterval(animationInterval);
  animationInterval = setInterval(animationPlay, animation.msBetweenFrames);

  //reset
  poseCharacter(keyframes[0]);

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
      if(!animation.currentAnimations[g][prop].to) {
        continue;
      }
      var values = animation.currentAnimations[g][prop];
      if (character[g][prop] !== animation.currentAnimations[g][prop].to) {
        character[g][prop] = character[g][prop] + values.stepPerFrame;

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

  //Check next keyframe to add .to to props
  var currentKeyFrame = animation.keyframes.indexOf(keyframe);
  if (currentKeyFrame == animation.keyframes.length-1) {
    clearInterval(animationInterval);
    return;
  }
  for (var g in animation.currentAnimations) {
    var currentGroupAnim = animation.currentAnimations[g];

    /* LOOP THROUGH ALL UPCOMING KEYFRAMES TO ADD NEXT KEYFRAME WITH AN ANIMATION(.to)
    for (var i = animation.keyframes.indexOf(keyframe)+1; i < animation.keyframes.length; i++) {
      var nextGroupAnimInfo = animation.keyframes[indexOf(keyframe)+1].groups[g];
    }
    */

    var nextKeyFrame = animation.keyframes[animation.keyframes.indexOf(keyframe)+1];
    var nextGroupAnimInfo = nextKeyFrame.groups[g];
    for (var prop in nextGroupAnimInfo) {
      if (currentGroupAnim[prop] == undefined) {continue;}
      if (!currentGroupAnim[prop].to) {
        if (currentGroupAnim[prop].from === nextGroupAnimInfo[prop]) {
          continue;
        }
        console.log('keyframe: ', currentKeyFrame, '. animate', g, prop)
        currentGroupAnim[prop].to = nextGroupAnimInfo[prop];

        var aDiff = angleDiff(currentGroupAnim[prop].from, currentGroupAnim[prop].to)
        var framesToPlayWith = (nextKeyFrame.time - frameCurrent) / animation.msBetweenFrames;
        currentGroupAnim[prop].stepPerFrame = aDiff.direction * (aDiff.distance / framesToPlayWith);
        currentGroupAnim[prop].current = currentGroupAnim[prop].from;
        currentGroupAnim[prop].aDiff = aDiff;
        //console.log(aDiff.direction * (aDiff.distance / framesToPlayWith))
      }
    }
    
  }


}


function createKeyframeObject(char){
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
      groups[group][prop] = Number(char[group][prop]);
    }
  }
  return groups;
}

function poseCharacter(keyframe) {
  //reset
  for (var g in keyframe.groups) {
    for (var prop in keyframe.groups[g]) {
      character[g][prop] = keyframe.groups[g][prop];
    }
  }
}

