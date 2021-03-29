$(document).ready(function () {
 
    new WOW().init();
    
   
  $('.name').focusin(function () { 
     
    $('.name').siblings().addClass("magic");
      
  });
    
  $('.name').focusout(function () { 
     
    $('.name').siblings().removeClass("magic");
      
  });
  $('.email').focusin(function () { 
     
    $('.email').siblings().addClass("magic");
      
  });
    
  $('.email').focusout(function () { 
     
    $('.email').siblings().removeClass("magic");
      
  });
  $('.text').focusin(function () { 
     
    $('.text').siblings().addClass("magic");
      
  });
    
  $('.text').focusout(function () { 
     
    $('.text').siblings().removeClass("magic");
      
  });
  
  $(".owl-carousel").owlCarousel({
    items:1,
    autoplay:true,
    autoplaySpeed:600,
    lazyLoad: true,
    loop:true
  });


});

