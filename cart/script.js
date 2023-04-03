let ShowCartItems = document.getElementById("itemsWrapper");
let p1 = document.getElementById("p1");
let totalamount = document.getElementById("totalamount");
let removeBtn = document.getElementById("removeBtn");
let PaymentBtn = document.getElementById('ClicktoCheckOut');
var getproduct = JSON.parse(localStorage.getItem("MyCartItem"));

// console.log('i');
// console.log(getproduct);
let total = 0;
let sumOfPrice = 0;
let result = 0;

function init(){
  // console.log('15')
  if(getproduct.length !== 0){
    loadMyData();
}
else if(getproduct.length == 0){
  console.log('no data')
  document.getElementById('nodata').innerHTML = 'Zero Items In the Cart'
}
}
init()

function loadMyData() {
  getproduct.map((Product) => {
    total = Product.ProductPrice;

    ShowCartItems.innerHTML += `<div class="item" data-id = '${Product.id}'>
     <div class="imageContainer" width="100%"><img class='productImag'  src=${Product.ProductImage} width="30%" alt="Item" /></div>

        <div class="price title" id='title' style="text-align: center"><b>${Product.ProductTitle}</b></div>
        <div class="info">
          <div class="row">
            <div class="price dollerprice"><b> ${Product.ProductPrice} $</b></div>
          </div>
          <button class="addBtn" Onclick="removeFromCart(event)">Remove from Cart</button>
        </div>
      </div>`;
    result = total.replace(/[a-zA-Z]/g, "");
    result = result.replace(":", "");
    sumOfPrice += Number(result);
    console.log(sumOfPrice)
    localStorage.setItem("totalCartPrice",JSON.stringify(sumOfPrice));

    p1.innerHTML += `
    <div class="checkList">${Product.id} &nbsp; <p>${Product.ProductTitle}</p>
    <p style="background-color:yellow;color:black;" class='listPrice'>${Product.ProductPrice}</p></div><br>
    `;
    // console.log(result);
  });

  totalamount.innerHTML = sumOfPrice;

  // console.log(sumOfPrice);
}


// if the remove from cart btn is clicked


let removeP = document.querySelectorAll(".addBtn");
// console.log(removeP);
let checkoutlist = document.querySelectorAll(".checkList");
var cartlist = document.getElementsByClassName("checkList");
var para = document.getElementsByClassName('listPrice');
// console.log();



function removeFromCart(event) {
  var button = event.target;
  // const itemId = shoppingElement.parentElement;
  var shoppingElement = button.parentElement;
  const itemId = shoppingElement.parentElement.dataset.id;
  var info = shoppingElement.parentElement;

  for (let i = 0; i < cartlist.length, i< getproduct.length; i++) {
    let num = cartlist[i].innerHTML.split(" ")[0];
    // console.log(cartlist[i].innerHTML.split(" "))
      if(itemId === num ){
        sumOfPrice = Number(sumOfPrice) -  Number(para[0].innerHTML.split(' ')[1]);
        totalamount.innerHTML = sumOfPrice;
        getproduct.splice(i,1);
        info.style.display = "none";
        cartlist[i].style.display = 'none';
      }
      var items = JSON.stringify(getproduct);
      localStorage.setItem('MyCartItem',items);
      window.location.reload();
  }
  // console.log(getproduct);
}

// when click to check button is clicked 

PaymentBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  if(sumOfPrice > 0){
    alert('The Items will be purchased 😊');
    // localStorage.removeItem('MyCartItem');
    window.location.href = '../razorpay/index.html';
}
else{
    alert('Add items in cart to proceed!!')
}

  
})
