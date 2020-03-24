const section = document.querySelectorAll('div.parallax-container');

function scrolled() {
    var cHeight = document.body.clientHeight;
    var wHeight = window.innerHeight;
    var scrollOffset = window.pageYOffset;
    var onePercentOfHeight = (cHeight - wHeight) / 100;
    var scrollPosition = scrollOffset / onePercentOfHeight;

    return scrollPosition;
}

function parallaxSettings() {
    section[0].style.backgroundPositionY = `${scrolled() * 6}px`;
    section[1].style.backgroundPositionY = `-${scrolled() * 3}px`;
    section[2].style.backgroundPositionY = `${scrolled() * 6 + 200}px`;
}

window.addEventListener('load', parallaxSettings);
window.addEventListener('scroll', parallaxSettings);

// zenscroll settings
var defaultDuration = 2000; // ms
var edgeOffset = 0; // px
zenscroll.setup(defaultDuration, edgeOffset);
