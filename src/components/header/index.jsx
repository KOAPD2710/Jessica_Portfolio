import './style.scss';
import { useEffect, useRef, useState } from 'react';
import { getLenis } from '@/js/core/lenis';
import cn from 'clsx';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Header({ listMenu, isWhiteBg, ...props }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const container = useRef();

    let lenis;

    useEffect(() => {
        lenis = getLenis();
    }, [])

    useGSAP(() => {
        const mm = gsap.matchMedia()

        mm.add("(max-width: 767px)", () => {
            const allSection = [...document.querySelectorAll('section'), document.querySelector('footer')]
            const targetSection = [document.querySelector('#homeProject'), document.querySelector('#homeAbout'), document.querySelector('#contact')];
            const allNavItem = [...document.querySelectorAll('.header-menu-item')]
            // const nonTargetSections = allSection.filter(section => !targetSection.includes(section));

            for (const item of allSection) {
                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: item,
                        start: 'top top+=50%',
                        end: 'bottom top+=50%',
                        onEnter: () => {
                            if (!document.querySelector('.header').classList.contains('menu-opening')) {
                                gsap.to('.header-logo-wrapper', {
                                    yPercent: targetSection.includes(item) ? -100 * (targetSection.indexOf(item) + 1) : 0,
                                    duration: 0.3,
                                    overwrite: true
                                });
                            }
                            for (const navItem of allNavItem) {
                                navItem.classList.remove('active');
                            }
                            if (targetSection.includes(item)) {
                                allNavItem[targetSection.indexOf(item)].classList.add('active');
                            }
                        },
                        onEnterBack: () => {
                            if (!document.querySelector('.header').classList.contains('menu-opening')) {
                                gsap.to('.header-logo-wrapper', {
                                    yPercent: targetSection.includes(item) ? -100 * (targetSection.indexOf(item) + 1) : 0,
                                    duration: 0.3,
                                    overwrite: true
                                });
                            }

                            for (const navItem of allNavItem) {
                                navItem.classList.remove('active');
                            }
                            if (targetSection.includes(item)) {
                                allNavItem[targetSection.indexOf(item)].classList.add('active');
                            }
                        }
                    }
                });
            }


        })
    }, {
        scope: container.current
    })

    function onClickScrollTo(href) {
        if (!lenis) {
            lenis = getLenis();
        }
        if (href === '#contact') {
            lenis?.scrollTo(lenis?.limit)
        } else {
            lenis?.scrollTo(href)
        }
    }

    function onClickToggleMenu(e) {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);

        if (window.innerWidth <= 767) {
            gsap.to('.header-logo-wrapper', {
                yPercent: 0,
                duration: 0.3,
                overwrite: true
            });
        }
    }

    // useEffect(() => {
    //     console.log(isMenuOpen)
    // }, [isMenuOpen])

    return (
        <header className={cn('header', isMenuOpen && 'menu-opening', isWhiteBg && "white")} ref={container}>
            <div className="container grid">
                <a href="/" className="header-logo">
                    <div className="header-logo-wrapper">
                        <div className="header-logo-txt txt-up txt-med">phgg ng</div>
                        {listMenu.map((item) => (
                            <div className="header-logo-txt txt-up header-logo-menu" key={item.name}>{item.name}</div>
                        ))}
                    </div>
                </a>
                <div className="header-label txt-up txt-med">PORTFOLIO 2024</div>
                <div className="header-menu">
                    {listMenu.map((item) => (
                        <a href={item.link} onClick={(e) => onClickScrollTo(item.link)} className="header-menu-item txt-up txt-med" key={item.name}>
                            {item.name}
                            <span className='header-menu-item-span' />
                        </a>
                    ))}
                </div>
                <a href='/' className='header-toggle' onClick={(e) => onClickToggleMenu(e)}>
                    <div className='header-toggle-inner'>
                        <span />
                        <span />
                    </div>
                </a>
            </div>
            <div className="line line-bot" />
        </header>
    )
}