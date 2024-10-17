import './style.scss';
import SplitType from 'split-type'

const HomeJourney = ({ ...props }) => {
    const content = "For me, transitioning to UX/UI was a necessary career shift that I chose to pursue. With two years of experience—though not extensive—it marks the beginning and the progress I've made on this journey.Below are some selected works I've had the opportunity to create over the past two years alongside my beloved colleagues and teammates."

    return (
        <section className="home-journey">
            <div className="container grid">
                <div className="home-journey-line-wrapper"></div>
                <div className="home-journey-label txt-24 txt-up">(JOURNEY)</div>
                <div className="home-journey-content txt-44">
                    <div className="home-journey-content-inner">
                        {content}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HomeJourney