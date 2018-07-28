class PaperdollDisplayer {

  constructor(dollConfig, DOMElementID) {
    this.dollConfig = dollConfig;
    this.DOMElement = $('#'+DOMElementID);
    //REPLACE 'drawing' with DOMElement.id
    this.doll = {};
    this.animationInterval;
    this.animation = {};
    this.connectionPoints = [];
    this.axlePoints = [];

    this.canvasSize = {
      width: this.DOMElement.width(),
      height: this.DOMElement.height()
    }
    this.draw = SVG(DOMElementID).size(this.canvasSize.width, this.canvasSize.height);
    for (var part in dollConfig) {
      this.drawLimb(part);
    }

    this.updateInterval = setInterval(this.update.bind(this), 10);
    this.freshState = {
      time:0,
      groups: this.createKeyframeObject(this.doll)
    };

    this.playAnimation({keyframes:[], cameraSetting: 'body'})
  }

  /*
  *  DRAWING 
  *  SVGS
  */

  drawLimb(limbName) {
    var wrapper = this.draw.nested();
    wrapper.viewbox(0,0,this.canvasSize.width,this.canvasSize.height);
    wrapper.width(this.canvasSize.width);
    wrapper.height(this.canvasSize.height);
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


  drawAxlePoint(limbName, visible) {
    this.doll[limbName].axle = this.doll[limbName].wrapper.rect(5, 5).attr({ fill: '#0f0', opacity: visible ? 0.2 : 0 });
    this.axlePoints.push(this.doll[limbName].axle);
  }
  drawConnectionPoints(limbName, visible) {
    //connectionpoints
    for (var connectionFor in this.dollConfig[limbName].connectionsFor) {
      var connection = this.dollConfig[limbName].connectionsFor[connectionFor];
      connection.point = this.doll[limbName].wrapper.rect(5, 5).attr({ fill: '#f00', opacity: visible ? 0.2 : 0 });
      connection.point.center(
        this.doll[limbName].wrapper.width()/2,
        this.doll[limbName].wrapper.height()/2
      );
      this.connectionPoints.push(connection.point);
      //doll[limbName].group.add(connection.point);
    }
  }

  toggleVisibleConnectionPoints(visible) {
    this.connectionPoints.forEach(function(connectionPoint) {
      connectionPoint.attr({ fill: '#f00', opacity: visible ? 0.2 : 0 });
    });
  }

  toggleVisibleAxlePoints(visible) {
    this.axlePoints.forEach(function(axlePoint) {
      axlePoint.attr({ fill: '#0f0', opacity: visible ? 0.2 : 0 });
    });
  }

  /*
  * CAMERA
  *
  */
  cameraZoomToLimb(limbName, zoomLevel, duration) {
    setTimeout(function(){
      this.draw.animate(duration,'<>').viewbox(
        this.doll[limbName].wrapper.cx()-(this.canvasSize.width/zoomLevel)/2,
        this.doll[limbName].wrapper.cy()-(this.canvasSize.height/zoomLevel)/2,
        this.canvasSize.width/zoomLevel,
        this.canvasSize.height/zoomLevel
      );
    }.bind(this),50)
  }


  /*
  * ANIMATION & KEYFRAMES
  *
  */
  playAnimation(config, loop, cbFinished, timelineEditor) {
    if(config.cameraSetting) {
      if (config.cameraSetting === 'face') {
        this.cameraZoomToLimb('head', 2, 750)
      }
      if (config.cameraSetting === 'body') {
        this.cameraZoomToLimb('torso', 1.5, 750)
      }
    }
    this.animation = {
      keyframes: config.keyframes ? config.keyframes : [],
      msBetweenFrames: 10,
      frameCurrent: 0,
      framesRemaining: 0,
      currentAnimations: {},
      loop: loop
    }
    var currentKeyFrame = 0;

    if (this.animation.keyframes.length == 0) {
      this.animation.keyframes.unshift(this.freshState)
    }
    this.poseCharacter(this.animation.keyframes[0]);
    console.log(this.animation.keyframes)
    
    clearInterval(this.animationInterval);
    this.animationInterval = setInterval(function(){

      if (currentKeyFrame === this.animation.keyframes.length-1) {
        //If animation is done
        clearInterval(this.animationInterval);
        if (this.animation.loop) {
          this.playAnimation(config, true)
          if(cbFinished) {
            cbFinished();
          }
        }
        return;
      } else {
        //If animation is in progress
        for (var k in this.animation.keyframes) {
          var keyframe = this.animation.keyframes[k];
          if (keyframe.time == this.animation.frameCurrent) {
            currentKeyFrame = Number(k);
            if (currentKeyFrame !== this.animation.keyframes.length-1) {
              //Make sure we haven't hit our last keyframe before trying to process the next one
              this.processKeyframe(keyframe, this.animation.frameCurrent);
              this.animation.framesRemaining = (this.animation.keyframes.length-1)-this.animation.keyframes.indexOf(keyframe);
            }
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
        if (timelineEditor) {
          timelineEditor.updateTimeline(this.animation.keyframes);
        }
        this.animation.frameCurrent += 10;
      }

    }.bind(this), this.animation.msBetweenFrames);
    //reset
    this.poseCharacter(config.keyframes[0]);

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
          console.log('keyframe: ', this.animation.keyframes.indexOf(keyframe), '- animate', g, limbName)
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
        if(this.doll[limbName].inheritsRotation) {
          var connectedTo = this.doll[this.doll[limbName].connectsTo];
          this.doll[limbName].group.rotate(connectedTo.rotation+this.doll[limbName].rotation, this.doll[limbName].wrapper.width()/2, this.doll[limbName].wrapper.height()/2);

        } else {
          this.doll[limbName].group.rotate(this.doll[limbName].rotation, this.doll[limbName].wrapper.width()/2, this.doll[limbName].wrapper.height()/2);
        }
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

}