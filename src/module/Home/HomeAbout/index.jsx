import { Fragment, useEffect } from 'react';
import './style.scss';

const HomeAbout = ({ ...props }) => {

    useEffect(() => {
        // console.log(props);
    }, [])

    return (
        <section className="home-about" data-theme="light" id="homeAbout">
            <div className="container grid">
                <h1 className="home-about-title">{props.Title}</h1>
                <div className="home-about-preamble">
                    <div className="home-about-preamble-label">({props.PreambleLabel})</div>
                    <div className="home-about-preamble-content">
                        <p>
                            <strong>
                                In 2022, I discovered UX/UI and was captivated by how designers create user-centered experiences. From that moment, I knew this was the path I wanted to follow.
                            </strong>
                        </p>
                        <p>
                            Over the past two years, I've worked at two agency companies, contributing to real-world projects across websites, web apps, and mobile apps. As a UX/UI designer, I handled various tasks to bring designs to life for clients, including creating user flows, conducting research, wireframing, and developing UI concepts.
                        </p>
                        <p>
                            Off work, I learn and read new things, love cooking and relax at home.
                        </p>
                    </div>
                </div>
                <div className="home-about-experience">
                    <div className="home-about-experience-label">({props.ExpLabel})</div>
                    <div className="home-about-experience-list">
                        {props.ExpList.map((item, idx) => (
                            <div className="home-about-experience-item" key={item.name}>
                                <div className="home-about-experience-item-name_role txt-med">
                                    <div className="home-about-experience-item-name">{item.name}</div>
                                    <div className="home-about-experience-item-role">{item.role}</div>
                                </div>
                                <div className="home-about-experience-item-location_milestone txt txt-18">
                                    <div className="home-about-experience-item-location">{item.location}</div>
                                    <div className="home-about-experience-item-milestone">{item.milestone}</div>
                                </div>
                                <div className="line line-bot" />
                                {idx === 0 && <div className="line line-top" />}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="home-about-avatar">
                    <div className="home-about-avatar-sticky">
                        <div className="home-about-avatar-inner">
                            {props.Avatar}
                        </div>
                        <a href="." target='__blank' className='home-about-resume txt-med'>
                            <div className="txt">MY RESUME</div>
                            <div className='ic ic-24'>
                                <div className="ic-inner">
                                    {props.ArrUpRight}
                                </div>
                                <div className="ic-inner">
                                    {props.ArrUpRight}
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default HomeAbout