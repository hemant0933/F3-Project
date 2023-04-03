// in the navbar section when you click on signup it will take to signup page
const currentUser = {};
var mySignUpData = JSON.parse(localStorage.getItem("files"));
var loginemail = document.getElementById("loginemail");
var loginpassword = document.getElementById("loginpassword");
var error = document.getElementById("error");




document.getElementById('signup').addEventListener('click',()=>{
    window.location.href = '../signup/signup.html';
})

// getting stored data from local storage
console.log("currentUser", mySignUpData);

loginbtn.addEventListener("click", validationOfLogin);
function validationOfLogin() {
  mySignUpData.map((data) => {
    // console.log(data.password);
    if(loginemail.value == '' || loginpassword.value == ''){
        error.innerHTML = "Please fill the details";
        error.style.display = "block";
        return false;
    }

    if ( data.email == loginemail.value ){
        if(data.password == loginpassword.value){
            currentUser.token = generateToken();
            window.localStorage.setItem('currentUser', (JSON.stringify(currentUser)));
            alert('Logged in successfully!!!')
            window.location.href = "../shop/index.html";


        }
        else{
            error.innerHTML = "Please fill the correct password";
            error.style.display = "block";
            return false;
        }
      
    } else {
            error.innerHTML = "Please fill the correct email";
            error.style.display = "block";
            return false;
    }

   
  });
}
if (window.localStorage.getItem('currentUser')) {
    window.location.href = '../shop/index.html';
}

function generateToken() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charsLength = chars.length;
    let randomStr = String(Math.random()).slice(2, 18);
    let token = "";
    randomStr.split("").forEach(digit => {
        token += chars.charAt(parseInt(digit, 10) % charsLength)
    });
    return token;
}