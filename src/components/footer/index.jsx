import { debounce, typeSplit } from '@/js/utils';
import './style.scss';
import { useEffect, useRef } from 'react';
import SplitType from 'split-type';

const Footer = ({ ...props }) => {
    const copyEmailTxt = useRef();

    useEffect(() => {
        // console.log(props);
    }, [])

    const copyEmail = (event, mail) => {
        event.preventDefault();
        navigator.clipboard.writeText(mail);
        const defaultTxt = copyEmailTxt.current.innerHTML;
        copyEmailTxt.current.innerHTML = "copied";
        setTimeout(() => {
            copyEmailTxt.current.innerHTML = defaultTxt
        }, 1500);
    }
    return (
        <footer className="footer" id="contact">
            <div className="container grid">
                <div className="footer-preamble">
                    <div className="footer-label">(CONTACT)</div>
                    <div className="footer-desc">I'm here to listen, collaborate, and craft design solutions that resonate.</div>
                </div>
                <div className="footer-mail-wrapper">
                    <a href="#" onClick={(event) => copyEmail(event, props.email.url)} className="footer-mail h2">
                        <span className='footer-mail-txt'>{props.email.url}</span>
                        <span className='footer-mail-txt-sm txt txt-18 txt-up'>
                            <span>(</span><span className='change-txt' ref={copyEmailTxt}>TAP TO COPY </span>🌞<span>)</span>
                        </span>
                    </a>
                </div>
                <div className="footer-social txt-18">
                    <div className="line line-top" />
                    <div className="footer-social-label">(SOCIALS)</div>
                    <div className="footer-social-list">
                        {props.social_link.map((item, idx) => (
                            <a href={item.link.url} className="footer-social-item txt-up" key={idx}>
                                {item.platform[0].text}
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-ft">
                    <div className="line line-top" />
                    <div className="footer-ft-copy txt txt-18 txt-up">©2024 phgg ng</div>
                    <div className="footer-ft-recap txt txt-18 txt-up">
                        <span>Designed & developed with love from VIETNAM</span> 🥰
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;