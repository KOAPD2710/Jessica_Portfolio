import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger)

const Theme = ({ ...props }) => {

    const markerConfig = {
        start: 'top bottom-=30%',
        end: 'bottom bottom-=30%',
    }

    function themeDark() {
        const target = document.querySelector('.main')

        target.classList.remove('light-theme')
        target.classList.add('dark-theme')
    }

    function themeLight() {
        const target = document.querySelector('.main')

        target.classList.remove('dark-theme')
        target.classList.add('light-theme')
    }

    useGSAP(() => {
        const allDark = [...document.querySelectorAll('[data-theme=dark]')];
        const allLight = [...document.querySelectorAll('[data-theme=light]')];

        allDark.forEach((el, idx) => {
            ScrollTrigger.create({
                trigger: el,
                ...markerConfig,
                onEnter: themeDark,
                onEnterBack: themeDark,
                id: `dark-${idx}`,
                markers: true,
            })
        })
        allLight.forEach((el, idx) => {
            ScrollTrigger.create({
                trigger: el,
                ...markerConfig,
                onEnter: themeLight,
                onEnterBack: themeLight,
                id: `light-${idx}`,
                markers: true,
            })
        })
    }, [])


    return null
}

export default Theme;
