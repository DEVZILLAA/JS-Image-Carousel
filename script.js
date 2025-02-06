const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items]; 
    }

    updateGallery() {
        this.carouselArray.forEach((el, i) => {
            el.className = `gallery-item gallery-item-${i + 1}`;
        });
    }

    setCurrentState(direction) {
        if (direction.classList.contains('gallery-controls-previous')) {
            this.carouselArray.unshift(this.carouselArray.pop()); // Move last item to front
        } else {
            this.carouselArray.push(this.carouselArray.shift()); // Move first item to end
        }
        this.updateGallery();
    }

    setControls() {
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            button.innerText = control;
            galleryControlsContainer.appendChild(button); // Append buttons inside `gallery-controls`
        });
    }

    useControls() {
        const triggers = document.querySelectorAll('.gallery-controls-previous, .gallery-controls-next');
        triggers.forEach(control => {
            control.addEventListener('click', (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }
}

// Initialize the carousel
const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);
exampleCarousel.setControls();
exampleCarousel.useControls();
