// on the navbar section if navlink are clicked it redirects to following page
document.getElementById('cartOFNav').addEventListener('click',()=>{
    alert('Please do login !!');
 })
document.getElementById("home").addEventListener("click", () => {
  window.location.href = "./index.html";
});

document.getElementById('loginpage').addEventListener('click',()=>{
    window.location.href = '../login/login.html'
})

document.getElementById('signup').addEventListener('click',()=>{
    window.location.href = '../signup/signup.html';
})


function CreateNewAccount() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var cpassword = document.getElementById("confpassword").value;
  let errorfname = document.getElementById("errorfname");
  let errorlast = document.getElementById("errorlast");
  var erroremail = document.getElementById("erroremail");
  let errorPassword = document.getElementById("errorPassword");
  let errorConfpassword = document.getElementById("errorConfpassword");

  if (fname == "") {
    errorfname.style.display = "block";
    return false;
  } else {
    errorfname.style.display = "none";
  }

  if (lname == "") {
    errorlast.style.display = "block";
    return false;
  } else {
    errorlast.style.display = "none";
  }

  if (!email.includes("@")) {
    erroremail.style.display = "block";
    return false;
  } else {
    if (checkEmailExists(email)) {
      alert("email already exist ");
      return false;
    } else {
      erroremail.style.display = "none";
    }
  }
  if (password == "") {
    errorPassword.style.display = "block";
    return false;
  } else {
    errorPassword.style.display = "none";
  }
  if (cpassword !== password) {
    errorConfpassword.style.display = "block";
    return false;
  } else {
    errorConfpassword.style.display = "none";
  }
  var arr = [];
  var myObj = {
    fname,
    lname,
    email,
    password,
  };

  arr.push(myObj);

  let signupData = JSON.stringify(arr);
  localStorage.setItem("files", signupData);
  console.log("hi")
  window.location.href = "../login/login.html";
}

function checkEmailExists(email) {
  let data;
  if (localStorage.getItem("users") == null) {
    data = [];
    return false;
  } else {
    data.map((item) => item.email === email);
    return true;
  }
}

// if (window.localStorage.getItem("currentUser")) {
//   window.location.href = "../profile/index.html";
// }
