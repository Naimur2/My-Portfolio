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
    backdrop.classList.add("show");
    
});
backdrop.addEventListener("click",()=>{
    mobileNav.classList.remove("open");
    mobileNav.classList.add("close");
    backdrop.classList.remove("open-backdrop");
    backdrop.classList.add("close-backdrop");
    setTimeout(()=>backdrop.classList.remove("show"),500);
    
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

  
  let offSet=0;
  let mainTop = header.getBoundingClientRect().bottom;
  window.onscroll = ()=> myFunction();
  const myFunction=()=> {
    if(window.pageYOffset>=mainTop){
        if(header.classList.contains("back-change__backward"))
        {
            header.classList.remove("back-change__backward");
        }
        header.classList.add("back-change__forward");
        navItems.forEach((item)=> item.classList.add("font-change"));
    }
    else{
        if(header.classList.contains("back-change__forward"))
        {
            header.classList.remove("back-change__forward");
            header.classList.add("back-change__backward");
        }        
        navItems.forEach((item)=> item.classList.remove("font-change"));
    }
  }
  
  window.onload=()=>{
    if(window.pageYOffset>=mainTop){
            header.classList.add("back-change__forward");
    }
  }