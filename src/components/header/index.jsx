import './style.scss'
import { useEffect } from 'react'
import { getLenis } from '@/js/core/lenis'

export default function Header({ listMenu, ...props }) {

    useEffect(() => {
        const lenis = getLenis();

        console.log(lenis);

    }, [])

    return (
        <header className="header">
            <div className="container grid">
                <a href="." className="header-logo">
                    <div className="header-logo-txt txt-up txt-med">phgg ng</div>
                </a>
                <div className="header-label txt-up txt-med">PORTFOLIO 2024</div>
                <div className="header-menu">
                    {listMenu.map((item) => (
                        <a href={item.link} className="header-menu-item txt-up txt-med" key={item.name}>
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
            <div className="line line-bot" />
        </header>
    )
}