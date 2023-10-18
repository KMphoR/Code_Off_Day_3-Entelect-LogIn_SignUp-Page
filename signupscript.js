function detailsSingUp()
{
    var pName = document.getElementById("fname").value;
    var pSurname = document.getElementById("surname").value;
    var pEmail = document.getElementById("email").value;
    var pUsername = document.getElementById("username").value;
    var pPhone = document.getElementById("phoneNum").value;
    var pAddress = document.getElementById("address").value;
    var pPassword = document.getElementById("password").value;
    var pcPassword = document.getElementById("cpassword").value;

    if (
        pName &&
        pSurname &&
        pEmail &&
        pUsername &&
        pPhone &&
        pAddress &&
        pPhone &&
        pPassword &&
        pcPassword
    ) 
    {
        var SignUp = document.getElementById("suButton");

        SignUp.addEventListener("click", function() {
            window.location.href = "login.html";
        });
    } 
    else {
        // SHOW AN ERROR MESSAGE TO PREVENT FURTHER ACTION
        alert("Please fill in all required fields before continuing.");
    }
}
function validEmail() {
    let email = (document.getElementById('email').value)
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email) == true) 
    {
       
    } 
    else {
        alert("Please enter a valid email address");
        email = '';
    }
}

function ValidPhoneNum(){
    let Textvalue = document.getElementById('phoneNum').value;
    if (/^([0-9]{3})[ ]([0-9]{3})[ ]([0-9]{4})$/.test(Textvalue)==true) {

    } 
    else {
        alert("Please phone number in the sampled format");
        Textvalue = '';
    }
}
var pass = document.getElementById("password");
pass.addEventListener("input", function() {
    var password = pass.value;
    pass.value = "*".repeat(password.length);
});

var cpass = document.getElementById("cpassword");
cpass.addEventListener("input", function() {
    var cpassword = cpass.value;
    cpass.value = "*".repeat(cpassword.length);
});