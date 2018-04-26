let mouseX = 0;
let mouseY = 0;
let centerpointX = 678;
let centerpointY = 334;
let dogX = 828;
let dogY = 334;
let dog2X = 528;
let dog2Y = 334;

$(document).mousemove(function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
    $("#x-pos").html("X Position: "+mouseX);
    $("#y-pos").html("Y Position: "+mouseY);
    $("#dog-x-pos").html("Dog X Position: "+dogX);
    $("#dog-y-pos").html("Dog Y Position: "+dogY);

});

// $(document).ready(function(){
//     offset = $
// })

function animate(x,y) {

    let moveX = (x - dogX)/3;
    let newX = dogX + moveX;
    let moveY = (y - dogY)/3;
    let newY = dogY + moveY;
    let move2X = (x - dog2X)/3;
    let new2X = dog2X + move2X;
    let move2Y = (y - dog2Y)/3;
    let new2Y = dog2Y + move2Y;
    $('#dog').css('left', newX);
    $('#dog').css('top', (newY-150));
    $('#dog2').css('left', new2X);
    $('#dog2').css('top', (new2Y-150));
  }

  frameRate    =  60;
timeInterval = Math.round( 1000 / frameRate );

$(document).ready( function () {
// get the stage offset
// offset = $('#stage').offset();

// start calling animateFollower at the 'timeInterval' we calculated above
atimer = setInterval( "animate(mouseX, mouseY)", timeInterval );
} );
