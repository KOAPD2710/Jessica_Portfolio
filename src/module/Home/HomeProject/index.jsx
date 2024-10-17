import { useEffect } from 'react';
import './style.scss';

const HomeProject = ({ Project, ...props }) => {

    return (
        <section className="home-project">
            <div className="container grid">
                <div className="home-project-heading">
                    <h1 className="home-project-title">Selected projects</h1>
                    <div className="home-project-count-wrapper">
                        <div className="home-project-count">{Project.length} project</div>
                        <div className="home-project-year">
                            (2023-2024)
                        </div>
                    </div>
                </div>
                <div className="home-project-list">
                    {Project.map((proj, idx) => (
                        <ProjectItem key={idx} No={idx} {...proj} />
                    ))}
                </div>
                <div className="line home-project-line" />
            </div>
        </section>
    )
}


const ProjectItem = ({ ...props }) => {
    const { No, name, scope, describe, thumbnail, link } = props;

    return (
        <a href={link} className="project-item">
            <div className="project-item-thumb">
                <div className="project-item-thumb-inner">
                    <img src={thumbnail.src} alt={thumbnail.alt} width={thumbnail.width} height={thumbnail.height} loading='lazy' className='img img-fill' />
                </div>
            </div>
            <div className="project-item-heading">
                <div className="project-item-name txt txt-32">{name}</div>
                <div className="project-item-scope">({scope})</div>
                <div className="project-item-no">{(No + 1).toString().padStart(2, '0')}</div>
            </div>
            <div className="project-item-desc">
                {describe}
            </div>
        </a>
    )
}

export default HomeProject