
const cars = [
    {
        name: "BMW M4 Competition",
        price: 78000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900"
    },
    {
        name: "BMW M5",
        price: 120000,
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=900"
    },
    {
        name: "BMW M3",
        price: 76000,
        image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=900"
    },
    {
        name: "BMW X5",
        price: 68000,
        image:  "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=900"
    },
    {
        name: "BMW X6",
        price: 75000,
    
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=900"
    },
    {
        name: "BMW i8",
        price: 145000,
        image:  "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=900"
    },
    {
        name: "BMW 3 Series",
        price: 45000,
        image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=900"
    },
    {
        name: "BMW 7 Series",
        price: 105000,
        image: "https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=900"
    },
    {
        name: "BMW Z4",
        price: 55000,
        image: "https://images.unsplash.com/photo-1556189250-72ba954cfc2b?w=900"
    },
    
];

// Navbar
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll("#navMenu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});

// Carousel
const track = document.getElementById("carouselTrack");

cars.forEach(car => {
    track.innerHTML += `
        <div class="carousel-item">
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
        </div>
    `;
});

let position = 0;

function updateCarousel() {
    const item = track.querySelector(".carousel-item");
    const gap = 20;
    const step = item.offsetWidth + gap;

    const visible = window.innerWidth <= 550 ? 1 :
                    window.innerWidth <= 850 ? 2 : 3;

    const max = cars.length - visible;

    position = Math.max(0, Math.min(position, max));

    track.style.transform = `translateX(-${position * step}px)`;
    track.style.transition = "transform .5s ease";
}

document.getElementById("next").addEventListener("click", () => {
    const visible = window.innerWidth <= 550 ? 1 :
                    window.innerWidth <= 850 ? 2 : 3;

    position = position >= cars.length - visible ? 0 : position + 1;
    updateCarousel();
});

document.getElementById("prev").addEventListener("click", () => {
    const visible = window.innerWidth <= 550 ? 1 :
                    window.innerWidth <= 850 ? 2 : 3;

    position = position <= 0 ? cars.length - visible : position - 1;
    updateCarousel();
});

// Automatic carousel
setInterval(() => {
    const visible = window.innerWidth <= 550 ? 1 :
                    window.innerWidth <= 850 ? 2 : 3;

    position = position >= cars.length - visible ? 0 : position + 1;
    updateCarousel();
}, 3500);

// Models
const modelGrid = document.getElementById("modelGrid");

cars.forEach((car, index) => {
    modelGrid.innerHTML += `
        <div class="model-card">
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>$${car.price.toLocaleString("en-US")}</p>
            <button onclick="selectCar(${index})">
                Choose Model
            </button>
        </div>
    `;
});

// Car configurator
let selectedCar = cars[0];

function selectCar(index) {
    selectedCar = cars[index];

    document.getElementById("selectedName").textContent =
        selectedCar.name;

    document.getElementById("selectedPrice").textContent =
        "$" + selectedCar.price.toLocaleString("en-US");

    document.getElementById("selectedImage").src =
        selectedCar.image;

    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
}

// Color selection
document.querySelectorAll(".color").forEach(button => {
    button.addEventListener("click", () => {
        document.getElementById("colorName").textContent =
            button.dataset.color;

        document.querySelectorAll(".color").forEach(btn => {
            btn.style.outline = "none";
        });

        button.style.outline = "3px solid #168cff";
    });
});

// Test drive
document.getElementById("testDrive").addEventListener("click", () => {
    alert(
        "Thank you! You selected " +
        selectedCar.name +
        ". Test Drive uchun BMW markaziga murojaat qiling."
    );
});

// Responsive
window.addEventListener("resize", updateCarousel);

window.addEventListener("load", updateCarousel);









const  BMW= document.getElementById("carouselTrack");

cars.forEach(car => {
    const item = document.createElement("div");

    item.className = "carousel-item";

    item.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
    `;

    track.appendChild(item);
});

// Carousel harakatsiz turadi
track.style.transform = "none";
track.style.transition = "none";
