jQuery.noConflict();
(function( $ ) {
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 25) {
          $(".main-header").addClass("scrolled");
      } else {
          $(".main-header").removeClass("scrolled");
      }
    });

})(jQuery);