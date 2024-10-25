import './style.scss'
import ArrowUpRight from '@/components/arrowUpRight';
import { useEffect } from "react";



const ProjectDetailHero = ({ data, ListInfo,...props }) => {

    useEffect(() => {
    },[])

    return (
        <section className="proj-dtl-hero">
            <div className="container grid">
                <div className="proj-dtl-hero-title-wrapper">
                    <h1 className="proj-dtl-hero-title h2">{data.name[0].text}</h1>
                    {data.year && <div className="proj-dtl-hero-year">({data.year[0].text})</div>}
                </div>
                <div className="proj-dtl-hero-desc h5">
                    {data.describe[0].text}
                </div>
                <div className="proj-dtl-hero-cta">
                    <a href={data.link.url} target={data.link.target} className='proj-dtl-hero-cta-link'>
                        <ArrowUpRight text={'live project'}/>
                    </a>
                </div>
                <div className="proj-dtl-hero-info">
                    {ListInfo.map((el, idx) => (
                        <div className="proj-dtl-hero-info-item" key={el.name}>
                            <div className="proj-dtl-hero-info-item-name">{el.name}</div>
                            <div className="proj-dtl-hero-info-item-desc">{el.text}</div>
                            <div className="line line-bot" />
                            {idx === 0 && <div className="line line-top" />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectDetailHero;