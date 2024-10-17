
import './style.scss'

export default function Header({ listMenu, ...props }) {
    return (
        <header className="header">
            <div className="container grid">
                <a href="." className="header-logo">
                    <div className="header-logo-txt txt-up txt-med">phgg ng</div>
                </a>
                <div className="header-label txt-up txt-med">PORTFOLIO 2024</div>

                <div className="header-menu">
                    {listMenu.map((item, idx) => (
                        <a href={item.link} className="header-menu-item txt-up txt-med" key={idx}>{item.name}</a>
                    ))}
                </div>
            </div>
            <div className="line line-bot" />
        </header>
    )
}