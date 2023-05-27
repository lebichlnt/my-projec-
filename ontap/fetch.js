const app = document.getElementById("app");

fetch("http://localhost:3000/User")
    .then((response) => response.json())
    .then((data) => {
        const products = data.map((User) => `<div>${User.posts[1].title}</div>`).join("");
        app.innerHTML = products;
    })
    .catch((error) => console.log(error));
