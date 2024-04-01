
const users = JSON.parse(localStorage.getItem('users')) || [];
const handlerSignup = (e) => { 
    e.preventDefault();
    let data = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        country: document.getElementById("country").value,
        img: document.getElementById("img").value,
        password: document.getElementById("password").value
    };

    let nameRegex = /^[a-zA-Z0-9_-]{3,15}$/;
    let emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    // let countryRegex = /^[a-zA-Z ]\{2,\}*\z/;
    let imgRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/i;
    let passwordRegex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    // let nameRegex = /^[a-zA-Z\s]+$/;
    // let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let validUsername = nameRegex.test(data.username);
    let validEmail = emailRegex.test(data.email);
    // let validCountry = countryRegex.test(data.country);
    let validImg = imgRegex.test(data.img);
    let validPassword = passwordRegex.test(data.password);

    let error = [];
    if (!validUsername) {
        error.push("Username must be between 3 and 15 characters");
    }
    if (!validEmail) {
        error.push("Email must be valid");
    }
    if (!validPassword) {
        error.push("Password must be between 6 and 16 characters");
    }
    if (data.country === 'select') {
        error.push("Please select a country");
    }
    if (!validImg) {
        error.push("Image must be valid");
    }
    if (error.length > 0) {
        let errorString = error.join("\n");
        alert(errorString);
        return false;
    }
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("signUp-form").reset();

    return true;

}

document.getElementById("signUp-form").addEventListener("submit", handlerSignup);