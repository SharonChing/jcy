$(document).ready(function () {
  var perWidth = 1216;
  var images = [
    'images/carousel-img0.jpg',
    'images/carousel-img1.jpg',
    'images/carousel-img2.jpg',
    'images/carousel-img3.jpg'
  ];
  var imagesLength = images.length;
  var widthOfUL = imagesLength*perWidth;
  $(".carousel-box ul").width(widthOfUL);
  var html = "";
  for(var i = 0;  i < imagesLength; i++) {
    var imageUrl = images[i];
    html += '<li>';
    html += '<a href=""><img src="' + imageUrl + '" alt=""></a>';
    html += '</li>';
  }
  $(".carousel-box ul").html(html);

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
