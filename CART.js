

// $(document).ready(function () {
//     $("#cart").hide(); // 隐藏 #cart 初始状态
//   });
  
//   $("#button").click(function () {
//     // 隐藏其他页面内容
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

//Html Template

  var product_list_template = "<div class='chosen'  onclick=\"changeBackground('{{changeBG}}')\" id='{{ture_id}}' ><a class='detail' onclick='changeClass{{class_id}}()'><h3 class='class_name'>{{class_name}}</h3><div class='box_inner'><h1 class='name'>{{name}}</h1><h2 class='course_content'>{{course_content}}</h2></div><div class='price'><p>$</p><h3>{{price}}</h3></div><div class='cart'><div data-pdid='{{id}}' class='cart_icon'><img src='img/course_item/newcar.svg'></div></div></div>";

  var cart_list_template = "<div class='shop-item'><h2>{{name}}</h2><h3 class='friday'>{{course_content}}</h3><div class='money'><h4>$</h4><h1>{{price}}</h1></div><input class='box' data-list='{{listid}}' data-prod='{{prodtag}}' type='number' min='1' value='{{quantity}}'/><div class='subtotal'><h4>$</h4>{{subtotal}}</div> <div data-delid='{{delid}}' data-prodid='{{prodid}}' class='mini'></div></div>";
  
  var cart_total_template = "<div class='total'><hr><div class='total_money'><div class='total_price'>{{total}}</div></div><li><div class='sent'>進行結帳 →</div></div>";
  
  var follow_list_template = "<li class='follow-item'>{{name}}<div class='price'>{{price}}</div><div data-delid='{{delid}}' data-pdid='{{pdid}}' class='btn-fdel'> <i class='fas fa-times'></i></div></li>";
  
  //Data Setting
  var products=[
    {changeBG:"A",ture_id:"A",class_id:"A",class_name:"A",name:"經典Muko香水",course_content: "週五 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7",price:8000,cart:false, follow:false},
    {changeBG:"B",ture_id:"B",class_id:"B",class_name:"B",name:"綁帶A字長裙",course_content: "週四 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7", price:1500, cart:false, follow:false},
    {changeBG:"C",ture_id:"C",class_id:"C",class_name:"C",name:"大叉叉褲",course_content: "週三 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7",price:2000,cart:false, follow:false}
  ];
  var products2=[
  {changeBG:"D",ture_id:"D",class_id:"D",class_name:"D",name:"我咬欸欸欸",course_content: "週五 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7",price:1000,cart:false, follow:false},
  {changeBG:"E",ture_id:"E",class_id:"E",class_name:"E",name:"璇傳奢燒",course_content: "週四 下午14:00-16:00共6堂<br>3/3、3/10、3/17、3/24、3/31、4/7", price:1500, cart:false, follow:false},
];
  
  var cart_list = [];
  var cart_item_number = 0;
  var follow_list = [];


  //Page slide
  // $(".home").click(function(){
  //   $(".page-frame").css("left","0");
  // });
  // $("#button").click(function(){
  //   $(".page-frame").css("left","-100%");
  // });
  // $("#follow").click(function(){
  //   $(".page-frame").css("left","-200%");
  // });
  
  //Show Product
  for(var i=0; i< products.length; i++){
    var current_prod_html = 
        product_list_template.replace("{{ture_id}}", products[i].ture_id)
                            .replace("{{changeBG}}", products[i].changeBG)
                            .replace("{{class_id}}", products[i].class_id)
                            .replace("{{class_name}}", products[i].class_name)
                            .replace("{{name}}", products[i].name)
                            .replace("{{course_content}}", products[i].course_content)
                            .replace("{{price}}", products[i].price)
                            .replace("{{id}}", i)
                            .replace("{{fpdid}}", i);                       
    $("#list").append(current_prod_html);
  }

  
    // 遍历特定的产品列表
    for (var i = 0; i < products2.length; i++) {
      var current_prod_html = 
      product_list_template.replace("{{ture_id}}", products2[i].ture_id)
                            .replace("{{changeBG}}", products2[i].changeBG)
                            .replace("{{class_id}}", products2[i].class_id)
                            .replace("{{class_name}}", products2[i].class_name)
                            .replace("{{name}}", products2[i].name)
                            .replace("{{course_content}}", products2[i].course_content)
                            .replace("{{price}}", products2[i].price)
                            .replace("{{id}}", i)
                            .replace("{{fpdid}}", i);  
      // 将产品添加到#list2中
      $("#list2").append(current_prod_html);
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
          course_content: products[select_prod].course_content,
          
          prodid: select_prod,
          quantity: 1
      });
      
      $(".num-cart").text(cart_item_number);
      localStorage.setItem("cart_item_number", cart_item_number);
      $(this).addClass("cart-full");

    }else if(!products2[select_prod].cart){
      cart_item_number++;
      scaleSize();
      products2[select_prod].cart = !products2[select_prod].cart;
      cart_list.push({
          name: products2[select_prod].name,
          price: products2[select_prod].price,
          course_content: products2[select_prod].course_content,
          
          prodid: select_prod,
          quantity: 1
      });
      
      $(".num-cart").text(cart_item_number);
      localStorage.setItem("cart_item_number", cart_item_number);
      $(this).addClass("cart-full");
    }


    showCart();
  });
  
  


  function showCart(){
    var total_price = 0;

  // 清空 #cartlist 元素的内容
  $("#cartlist").empty();

    for(var i=0; i< cart_list.length;i++){
      var current_cart_item = cart_list[i];
      total_price += parseInt(current_cart_item.price) * current_cart_item.quantity;
      var current_cart_list =
          cart_list_template.replace("{{prodid}}", cart_list[i].prodid)
                            .replace("{{prodtag}}", cart_list[i].prodid)
                            .replace("{{name}}", cart_list[i].name)
                            .replace("{{course_content}}", cart_list[i].course_content)
                            .replace("{{price}}", cart_list[i].price)
                            .replace("{{subtotal}}", cart_list[i].price * cart_list[i].quantity)
                            .replace("{{delid}}", i)
                            .replace("{{listid}}", i)
                            .replace("{{quantity}}", cart_list[i].quantity);
      $("#cartlist").append(current_cart_list);
    }
    var current_total = cart_total_template.replace("{{total}}", total_price);
    $("#cartlist").append(current_total);
    
    // Call remove function
    $(".mini").click(function(){
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
     
    // 存儲cart_list和cart_item_number到localStorage
    var jsonData = JSON.stringify(cart_list);
    localStorage.setItem('cart_list', jsonData);
    localStorage.setItem('cart_item_number', cart_item_number);
  }


//Delete item
function removeItem(delid){
  cart_list.splice(delid,1);
  cart_item_number--;
  $(".num-cart").text(cart_item_number);


    // 存储更新后的购物车数量到localStorage
    localStorage.setItem("cart_item_number", cart_item_number);
     // 更新顶部导航栏中的购物车图标数量
  $("#cart_icon .num-cart").text(cart_item_number);
    showCart();
  }

   //Change item total
   function itemTotal(prod, list, quan){
    cart_list[list].subtotal = parseInt(products[prod].price) * quan;
    showCart(); 

     
// Retrieve cart data from localStorage
var storedCartList = localStorage.getItem("cart_list");
var storedCartItemNumber = localStorage.getItem("cart_item_number");

if (storedCartList && storedCartItemNumber) {
  cart_list = JSON.parse(storedCartList);
  cart_item_number = parseInt(storedCartItemNumber);
  $(".num-cart").text(cart_item_number);
  showCart();
} else {
  // Initialize cart data
  cart_list = [];
  cart_item_number = 0;
}
  }


      // 获取报名按钮元素
      // var button = document.getElementById("button");
  
      // // 添加点击事件处理程序
      // button.addEventListener("click", function() {
      //   // 切换到CARTcart.html页面
      //   window.location.href = "CARTcart.html";
      // });

      // showCart();

  // $("#button").click(function(){
  //     showCart();
  // });

  


// // 將資訊轉換為JSON字符串
// var jsonData = JSON.stringify(cart_item);

//  // 從本地儲存中獲取購物車數據
//  var cart_list = JSON.parse(localStorage.getItem("cart_list")) || [];
  
//  // 將購物車項目添加到購物車數據
//  cart_list.push(cart_item);
 
//  // 更新本地儲存的購物車數據
//  localStorage.setItem("cart_list", JSON.stringify(cart_list));
 
//  // 更新購物車項目數量
//  var cart_item_number = cart_list.length;
//  localStorage.setItem("cart_item_number", cart_item_number);
 
 // 刷新購物車頁面
//  showCart();

// // 在DOMContentLoaded事件中初始化購物車
// document.addEventListener("DOMContentLoaded", function() {
//   initCart();
// });


























  // //Show follow list
  // function showFollow(){
  //   $("#waitlist").html("");
  //   if(follow_list.length == 0){
  //      $("#waitlist").html("<li class='follow-item'>尚無收藏項目</li>");
  //   }else{
  //     for(var i=0; i< follow_list.length;i++){
  //       var current_follow_item = follow_list[i];
  //       var current_follow_list =
  //           follow_list_template.replace("{{pdid}}", follow_list[i].pdid)
  //                             .replace("{{name}}", follow_list[i].name)
  //                             .replace("{{price}}", follow_list[i].price)
  //                             .replace("{{delid}}", i)
  //       $("#waitlist").append(current_follow_list);
  //     }
  //   }
  //   // Call remove function
  //   $(".btn-fdel").click(function(){
  //     var relate_prod = products[parseInt($(this).attr("data-pdid"))];
  //     removeFollow(parseInt($(this).attr("data-delid")));
  //     $(".add-follow[data-fpdid='"+parseInt($(this).attr("data-pdid"))+"']").removeClass("followed");
  //     $(".add-follow[data-fpdid='"+parseInt($(this).attr("data-pdid"))+"']").html("<i class='far fa-heart'></i>");
  //     relate_prod.follow = false;
  //   });
  // }
  
  // //Add follow list
  // $(".add-follow").click(function(){
  //   var f_current_id = $(this).attr("data-fpdid");
  //   var f_current_item = products[f_current_id];
  //   if(!products[f_current_id].follow){
  //     products[f_current_id].follow = !products[f_current_id].follow;
  //     follow_list.push({
  //       name: f_current_item.name,
  //       price: f_current_item.price,
  //       pdid: f_current_id
  //     });
  //     $(this).addClass("followed");
  //     $(this).html("<i class='fas fa-heart'></i>");
  //   }
  //   showFollow();
  // });
  
  // //Delete follow item
  // function removeFollow(delid){
  //   follow_list.splice(delid,1);
  //   showFollow();
  // }

