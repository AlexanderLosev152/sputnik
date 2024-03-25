$(function () {
  $(".slider-wrapper").slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
  });

  $(".spoiler__box-title").click(function (event) {
    if ($(".spoiler__wrapper").hasClass("one")) {
      $(".spoiler__box-title").not($(this)).removeClass("active");
      $(".spoiler__box-text").not($(this).next()).slideUp("300");
    }
    $(this).toggleClass("active").next().slideToggle(300);
  });
});
