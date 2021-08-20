const mainNavbar = document.getElementById('collapse'),
    navbar = document.querySelector('.navbar__group'),
    navWork = document.getElementById('navWork'),
    navAbout = document.getElementById('navAbout'),
    navBlog = document.getElementById('navBlog'),
    navContact = document.getElementById('navContact');
document.addEventListener('click', (e) => {
    if (e.target.matches('#btnbars')) {
        navBarCollpsed();
    }
    if (e.target.matches('#navWork')) {
        navbarEffect(e.target);
        navBarCollpsed();
    }
    if (e.target.matches('#navAbout')) {
        navbarEffect(e.target);
        navBarCollpsed();
    }
    if (e.target.matches('#navBlog')) {
        navbarEffect(e.target)
        navBarCollpsed();
    }
    if (e.target.matches('#navContact')) {
        navbarEffect(e.target);
        navBarCollpsed();
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
export default function navBarCollpsed(){
    mainNavbar.classList.toggle('active');
}

/* tsParticles
    .loadJSON("tsparticles", "./particles-config/particles.json")
    .then(container => container)
    .catch(err => err); */