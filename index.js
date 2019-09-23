const nav = document.querySelector('.nav');
const btn = document.querySelector('.hamburger');
const navLogo= document.querySelector('#navLogo');
const footLogo= document.querySelector('#footLogo');
const x= document.querySelector("#close");

const email= document.querySelector(".inputEmail")
const msg= document.querySelector("#msg");
const sendBtn= document.querySelector(".sendMsg");


sendBtn.addEventListener("click", sendEmail);
btn.addEventListener('click', showNav);
navLogo.addEventListener('click', showNav);
footLogo.addEventListener('click', smoothscroll );
x.addEventListener('click', showNav);
// nav.addEventListener('click', showNav)

const showNav = () => {
    console.log(btn)
    nav.classList.toggle('active');
    btn.classList.toggle('hamburger--active');
};

function smoothscroll(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
}


function sendEmail(){
    console.log(msg.value);
    // sendBtn.setAttribute('href', "mailto:hide85x@gmail.com" + "&subject=" + escape("KaKo Question") + "&body" + escape(msg.value));
    const link = "mailto:hide85x@gmail.com"  + "?cc=" + email.value + "&subject=KaKo! Question from Your site!"+ "&body=" +msg.value;
    window.location.href= link;
    msg.value= "" ;
    email.value= "" ;

}