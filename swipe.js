var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

let touchstartX = 0
let touchendX = 0

function checkDirection() {
    if (touchendX < touchstartX) slideRight()
    if (touchendX > touchstartX) slideLeft()
}

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
})