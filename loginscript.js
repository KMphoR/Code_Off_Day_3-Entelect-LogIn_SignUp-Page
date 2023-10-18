function detailsLogIn()
{
    var pName = document.getElementById("fname").value;
    var pSurname = document.getElementById("surname").value;
    var pEmail = document.getElementById("email").value;
    var pPassword = document.getElementById("password").value;

    if (
        pName &&
        pSurname &&
        pEmail &&
        pPassword 
    ) 
    {
        var logIn = document.getElementById("liButton");

        logIn.addEventListener("click", function() {
            window.location.href = "https://culture.entelect.co.za/the-entelect-graduate-programme/";
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
    }
}

var pass = document.getElementById("password");
pass.addEventListener("input", function() {
    var password = pass.value;
    pass.value = "*".repeat(password.length);
});
