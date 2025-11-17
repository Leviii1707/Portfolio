const galleryItems = document.querySelectorAll('.gallery-item');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const closeBtn = document.getElementById('closeBtn');

galleryItems.forEach(item => {
    item.addEventListener('click', (event) => {
        const imgSrc = event.target.tagName === 'IMG' ? event.target.src : event.target.querySelector('img').src;
        modalImage.src = imgSrc;
        modal.style.display = 'flex';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
