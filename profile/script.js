// Write your script here
// Get data from local storage
const username = document.getElementById('username');
const gmail = document.getElementById('gmail');


const myData = localStorage.getItem('files');

// Check if data exists
if (myData) {
  // Parse the data
  const myObject = JSON.parse(myData);
  console.log(myObject);
    username.innerHTML = `${myObject[0].fname} ${myObject[0].lname} `;
    gmail.innerHTML = `${myObject[0].email}`;
} else {
  // Data not found
  console.log('Data not found');
}
function LogoutFromPage(){
    localStorage.removeItem('files');
    window.location = '../index.html';
}