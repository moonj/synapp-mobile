$(function() {
  var weekSwiper = $(".week-swiper").swiper({
    mode: 'horizontal',
    loop: false,
    wrapperClass: 'week-swiper-wrapper',
    slideClass: 'week-swiper-slide'
  });

  $(".day").click(function(e) {
    var day = $(".day > span").text();
    $(".day > span").replaceWith(day);
    $(this).html("<span>" + $(this).text() + "</span>");
  });

  var daySwiper = $(".day-swiper").swiper({
    mode: 'horizontal',
    loop: false,
    wrapperClass: 'day-swiper-wrapper',
    slideClass: 'day-swiper-slide'
  });
});
