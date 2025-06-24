const musicPlayer = document.querySelector("#music");
const profile = document.querySelector(".P-img");

musicPlayer.addEventListener("play", ()=> {
    console.log("playing ");
    profile.style.animation = 'rotate 5s linear infinite';
})

musicPlayer.addEventListener("pause", ()=> {
    console.log("playing ");
    profile.style.animationPlayState = 'paused';
})

musicPlayer.addEventListener("end", ()=> {
    console.log("playing ");
    profile.style.animation = 'none';
})
