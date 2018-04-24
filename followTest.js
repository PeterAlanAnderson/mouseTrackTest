let mouseX = 0;
let mouseY = 0;

$(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    $("#x-pos").html("X Position: "+mouseX);
    $("#y-pos").html("Y Position: "+mouseY);

});

// $(document).ready(function(){
//     offset = $
// })

function animate(x,y) {
    $('#dog').css('left', x);
    $('#dog').css('top', y);
  }

  frameRate    =  60;
  timeInterval = Math.round( 1000 / frameRate );

$(document).ready( function () {
// get the stage offset
// offset = $('#stage').offset();

// start calling animateFollower at the 'timeInterval' we calculated above
atimer = setInterval( "animate(mouseX, mouseY)", timeInterval );
} );