let username = document.getElementById("username");
let userpass = document.getElementById("userpass");
let flag = 1;

function formvalidate() {
  // Reset the flag variable

  if (username.value == "") {
    document.getElementById("para").innerHTML = "Please fill user name";
    flag = 0;
  } else if (username.value.length < 3) {
    document.getElementById("para").innerHTML = "At least 3 characters";
    flag = 0;
  } else {
    document.getElementById("para").innerHTML = "";
  }

  if (userpass.value == "") {
    document.getElementById("elon").innerHTML = "Fill the password";
    flag = 0;
  } else {
    document.getElementById("elon").innerHTML = "";
  }

  if (flag) {
    return true;
  } else {
    return false;
  }
}

// Attach an event listener to the form's submit event
document.getElementById("yourFormId").addEventListener("submit", function(event) {
  if (!formvalidate()) {
    event.preventDefault(); // Prevent the form from submitting if validation fails
  }
});