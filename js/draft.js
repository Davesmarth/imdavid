import navBarCollpsed from './main.js';
const barsMenu = document.getElementById('bars');
const groupNavs = document.getElementById('collapse')

barsMenu.addEventListener('click', e => {
    navBarCollpsed();
    barsMenu.classList.toggle('open');
    e.stopPropagation;
})
