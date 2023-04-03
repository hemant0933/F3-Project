// myProducts.filter((item)=>item.title.includes(search.value))

// myCartProductArray = myProducts.filter((item)=> myCartIDs.includes(item.id))

// writing onclick function on login button
// adding event listner on navlink when clicked 
// cart 
document.getElementById('cartOFNav').addEventListener('click',()=>{
  alert('Please Login before going to cart!!!')
})
// login
document.getElementById('loginpage').addEventListener('click',()=>{
  window.location.href = './login/login.html'
})
// signup
document.getElementById('Signuppage').addEventListener('click',()=>{
  window.location.href = './signup/signup.html'
})

// if the user has already ounce login then
let data = localStorage.getItem('files');
let userdata = JSON.parse(data);

// added a eventlistner on login button is clicked 
document.getElementById('Loginbtn').addEventListener('click',()=>{
  if(userdata == null){
    alert('Please do Signup!!!!')
  }
  else{
    window.location.href = "./login/login.html"
  }
})

// added onclick function on signup button

document.getElementById('signupBtn').addEventListener('click',()=>{
  window.location.href = "./signup/signup.html"
})
