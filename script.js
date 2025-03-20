function toggleMenu() {
    document.querySelector('.dropdown-menu').classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".gallery-track");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");
    
    let index = 0;
    const images = document.querySelectorAll(".gallery-track img");
    const totalImages = images.length;
    
    function updateGallery(direction) {
        if (direction === "next") {
            index = (index + 1) % totalImages;
        } else {
            index = (index - 1 + totalImages) % totalImages;
        }
        track.style.transform = `translateX(-${index * 310}px)`;
    }

    nextBtn.addEventListener("click", () => updateGallery("next"));
    prevBtn.addEventListener("click", () => updateGallery("prev"));
});
