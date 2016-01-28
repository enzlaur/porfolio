/*
    AUTHOR: LAURENZ (laurenz@outlook.ph)
*/

$(document).ready(function(){ 
    var bodyheight = $(window).height();
    $(".windowheight").css('min-height', bodyheight);
    $(window).resize(function(){
    var bodyheight = $(window).height();
    $(".windowheight").css('min-height', bodyheight);
    }); 
});

/*
$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.changeMe');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.nav').css('background-color', 
                        'rgb(10, 27, 32)');
       } else {
          $('.nav').css('background-color', 'transparent');
       }
   });
});
*/

// For changing the colors of the navbar while scrolling 
var a = $(".nav").offset().top + 500;

$(document).scroll(function(){
    if($(this).scrollTop() > a)
    {   
       $('.nav').css({"background":"rgb(10, 27, 32)"});
    } else {
       $('.nav').css({"background":"transparent"});
    }
});