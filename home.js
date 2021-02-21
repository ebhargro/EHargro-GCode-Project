var darkModeButton = document.getElementById("darkModeButton");

darkModeButton.addEventListener("click", darkMode);

function darkMode () {
    document.body.style.backgroundColor = "black";
    document.body.style.color= "white";

}
var lightModeButton = document.getElementById("lightModeButton");

lightModeButton.addEventListener("click", lightMode);

function lightMode() {
    document.body.style.backgroundColor = "rgb(240,234,214)";
    document.body.style.color="black";
}
//* Create a variable for the "Sign up" button//*

var signUpButton = document.getElementById("signUpButton");

//* Create a variable for what the user enters in response to the "What topic are you interested in?" question*//



//* When user clicks sign up button, a message appears thanking them for signing up and displaying the subject area they were interested in//*

signUpButton.addEventListener("click", signedUp);

function signedUp () {
    var firstName = document.getElementById("fName").value;
    var lastName = document.getElementById("lName").value;
    var userTopic = document.getElementById("userInterest").value;
    alert("Thank you " + firstName + " " + lastName + "! " + "We will send you wellness resources related to " + userTopic + ".");
}
