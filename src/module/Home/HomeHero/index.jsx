import { useGSAP } from '@gsap/react';
import './style.scss';
import { useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import { typeSplit } from '@/js/utils';
import cn from 'clsx';
import gsap from 'gsap';

const HomeHero = ({ HeroImage, allThumb, ...props }) => {
    const container = useRef();
    const image = useRef();
    const title = useRef();
    const label = useRef();
    const desc = useRef();
    const scrollDown = useRef();
    const allThumbItems = useRef([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(allThumbItems.current.length - 1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPrevIndex((prevIndex) => (prevIndex + 1) % allThumb.length);
            setCurrentIndex((prevIndex) => (prevIndex + 1) % allThumb.length);
        }, 3500); // Change image every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [allThumb.length]);

    useEffect(() => {
        console.log(currentIndex);
        console.log(prevIndex);
    }, [currentIndex]);

    useGSAP(() => {
        gsap.set([...allThumbItems.current], {
            zIndex: 1,
        })
        prevIndex >= 0 && (
            gsap.set(allThumbItems.current[prevIndex], {
                zIndex: 2,
            })
        )

        const tl = gsap.timeline()
        tl.set(allThumbItems.current[currentIndex], {
            zIndex: 3,
        }).fromTo(allThumbItems.current[currentIndex],
            { clipPath: 'inset(100% 0% 0% 0%)' },
            {
                clipPath: 'inset(0% 0% 0% 0%)', duration: .8, ease: 'sine.out'
            }, 0
        ).fromTo(allThumbItems.current[currentIndex].querySelector('img'),
            { scale: 1.1 },
            {
                scale: 1, duration: 4.3, ease: 'none'
            }, 0
        );
    }, {
        dependencies: [currentIndex],
        scope: container.current
    })

    useGSAP(() => {
        const tlImg = gsap.timeline({
            scrollTrigger: {
                trigger: container.current,
                start: 'top top',
                endTrigger: image.current,
                scrub: true,
            },
            defaults: {
                ease: 'none'
            }
        });

        tlImg.to(image.current.querySelector('.home-hero-img'), {
            yPercent: -20,
        });

        const split = {
            title: new SplitType(title.current, typeSplit.chars),
            label: new SplitType(label.current, typeSplit.chars),
            desc: new SplitType(desc.current, typeSplit.chars),
            scrollDown: new SplitType(scrollDown.current, typeSplit.words),
        };

        const animImg = (idx) => {
            gsap.fromTo(allThumbItems.current[idx],
                { opacity: 0 },
                { opacity: 1, duration: 1 }
            );
        };

        const tlOnEnter = gsap.timeline({
            delay: 0.6,
            onComplete: () => {
                split.title.revert();
                split.label.revert();
                split.desc.revert();
                split.scrollDown.revert();
            }
        });

        tlOnEnter
            .fromTo(split.title.chars, {
                yPercent: 100,
            }, {
                yPercent: 0,
                stagger: 0.008,
                duration: 0.6,
                ease: 'power1.out'
            })
            .fromTo(split.label.chars, {
                yPercent: 100,
            }, {
                yPercent: 0,
                stagger: 0.004,
                duration: 0.4,
                ease: 'power1.out'
            }, '<+=0.1')
            .fromTo(split.desc.chars, {
                yPercent: 100,
            }, {
                yPercent: 0,
                stagger: 0.001,
                duration: 0.6,
                ease: 'power1.out'
            }, '<+=0.05')
            .fromTo(image.current, {
                clipPath: 'inset(100% 0% 0% 0%)'
            }, {
                clipPath: 'inset(0% 0% 0% 0%)',
                duration: 1,
                ease: 'power2.out',
                clearProps: 'all'
            }, '0+=0.15')
            .fromTo(split.scrollDown.words, {
                yPercent: 100,
            }, {
                yPercent: 0,
                stagger: 0.001,
                duration: 0.6,
                ease: 'power1.out'
            }, '0+=0.15')
        // .add(animImg(currentIndex)); // Animate current image

        return () => { };
    }, {
        scope: container.current,
    });

    return (
        <section className="home-hero" data-theme="light" id="homeHero" ref={container}>
            <div className="container grid">
                <div className="home-hero-top">
                    <div className="home-hero-label txt-24 txt-up txt" ref={label}>(UX/UI DESIGNER)</div>
                    <div className="home-hero-desc txt" ref={desc}>I explore product with curiosity, ready to create from nothing</div>
                </div>
                <div className="home-hero-img-wrapper" ref={image}>
                    <div className="home-hero-img">
                        {allThumb.map((item, idx) => (
                            <div
                                className={cn('home-hero-img-inner', idx === currentIndex && 'active')}
                                key={item.id}
                                ref={(el) => allThumbItems.current[idx] = el} // Store ref for the current index
                            >
                                <img src={item.url} alt="" className='img img-fill' />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="home-hero-title h0 txt" ref={title}>
                    Building from <span className='txt-orange'>the</span> <span className='txt-orange'>ground</span> <span className='txt-orange'>up</span>
                </div>
                <div className="home-hero-scroll txt txt-16 txt-up txt" ref={scrollDown}>scroll down</div>
            </div>
        </section>
    );
}

export default HomeHero;