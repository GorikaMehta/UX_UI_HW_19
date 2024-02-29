// function fade() {
//     $('.preloader').fadeOut("slow");
//     }
//     setTimeout(fade, 3000);
    
  $("button").click (function(){
    $("#intro").click(function(){
        $("#projects").slideDown("slow");
      });
      
      $(".toggle").click(function(){
        $(this).find(".toggleContainer").toggleClass("active");
        $(this).siblings(".toggle").find(".toggleContainer").removeClass("active");
      });