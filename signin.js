document.getElementById("btn_log_in").addEventListener("click",singin2)

function singin2() {
    
    //email variable
    let email = document.getElementById("user").value; 

    //password variable
    let password = document.getElementById("password").value;

    //If the login is correct: opens the profile window
    if (email == "email@email.com" && password == "2525") {
        window.open("profile.html", "_self") 
    }

    //If the Login is incorrect: shows an error web message
    else{
        console.log("ERROR!")
        alert("Username or password is incorrect!")
    }
}
