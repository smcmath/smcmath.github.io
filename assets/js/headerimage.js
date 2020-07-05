var vw = getvSize()[0];
var vh = getvSize()[1];

$(document).scroll(function() {
  if (($(document).scrollTop()) > (Math.min(vh - 92, 3 * vw / 4)/2)) {
    $("#headerimage-down").fadeOut(500);
  } else {
    $("#headerimage-down").fadeIn(500);
  }
});
