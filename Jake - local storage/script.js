var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (email && password === null) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}

var emailArray = [];
var passwordArray = [];

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;
  emailArray.push(email);
  passwordArray.push(password);
  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

    for (var i = 0; i < emailArray.length; i++) {
      console.log(emailArray[i])
        localStorage.setItem("Email" + i, emailArray[i]);
        localStorage.setItem("Password" + i, passwordArray);
    }; 
    
    renderLastRegistered();
  }
});
