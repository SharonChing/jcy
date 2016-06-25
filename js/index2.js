$(document).ready(function () {

  function (str, 2s) {

  }

  $('.designer-carousel-scroll').click(function (e) {
    e.preventDefault();
    console.log('fff');
    $('.designer-carousel ul li:first').animate({
      transform: "translate(0, 1000px)"
    }, function () {
      //将当前第一个切换到最后一个
    });
  });
});
