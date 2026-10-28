document.addEventListener( 'DOMContentLoaded' ,() => {

const repulsorBtn = document.getElementById('spooky-button');
if (repulsorBtn) {
repulsorBtn.addEventListener('click', () => {
const originaltext =repulsorBtn.innerText;

repulsorBtn.innerText= "system activated";
repulsorBtn.style.color = "#ffffff";
repulsorBtn.style.borderColor ="#ffffff";
repulsorBtn.style.background = "#ff6600";

setTimeout (() => {
repulsorBtn.innerText = originaltext;
repulsorBtn.style.color ="#888888";
repulsorBtn.style.borderColor ="#333333";
repulsorBtn.style.background = "transparent";



}, 1500);




} 



);




}

const timerEL = document.getElementById('timer');
if (timerEL) {
    setInterval (() => {
       
        const now = new Date();
        let target = new Date(now.getFullYear(), 9, 31);
        if (now > target) target = new Date (now.getFullYear() + 1, 9, 31);
       const diff = target - now;


        const d = Math.floor (diff / 86400000);
        const h = Math.floor ((diff / 3600000) % 24);
        const m = Math.floor ((diff / 60000) % 60);
        const s = Math.floor ((diff / 1000) % 60);
        timerEL.innerText = `> ${d}d : ${h}h : ${m}m : ${s}s`;

    },1000);

}
});