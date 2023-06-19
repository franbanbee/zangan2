//滾動至指定位置啟動動畫
/*$(window).scroll(function () {
	var h = $(window).height() - 800;

	if ($(this).scrollTop() > h) {
		$('.card:nth-child(1)').css("animation-name", "card-group_1");
		$('.card:nth-child(2)').css("animation-name", "card-group_2");
		$('.card:nth-child(3)').css("animation-name", "card-group_3");
		$('.card:nth-child(4)').css("animation-name", "card-group_4"); 
		}
});*/

function animateCards() {
    const cardGroup = document.querySelector('.card-group');
    cardGroup.classList.add('animating');
  }

  function removeAnimation() {
    const cardGroup = document.querySelector('.card-group');
    cardGroup.classList.remove('animating');
  }



  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 300 ) { // Specify the desired scroll trigger height
      animateCards();
   }else if(window.innerWidth < 800 && scrollTop > 200 ){
    animateCards();
   }
    else{
      removeAnimation();
    }
  });


//  圖片淡入動畫  <!-- jQuery Smoove -->
$('.smoove').smoove({
	offset:'40%',
	// moveX: '200px',
	// moveY: '200px'
 });
 $('.smoove_2').smoove({
	offset:'45%',
 });

//地圖api
// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 25.050, lng: 121.519};
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: uluru,
    mapId: "6ec3b4c0b755f923"
  });
  // The marker, positioned at Uluru 
  //https://developers.google.com/maps/documentation/javascript/custom-markers?hl=zh-tw

  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });

}
  


window.initMap = initMap;


// <!-- FAQ -->
// Toggle Collapse
$('.faq li .question').click(function () {
	$(this).find('.plus-minus-toggle').toggleClass('collapsed');
	$(this).parent().toggleClass('active');
  });
  

