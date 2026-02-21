function openEnvelope(el){
    el.classList.add("open");

    setTimeout(()=>{
        el.classList.add("zoom-out");
    },800);

    setTimeout(()=>{
        document.getElementById("envelopeContainer").style.display="none";
        document.getElementById("card").style.display="block";
        document.getElementById("bgMusic").play();
    },1800);
}

/* COUNTDOWN */
const targetDate = new Date("March 14, 2026 18:00:00").getTime();

const interval = setInterval(() => {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if(distance < 0){
        clearInterval(interval);
        document.querySelector(".countdown-container").style.display="none";
        document.getElementById("loveMessage").innerHTML =
        "Saatnya Berbuka Bareng Kamu 💕✨";
        return;
    }

    document.getElementById("days").innerText =
        Math.floor(distance/(1000*60*60*24));

    document.getElementById("hours").innerText =
        Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    document.getElementById("minutes").innerText =
        Math.floor((distance%(1000*60*60))/(1000*60));

    document.getElementById("seconds").innerText =
        Math.floor((distance%(1000*60))/1000);

},1000);

/* LOVE FALL */
function createLove(){
    const love=document.createElement("div");
    love.innerHTML="💖";
    love.style.position="fixed";
    love.style.left=Math.random()*window.innerWidth+"px";
    love.style.top="-10px";
    love.style.animation="fall 6s linear forwards";
    document.body.appendChild(love);
    setTimeout(()=>love.remove(),6000);
}

setInterval(createLove,1000);