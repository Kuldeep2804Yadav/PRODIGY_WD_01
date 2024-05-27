document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(to right, #9013fe, #4a90e2)';
        } else {
            navbar.style.background = 'linear-gradient(to right, #4a90e2, #9013fe)';
        }
    });
});
