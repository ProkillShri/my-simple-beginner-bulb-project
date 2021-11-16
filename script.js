const btn = document.getElementById('button');
const bulb = document.getElementById('bulb');
btn.addEventListener('click', toggle);

function toggle(e) {
    if(btn.textContent.includes('On')){
        bulb.src = "onbulb.jpg"
        btn.innerHTML = "Turn Off";
    } else {
        bulb.src = "offbulb.jpg"
        btn.innerHTML = "Turn On";
    }
}