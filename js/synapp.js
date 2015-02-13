$(".problem.bubble").bind("click tap", function(e) {
  $(".swiper-slide").addClass("overlay");
  $(".chat").not($(this).parent()).addClass("faded");
  e.stopPropagation();
});

$("input").click(function(e) {
  e.stopPropagation();
});

$("body").click(function() {
  $(".swiper-slide").removeClass("overlay");
  $(".chat").removeClass("faded");
});

$(function(){
  var mySwiper = $('.swiper-container').swiper({
    mode:'horizontal',
    loop: false,
    onSlideNext: function() {
      $(".swiper-slide").addClass("summary");
      $("#chat").removeClass("active");
      $("#summary").addClass("active");
      $(".message-input").css("display", "none");
    },
    onSlidePrev: function() {
      $(".swiper-slide").removeClass("summary");
      $("#chat").addClass("active");
      $("#summary").removeClass("active");
      $(".message-input").css("display", "block");
    }
  });

  $("#chat").click(function() {
    mySwiper.swipePrev();
  });

  $("#summary").click(function() {
    mySwiper.swipeNext();
  });

})        
