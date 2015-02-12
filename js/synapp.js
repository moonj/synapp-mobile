$(".problem.bubble").bind("click tap", function(e) {
  /* Add overlay to "correct" swiper-slide, not body */
  $("body").addClass("overlay");
  $(".chat").not($(this).parent()).addClass("faded");
  e.stopPropagation();
});

$("input").click(function(e) {
  e.stopPropagation();
});

/* Remove overlay from swiper-slide, not body. Is it clicking body or swiper-slide too? */
$("body").click(function() {
  $("body").removeClass("overlay");
  $(".chat").removeClass("faded");
});

$(function(){
  var mySwiper = $('.swiper-container').swiper({
    mode:'horizontal',
    loop: false,
    onSlideNext: function() {
      $("body").addClass("summary");
      $("#chat").removeClass("active");
      $("#summary").addClass("active");
      $(".message-input").css("display", "none");
    },
    onSlidePrev: function() {
      $("body").removeClass("summary");
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
