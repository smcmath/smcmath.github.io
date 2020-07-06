(function($) {
  "use strict";
  $("body").overlayScrollbars({
    className: "os-theme-dark os-theme-dark-edgy",
    callbacks : {
      /* Deal with down arrow display based on height scrolled */
      onScroll: function() {
        if (this != null) {
          console.log(this.scroll().position.y);
          var vw = getvSize()[0];
          var vh = getvSize()[1];

          if (this.scroll().position.y > (Math.min(vh - 92, 3 * vw / 4)/2)) {
            $("#headerimage-down").fadeOut(500);
          } else {
            $("#headerimage-down").fadeIn(500);
          }
        }
      }
    }
  })
})(jQuery)
