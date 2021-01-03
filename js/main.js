const mainNavbar = document.getElementById('collapse'),
    navWork = document.getElementById('navWork'),
    navAbout = document.getElementById('navAbout'),
    navBlog = document.getElementById('navBlog'),
    navContact = document.getElementById('navContact');
document.addEventListener('click', (e) => {
    if (e.target.matches('#btnbars')) {
        mainNavbar.classList.toggle('active');
    }
    if (e.target.matches('#navWork')) {
        navWork.classList.toggle('active')
    }
})