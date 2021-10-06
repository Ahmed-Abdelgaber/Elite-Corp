// $(function(){
//     'use strict';
//     var winH = $(window).height(),
//         upperH = $('.upper-header').innerHeight(),
//         navH = $('.navbar').innerHeight();
//     $('.myslider, .carousel-item').height(winH-(upperH+navH));
// });
$(function () {
  $(".featured-work ul li").on("click", function () {
    $(this).addClass("active").siblings().removeClass("active");
    if ($(this).data("class") === "all") {
      $(".shuffle .col-md").css("opacity", 1);
    } else {
      $(".shuffle .col-md").css("opacity", 0.08);
      $($(this).data("class")).parent().css("opacity", 1);
    }
  });
});
