// Event listener for gallery images
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', event => {
        const src = event.target.getAttribute('src');
        const modalImage = document.getElementById('modalImage');
        modalImage.setAttribute('src', src);
        $('#imageModal').modal('show');
    });
});

// Event listener for contact form submission (if contact.html is implemented)
document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for reaching out! We will get back to you soon.');
});
