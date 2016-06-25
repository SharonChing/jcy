$(document).ready(function () {
  //先获取ul下面有多少个li
  var numberOfLis = $(".carousel-box ul li").length;
  var widthOfLi = $('.carousel-box ul li').width();

  var widthOfUL = numberOfLis * widthOfLi;
  $(".carousel-box ul").width(widthOfUL);


  $(".turn-arrow a:last").click(function (e) {
    e.preventDefault(); //阻止掉默认行为
    $(".carousel-box ul").animate({
      right: widthOfLi + "px" //向右边偏移一平
    }, function () {
      var firstLi = $(".carousel-box ul li:first").clone(); //拷贝一份第一个节点
      $(".carousel-box ul").append(firstLi); //将第一个节点添加到最后
      $(".carousel-box ul li:first").remove(); //吧第一个节点移除，让第二个节点作为第一个节点
      $(".carousel-box ul").css({ //还原偏移量，下次执行的时候right有事从0-一瓶的距离
        right: "0px"  //只有属性值有差异比如从0变为100这些变化才会产生动画
      });
    });
  });

  $(".turn-arrow a:first").click(function (e) {
    e.preventDefault();
    var lastLi = $(".carousel-box ul li:last").clone(); //拷贝最后一个
    $(".carousel-box ul").prepend(lastLi); //放在最前面其实是-1的一个
    $(".carousel-box ul").css({ //然他默认偏移到1的位置
      right: widthOfLi + "px"
    });
    $(".carousel-box ul").animate({ //然他动画偏移到-1的位置
      right: "0px"
    }, function () {
      $(".carousel-box ul li:last").remove(); //删掉拷贝出来的原来的最后那个
    });
  });


});
