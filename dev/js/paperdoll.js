var Paperdoll = class Paperdoll {

  constructor(dollConfig, DOMElement) {
    this.dollConfig = dollConfig;
    this.DOMElement = DOMElement;
    //REPLACE 'drawing' with DOMElement.id
    this.draw = SVG('drawing').size('100%', '100%');
    this.doll = {};
    this.animationInterval;
    this.animation = {};
    this.keyframedragging;
    this.basisPoint = $('#timeline')[0].offsetWidth/10000;
    this.timeline = {}

    for (var part in dollConfig) {
      this.drawLimb(part);
    }
    this.ui();

    this.updateInterval = setInterval(this.update.bind(this), 10);
    this.freshState = {
      time:0,
      groups: this.createKeyframeObject(this.doll)
    };

    this.initAnimation([],this.doll)
  }

  /*
  *  DRAWING 
  *  SVGS
  */

  drawLimb(limbName) {
    var wrapper = this.draw.nested();
    wrapper.viewbox(0,0,800,800);
    wrapper.width(800);
    wrapper.height(800);
    this.doll[limbName] = Object.assign({},this.dollConfig[limbName]);
    this.doll[limbName].wrapper = wrapper;
    this.doll[limbName].group = wrapper.group();
    this.doll[limbName].parts = [];


    this.doll[limbName].wrapper.center(
      this.doll[limbName].wrapper.parent().node.clientWidth/2,
      this.doll[limbName].wrapper.parent().node.clientHeight/3.3      
    );

    for (var partIndex in this.dollConfig[limbName].parts) {
      var part = this.dollConfig[limbName].parts[partIndex];
      var drawnPart = 
      wrapper.rect(
        part.width, 
        part.height
      ).attr({ 
        fill: part.fill, 
        opacity: 1, 
        id: limbName,
        rx: part.radius,
        ry: part.radius
      });
      drawnPart.center(
        this.doll[limbName].wrapper.width()/2+part.offsetX,
        this.doll[limbName].wrapper.height()/2+part.offsetY
      );
      var dollPart = {element: drawnPart, data: part};
      this.doll[limbName].parts.push(dollPart);
      this.doll[limbName].group.add(drawnPart);
    }

    this.drawConnectionPoints(limbName);
    this.drawAxlePoint(limbName);
  }


  drawAxlePoint(limbName) {
    this.doll[limbName].axle = this.doll[limbName].wrapper.rect(5, 5).attr({ fill: '#0f0', opacity: 0.2 });
  }
  drawConnectionPoints(limbName) {
    //connectionpoints
    for (var connectionFor in this.dollConfig[limbName].connectionsFor) {
      var connection = this.dollConfig[limbName].connectionsFor[connectionFor];
      connection.point = this.doll[limbName].wrapper.rect(5, 5).attr({ fill: '#f00', opacity: 0.2 });
      connection.point.center(
        this.doll[limbName].wrapper.width()/2,
        this.doll[limbName].wrapper.height()/2
      );
      //doll[limbName].group.add(connection.point);
    }
  }


  /*
  * ANIMATION & KEYFRAMES
  *
  */
  initAnimation(keyframes, char) {
    this.animation = {
      keyframes: [],
      msBetweenFrames: 10,
      frameCurrent: 0,
      framesRemaining: 0,
      currentAnimations: {}
    }
    this.animation.keyframes = keyframes ? keyframes : [];
    if (this.animation.keyframes.length == 0) {
      this.animation.keyframes.unshift(this.freshState);
      setTimeout(function(){this.selectKeyframe(0)}.bind(this),300);
    }
    
    clearInterval(this.animationInterval);
    this.animationInterval = setInterval(this.animationPlay.bind(this), this.animation.msBetweenFrames);

    //reset
    this.poseCharacter(keyframes[0]);

  }


  animationPlay() {
    this.animation.framesRemaining = this.animation.keyframes[this.animation.keyframes.length-1];

    for (var k in this.animation.keyframes) {
      var keyframe = this.animation.keyframes[k];
      if (keyframe.time == this.animation.frameCurrent) {
        this.processKeyframe(keyframe, this.animation.frameCurrent);
        this.animation.framesRemaining = (this.animation.keyframes.length-1)-this.animation.keyframes.indexOf(keyframe);
      }
    }

    for (var g in this.animation.currentAnimations) {
      for (var limbName in this.animation.currentAnimations[g]) {
        if(!this.animation.currentAnimations[g][limbName].to) {
          continue;
        }
        var values = this.animation.currentAnimations[g][limbName];
        if (this.doll[g][limbName] !== this.animation.currentAnimations[g][limbName].to) {
          this.doll[g][limbName] = this.doll[g][limbName] + values.stepPerFrame;

        }
        if (Math.round(this.doll[g][limbName]) == Math.round(values.to)) {
          delete this.animation.currentAnimations[g][limbName];
        }
      }
    }
    this.updateTimeline(this.animation.keyframes);
    this.animation.frameCurrent += 10;
  }

  processKeyframe(keyframe, frameCurrent) {

    //Info from this keyframe
    for (var g in keyframe.groups) {
      var group = keyframe.groups[g];
      this.animation.currentAnimations[g] = {};
      for (var limbName in group) {
        var value = group[limbName];
        this.animation.currentAnimations[g][limbName] = {
          from: this.doll[g][limbName]
        }
      }
    }

    //Check next keyframe to add .to to limbNames
    var currentKeyFrame = this.animation.keyframes.indexOf(keyframe);
    if (currentKeyFrame == this.animation.keyframes.length-1) {
      clearInterval(this.animationInterval);
      return;
    }
    for (var g in this.animation.currentAnimations) {
      var currentGroupAnim = this.animation.currentAnimations[g];
      var nextKeyFrame = this.animation.keyframes[this.animation.keyframes.indexOf(keyframe)+1];
      var nextGroupAnimInfo = nextKeyFrame.groups[g];
      for (var limbName in nextGroupAnimInfo) {
        if (currentGroupAnim[limbName] == undefined) {continue;}
        if (!currentGroupAnim[limbName].to) {
          if (currentGroupAnim[limbName].from === nextGroupAnimInfo[limbName]) {
            continue;
          }
          console.log('keyframe: ', currentKeyFrame, '- animate', g, limbName)
          currentGroupAnim[limbName].to = nextGroupAnimInfo[limbName];

          var aDiff = this.angleDiff(currentGroupAnim[limbName].from, currentGroupAnim[limbName].to)
          var framesToPlayWith = (nextKeyFrame.time - frameCurrent) / this.animation.msBetweenFrames;
          currentGroupAnim[limbName].stepPerFrame = aDiff.direction * (aDiff.distance / framesToPlayWith);
          currentGroupAnim[limbName].current = currentGroupAnim[limbName].from;
        }
      }
      
    }

  }


  createKeyframeObject(char){
    var groups = {};
    var props = [
      'rotation',
      'xscale',
      'yscale',
    ];
    
    for (var group in char) {
      groups[group] = {};
      for (var index in props) {
        var limbName = props[index];
        groups[group][limbName] = Number(char[group][limbName]);
      }
    }
    return groups;
  }

  poseCharacter(keyframe) {
    //reset
    for (var g in keyframe.groups) {
      for (var limbName in keyframe.groups[g]) {
        this.doll[g][limbName] = keyframe.groups[g][limbName];
      }
    }
  }


  /*
  * TIMELINE/EDITOR
  *
  */

  updateTimeline(keyframes) {
    this.timeline.keyframes = keyframes;
    (this.timeline.keyframes).sort(function(a, b) { 
      return a.time - b.time;
    })
    $('#timeline__keyframes').empty();
    for(var index in this.timeline.keyframes) {
      var keyframe = this.timeline.keyframes[index];
      var keyframeElement = $('<div class="keyframe"></div>');
      keyframeElement.css({'left':(keyframe.time*this.basisPoint)-10});
      $('#timeline__keyframes').append(keyframeElement);
      keyframe.element = keyframeElement;
    }
    $(this.timeline.keyframes[this.timeline.keyframes.length-1].element).addClass('keyframe--selected');
    $('#timeline__indicator').css({'left': this.animation.frameCurrent*this.basisPoint});
  }

  moveKeyframe(element){
    $(element).css({'left':window.mouseLocation.x-10});
    var newFrameTime = Math.round((window.mouseLocation.x/this.basisPoint) / 10) * 10;
    var frameIndex = $(element).parent().children().index(element);
    var keyframe = this.timeline.keyframes[frameIndex];
    keyframe.time = newFrameTime;
    $('#timeline__indicator').css({'left': keyframe.time*this.basisPoint});
  }

  selectKeyframe(index){
    $('.keyframe').removeClass('keyframe--selected');
    var keyframe;
    if (index != undefined) {
      keyframe = this.timeline.keyframes[index];
      this.poseCharacter(keyframe);
      $('#timeline__indicator').css({'left': keyframe.time*this.basisPoint});
      this.animation.frameCurrent = keyframe.time;
      $(keyframe.element).addClass('keyframe--selected');
    }
    this.timeline.keyframeSelected = keyframe;
    this.selectTarget(window.currentPropNode);

  }

  updateCurrentKeyframe() {

    if (!this.timeline.keyframeSelected) {
      //No keyframe on current timestamp, create one
      var newKeyframe = this.createKeyframeObject(this.doll);
      var time = this.animation.frameCurrent;
      newKeyframe = {
        time: time,
        groups: newKeyframe
      };
      this.timeline.keyframes.push(newKeyframe);
      this.updateTimeline(this.timeline.keyframes);
      this.selectKeyframe(this.timeline.keyframes.indexOf(newKeyframe));

    } else {
      //keyframe selected, update it
      this.timeline.keyframeSelected.groups = this.createKeyframeObject(this.doll);
    }
  }


  /*
  * UPDATE
  *
  */

  update() {

    for (var limbName in this.doll) {


      for (var i = 0; i < this.doll[limbName].parts.length; i++) {
        var part = this.doll[limbName].parts[i];

        part.element.width(part.data.width*this.doll[limbName].xscale);
        part.element.height(part.data.height*this.doll[limbName].yscale);

        var posFromEdge = this.positionFromEdge(part, this.doll[limbName].wrapper);
        part.element.center(
          posFromEdge.x,
          posFromEdge.y
        );
      }

      this.updateAxlePoint(limbName);
      this.updateConnectionPoints(limbName);

      //limbName has connection
      if (this.doll[limbName].connectsTo) {
        var connectsTo = this.doll[this.doll[limbName].connectsTo];
        var connection = connectsTo.connectionsFor[limbName];
        this.doll[limbName].wrapper.center(
          connectsTo.wrapper.x() + connection.point.cx(),
          connectsTo.wrapper.y() + connection.point.cy()
        );

      }
      if (this.doll[limbName].rotation !== undefined) {
        this.doll[limbName].group.rotate(this.doll[limbName].rotation, this.doll[limbName].wrapper.width()/2, this.doll[limbName].wrapper.height()/2);
      }

    }


  }

  updateAxlePoint(limbName) {
    if (this.doll[limbName].axle) {
      this.doll[limbName].axle.center(
        this.doll[limbName].wrapper.width()/2,
        this.doll[limbName].wrapper.height()/2
      );
    }
  }


  updateConnectionPoints(limbName) {
    //connectionpoints
    for (var connectionFor in this.doll[limbName].connectionsFor) {
      var connection = this.doll[limbName].connectionsFor[connectionFor];
      var posFromEdge = this.positionFromEdge2(connection, this.doll[limbName]);

      var pointDir = this.pointDirection({x:this.doll[limbName].wrapper.width()/2,y:this.doll[limbName].wrapper.height()/2},{x:posFromEdge.x,y:posFromEdge.y});
      var pointDist = this.pointDistance({x:this.doll[limbName].wrapper.width()/2,y:this.doll[limbName].wrapper.height()/2},{x:posFromEdge.x,y:posFromEdge.y});
      
      var pdir1 = this.normalizeAngle(pointDir) / 57;
      var pdir2 = this.normalizeAngle(this.doll[limbName].group.transform().rotation) / 57;
      var pdir3 = pdir1+pdir2;

      var offset = this.lengthDir(pointDist,pdir3);

      connection.point.center(
        ((this.doll[limbName].wrapper.width()/2)+offset.x),
        ((this.doll[limbName].wrapper.height()/2)+offset.y)
      );

    }
  }

  /*
  * UI
  *
  */

  selectTarget(target) {
    if(!target) {return null;}
    let node = target;
    for (var partIndex=0; (node=node.previousSibling); partIndex++);
    var limbName = target.id;
    var part = this.doll[limbName].parts[partIndex];
    window.currentProp = limbName;
    window.currentPropPart = part;
    window.currentPropNode = target;

    var axle = this.doll[limbName].wrapper.last();
    var axlePosition = axle.node.getBoundingClientRect();
    $('#tools').css({
      left: (axlePosition.left + axle.width()/2) - $('#tools')[0].clientWidth/2,
      top: (axlePosition.top + axle.height()/2) - $('#tools')[0].clientHeight/2
    })
    var angle = this.normalizeAngle(this.doll[limbName].rotation);
    angle = this.normalizeAngle(Number(angle)+90)
    $('#tools__circle').css({
      '-webkit-transform' : 'rotate('+Number(angle) +'deg)',
         '-moz-transform' : 'rotate('+Number(angle) +'deg)',  
          '-ms-transform' : 'rotate('+Number(angle) +'deg)',  
           '-o-transform' : 'rotate('+Number(angle) +'deg)',  
              'transform' : 'rotate('+Number(angle) +'deg)',  
                   'zoom' : 1
    });


    var options_width = part.data.width;
    var options_height = part.data.height;
    var options_rotation = part.data.rotation;
    var options_top = part.data.top;
    var options_left = part.data.left;
    var options_right = part.data.right;
    var options_bottom = part.data.bottom;
    var options_radius = part.data.radius;
    var options_fill = part.data.fill;

    //group
    $('#options__group').empty();
    $('#options__group').append('<h3>'+limbName+'</h3>');
    for (var key in this.doll[limbName]) {
      if (typeof(this.doll[limbName][key]) !== 'object') {
        $('#options__group').append('<label for="options__group--'+key+'">'+key+'</label><input id="options__group--'+key+'" value="'+this.doll[limbName][key]+'"/><br>');
        
      }
    }
    $('#options__group--xscale').on('keyup', function(e){this.doll[limbName]['xscale'] = Number($(this).val()); this.updateCurrentKeyframe()});
    $('#options__group--yscale').on('keyup', function(e){this.doll[limbName]['yscale'] = Number($(this).val()); this.updateCurrentKeyframe()});
    $('#options__group--rotation').on('keyup', function(e){this.doll[limbName]['rotation'] = Number($(this).val()); this.updateCurrentKeyframe()});


    //parts
    $('#options__part').empty();
    $('#options__part').append('<h3>'+' part: '+ partIndex+'</h3>');
    for (var key in part.data) {
      $('#options__part').append('<label for="options__part--'+key+'">'+key+'</label><input id="options__part--'+key+'" value="'+part.data[key]+'"/><br>');
    }

    $('#options__part--width').val(options_width);
    $('#options__part--height').val(options_height);
    $('#options__part--rotation').val(options_rotation);
    $('#options__part--top').val(options_top);
    $('#options__part--left').val(options_left);
    $('#options__part--right').val(options_right);
    $('#options__part--bottom').val(options_bottom);
    $('#options__part--radius').val(options_radius);
    $('#options__part--fill').val(options_fill);
    
    $('#options__part--width').on('keyup', function(e){part.data.width = Number($(this).val())});
    $('#options__part--height').on('keyup', function(e){part.data.height = Number($(this).val())});
    $('#options__part--rotation').on('keyup', function(e){part.data.rotation = Number($(this).val())});
    $('#options__part--top').on('keyup', function(e){part.data.top = Number($(this).val())});
    $('#options__part--left').on('keyup', function(e){part.data.left = Number($(this).val())});
    $('#options__part--right').on('keyup', function(e){part.data.right = Number($(this).val())});
    $('#options__part--bottom').on('keyup', function(e){part.data.bottom = Number($(this).val())});
    $('#options__part--radius').on('keyup', function(e){part.data.radius = Number($(this).val())});
    $('#options__part--fill').on('keyup', function(e){part.data.fill = Number($(this).val())});
  }

  ui() {
    $('#options__play').on('click', function(e){
      this.initAnimation(this.timeline.keyframes, this.doll);
    }.bind(this))

    $('#options__play-salute').on('click', function(e){
      //this.initAnimation(presetAnimations.wavesalute.keyframes, this.doll);
    }.bind(this))

    $('#timeline__keyframes').on('mousedown',function (event) {
      clearInterval(this.animationInterval);
      if ( $(event.target).hasClass('keyframe') ) {
        var keyframeIndex = $(event.target).parent().children().index(event.target);
        this.selectKeyframe(keyframeIndex);

        this.keyframedragging = setInterval(function () {
          this.moveKeyframe(event.target);
        }.bind(this), 100);
      }
      if ( $(event.target).is($('#timeline__keyframes')) ) {
        var newFrameTime = Math.round((window.mouseLocation.x/this.basisPoint) / 10) * 10;
        this.animation.frameCurrent = newFrameTime;
        this.timeline.keyframeSelected = undefined;
        this.selectKeyframe();
        $('#timeline__indicator').css({'left': this.animation.frameCurrent*this.basisPoint});

      }
      return false;
    }.bind(this));


    $('#tools__circle').on('mousedown',function (event) {
      if (event.which == 1) {
        this.rotatedragging = setInterval(function () {
          var circleCenter = {
            y: event.target.offsetTop+event.target.parentElement.offsetTop+event.target.offsetHeight/2,
            x: event.target.offsetLeft+event.target.parentElement.offsetLeft+event.target.offsetWidth/2
          }
          var angle = this.normalizeAngle(this.pointDirection(circleCenter,window.mouseLocation)-90);
          this.doll[window.currentProp].rotation = Number(angle).toFixed(2);
          angle = this.normalizeAngle(this.doll[window.currentProp].rotation);
          angle = this.normalizeAngle(Number(angle)+90)
          this.updateCurrentKeyframe();
          $('#tools__circle').css({
            '-webkit-transform' : 'rotate('+angle+'deg)',
               '-moz-transform' : 'rotate('+angle+'deg)',  
                '-ms-transform' : 'rotate('+angle+'deg)',  
                 '-o-transform' : 'rotate('+angle+'deg)',  
                    'transform' : 'rotate('+angle+'deg)',  
                         'zoom' : 1
          });
        }.bind(this), 100);
        return false;
      }
    }.bind(this));

    $(document).on('mousedown',function (event) {
      window.lastClickCords = {
        x:event.clientX,
        y:event.clientY
      }
      return false;
    });

    $(document).on('mouseup',function (event) {
      clearInterval(this.keyframedragging)
      clearInterval(this.rotatedragging);
      return false;
    }.bind(this));

    $(document).on('mousemove',function (event) {
      window.mouseLocation = {
        x: event.clientX,
        y: event.clientY
      }
    });

    $('#drawing').on('mousedown',function(event) {
      if (event.target.nodeName == 'rect' && event.which == 1) {
        var node = event.target;
        this.selectTarget(node);
      } else {
        $('#tools').css({
          left: -999,
          top: -999
        })
      }
    }.bind(this));

  }


  /*
  * UTILS
  *
  */

  positionFromEdge(part, wrapper) {
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

  positionFromEdge2(info, limb) {
    var horizontal, vertical;

    if (info.left !== undefined) {
      var templeft = info.left;
      if (isNaN(templeft)) {templeft = limb.parts[0].element.width()/2;}
      horizontal = limb.parts[0].element.x() + templeft;
    } else if (info.right !== undefined) {
      var tempright = info.right;
      if (isNaN(tempright)) {tempright = limb.parts[0].element.width()/2;}
      horizontal = limb.parts[0].element.x() + limb.parts[0].element.width() - tempright;
    }

    if (info.top !== undefined) {
      var temptop = info.top;
      if (isNaN(temptop)) {temptop = limb.parts[0].element.height()/2;}
      vertical = limb.parts[0].element.y() + temptop;
    } else if (info.bottom !== undefined) {
      var tempbottom = info.bottom;
      if (isNaN(tempbottom)) {tempbottom = limb.parts[0].element.height()/2;}
      vertical = limb.parts[0].element.y() + limb.parts[0].element.height() - tempbottom;
    }
    return {x:horizontal, y:vertical};
  }

  angleDiff(a, b) {
    var direction = 1;
    //Takes angles between 0 and 360
    var checkNegativeLength = 0; 
    var checkPositiveLength = 0;
    if(a>b){
      checkNegativeLength = a-b;
      checkPositiveLength = (360-a)+b;
    }
    if(b>a){
      checkNegativeLength = Math.abs(((b-360)-a));
      checkPositiveLength = Math.abs(a-b);
    }
    if (checkNegativeLength < checkPositiveLength) {
      direction = -1;
    }
    //Returns the smallest of the two lengths and its direction
    return {
      direction: direction,
      distance: Math.min(checkNegativeLength, checkPositiveLength)
    };
  }


  pointDirection(pointA, pointB) {
    // Returns angle between two vectors
    return Math.atan2(pointB.y - pointA.y, pointB.x - pointA.x) * 180 / Math.PI;
  }

  pointDistance(pointA, pointB) {
    //Returns Distance between two points
    //pythagoras squareRoot(a*a + b*b = c*c) = c
    return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2)); 
  }


  lengthDir(length, direction) { //vector, magnitude
    if (direction < 0) direction += 360;

    return {
      x: length*Math.cos(direction),
      y: length*Math.sin(direction)
    };
  }

  normalizeAngle(angle) {
    return Number((angle+360)%360).toFixed(2);
  }

  getOffset( elem ) {
    var offsetLeft = 0;
    var offsetTop = 0;
    do {
      if ( !isNaN( elem.offsetLeft ) )
      {
        offsetLeft += elem.offsetLeft;
        offsetTop += elem.offsetTop;
      }
    } while( elem = elem.offsetParent );

    return {
      left: offsetLeft,
      top: offsetTop
    };
  }
}



var dollConfig = {
  belly: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
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
  torso: {
    xscale: 1,
    yscale: 1,
    rotation: 1,
    parts: [{
      width: 70,
      height: 80,
      top: 'center',
      right: 'center',
      rotation: 0,
      radius: 30
    }],
    connectionsFor: {
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
    rotation: 0,
    parts: [{
      width: 20,
      height: 50,
      left: 'center',
      bottom: 10,
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'torso',
    connectionsFor: {
      'head': {
        'left': 'center',
        'top': 5
      }
    }
  },
  head: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 50,
      height: 70,
      left: 'center',
      bottom: 'center',
      rotation: 0,
      radius: 20,
      fill: '#f7cbc4'
    }],
    connectsTo: 'neck'
  },
  armLeftUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
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
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armLeftUpper',
    connectionsFor: {
      'handLeft': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  handLeft: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 30,
      top: 1,
      left: 'center',
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'armLeftLower'
  },
  armRightUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
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
    rotation: 0,
    parts: [{
      width: 20,
      height: 58,
      top: 10,
      left: 'center',
      rotation: 0,
      radius: 10
    }],
    connectsTo: 'armRightUpper',
    connectionsFor: {
      'handRight': {
        'left': 'center',
        'bottom': 10
      }
    }
  },
  handRight: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
    parts: [{
      width: 20,
      height: 30,
      top: 1,
      left: 'center',
      rotation: 0,
      radius: 10,
      fill: '#c8a7a5'
    }],
    connectsTo: 'armRightLower'
  },
  legLeftUpper: {
    xscale: 1,
    yscale: 1,
    rotation: 0,
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
    rotation: 0,
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
    rotation: 0,
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
    rotation: 0,
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

new Paperdoll(dollConfig)
