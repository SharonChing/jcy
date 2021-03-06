$(document).ready(function () {
  var liElemet = $(".carousel-box ul li");
  var ulElemet = $(".carousel-box ul");
  var widthOfLI = liElemet.width();
  var lengthOfLI = liElemet.length;
  var widthOfUl = widthOfLI * lengthOfLI;
  ulElemet.width(widthOfUl);

  $(".turn-arrow a:last").click(function(event) {
    event.preventDefault();
    var property = {
      right: widthOfLI + "px"
    };
    ulElemet.animate(property, function () {
      ulElemet.css("right", "0px");
      ulElemet.append($(".carousel-box ul li:first").clone());
      $(".carousel-box ul li:first").remove();
    });
  });

  $(".turn-arrow a:first").click(function (event) {
    event.preventDefault();
    ulElemet.prepend($(".carousel-box ul li:last").clone());
    $(".carousel-box ul li:last").remove();
    ulElemet.css('right', widthOfLI + "px");
    var property = {
      right: "0px"
    };
    ulElemet.animate(property);
  });

});
