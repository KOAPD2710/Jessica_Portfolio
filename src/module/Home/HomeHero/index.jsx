import './style.scss'
import { useEffect } from "react"

const HomeHero = ({ HeroImage, ...props }) => {

    return (
        <section className="home-hero" data-theme="light" id="homeHero">
            <div className="container grid">
                <div className="home-hero-top">
                    <div className="home-hero-label txt-24 txt-up ">(UX/UI DESIGNER)</div>
                    <div className="home-hero-desc">I explore product with curiosity, ready to create from nothing</div>
                </div>
                <div className="home-hero-img-wrapper">
                    <div className="home-hero-img">
                        {HeroImage}
                    </div>
                </div>
                <div className="home-hero-title h0">
                    Building from <span className='txt-orange'>the ground up</span>
                </div>
                <div className="home-hero-scroll txt txt-16 txt-up">scroll down</div>
            </div>
        </section>
    )
}

export default HomeHero