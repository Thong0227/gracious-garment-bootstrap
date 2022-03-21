var dropdownBtn = document.querySelector('.dropdown');
var prevBtn = document.querySelector('.prev');
var expandLeft = document.querySelector('.expand-left');
var addcartbtn = document.querySelectorAll('.product button');


// Start expand left
function showleftContent(event) {
  expandLeft.classList.toggle('hide');
}

dropdownBtn.addEventListener('click', showleftContent);
prevBtn.addEventListener('click', showleftContent);
expandLeft.addEventListener("click", (e) => {
  if (e.target == e.currentTarget)
    showleftContent();
});

$('.expand-left').on('scroll touchmove mousewheel', function (e) {// prevent scroll when open modal
  e.preventDefault();
  e.stopPropagation();
  return false;
})

// End expand Left

//Carousel index
$('.carousel').carousel({
  interval: 3000
})
// End carousel index

//------------------------------------Addcart------------------------

addcartbtn.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    var btnItem = event.target
    var product = btnItem.parentElement
    var productImg = product.querySelector("img").src
    var productName = product.querySelector(".product-name").innerText
    var productPrice = product.querySelector(".product-price span").innerText
    addcart(productImg, productName, productPrice);
  })
})


function addcart(productImg, productName, productPrice) {
  var addtr = document.createElement("tr")
  var cartItem = document.querySelectorAll('tbody tr')
  for (var i = 0; i < cartItem.length; i++) {
    var cartItem_name = document.querySelectorAll('.cart-product_name span')
    if (cartItem_name[i].innerHTML == productName) {
      alert('This product is already in cart !')
      return
    }
  }
  var trContent = `<tr>
  <td>1</td>
  <td class="cart-product_image"><img src="${productImg}" alt=""></td>
  <td class="cart-product_name"><span>${productName}</span></td>
  <td class="cart-product_price"><span>${productPrice}</span><sup class="price-icon">$</sup></td>
  <td class="cart-product_qty"><input type="number" value="1"></td>
  <td><span class="del-product">Delete</span></td>
</tr>`
  addtr.innerHTML = trContent
  var cartTable = document.querySelector('tbody')
  cartTable.appendChild(addtr)
  totalPrice();
  delProductCart();
}

//----------- Calculate total price

function totalPrice() {
  var cartItem = document.querySelectorAll('tbody tr')
  var countqty = document.querySelector('.show-qty')
  var totalDefault = 0
  for (var i = 0; i < cartItem.length; i++) {
    var cartItem_qty = cartItem[i].querySelector('.cart-product_qty input').value
    var cartItem_price = cartItem[i].querySelector('.cart-product_price span').innerText
    countqty.innerHTML = cartItem.length
    var priceXqty = cartItem_qty * cartItem_price
    totalDefault = totalDefault + priceXqty
  }
  var totalMoney = document.querySelector(".total-money")
  totalMoney.innerText = totalDefault
  inputChange()
}

//function showQty(){
 // var cartItem = document.querySelectorAll('tbody tr')
  //var countqty = document.querySelector('.show-qty')
  //var count = 0
  //console.log(cartItem)
//}
//showQty()
//------------------Delete Product

function delProductCart() {
  var cartItem = document.querySelectorAll('tbody tr')
  for (var i = 0; i < cartItem.length; i++) {
    var delCartBtn = document.querySelectorAll('.del-product')
    delCartBtn[i].addEventListener('click', function (event) {
      var cartItemDel = event.target
      var delProductCart = cartItemDel.parentElement.parentElement
      delProductCart.remove();
      totalPrice();
    })
  }
}

//--------------------ChangeInput
function inputChange() {
  var cartItem = document.querySelectorAll('tbody tr')
  for (var i = 0; i < cartItem.length; i++) {
    var inputValue = cartItem[i].querySelector('input')
    inputValue.addEventListener('change', function () {
      totalPrice();
    })
  }
}
inputChange()