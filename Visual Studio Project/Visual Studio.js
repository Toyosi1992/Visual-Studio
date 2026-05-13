// script.js
function startAnimation() {
    let elem = document.getElementById("animateBox");   
    let pos = 0;
    
    // Clear any existing intervals to prevent "speed stacking"
    clearInterval(window.animTimer);

    window.animTimer = setInterval(frame, 5);

    function frame() {
        if (pos == 350) {
            clearInterval(window.animTimer);
        } else {
            pos++; 
            elem.style.left = pos + 'px'; 
        }
    }
}