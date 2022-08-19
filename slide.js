var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

var swt = true

function switchLogo() {
    if (swt == true) {
        gsap.to('#mark', { display: "none", duration: 0 })
        swt = false
    } else {
        gsap.to('#mark', { display: "initial", duration: 0 })
        swt = true
    }
}

var slider = gsap.timeline({})

var position = 1

function slideRight() {

    console.log(position)

    if (position == 1) {
        slider.to('.t', { x: -391, duration: 0.4 })
        $("#d1").css({ "backgroundColor": "#adaaad" });
        $("#d2").css({ "backgroundColor": "#555555" });
        position++
        console.log(position)
        return
    } else if (position == 2) {
        slider.to('.t', { x: -782, duration: 0.4, onComplete: switchLogo })
        $("#d2").css({ "backgroundColor": "#adaaad" });
        $("#d3").css({ "backgroundColor": "#555555" });
        position++
        console.log(position)
        return
    } else {
        return
    }

}

function slideLeft() {

    console.log(position)

    if (position == 2) {
        slider.to('.t', { x: 0, duration: 0.4 })
        $("#d2").css({ "backgroundColor": "#adaaad" });
        $("#d1").css({ "backgroundColor": "#555555" });
        position--
        console.log(position)
        return
    } else if (position == 3) {
        slider.to('.t', { x: -391, duration: 0.4, onComplete: switchLogo })
        $("#d3").css({ "backgroundColor": "#adaaad" });
        $("#d2").css({ "backgroundColor": "#555555" });
        position--
        console.log(position)
        return
    }

}