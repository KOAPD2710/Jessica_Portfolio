import './style.scss';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';
import { typeSplit } from '@/js/utils';
import parse from 'html-react-parser';

const HomeJourney = ({ ...props }) => {

    const content = "For me, transitioning to UX/UI was a necessary career shift that I chose to pursue. With two years of experience—though not extensive—it marks the beginning and the progress I've made on this journey.Below are some selected works I've had the opportunity to create over the past two years alongside my belo—ved colleagues and— teammates."

    const renderTxt = content.replace(/—/g, '<span>—</span>')

    const container = useRef()
    const contentTopRef = useRef()
    const contentBotRef = useRef()

    useGSAP(() => {
        const split = {
            descTop: new SplitType(contentTopRef.current, { ...typeSplit.chars, split: '—' }),
        }

        const tlScrubText = gsap.timeline({
            scrollTrigger: {
                trigger: contentTopRef.current,
                start: 'top bottom-=5%',
                end: 'bottom center',
                scrub: .2,
                // markers: true
            },
            defaults: {
                ease: 'none'
            }
        })

        tlScrubText.fromTo(split.descTop.chars, {
            opacity: 0
        }, {
            opacity: 1,
            stagger: 0.08
        })

        const tlScrubClipTop = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top bottom',
                end: 'top top',
                scrub: .2,
                // markers: true
            },
            defaults: {
                ease: 'none'
            }
        })

        tlScrubClipTop.from(container.current, {
            '--clip-top': '20rem'
        })


        const tlScrubClipBot = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'bottom bottom',
                end: 'bottom top',
                scrub: .2,
                // markers: true
            },
            defaults: {
                ease: 'none'
            }
        })

        tlScrubClipBot.fromTo(container.current, {
            '--clip-bot': '0rem'
        }, {
            '--clip-bot': '20rem'
        })

    }, {
        scope: container
    })

    return (
        <section className="home-journey" data-theme="dark" ref={container} id="homeJourney">
            <div className="container grid">
                <div className="home-journey-line-wrapper" />
                <div className="home-journey-label txt-24 txt-up">(JOURNEY)</div>
                <div className="home-journey-content txt-44">
                    <div className="home-journey-content-inner top txt-clipLine" ref={contentTopRef} >
                        <span className="txt-spacer" />{parse(renderTxt)}
                    </div>
                    <div className="home-journey-content-inner bot" ref={contentBotRef}>
                        <span className="txt-spacer" />{parse(renderTxt)}
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HomeJourney