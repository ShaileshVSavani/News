let users = JSON.parse(localStorage.getItem('users')) || [];
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];

const handlerLogin = (e) => {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    let validEmail = emailRegex.test(email);
    let validPassword = passwordRegex.test(password);

    let error = []
    if (!validEmail) {
        error.push('Invalid email, please sign up first.');
    }
    if (!validPassword) {
        error.push('Invalid password.');
    }
    if (error.length > 0) {
        let errorString = error.join("\n")
        alert(errorString);
        return false;
    }

    let userExist = users.filter(user => user.email === email && user.password === password)
    if (userExist.length > 0) {
        alert("Login Success!!")
        localStorage.setItem("isLogIn", true)
        localStorage.setItem("loggedInUser", JSON.stringify(userExist))
        window.location.href = "/index.html"
      
    }
    else {
        alert("Invalid email or password. Please try again.");
    }
}


document.getElementById("login-form").addEventListener('submit', handlerLogin);


let isLogIn = JSON.parse(localStorage.getItem("isLogIn")) || false;

if (isLogIn === true) {
    document.getElementById("login-btn").innerHTML = "Log Out";
    console.log(isLogIn);
}
else {
    window.location.href = "/pages/login.html"
}

