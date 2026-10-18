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


});