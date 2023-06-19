// <!-- 師資的動畫 -->
$('.smoove_3').smoove({
	offset:'20%',
 });

//<!-- 長期短期選擇 -->

// var marker = document.querySelector('#chose .marker');
// var item = document.querySelectorAll('#chose nav a');

// function indicator(e){
// marker.style.left = e.offsetLeft+"px";
// marker.style.width = e.offsetWidth+"px";
// }

// item.forEach(Link => {
// 	Link.addEventListener('click',(e)=>{
// 		e.preventDefault();
// 		indicator(e.target);
// 	});
// })

// -----------------------------------------
function line() {
	var w = 0;
	$('#chose ul > li').each(function(index) {
		if($(this).hasClass('active')) {
			$('.marker').width($(this).width()).css('left', w);
		}
		w += $(this).width();
	});
}

$(function() {
	line();
});

$('span').on('click', function() {
	$('li').removeClass('active');
	$(this).parent().addClass('active');	
	line();
});
//<!-- 課程切換選項 -->

//上面按鈕隨著點選切換顏色，按下一個按鈕本來的會回到原背景圖
function changeBackground(clickedButton) {
	var buttons = document.getElementsByClassName('chosen');

	// 更新按钮背景图根据窗口宽度
	for (var i = 0; i < buttons.length; i++) {
	  var button = buttons[i];
	  var buttonId = button.id;
  
	  if (window.innerWidth > 768) {
		if (buttonId === clickedButton) {
		  button.style.backgroundImage = "url('./img/course_item/block_click.svg')"; // 切换背景图为新的背景图
		} else {
		  button.style.backgroundImage = "url('./img/course_item/block_default.svg')"; // 切换背景图为默认背景图
		}
	  } else if (window.innerWidth <= 768 && window.innerWidth >465){
		if (buttonId === clickedButton) {
		  button.style.backgroundImage = "url('./img/course_item/768_block_click.svg')"; // 切换背景图为新的背景图
		} else {
		  button.style.backgroundImage = "url('./img/course_item/768_block_default.svg')"; // 切换背景图为默认背景图
		}
	  }else{
		if (buttonId === clickedButton) {
			button.style.backgroundImage = "url('./img/course_item/500_block_click.svg')"; // 切换背景图为新的背景图
		} else {
			button.style.backgroundImage = "url('./img/course_item/500_block_default.svg')"; // 切换背景图为默认背景图
		}
	  }
	}
  }
	// 添加窗口大小改变事件监听器
	window.addEventListener('resize', function() {
		var clickedButton = null; // 传入null代表没有按钮被点击
		changeBackground(clickedButton);
	});
	
	
	// 初始化时调用一次，确保初始背景图正确
	


	// 在页面加载完成后调用该函数
	window.addEventListener('load', function() {
		// 获取 list 和 list2 的第一个选项按钮
		var firstButtonList = document.querySelector('#list .chosen:first-child');
		var firstButtonList2 = document.querySelector('#list2 .chosen:first-child');
	
		// 将第一个选项按钮的背景图设置为默认图像
		setDefaultBackgroundImage(firstButtonList);
		setDefaultBackgroundImage(firstButtonList2);
	
		// 添加窗口大小改变事件监听器
		window.addEventListener('resize', function() {
		setDefaultBackgroundImage(firstButtonList);
		setDefaultBackgroundImage(firstButtonList2);
		});
	});
	
	// 根据窗口大小设置背景图的函数
	function setDefaultBackgroundImage(button) {
		var backgroundImage;
		if (window.innerWidth > 768) {
		backgroundImage = "url('./img/course_item/block_click.svg')";
		} else if(window.innerWidth <= 768 && window.innerWidth >465){
		backgroundImage = "url('./img/course_item/768_block_click.svg')";
		} else{
		backgroundImage = "url('./img/course_item/500_block_click.svg')";
		} 
		button.style.backgroundImage = backgroundImage;
	}
	
	changeBackground(null);
//選單切換    隨著上面按鈕點選，切換下方資訊欄
let courseShort = document.querySelector('#list');
let courseLong = document.querySelector('#list2');


	function showShort(){
		courseShort.style.display = 'block'; //顯示
		courseLong.style.display = 'none';  //隱藏
		changeClassA();
		}
	function showLong(){
		courseLong.style.display = 'block'; //顯示
		courseShort.style.display = 'none';  //隱藏
		changeClassD();
		}


		
//隨著上面按鈕點選，切換下方資訊欄
	let classA = document.querySelector('#classA');
	let classB = document.querySelector('#classB');
	let classC = document.querySelector('#classC');
	let classD = document.querySelector('#classD');
	let classE = document.querySelector('#classE');

	function changeClassA(){
			classA.style.display = 'block'; //顯示
			classB.style.display = 'none';  //隱藏
			classC.style.display = 'none';
			classD.style.display = 'none';  //隱藏
			classE.style.display = 'none';  //隱藏
		}
	function changeClassB(){
			classB.style.display = 'block'; //顯示
			classA.style.display = 'none';  //隱藏
			classC.style.display = 'none';  //隱藏
			classD.style.display = 'none';  //隱藏
			classE.style.display = 'none';  //隱藏
		}
	function changeClassC(){
			classC.style.display = 'block'; //顯示
			classA.style.display = 'none';  //隱藏
			classB.style.display = 'none';  //隱藏
			classD.style.display = 'none';  //隱藏
			classE.style.display = 'none';  //隱藏
		}
	function changeClassD(){
			classD.style.display = 'block'; //顯示
			classA.style.display = 'none';  //隱藏
			classB.style.display = 'none';  //隱藏
			classC.style.display = 'none';  //隱藏
			classE.style.display = 'none';  //隱藏
		}
	function changeClassE(){
			classE.style.display = 'block'; //顯示
			classA.style.display = 'none';  //隱藏
			classB.style.display = 'none';  //隱藏
			classC.style.display = 'none';  //隱藏
			classD.style.display = 'none';  //隱藏
		}

// <!-- FAQ -->
// Toggle Collapse
$('.faq li .question').click(function () {
	$(this).find('.plus-minus-toggle').toggleClass('collapsed');
	$(this).parent().toggleClass('active');
  });
  
  
// <!-- go top -->
    //滑動置頂

	$(document).ready(function () {
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
