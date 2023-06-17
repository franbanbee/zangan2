// 換圖輪播

// $('.main-carousel').flickity({
//   // options
//   cellAlign: 'left',
//   autoPlay: 5000,
//   wrapAround: true
// });



const AUTOPLAY_CLASS = "slider--autoplay";

// Remove autoplay class on stop
Flickity.prototype.stopPlayer = function () {
  this.player.stop();
  this.element.classList.remove(AUTOPLAY_CLASS);
};

let flkty = new Flickity(".main-carousel", {
  autoPlay: 6000,
  prevNextButtons: true,
  pageDots: true,
  setGallerySize: false,
  pauseAutoPlayOnHover: false,
  wrapAround: true,
  l18nPageDot: "Slide %",
  l18nPrevious: "Vorherige Slide",
  l18nNext: "Nächste Slide",
  on: {
    ready: function () {
      this.element.classList.add(AUTOPLAY_CLASS);
      setTimeout(() => {
        this.element.classList.add("slider--init");
      }, 10);
    } } });



// 視差效果
$('.img-parallax').each(function(){
    var img = $(this);
    var imgParent = $(this).parent();
    function parallaxImg () {
      var speed = img.data('speed');
      var imgY = imgParent.offset().top;
      var winY = $(this).scrollTop();
      var winH = $(this).height();
      var parentH = imgParent.innerHeight();
  
  
      // The next pixel to show on screen      
      var winBottom = winY + winH;
  
      // If block is shown on screen
      if (winBottom > imgY && winY < imgY + parentH) {
        // Number of pixels shown after block appear
        var imgBottom = ((winBottom - imgY) * speed);
        // Max number of pixels until block disappear
        var imgTop = winH + parentH;
        // Porcentage between start showing until disappearing
        var imgPercent = ((imgBottom / imgTop) * 100) + (50 - (speed * 50));
      }
      img.css({
        top: imgPercent + '%',
        transform: 'translate(-50%, -' + imgPercent + '%)'
      });
    }
    $(document).on({
      scroll: function () {
        parallaxImg();
      }, ready: function () {
        parallaxImg();
      }
    });
  });

  // ------------------------------------------------------------------------------
  const sections = document.querySelectorAll('#courseAll section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.7) {
        entry.target.classList.add('animate-in-view');
      } else {
        entry.target.classList.remove('animate-in-view');
      }
    });
  }, {
    threshold: 0.7
  });
  
  sections.forEach((section) => {
    observer.observe(section);
  });
  
  
  /*
// 跑出來標籤 滾動至指定位置啟動動畫



function scaleOn() {
  const isImg = document.querySelector('.img-parallax');
  isImg.classList.add('scale');
}

function scaleOff() {
  const isImg = document.querySelector('.img-parallax');
  isImg.classList.remove('scale');
}


// 跑出來標籤 滾動至指定位置啟動動畫

function slidetab() {
  const rightTab = document.querySelector('.container > section .right');
  const leftTab = document.querySelector('.container > section .left');
  rightTab.style.display = 'block'; //顯示
  leftTab.style.display = 'block'; //顯示
}

function slidetabOff() {
  const rightTab = document.querySelector('.container > section .right');
  const leftTab = document.querySelector('.container > section .left');
  rightTab.style.display = 'none'; //顯示
  leftTab.style.display = 'none'; //顯示
}

window.addEventListener('scroll', function() {
  const sectionHeight = document.querySelector('.container section')
  const scrollTop = sectionHeight.pageYOffset ||  document.documentElement.scrollTop;
   const Top = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop  >  300) { // Specify the desired scroll trigger height
    scaleOn();
    slidetab();
  // } else if(scrollTop > 299 || scrollTop < 100){
  //   delayAnimation();
  // 
 }else{
  scaleOff();
  slidetabOff();
  }
})*/




$(function(){
  // //動態增加類別(addClass)
  // $('.container section').hover(function(){
  //     $('.container section div').addClass('imgScale');
  // }, function(){
  // //動態移除類別(removeClass)
  //     $('.container section div').removeClass('imgScale');
  // });


  //---按鈕按下就跳轉指定的區塊---
  $(".button a").click(function(){
    var btn = $(this).attr("href");//return取得屬性與值
    var pos = $(btn).offset();//抓取相對座標位置
    $("html,body").animate({scrollTop:pos.top},3500);//最後面的(1000是一秒)(1500為1.5秒)
  });


  //滑動置頂
  $('#gotop').click(function(){
    $('html,body').animate({scrollTop:0},1500);
    })
    //置頂按鈕淡出淡入
    $(window).scroll(function(){
    if($(this).scrollTop()>200){
      $('#gotop').stop().fadeTo('fast',1);   //.fadeTo(1000,1) => 1000是一秒，沒有給速度的話要給空值 ""(預設為0.4秒)
    }else{
      $('#gotop').stop().fadeOut();
    }
    })
});