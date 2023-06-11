const wallpaperImages = [
    "world1.png",
    "world2.png",
    "world3.png"
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * wallpaperImages.length);
    return `url(/images/maps/${wallpaperImages[randomIndex]})`;
}

function applyBackground() {
    const body = document.body;
    const randomImage = getRandomImage();
    body.style.background = `radial-gradient(circle, #000000d7, #000000), ${randomImage}`;
    body.style.backgroundSize = `cover`;
}

window.addEventListener("keydown", (event) => {
    if (event.ctrlKey && event.key === "r") {
        applyBackground();
    }
});

window.addEventListener("DOMContentLoaded", () => {
    applyBackground();
});