$(".problem > .bubble").bind("click tap", function(e) {
  $("body").addClass("overlay");
  $(".chat").not($(this).parent()).addClass("faded");
  e.stopPropagation();
});

$("input").click(function(e) {
  e.stopPropagation();
});

$("body").click(function() {
  $("body").removeClass("overlay");
  $(".chat").removeClass("faded");
});
