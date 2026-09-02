
window.addEventListener("load", () => {

    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");

    heroLeft.style.opacity = "0";
    heroRight.style.opacity = "0";

    heroLeft.style.transform = "translateX(-50px)";
    heroRight.style.transform = "translateX(50px)";

    setTimeout(() => {

        heroLeft.style.transition = "1s";
        heroRight.style.transition = "1s";

        heroLeft.style.opacity = "1";
        heroRight.style.opacity = "1";

        heroLeft.style.transform = "translateX(0)";
        heroRight.style.transform = "translateX(0)";

    },300);

});
const cards = document.querySelectorAll(".feature-card");

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        const position = card.getBoundingClientRect().top;

        if(position < window.innerHeight-100){

            card.style.opacity="1";
            card.style.transform="translateY(0)";
            card.style.transition=".8s";

        }

    });

});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";

});


const token = localStorage.getItem("token");

if(token){

    document.getElementById("dashboardLink").style.display="block";

}