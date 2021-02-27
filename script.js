const toggler=document.querySelector(".toggle-button");
const backdrop=document.querySelector(".backdrop");
const mobileNav=document.querySelector(".mobile-nav");
const main=document.querySelector(".main-container");
const header=document.querySelector(".main-header");
const navItems=document.querySelectorAll(".main-nav__item");

toggler.addEventListener("click",()=>{
    mobileNav.classList.remove("close");
    mobileNav.classList.add("open");
    backdrop.classList.remove("close-backdrop");
    backdrop.classList.add("open-backdrop");
    
});
backdrop.addEventListener("click",()=>{
    
    mobileNav.classList.add("close");
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open-backdrop");
    backdrop.classList.add("close-backdrop");
    
});
let typed = new Typed('.user-qualification', {
    strings: ["Designer.","Freelancer.","Developer."],
    typeSpeed: 100,
    loop: true,
    loopCount: Infinity,
    backSpeed: 100,
    backDelay: 1000,
    showCursor: false,
  });

  window.onscroll = ()=> myFunction();
  let mainTop = header.getBoundingClientRect().bottom;
  const myFunction=()=> {

    if(window.pageYOffset>=mainTop){
        header.classList.remove("back-change__backward");
        header.classList.add("back-change__forward");
        navItems.forEach((item)=> item.classList.add("font-change"));
    }
    else{
        header.classList.remove("back-change__forward");
        header.classList.add("back-change__backward");
        navItems.forEach((item)=> item.classList.remove("font-change"));
    }

  }