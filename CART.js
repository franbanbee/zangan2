
// let cart = document.querySelector('#cart');
// $(document).ready(function() {
//     $("#button").click(function() {
//       $("#cart").toggleClass("showCart");
//     });
//   });

//   function buttonClick(){
//     cart.style.display = 'block'; //顯示
// }
//   $("#button").click(function(){
//     // 隐藏其他页面内容
  
//     buttonClick();
//   });

// $('#button').click(function() {
//     $("#introduce").hide();
//     $("#marquee").hide();
//     $("#teacher").hide();
//     $("#select").hide();
//     $("#course").hide();
//     $(".clssDetail").hide();
//     $(".faq_box").hide();
//     $("#button").hide();
  
//     // 显示 #cart
//     $("#cart").show();
//   });
$(document).ready(function () {
    $("#cart").hide(); // 隐藏 #cart 初始状态
  });
  
  $("#button").click(function () {
    // 隐藏其他页面内容
    $("#introduce").hide();
    $("#marquee").hide();
    $("#teacher").hide();
    $("#select").hide();
    $("#course").hide();
    $(".clssDetail").hide();
    $(".faq_box").hide();
    $("#button").hide();
  
    // 显示 #cart
    $("#cart").show();
  });

//Html Template
var product_list_template = "<div class='chosen'><a class='detail'><h3 class='class_name'>{{class_name}}</h3><div class='box_inner'><h1 class='name'>{{name}}</h1><h2 class='course_content'>{{course_content}}</h2></div><div class='price'><p>$</p><h3>{{price}}</h3></div><div class='cart'><div data-pdid='{{id}}' class='cart_icon'><img src='img/course_item/newcar.svg'></div></div></div>";

var cart_list_template = "<li class='shop-item'>{{name}} <div class='box' data-list='{{listid}}' data-prod='{{prodtag}}' type='number' min='1' value='{{quantity}}'/><div class='subtotal'><h4>$</h4>{{price}}</div><div data-delid='{{delid}}' data-prodid='{{prodid}}' class='btn-del'> <i class='fas fa-times'></i></div></li>";

var cart_total_template = "<li class='total'>總計<div class='price'>{{total}}</div></li><li><div class='btn-confirm'>進行結帳 →</div></li>";

var follow_list_template = "<li class='follow-item'>{{name}}<div class='price'>{{price}}</div><div data-delid='{{delid}}' data-pdid='{{pdid}}' class='btn-fdel'> <i class='fas fa-times'></i></div></li>";

//Data Setting
var products=[
  {class_name:"A",name:"高腰牛仔短褲",course_content: "週五 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7",price:8650,cart:false, follow:false},
  {class_name:"B",name:"綁帶A字長裙",course_content: "週五 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7", price:8400, cart:false, follow:false},
  {class_name:"C",name:"短版針織外套", price:599, src:"./img/course_item/newcar.svg", cart:false, follow:false},
  {class_name:"D",name:"風衣長洋裝", price:2205, src:"./img/course_item/newcar.svg", cart:false, follow:false},
 
];

var cart_list = [];
var cart_item_number = 0;
var follow_list = [];


//Page slide
$(".home").click(function(){
  $(".page-frame").css("left","0");
});
$("#button").click(function(){
  $(".page-frame").css("left","-100%");
});
$("#follow").click(function(){
  $(".page-frame").css("left","-200%");
});

//Show Product
for(var i=0; i< products.length; i++){
  var current_prod_html = 
      product_list_template.replace("{{prod-img}}", products[i].src)
                          .replace("{{class_name}}", products[i].class_name)
                          .replace("{{name}}", products[i].name)
                          .replace("{{course_content}}", products[i].course_content)
                          .replace("{{price}}", products[i].price)
                          .replace("{{id}}", i)
                          .replace("{{fpdid}}", i);
  $("#list").append(current_prod_html);
}

var intervalFunc;
var count = 0;
//Cart number scale animation
function scaleSize(){
  intervalFunc = 
    setInterval(function(){
      count++;
      if(count<50){
        $(".num-cart").css("transform","scale(1.5)");
      }else{
        $(".num-cart").css("transform","scale(1)");
      }
      if(count> 100){
        stopInterval();
      }
    },10);
}

//Stop interval
function stopInterval(){
  clearInterval(intervalFunc); 
  count = 0;
}
//Get product into cart
$(".cart_icon").click(function(){
  var select_prod = $(this).attr("data-pdid");
  
  if(!products[select_prod].cart){
    cart_item_number++;
    scaleSize();
    products[select_prod].cart = !products[select_prod].cart;
    cart_list.push({
        name: products[select_prod].name,
        price: products[select_prod].price,
        prodid: select_prod,
        quantity: 1
    });
    $(".num-cart").text(cart_item_number);
    $($(this)).addClass("cart-full");
  }
  showCart();
});










function showCart(){
  $("#cartlist").html("");
  var total_price = 0;
  for(var i=0; i< cart_list.length;i++){
    var current_cart_item = cart_list[i];
    total_price += parseInt(current_cart_item.price);
    var current_cart_list =
        cart_list_template.replace("{{prodid}}", cart_list[i].prodid)
                          .replace("{{prodtag}}", cart_list[i].prodid)
                          .replace("{{name}}", cart_list[i].name)
                          .replace("{{price}}", cart_list[i].price)
                          .replace("{{delid}}", i)
                          .replace("{{listid}}", i)
                          .replace("{{quantity}}", cart_list[i].quantity);
    $("#cartlist").append(current_cart_list);
  }
  var current_total = cart_total_template.replace("{{total}}", total_price);
  $("#cartlist").append(current_total);
  
  // Call remove function
  $(".btn-del").click(function(){
    var relate_prod = products[parseInt($(this).attr("data-prodid"))];
    removeItem(parseInt($(this).attr("data-delid")));
    $(".add-cart[data-pdid='"+parseInt($(this).attr("data-prodid"))+"']").removeClass("cart-full");
    relate_prod.cart = false;
  });
  
  // Detect quantity value change
  $(".shop-item input").change(function(){
    var prodid = $(this).attr("data-prod");
    var listid = $(this).attr("data-list");
    var quan = $(this).val();
    cart_list[listid].quantity = quan;
    itemTotal(prodid, listid, quan);
  });
  
}
$("#button").click(function(){
    showCart();
});
showCart();

//Delete item
function removeItem(delid){
  cart_list.splice(delid,1);
  cart_item_number--;
  $(".num-cart").text(cart_item_number);
  showCart();
}

//Change item total
function itemTotal(prod, list, quan){
  cart_list[list].price = parseInt(products[prod].price) * quan;
  showCart(); 
}
//Show follow list
function showFollow(){
  $("#waitlist").html("");
  if(follow_list.length == 0){
     $("#waitlist").html("<li class='follow-item'>尚無收藏項目</li>");
  }else{
    for(var i=0; i< follow_list.length;i++){
      var current_follow_item = follow_list[i];
      var current_follow_list =
          follow_list_template.replace("{{pdid}}", follow_list[i].pdid)
                            .replace("{{name}}", follow_list[i].name)
                            .replace("{{price}}", follow_list[i].price)
                            .replace("{{delid}}", i)
      $("#waitlist").append(current_follow_list);
    }
  }
  // Call remove function
  $(".btn-fdel").click(function(){
    var relate_prod = products[parseInt($(this).attr("data-pdid"))];
    removeFollow(parseInt($(this).attr("data-delid")));
    $(".add-follow[data-fpdid='"+parseInt($(this).attr("data-pdid"))+"']").removeClass("followed");
    $(".add-follow[data-fpdid='"+parseInt($(this).attr("data-pdid"))+"']").html("<i class='far fa-heart'></i>");
    relate_prod.follow = false;
  });
}

//Add follow list
$(".add-follow").click(function(){
  var f_current_id = $(this).attr("data-fpdid");
  var f_current_item = products[f_current_id];
  if(!products[f_current_id].follow){
    products[f_current_id].follow = !products[f_current_id].follow;
    follow_list.push({
      name: f_current_item.name,
      price: f_current_item.price,
      pdid: f_current_id
    });
    $(this).addClass("followed");
    $(this).html("<i class='fas fa-heart'></i>");
  }
  showFollow();
});

//Delete follow item
function removeFollow(delid){
  follow_list.splice(delid,1);
  showFollow();
}