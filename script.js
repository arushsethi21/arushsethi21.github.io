// Smooth animation on scroll
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll("section").forEach(section=>{
    observer.observe(section);
});

// Navbar background on scroll
window.addEventListener("scroll",()=>{
    const nav=document.querySelector("nav");
    if(window.scrollY>50){
        nav.style.background="rgba(2,6,23,0.95)";
    }else{
        nav.style.background="rgba(15,23,42,.9)";
    }
});

// Typing effect
const title=document.querySelector(".hero h2");

const text="PGDM Marketing Student | IMT Hyderabad";

let i=0;

function typing(){
    if(i<text.length){
        title.textContent+=text.charAt(i);
        i++;
        setTimeout(typing,70);
    }
}

title.textContent="";
typing();
