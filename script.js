
$(document).ready(function () {
  $('.box').val("off");
});

function hotani() {

  $('.Q').animate({ opacity: '0.5' })
    .delay(1500)
    .animate({ opacity: '1' });

  $('.red').animate({ opacity: '0.3' })
    .delay(1500)
    .animate({ opacity: '0' });

  $('.goback').animate({ opacity: '1' })
    .delay(1500)
    .animate({ opacity: '0' });
}

var totalvalue = 0;

var playAlert = setInterval(function () {
  if (totalvalue == 23) {
    $('.answer').animate({ opacity: '1' });
  }
  else {
    $('.answer').animate({ opacity: '0' })
  }
}, 500);

$(function () {
  $('.box').click(function () {
    isPaused = false;
    if ($(this).val() == "off") {
      $(this).css({ "opacity": "1" });
      $(this).val("on");
      $('.box').mouseleave(function () {
        $(this).css({ "opacity": "1" });
      });

      if ($(this).attr('type') == "b") {
        totalvalue += 1;
      }
      else {
        totalvalue -= 1000;
      }

    }


    else {
      $(this).css({ "opacity": "0" });
      $(this).val("off");
      $('.box').mouseleave(function () {
        $(this).css({ "opacity": "0" });
      });

      if ($(this).attr('type') == "b") {
        totalvalue -= 1;
      }
      else {
        totalvalue += 1000;
      }

    }
  });
  return 0;
});


$(function () {
  $('.box').mouseover(function () {
    $(this).css({ "opacity": "0.3" });

    if ($(this).val() == "off") {
      $('.box').mouseleave(function () {
        $(this).css({ "opacity": "0" });
      });
    }

    else {
      $('.box').mouseleave(function () {
        $(this).css({ "opacity": "1" });
      });
    }

  });
});