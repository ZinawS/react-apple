import 'jquery';
import $ from 'jquery'
$(()=> {
  $(".footer-links-wrapper h3").on("click",function() {
    if ($(window).width() < 768) {
      const ulElement = $(this).next("ul");

      if (ulElement.is(":visible")) {
        ulElement.slideUp(600);
        $(this).removeClass("active");
      } else {
        $(".footer-links-wrapper ul").slideUp(600); // Close other open ULs
        $(".footer-links-wrapper h3").removeClass("active"); // Reset all active classes

        ulElement.slideDown(600);
        $(this).addClass("active");
      }
    }
  });
});