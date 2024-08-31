document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const cameraRequestForm = document.getElementById('camera-request-form');
    const cameraImage = document.getElementById('camera-image');

    // Toggle the navigation menu on mobile
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    
});
