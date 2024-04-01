const news = JSON.parse(localStorage.getItem("news")) || [];
const handlerNews = (e) => { 
    e.preventDefault();
    
    let article = {
        title: document.getElementById("title").value,
        img: document.getElementById("img").value, 
        content: document.getElementById("content").value,
        country: document.getElementById("country").value 
    }
    news.push(article);
    localStorage.setItem("news", JSON.stringify(news));
    window.location.href = "/index.html"
}


document.getElementById("news-form").addEventListener("submit", handlerNews);


let isLogIn = JSON.parse(localStorage.getItem("isLogIn")) || false;

if (isLogIn === true) {
    document.getElementById("login-btn").innerHTML = "Login Out";
    console.log(isLogIn);
}
else { 
    // window.location.href = "/pages/login.html"
}
