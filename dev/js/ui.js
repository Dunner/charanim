

$('#options__play').on('click', function(e){
  initAnimation(timeline.keyframes, character);
})


var rotatedragging;
$('#tools__circle').on('mousedown',function (event) {
    rotatedragging = setInterval(function () {
      var circleCenter = {
        y: event.target.offsetTop+event.target.parentElement.offsetTop+event.target.offsetHeight/2,
        x: event.target.offsetLeft+event.target.parentElement.offsetLeft+event.target.offsetWidth/2
      }
      var angle = normalizeAngle(pointDirection(circleCenter,window.mouseLocation));
      character[window.currentProp].rotation = Number(angle -90).toFixed(2);
      $('#tools__circle').css({
        '-webkit-transform' : 'rotate('+angle+'deg)',
           '-moz-transform' : 'rotate('+angle+'deg)',  
            '-ms-transform' : 'rotate('+angle+'deg)',  
             '-o-transform' : 'rotate('+angle+'deg)',  
                'transform' : 'rotate('+angle+'deg)',  
                     'zoom' : 1
      });

    }, 100);
    return false;
});


$(document).on('mousedown',function (event) {
  window.lastClickCords = {
    x:event.clientX,
    y:event.clientY
  }
  return false;
});

$(document).on('mouseup',function (event) {
  clearInterval(keyframedragging)
  clearInterval(rotatedragging);
  return false;
});

$(document).on('mousemove',function (event) {
  window.mouseLocation = {
    x: event.clientX,
    y: event.clientY
  }
});
$('#drawing').on('mousedown',function(event) {
    // Move doll with click
    //character['torso'].wrapper.center(event.clientX, event.clientY);


  if (event.target.nodeName == 'rect' && event.which == 1) {
    var node = event.target;
    for (var partIndex=0; (node=node.previousSibling); partIndex++);
    var prop = event.target.id;
    var part = character[prop].parts[partIndex];
    window.currentProp = prop;
    window.currentPropPart = part;

    clearInterval(rotatedragging);
    rotatedragging = setInterval(function () {
      var circleCenter = {
        y: event.target.offsetTop+event.target.parentElement.offsetTop+event.target.offsetHeight/2,
        x: event.target.offsetLeft+event.target.parentElement.offsetLeft+event.target.offsetWidth/2
      }
      var angle = normalizeAngle(pointDirection(lastClickCords,window.mouseLocation));
      character[window.currentProp].rotation = angle -90;
      updateCurrentKeyframe();
      $('#tools__circle').css({
        '-webkit-transform' : 'rotate('+angle+'deg)',
           '-moz-transform' : 'rotate('+angle+'deg)',  
            '-ms-transform' : 'rotate('+angle+'deg)',  
             '-o-transform' : 'rotate('+angle+'deg)',  
                'transform' : 'rotate('+angle+'deg)',  
                     'zoom' : 1
      });

    }, 100);

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
    $('#options__group').append('<h3>'+prop+'</h3>');
    for (var key in character[prop]) {
      if (typeof(character[prop][key]) !== 'object') {
        $('#options__group').append('<label for="options__group--'+key+'">'+key+'</label><input id="options__group--'+key+'" value="'+character[prop][key]+'"/><br>');
        
      }
    }
    $('#options__group--xscale').on('keyup', function(e){character[prop]['xscale'] = Number($(this).val()); updateCurrentKeyframe()});
    $('#options__group--yscale').on('keyup', function(e){character[prop]['yscale'] = Number($(this).val()); updateCurrentKeyframe()});
    $('#options__group--rotation').on('keyup', function(e){character[prop]['rotation'] = Number($(this).val()); updateCurrentKeyframe()});


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
});