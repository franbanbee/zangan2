// cart
// 課程的數量增減
// 課程數量>=0 if判別式
var num = 1;//宣告邊數num 變數值為1

$(".minus").click(
  function () {
    if(num>=1){
      num = num - 1;
      $(".num").text(num);
      check();//執行check裏頭的if與else
    }
  }
);

$(".add").click(
  function () {
    num = num + 1;
    $(".num").text(num);
    check();//執行check裏頭的if與else
  }
);

// cart
// 活動的數量增減
var num1 = 1;//宣告邊數num 變數值為1

$(".minus1").click(
  function () {
    if(num1>=1){
      num1 = num1 - 1;
      $(".num1").text(num1);
      check();//執行check裏頭的if與else
    }
  }
);

$(".add1").click(
  function () {
    num1 = num1 + 1;
    $(".num1").text(num1);
    check();//執行check裏頭的if與else
  }
);

// topbar綠色的淡出淡入
$(window).scroll(function () {
  if ($(this).scrollTop() > 720) {
    $('#topbarg').stop().fadeTo('', 1);
  } else {
    $('#topbarg').stop().fadeOut();
  }
});

//---漢堡按鈕---
$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('is-active');
    $('.navigation').toggleClass('show');
  });
});

// 滑動載入
// 預設淡入淡出
$('.smoove').smoove({
  offset: '30%'
});


//滑動置頂
$('#gotop').click(function () {
  $('html,body').animate({ scrollTop: 0 }, 1500);
})
//置頂按鈕淡出淡入
$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $('#gotop').stop().fadeTo('fast', 1);   //.fadeTo(1000,1) => 1000是一秒，沒有給速度的話要給空值 ""(預設為0.4秒)
  } else {
    $('#gotop').stop().fadeOut();
  }
});
