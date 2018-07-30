class PaperdollTimelineEditor {

  constructor(paperdollDisplayer) {
    this.keyframedragging;
    this.timeline = {}
    this.paperdollDisplayer = paperdollDisplayer;
    this.ui();

    setTimeout(function(){
      this.basisPoint = $('#timeline')[0].offsetWidth/10000;

      this.updateTimeline(this.paperdollDisplayer.animation.keyframes)
      this.paperdollDisplayer.toggleVisibleConnectionPoints(true);
      this.paperdollDisplayer.toggleVisibleAxlePoints(true);
      this.selectKeyframe(0)

    }.bind(this),300);
  }

  createSelectListOfAnimations() {
    this.animationSelectorInput = $("<select></select>").attr("id", "animations").attr("name", "animations");
    
    Object.keys(presetAnimations).forEach(function(animationName){
      this.animationSelectorInput
        .append($("<option></option>")
        .attr("value", animationName)
        .text(animationName));
    }.bind(this))
    $("#timeline__actions").append(this.animationSelectorInput);
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
    $('#timeline__indicator').css({'left': this.paperdollDisplayer.animation.frameCurrent*this.basisPoint});
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
      this.paperdollDisplayer.poseCharacter(keyframe);
      $('#timeline__indicator').css({'left': keyframe.time*this.basisPoint});
      this.paperdollDisplayer.animation.frameCurrent = keyframe.time;
      $(keyframe.element).addClass('keyframe--selected');
    }
    this.timeline.keyframeSelected = keyframe;
    this.selectTarget(window.currentPropNode);

  }

  updateCurrentKeyframe() {

    if (!this.timeline.keyframeSelected) {
      //No keyframe on current timestamp, create one
      var newKeyframe = this.paperdollDisplayer.createKeyframeObject(this.paperdollDisplayer.doll);
      var time = this.paperdollDisplayer.animation.frameCurrent;
      newKeyframe = {
        time: time,
        groups: newKeyframe
      };
      this.timeline.keyframes.push(newKeyframe);
      this.updateTimeline(this.timeline.keyframes);
      this.selectKeyframe(this.timeline.keyframes.indexOf(newKeyframe));

    } else {
      //keyframe selected, update it
      this.timeline.keyframeSelected.groups = this.paperdollDisplayer.createKeyframeObject(this.paperdollDisplayer.doll);
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
      console.log(partIndex)
    var limbName = target.id;
    var part = this.paperdollDisplayer.doll[limbName].sets[0].parts[partIndex];
    window.currentProp = limbName;
    window.currentPropPart = part;
    window.currentPropNode = target;

    var axle = this.paperdollDisplayer.doll[limbName].wrapper.last();
    var axlePosition = axle.node.getBoundingClientRect();
    $('#tools').css({
      left: (axlePosition.left + axle.width()/2) - $('#tools')[0].clientWidth/2,
      top: (axlePosition.top + axle.height()/2) - $('#tools')[0].clientHeight/2
    })
    var angle = this.paperdollDisplayer.normalizeAngle(this.paperdollDisplayer.doll[limbName].rotation);
    angle = this.paperdollDisplayer.normalizeAngle(Number(angle)+90)
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
    for (var key in this.paperdollDisplayer.doll[limbName]) {
      if (typeof(this.paperdollDisplayer.doll[limbName][key]) !== 'object') {
        $('#options__group').append('<label for="options__group--'+key+'">'+key+'</label><input id="options__group--'+key+'" value="'+this.paperdollDisplayer.doll[limbName][key]+'"/><br>');
        
      }
    }
    $('#options__group--xscale').on('keyup', function(e){this.paperdollDisplayer.doll[limbName]['xscale'] = Number($(this).val()); this.updateCurrentKeyframe()});
    $('#options__group--yscale').on('keyup', function(e){this.paperdollDisplayer.doll[limbName]['yscale'] = Number($(this).val()); this.updateCurrentKeyframe()});
    $('#options__group--rotation').on('keyup', function(e){this.paperdollDisplayer.doll[limbName]['rotation'] = Number($(this).val()); this.updateCurrentKeyframe()});


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

    $('<div/>', {
      id: 'timeline',
    }).appendTo('#timeline-editor');
      $('<div/>', {
        id: 'timeline__keyframes',
      }).appendTo('#timeline');
      $('<div/>', {
        id: 'timeline__indicator',
      }).appendTo('#timeline');

    $('<div/>', {
      id: 'options__group',
      class: 'options__section'
    }).appendTo('#timeline-editor');
    $('<div/>', {
      id: 'options__part',
      class: 'options__section'
    }).appendTo('#timeline-editor');

    $('<div/>', {
      id: 'timeline__actions',
      class: 'options__section'
    }).appendTo('#timeline-editor');
      $('<button/>', {
        id: 'options__play',
        text: 'Play'
      }).appendTo('#timeline__actions');
      $('<button/>', {
        id: 'options__save-copy',
        text: 'Save&Copy'
      }).appendTo('#timeline__actions');

    this.createSelectListOfAnimations();

    $('#options__play').on('click', function(e){
      this.paperdollDisplayer.playAnimation({keyframes: this.timeline.keyframes},false,false,this);
    }.bind(this))

    $('#options__save-copy').on('click', function(e){
      var dummy = document.createElement("input");
      document.body.appendChild(dummy);
      dummy.setAttribute('value', JSON.stringify(this.timeline.keyframes));
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }.bind(this))

    $('#timeline__keyframes').on('mousedown',function (event) {
      clearInterval(this.paperdollDisplayer.animationInterval);
      if ( $(event.target).hasClass('keyframe') ) {
        var keyframeIndex = $(event.target).parent().children().index(event.target);
        this.selectKeyframe(keyframeIndex);

        this.keyframedragging = setInterval(function () {
          this.moveKeyframe(event.target);
        }.bind(this), 100);
      }
      if ( $(event.target).is($('#timeline__keyframes')) ) {
        var newFrameTime = Math.round((window.mouseLocation.x/this.basisPoint) / 10) * 10;
        this.paperdollDisplayer.animation.frameCurrent = newFrameTime;
        this.timeline.keyframeSelected = undefined;
        this.selectKeyframe();
        $('#timeline__indicator').css({'left': this.paperdollDisplayer.animation.frameCurrent*this.basisPoint});

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
          var angle = this.paperdollDisplayer.normalizeAngle(this.paperdollDisplayer.pointDirection(circleCenter,window.mouseLocation)-90);
          this.paperdollDisplayer.doll[window.currentProp].rotation = Number(angle).toFixed(2);
          angle = this.paperdollDisplayer.normalizeAngle(this.paperdollDisplayer.doll[window.currentProp].rotation);
          angle = this.paperdollDisplayer.normalizeAngle(Number(angle)+90)
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
    });

    $(document).on('mouseup',function (event) {
      clearInterval(this.keyframedragging)
      clearInterval(this.rotatedragging);
    }.bind(this));

    $(document).on('mousemove',function (event) {
      window.mouseLocation = {
        x: event.clientX,
        y: event.clientY
      }
    });

    $('#drawing').on('mousedown',function(event) {
      var nodeNames = ['rect', 'polygon', 'path']
      if (nodeNames.indexOf(event.target.nodeName) !== -1 && event.which == 1) {
        var node = event.target;
        this.selectTarget(node);
      } else {
        $('#tools').css({
          left: -999,
          top: -999
        })
      }
    }.bind(this));

    $( ".target" ).change(function() {
      alert( "Handler for .change() called." );
    });

    $( this.animationSelectorInput ).change(function(event) {
      var animationName = event.target.value;
      this.paperdollDisplayer.playAnimation(presetAnimations[animationName],false,false,this);
    }.bind(this));

  }

}