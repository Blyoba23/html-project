// Task 1.2 — Count elements
console.log("Кількість <p>:", document.querySelectorAll("p").length);
console.log("Кількість <h2>:", document.querySelectorAll("h2").length);
console.log("Фон body:", getComputedStyle(document.body).backgroundColor);
console.log("Розмір шрифту h1:", getComputedStyle(document.querySelector("h1")).fontSize);

// Task 1.3 — Background on hover
document.querySelectorAll("*").forEach(el => {
    const original = getComputedStyle(el).backgroundColor;
    el.addEventListener("mouseenter", () => el.style.backgroundColor = "red");
    el.addEventListener("mouseleave", () => el.style.backgroundColor = original);
});

// Task 2 — Add images with delay
setTimeout(() => {
    const imagesUrl = [
        "https://picsum.photos/200/300",
        "https://picsum.photos/250/300",
        "https://picsum.photos/220/300"
    ];

    const parent = document.querySelector(".dynamic-images");
    const fragment = document.createDocumentFragment();
    let delay = 0;

    imagesUrl.forEach(url => {
        setTimeout(() => {
            const img = document.createElement("img");
            img.src = url;
            img.style.width = "200px";
            img.style.margin = "10px";
            fragment.appendChild(img);
            parent.appendChild(fragment);
        }, delay);
        delay += 1000;
    });
}, 5000);

// Task 3 — Regex validation
document.getElementById("check").addEventListener("click", () => {
    const login = document.getElementById("login").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    console.log("Login:", /^[a-zA-Z0-9_]{3,15}$/.test(login) ? "OK" : "BAD");
    console.log("Email:", /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? "OK" : "BAD");
    console.log("Phone:", /^\+?\d{10,14}$/.test(phone) ? "OK" : "BAD");

    console.log("Очищений login:", login.replace(/[^a-zA-Z0-9_]/g, ""));
});

// Task 4 — Set compare
function compareTexts() {
    const t1 = prompt("Введіть перший текст:");
    const t2 = prompt("Введіть другий текст:");

    const set1 = new Set(t1.toLowerCase().split(/\W+/));
    const set2 = new Set(t2.toLowerCase().split(/\W+/));

    console.log("Спільні слова:", [...set1].filter(w => set2.has(w)));
}
compareTexts();

// Task 5 — API (dogs)
async function loadDogs() {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/3");
    const data = await res.json();

    const parent = document.querySelector(".api-photos");
    data.message.forEach(url => {
        const img = document.createElement("img");
        img.src = url;
        img.style.width = "200px";
        img.style.margin = "10px";
        parent.appendChild(img);
    });
}
loadDogs();

// Task 6 — Canvas game
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
let x = 50, y = 50;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "cyan";
    ctx.fillRect(x, y, 40, 40);
}

window.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") y -= 10;
    if (e.key === "ArrowDown") y += 10;
    if (e.key === "ArrowLeft") x -= 10;
    if (e.key === "ArrowRight") x += 10;
    draw();
});
draw();
