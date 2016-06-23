$(document).ready(function () {
  var perWidth = $(".carousel-box ul li").width();
  var imagesLength = $(".carousel-box ul li").length;
  var widthOfUL = imagesLength*perWidth;
  $(".carousel-box ul").width(widthOfUL);

  $('.turn-arrow a:last').click(function (e) {
    e.preventDefault();
    var left = perWidth;
    $('.carousel-box ul').animate({'right': left+'px'}, function () {
      $('.carousel-box ul').append($('.carousel-box ul li:first').clone());
      $('.carousel-box ul li:first').remove();
      $('.carousel-box ul').css({
        "right": "0px"
      });
    });
  });
  $('.turn-arrow a:first').click(function (e) {
    e.preventDefault();
    var right = perWidth;
    $('.carousel-box ul').prepend($('.carousel-box ul li:last').clone());
    $('.carousel-box ul').css({
      "right": "1216px"
    });
    $('.carousel-box ul').animate({'right': '0px'}, function() {
      $('.carousel-box ul li:last').remove();
    });
  });
});
