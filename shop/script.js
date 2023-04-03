var search = document.getElementById("search-box");
// var filter = search.value;
var menFilterBtn = document.getElementById("menFilterBtn");
var womenFilterBtn = document.getElementById("womenFilterBtn");
var electrobtn = document.getElementById("electrobtn");
var electroContainer = document.getElementById("electroContainer");

var rating = document.getElementById("range");

let myrating = rating.value;

var jeweleryBtn = document.getElementById("jeweleryBtn");
var DisplayAll = document.getElementById("DisplayAll");

var jewelWrapper = document.getElementById("jewels");
var electroWrapper = document.getElementById("electronics");
var emptyCartArray = [];

let logOutBtn = document.getElementById("logout");

let flag = 0;

logOutBtn.addEventListener("click", () => {
  window.location.href = "../login/login.html";
  localStorage.removeItem("currentUser");
});

menFilterBtn.addEventListener("click", filterBasedOnMens);
function filterBasedOnMens() {
  if (flag == 0) {
    console.log("Mens button clicked in");

    document.getElementById("womensContainer").classList.add("hide");
    document.getElementById("mensContainer").classList.remove("hide");
    document.getElementById("jewelleryContainer").classList.add("hide");
    document.getElementById("electroContainer").classList.add("hide");
    menFilterBtn.classList.add("btnColorChange");
    flag = 1;
  } else if (flag == 1) {
    console.log("Mens button clicked out");
    flag = 0;
    // jeweleryBtn.classList.remove('btnColorChange');
    document.getElementById("mensContainer").classList.remove("hide");
    document.getElementById("womensContainer").classList.remove("hide");
    document.getElementById("jewelleryContainer").classList.remove("hide");
    document.getElementById("electroContainer").classList.remove("hide");
    menFilterBtn.classList.remove("btnColorChange");
  }
}

womenFilterBtn.addEventListener("click", filterBasedOnwomens);
function filterBasedOnwomens() {
  if (flag == 0) {
    console.log("Women button clicked in");

    document.getElementById("mensContainer").classList.add("hide");
    document.getElementById("womensContainer").classList.remove("hide");
    document.getElementById("jewelleryContainer").classList.add("hide");
    document.getElementById("electroContainer").classList.add("hide");
    womenFilterBtn.classList.add("btnColorChange");
    flag = 1;
  } else if (flag == 1) {
    console.log("Women button clicked out");
    // jeweleryBtn.classList.remove('btnColorChange');
    document.getElementById("mensContainer").classList.remove("hide");
    document.getElementById("womensContainer").classList.remove("hide");
    document.getElementById("jewelleryContainer").classList.remove("hide");
    document.getElementById("electroContainer").classList.remove("hide");

    womenFilterBtn.classList.remove("btnColorChange");

    flag = 0;
  }
}
//
DisplayAll.addEventListener("click", () => {
  if (flag == 0) {
    console.log("All button clicked in");
    DisplayAll.classList.add("btnColorChange");
    document.getElementById("mensContainer").classList.remove("hide");
    document.getElementById("womensContainer").classList.remove("hide");
    document.getElementById("electroContainer").classList.remove("hide");
    flag = 1;
  } else {
    console.log("All button clicked out");
    flag = 0;
    DisplayAll.classList.remove("btnColorChange");
  }
});

jeweleryBtn.addEventListener("click", () => {
  if (flag == 0) {
    flag = 1;
    console.log("Jewelery button clicked in");
    jeweleryBtn.classList.add("btnColorChange");
    document.getElementById("mensContainer").classList.add("hide");
    document.getElementById("womensContainer").classList.add("hide");
    document.getElementById("electroContainer").classList.add("hide");
  } else {
    flag = 0;
    console.log("Jewelery button clicked out");
    jeweleryBtn.classList.remove("btnColorChange");
    document.getElementById("mensContainer").classList.remove("hide");
    document.getElementById("womensContainer").classList.remove("hide");
    document.getElementById("jewelleryContainer").classList.remove("hide");
    document.getElementById("electroContainer").classList.remove("hide");
  }
});

electrobtn.addEventListener("click", () => {
  if (flag == 0) {
    flag = 1;
    console.log("electronics button clicked in");
    electrobtn.classList.add("btnColorChange");
    document.getElementById("mensContainer").classList.add("hide");
    document.getElementById("womensContainer").classList.add("hide");
    document.getElementById("jewelleryContainer").classList.add("hide");
    document.getElementById("electroContainer").classList.remove("hide");
  } else {
    flag = 0;
    console.log("Jewelery button clicked out");
    electrobtn.classList.remove("btnColorChange");
    document.getElementById("mensContainer").classList.remove("hide");
    document.getElementById("womensContainer").classList.remove("hide");
    document.getElementById("jewelleryContainer").classList.remove("hide");
    document.getElementById("electroContainer").classList.remove("hide");
  }
});

var myData = [];


// function getdata(){
 fetch("https://hemant0933.github.io/F3-Project/database/data.json")
  .then((response) => response.json())
  .then((data) => {
    localStorage.setItem("data", JSON.stringify(data));

    data.map((product) => {
      myData.push(product.title);
      // filtering products for mens
      if (product.category === "men's clothing") {
        let data1 = `<div class="item">
                            <img class='productImag' src=${product.image} alt="Item" />
                            <div class="price title" id='title' style="text-align: center">${product.title}</div>
                            <div class="info">
                              <div class="row">
                             
                                <div class="price dollerprice"><span> Prices:</span> ${product.price}</div>
                                <div class="sized">S,M,L</div>
                              </div>
                              <div class="colors">
                                Colors:
                                <div class="row">
                                  <div class="circle" style="background-color: #000"></div>
                                  <div class="circle" style="background-color: #4938af"></div>
                                  <div class="circle" style="background-color: #203d3e"></div>
                                </div>
                              </div>
                             
                              <div class="row">Rating:<span class='cardrating'>${product.rating.rate}</span></div>
                            </div>
                            <button class="addBtn">Add to Cart</button>
                          </div>`;

        document.getElementById("itemss").innerHTML += data1;
      }
      //  fetching products for womens
      else if (product.category === "women's clothing") {
        let p2 = `<div class="item">
                  <img class='productImag' src=${product.image} alt="Item" />
                  <div class="price title" id='title' style="text-align: center">${product.title}</div>
                  <div class="info">
                    <div class="row">
                      <div class="price dollerprice"> <span> Prices:</span>${product.price}</div>
                      <div class="sized">S,M,L</div>
                    </div>
                    <div class="colors">
                      Colors:
                      <div class="row">
                        <div class="circle" style="background-color: #000"></div>
                        <div class="circle" style="background-color: #4938af"></div>
                        <div class="circle" style="background-color: #203d3e"></div>
                      </div>
                    </div>
                 
                    <div class="row">Rating:<span class='cardrating'>${product.rating.rate}</span></div>
                  </div>
                  <button class="addBtn">Add to Cart</button>
                </div>`;

        document.getElementById("womens").innerHTML += p2;
      }
      // filtering jewelery items from main object
      else if (product.category === "jewelery") {
        jewelWrapper.innerHTML += `<div class="item">
                <img class='productImag' src=${product.image} alt="Item" />
                <div class="price title" id='title' style="text-align: center">${product.title}</div>
                <div class="info">
                  <div class="row">
                    <div class="price dollerprice"><span> Prices: </span>${product.price}</div>
                    <div class="sized">S,M,L</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  
                  <div class="row">Rating: <span class='cardrating'>${product.rating.rate}</span></div>
                </div>
                <button class="addBtn">Add to Cart</button>
              </div>`;
      } else if (product.category === "electronics") {
        electroWrapper.innerHTML += `<div class="item">
                <img class='productImag'  src=${product.image} alt="Item" />
                <div class="price title" id='title' style="text-align: center">${product.title}</div>
                <div class="info">
                  <div class="row">
                    <div class="price dollerprice"><span> Prices:</span> ${product.price}</div>
                    <div class="sized"> S,M,L</div>
                  </div>
                  <div class="colors">
                    Colors:
                    <div class="row">
                      <div class="circle" style="background-color: #000"></div>
                      <div class="circle" style="background-color: #4938af"></div>
                      <div class="circle" style="background-color: #203d3e"></div>
                    </div>
                  </div>
                  
                  <div class="row">Rating: <span class='cardrating'>${product.rating.rate}</span></div>
                </div>
                <button class="addBtn">Add to Cart</button>
              </div>`;
      }
    });

    // code for search bar
    search.addEventListener("input", (e) => {
      e.preventDefault();

      let inputSearch = search.value.toLowerCase();
      let userCard = document.querySelectorAll(".item");

      let element = document.querySelectorAll("#title");

      for (let i = 0; i < userCard.length; i++) {
        let cardEleme = userCard[i].querySelector("#title").innerText;
        if (cardEleme.toLowerCase().indexOf(inputSearch) > -1) {
          userCard[i].style.display = "flex";
        } else {
          userCard[i].style.display = "none";
        }
      }
    });

    let userCard = document.querySelectorAll(".item");
    let ptitle = document.querySelectorAll(".title");

    let id = 0;
    let addbtn = document.querySelectorAll(".addBtn");

    //  console.log(addbtn)
    let addCartObj = [];
    for (let i = 0; i < addbtn.length; i++) {
      var addButton = addbtn[i].addEventListener("click", (event) => {
        var button = event.target;
        var shoppingElement = button.parentElement;
        var ProductTitle =
          shoppingElement.getElementsByClassName("title")[0].innerText;
        var ProductPrice =
          shoppingElement.getElementsByClassName("dollerprice")[0].innerText;
        var ProductImage =
          shoppingElement.getElementsByClassName("productImag")[0].src;
          ++id;

        console.log(ProductImage, ProductTitle, ProductPrice,id);

        let obj = {
          ProductTitle,
          ProductPrice,
          ProductImage,
          id
        };
        addCartObj.push(obj);
        localStorage.setItem("MyCartItem", JSON.stringify(addCartObj));
      });
    }
  });
// }


getdata();
// filtering on the basis of rating
rating.oninput = function () {
  const data = JSON.parse(localStorage.getItem("data"));
  // console.log(data);
  myrating = this.value;
  let newarr = data.filter(
    (para) => parseInt(para.rating.rate) > parseInt(myrating)
  );
  // console.log(newarr);
  let userCard = document.querySelectorAll(".item");
  for (let i = 0; i < userCard.length; i++) {
    let cardrating = userCard[i].querySelector(".cardrating").innerText;
    // console.log(cardrating)
    if (parseInt(cardrating) < parseInt(myrating)) {
      userCard[i].style.display = "flex";
    } else if (parseInt(myrating) === 0) {
      // console.log('initail')
    } else {
      userCard[i].style.display = "none";
    }
  }
};
