const nav = document.querySelector('.nav');
const btn = document.querySelector('.hamburger');
const navLogo= document.querySelector('#navLogo');
const footLogo= document.querySelector('#footLogo');
const x= document.querySelector("#close");

const navLinks= document.querySelectorAll(".nav__list li a ");

const email= document.querySelector(".inputEmail")
const msg= document.querySelector("#msg");
const sendBtn= document.querySelector(".sendMsg");




const showNav = () => {
    nav.classList.toggle('active');
    btn.classList.toggle('hamburger--active');
};
//for IE
for (let i= 0; i<navLinks.length; i++) {
    navLinks[i].addEventListener('click', navLinkClick)
}

navLinks.forEach(e => e.addEventListener('click', navLinkClick));

function navLinkClick(){
    smoothScroll(event)

    if (nav.classList.contains("active")){
        nav.classList.toggle("active")
        btn.classList.toggle("hamburger--active")
    }

}
// // 1 approach
// function smoothScroll(event){
//     const targetId= event.currentTarget.getAttribute('href');
//     console.log(targetId);
//     window.scrollTo({
//         top: document.querySelector(targetId).offsetTop,
//         behavior: "smooth"
//     })
    
// }


//dla loga w stopce pageUP
function smoothscroll(){
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
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

sendBtn.addEventListener('click', sendEmail);
btn.addEventListener('click', showNav);
navLogo.addEventListener('click', showNav);
footLogo.addEventListener('click', smoothscroll );
x.addEventListener('click', ()=> {
    nav.classList.remove("active")
});
// nav.addEventListener('click', showNav)



// super smooth scrool on IE!!!!
function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href")==="#" ? "header" : event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetId).offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start = null;
    
    window.requestAnimationFrame(step);
  
    function step(timestamp) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      // window.scrollTo(0, distance*(progress/duration) + startPosition);
      window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
      if (progress < duration) window.requestAnimationFrame(step);
    }
  }
  
  // Easing Functions
  
  function linear(t, b, c, d) {
      return c*t/d + b;
  };
  
  function easeInOutQuad(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
  };
  
  function easeInOutCubic(t, b, c, d) {
      t /= d/2;
      if (t < 1) return c/2*t*t*t + b;
      t -= 2;
      return c/2*(t*t*t + 2) + b;
  };