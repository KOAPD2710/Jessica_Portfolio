import { typeSplit } from '@/js/utils';
import './style.scss';
import { useEffect } from 'react';
import SplitType from 'split-type';

const Footer = ({ Email, Social, ...props }) => {

    useEffect(() => {
        // const title = new SplitType('.footer-mail-inner', typeSplit.chars)
    }, [])
    return (
        <footer className="footer" id="contact">
            <div className="container grid">
                <div className="footer-preamble">
                    <div className="footer-label">(CONTACT)</div>
                    <div className="footer-desc">I'm here to listen, collaborate, and craft design solutions that resonate.</div>
                </div>
                <div className="footer-mail-wrapper">
                    <a href={Email} className="footer-mail h2">
                        <span className='footer-mail-txt'>{Email}</span>
                        <span className='footer-mail-txt-sm txt txt-18'>
                            <span>(CLICK TO COPY </span>🌞<span>)</span>
                        </span>
                    </a>
                </div>
                <div className="footer-social txt-18">
                    <div className="footer-social-label">(SOCIALS)</div>
                    <div className="footer-social-list">
                        {Social.map((item, idx) => (
                            <a href={item.link} className="footer-social-item txt-up" key={idx}>
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-ft">
                    <div className="footer-ft-copy txt txt-18 txt-up">©2024 phgg ng</div>
                    <div className="footer-ft-recap txt txt-18 txt-up">
                        <span>Designed & developed with love from VIETNAM</span> 🥰
                    </div>
                    <div className="line line-top"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;