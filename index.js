const nav = document.querySelector('.nav');
const btn = document.querySelector('.hamburger');
const navLogo= document.querySelector('#navLogo');
const footLogo= document.querySelector('#footLogo');
const x= document.querySelector("#close");

const showNav = () => {
    console.log(btn)
    nav.classList.toggle('active');
    btn.classList.toggle('hamburger--active');
};
btn.addEventListener('click', showNav);
navLogo.addEventListener('click', showNav);
footLogo.addEventListener('click', smoothscroll );
x.addEventListener('click', showNav)
// nav.addEventListener('click', showNav)

function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}