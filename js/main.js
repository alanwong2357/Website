$(document).ready(function() {
  $(".button-collapse").sideNav();

  $('#Intro, #About').on('click', function(e) {
    e.preventDefault();
    var target = $(this).get(0).id == 'up' ? $('#About') : $('#Intro');
    console.log(target);
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 1000);
  });
});