const mainNavbar = document.getElementById('collapse'),
    navbar = document.querySelector('.navbar__group'),
    navWork = document.getElementById('navWork'),
    navAbout = document.getElementById('navAbout'),
    navBlog = document.getElementById('navBlog'),
    navContact = document.getElementById('navContact');
document.addEventListener('click', (e) => {
    if (e.target.matches('#btnbars')) {
        mainNavbar.classList.toggle('active');
    }
    if (e.target.matches('#navWork')) {
        navbarEffect(e.target);
        closeNavBarCollpsed()
    }
    if (e.target.matches('#navAbout')) {
        navbarEffect(e.target);
    }
    if (e.target.matches('#navBlog')) {
        navbarEffect(e.target)
    }
    if (e.target.matches('#navContact')) {
        navbarEffect(e.target);
    }
    if(e.target.matches('.about__item--btn')){
        aboutCovering(e.target.id);
    }
    if(e.target.matches('#noticesBtn')){
        setTimeout(()=>{
            document.getElementById('notices').setAttribute('style', 'display: none');
        }, 300)
    }
});

function navbarEffect(element) {
    const mainMenu = [navWork, navAbout, navBlog, navContact];

    mainMenu.forEach(props => {
        if (element === props) {
            props.classList.add('active');
        } else {
            props.classList.remove('active');
        }
    });
    return true
}

function aboutCovering(buttonId){
    const element = document.querySelector(`.${buttonId}`);
    element.classList.toggle('covered');
}
function closeNavBarCollpsed(){
    mainNavbar.classList.remove('active');
}

tsParticles
    .loadJSON("tsparticles", "./particles-config/particles.json")
    .then(container => container)
    .catch(err => err);