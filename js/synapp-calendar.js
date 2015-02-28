var hammer = new Hammer($(".container")[0]);
var start, end;

hammer.on("press", function(e) {
  start = e.center.y;
  console.log("press start");
});

hammer.on("pressup", function(e) {
  end = e.center.y
  $(".container").prepend("<div class=\"free-time\" style=\"top: " + start + "px; height: " + (Math.abs(start - end)) + "px;");
  console.log("oh hey there");
});
