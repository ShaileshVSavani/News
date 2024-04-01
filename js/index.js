const news = JSON.parse(localStorage.getItem("news")) || [];
const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")) || [];
console.log(news)
console.log(loggedInUser)

const displayNews = (data) => { 
    document.getElementById("box").innerHTML = ""
    data.map((ele) => {
        console.log(ele);
        let title = document.createElement("h2")
        title.innerHTML = `Title: ${ele.title}`;
        let img = document.createElement("img")
        img.src = ele.img;
        let content = document.createElement("p")
        content.innerHTML = `Content: ${ele.content}`;
        let country = document.createElement("h4")
        country.innerHTML = `Country: ${ele.country}`;
        let div = document.createElement("div")
        div.setAttribute("class", "child-box mx-3" )
        div.append(img, title, content, country);
        document.getElementById("box").append(div);
    })
}
displayNews(news)

const search = (val) => { 
    let headline = news.filter((ele) => ele.country.includes(val))
    console.log(headline)
    displayNews(headline)

}

const handlerSearch = (e) => { 
    e.preventDefault();
    let val = document.getElementById("search-input").value
    console.log(val)
    search(val)
}
const handlerFilter = (val) => { 
    console.log(val)
    let filterCountry = news.filter((ele) => ele.country === val)
    displayNews(filterCountry)
    console.log("Filter")
    console.log(filterCountry)
    console.log(val)
    // console.log(news)
}



const displayUserProfile = () => {
    let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log(loggedInUser); // Check if user data is retrieved successfully
    console.log("Profile-check");
    if (loggedInUser) {
        let profileDiv = document.getElementById("profile");
        profileDiv.innerHTML = `
            <img src="${loggedInUser.img}" alt="Profile Image">
            <p>Username: ${loggedInUser.username}</p>
            <p>Email: ${loggedInUser.email}</p>
            <p>Country: ${loggedInUser.country}</p>
            <button id="logout-btn" class="btn btn-danger">Logout</button>
        `;
    }
};


 displayUserProfile();

document.getElementById("search-form").addEventListener("submit", handlerSearch)
document.getElementById("usa").addEventListener("click", () => handlerFilter("USA"))

document.getElementById("india").addEventListener("click", () => handlerFilter("India"))

document.getElementById("australia").addEventListener("click", () => handlerFilter("Australia"))

document.getElementById("uk").addEventListener("click", () => handlerFilter("UK"))





let isLogIn = JSON.parse(localStorage.getItem("isLogIn")) || false;

if (isLogIn === true) {
    document.getElementById("login-btn").innerHTML = "Login Out";
    console.log(isLogIn);
}
else { 
    window.location.href = "/pages/login.html"
}