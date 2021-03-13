const toggler=document.querySelector(".toggle-button");
const backdrop=document.querySelector(".backdrop");
const mobileNav=document.querySelector(".mobile-nav");
const main=document.querySelector(".main-container");
const header=document.querySelector(".main-header");
const navItems=document.querySelectorAll(".smooth-scroll");
const mobileNavItem=document.querySelectorAll(".mobile-nav__item>a");
const progress=document.querySelectorAll("[class*='prog-']");
const containers=document.querySelectorAll(".container");
const boxes = document.querySelectorAll(".box");

toggler.addEventListener("click",()=>{
    mobileNav.classList.add("open");
    backdrop.classList.add("show");
    setTimeout(()=>backdrop.classList.add("open-backdrop"),10);
});
const hideMobileNav=()=>{
    mobileNav.classList.remove("open");
    backdrop.classList.remove("open-backdrop");
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

  const myFunction=()=> {
    if(window.pageYOffset>=mainTop){
        navItems.forEach((item)=> item.classList.add("font-change"));
        header.classList.add("back-change");
    }
    else{
        header.classList.remove("back-change");
        navItems.forEach((item)=> item.classList.remove("font-change"));
    }
    
  }
  window.onload=()=>{
    if(window.pageYOffset>=mainTop){
            header.classList.add("back-change");
    }
  }
  
progress.forEach((item) => {
    let classList = item.className.split(" ");
    let re = new RegExp('prog-');
    let wide="";
    classList.forEach((cls)=>{
        if (cls.match(re)) {
            wide = cls.replace("prog-", "");
        }
    });
    item.style.width=wide+"%";
});
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

window.addEventListener("scroll",()=>{
    myFunction();
    let pos=window.pageYOffset+89;
    for (let i = 0; i < containers.length; i++) {
        if (containers[i].offsetTop <=pos && containers[i+1].offsetTop> pos){
            let iD=`#${containers[i].id}`
            let ele=document.querySelector(`a[href='${iD}']`);
            if (ele.classList.contains("font-change")) {
                ele.classList.remove("font-change");
            }
        }
        
    }
});

const options = {

};
let observer = new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        // entry.target.style.display = 'block';
        if (entry.isIntersecting){
            if (!entry.target.classList.contains("animateEle")){
                entry.target.classList.add("animateEle");
            }
        }
    })
},options);

boxes.forEach((box)=>{
    observer.observe(box);
})