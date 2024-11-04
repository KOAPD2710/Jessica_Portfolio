import './style.scss';
import { useEffect, useState } from 'react';
import { getLenis } from '@/js/core/lenis';
import cn from 'clsx';

export default function Header({ listMenu, ...props }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
    let lenis;

    useEffect(() => {
        lenis = getLenis();
        console.log(lenis);
    }, [])

    function onClickScrollTo(href) {
        console.log(href)
        if (href === '#contact') {
            lenis.scrollTo(lenis.limit)
        } else {
            lenis.scrollTo(href)
        }
    }

    function onClickToggleMenu(e) {
        e.preventDefault();
        setIsMenuOpen(!isMenuOpen);
    }

    // useEffect(() => {
    //     console.log(isMenuOpen)
    // }, [isMenuOpen])

    return (
        <header className={cn('header', isMenuOpen && 'menu-opening')}>
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
                            <span className='header-menu-item-span'/>
                        </a>
                    ))}
                </div>
                <a href='/' className='header-toggle' onClick={(e) => onClickToggleMenu(e)}>
                    <div className='header-toggle-inner'>
                        <span/>
                        <span/>
                    </div>
                </a>
            </div>
            <div className="line line-bot" />
        </header>
    )
}