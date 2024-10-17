import Lenis from 'lenis';

let lenis;

function initLenis() {
    if (lenis) return;
    lenis = new Lenis({
        duration: 1.5,
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 2,
    })

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}


function getLenis() {
    if (!lenis) {
        initLenis()
    }
    return lenis
}


export { getLenis, initLenis }