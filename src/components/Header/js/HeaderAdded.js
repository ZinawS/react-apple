import $ from "jquery";

$(function () {
  // Set navbar toggler color
  $(".navbar-toggler").css("color", "white");

  // Smooth toggle function
  $(".navbar-toggler").on("click", function () {
    $(".navbar-collapse").slideToggle(600);
  });
});
