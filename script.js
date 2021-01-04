var nCountSection = 0;
var bMovingSlider = false;
$(document).ready(function(){
    $("#play_button").click(function(){
      var audio = $("#audioplayer")[0];
      alert(audio.currentTime);
      nCountSection = 100 / audio.duration;
      $("#audioplayer")[0].play();
      $(audio).bind('timeupdate', function() {
          //audio.currentTime
        if(!bMovingSlider) {
          $( "#progressbar" ).slider({
            value: (nCountSection * audio.currentTime)});
        }
  }) 
})
  
 
  $("#pause_button").click(function(){
     $("#audioplayer")[0].pause();
     alert('You have paused the audio file!');
    })    
})

$(function() {
    $( "#progressbar" ).slider({
      value: 50,
      orientation: "horizontal",
      range: "min",
      max: 100,
      change: function( event, ui ) {
        if (event.originalEvent) {
            //manual change
            
        console.log($( "#progressbar" ).slider( "value"));
        console.log(nCountSection);
          
        var time = $( "#progressbar" ).slider( "value") / nCountSection;
        console.log(time);
          $("#audioplayer")[0].currentTime = time;
          }
      },
      start: function( event, ui ) {
        bMovingSlider = true;
    },
                               end: function( event, ui ) {
        bMovingSlider = false;
    }
      
    });
  });