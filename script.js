document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll(".gallery-item");
    let currentIndex = 2; // Middle image is active by default

    function updateGallery() {
        galleryItems.forEach((item, index) => {
            item.classList.remove("gallery-item-1", "gallery-item-2", "gallery-item-3", "gallery-item-4", "gallery-item-5");
            let newIndex = (index - currentIndex + 5) % 5 + 1;
            item.classList.add(`gallery-item-${newIndex}`);
        });
    }

    document.querySelector(".gallery-controls").innerHTML = `
        <button class="gallery-controls-previous">❮</button>
        <button class="gallery-controls-next">❯</button>
    `;

    document.querySelector(".gallery-controls-previous").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + 5) % 5;
        updateGallery();
    });

    document.querySelector(".gallery-controls-next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % 5;
        updateGallery();
    });

    updateGallery(); // Initial update
});
