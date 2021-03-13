const navBar=document.querySelector('.main-header');
const sections=document.querySelector('.user');

const options ={
   
};

const observer=new IntersectionObserver((entries,observer)=>{
    entries.forEach((entry)=>{
        if (!entry.isIntersecting){
            console.log("not intersecting")
            navItems.forEach((item)=> item.classList.add("font-change"));
            header.classList.add("back-change");
        }
        else{
            console.log("intersecting")
            navItems.forEach((item)=> item.classList.remove("font-change"));
            header.classList.remove("back-change");
        }
    })

},options);

 
    observer.observe(sections);

