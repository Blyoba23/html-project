// Task 1.2 — підрахунок елементів

// 1. Кількість параграфів <p>
const pCount = document.querySelectorAll("p").length;
console.log("Кількість <p>:", pCount);

// 2. Кількість заголовків <h2>
const h2Count = document.querySelectorAll("h2").length;
console.log("Кількість <h2>:", h2Count);

// 3. Значення background-color body
const bodyBg = getComputedStyle(document.body).backgroundColor;
console.log("Фон body:", bodyBg);

// 4. Значення font-size h1
const h1 = document.querySelector("h1");
if (h1) {
    const h1Font = getComputedStyle(h1).fontSize;
    console.log("Розмір шрифту h1:", h1Font);
}

// Task 1.3 — зміна фону при наведенні
document.querySelectorAll("*").forEach(el => {
    let originalBg = getComputedStyle(el).backgroundColor;

    el.addEventListener("mouseenter", () => {
        el.style.backgroundColor = "red";
    });

    el.addEventListener("mouseleave", () => {
        el.style.backgroundColor = originalBg;
    });
});

// Task 2 — додавання зображень із затримкою

setTimeout(() => {
    let imagesUrl = [
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

        delay += 1000; // кожна картинка через 1 сек
    });

}, 5000); // запускається через 5 секунд

// Task 3 — регулярні вирази

document.getElementById("check").addEventListener("click", () => {
    const login = document.getElementById("login").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    // login: тільки букви/цифри/_
    console.log("Login:", /^[a-zA-Z0-9_]{3,15}$/.test(login) ? "OK" : "BAD");

    // email
    console.log("Email:", /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) ? "OK" : "BAD");

    // phone
    console.log("Phone:", /^\+?\d{10,14}$/.test(phone) ? "OK" : "BAD");

    // replace зайві символи
    const cleanLogin = login.replace(/[^a-zA-Z0-9_]/g, "");
    console.log("Очищений login:", cleanLogin);
});

// Task 4 — Set

function compareTexts() {
    const t1 = prompt("Введіть перший текст:");
    const t2 = prompt("Введіть другий текст:");

    const set1 = new Set(t1.toLowerCase().split(/\W+/));
    const set2 = new Set(t2.toLowerCase().split(/\W+/));

    const common = [...set1].filter(word => set2.has(word));
    console.log("Спільні слова:", common);
}

compareTexts();

// Task 5 — API (Dog API)

async function loadDogs() {
    try {
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

    } catch (err) {
        console.log("API error:", err);
    }
}

loadDogs();