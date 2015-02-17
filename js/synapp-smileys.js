var elems = $(".cell");
var hammers = new Array(elems.length);

function panHandler(elemIndex) {
  return function(e) {
    var elem = $(elems[elemIndex]);
    elem.removeClass("bounce-back");
    elem.addClass("drag");
    elem.css("left", e.deltaX + "px");
  }
}

function panEndHandler(elemIndex) {
  return function(e) {
    var elem = $(elems[elemIndex]);
    elem.addClass("bounce-back");
    if(e.offsetDirection == Hammer.DIRECTION_LEFT) {
      elem.addClass("flash-green");
      setTimeout(function() {
        elem.removeClass("flash-green")
      }, 400);
    } else if (e.offsetDirection == Hammer.DIRECTION_RIGHT) {
      elem.addClass("flash-red");
      setTimeout(function() {
        elem.removeClass("flash-red")
      }, 400);
    }
    elem.css("left", "0px");
  }
}

for(var i = 0; i < elems.length; i++) {
  hammers[i] = new Hammer(elems[i]);
  hammers[i].on('pan', panHandler(i));
  hammers[i].on('panend', panEndHandler(i));
}

