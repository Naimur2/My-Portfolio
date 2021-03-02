const toggler=document.querySelector(".toggle-button");
const backdrop=document.querySelector(".backdrop");
const mobileNav=document.querySelector(".mobile-nav");
const main=document.querySelector(".main-container");
const header=document.querySelector(".main-header");
const navItems=document.querySelectorAll(".main-nav__item");
const mobileNavItem=document.querySelectorAll(".mobile-nav__item>a");

toggler.addEventListener("click",()=>{
    mobileNav.classList.remove("close");
    mobileNav.classList.add("open");
    backdrop.classList.remove("close-backdrop");
    backdrop.classList.add("open-backdrop");
    backdrop.classList.add("show");
    
});
const hideMobileNav=()=>{
    mobileNav.classList.remove("open");
    mobileNav.classList.add("close");
    backdrop.classList.remove("open-backdrop");
    backdrop.classList.add("close-backdrop");
    setTimeout(()=>backdrop.classList.remove("show"),500);
}
backdrop.addEventListener("click",()=>{
    hideMobileNav();
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
  

 const smoothScroll=(targetPosition, duration)=> {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime == null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    }
    hideMobileNav();
    requestAnimationFrame(animation);
}
const srollFunc=(target) => {
    let elementId = target.getAttribute("href").replace("#","");
    const targetElement = document.getElementById(elementId);
    const targetElementPosition = targetElement.getBoundingClientRect().top;
    target.addEventListener("click", (e) => smoothScroll(targetElementPosition, 1000));
};
for(let items of mobileNavItem){
    items.addEventListener("click",()=>{
        hideMobileNav();
        srollFunc(items); 
        });
}
let data = document.querySelectorAll(".smooth-scroll");
for (let target of data) {
    srollFunc(target);
}

