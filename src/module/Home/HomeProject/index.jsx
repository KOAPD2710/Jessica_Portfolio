import { useEffect } from 'react';
import './style.scss';

const HomeProject = ({ Project, Title, ...props }) => {
    return (
        <section className="home-project" data-theme="light" id="homeProject">
            <div className="container grid">
                <div className="home-project-heading">
                    <h1 className="home-project-title">{Title.text}</h1>
                    <div className="home-project-count-wrapper">
                        <div className="home-project-count">{Project.length} project</div>
                        <div className="home-project-year">
                            (2023-2024)
                        </div>
                    </div>
                </div>
                <div className="home-project-list">
                    {Project.map((proj, idx) => (
                        <ProjectItem key={proj.uid} No={idx} {...proj.data} UID={proj.uid}/>
                    ))}
                </div>
                <div className="line home-project-line" />
            </div>
        </section>
    )
}


const ProjectItem = ({ ...props }) => {
    const { UID, No, name, role, category, describe, thumbnail, link } = props;
    return (
        <a href={`./projects/${UID}`} className="project-item">
            <div className="project-item-thumb">
                <div className="project-item-thumb-inner">
                    <img src={thumbnail.url} alt={thumbnail.alt} width={thumbnail.dimensions.width} height={thumbnail.dimensions.height} loading='lazy' className='img img-fill' />
                </div>
            </div>
            <div className="project-item-heading">
                <div className="project-item-name txt txt-32">{name[0].text}</div>
                <div className="project-item-scope">({category[0]?.text}{role[0]?.text && `, ${role[0].text}`})</div>
                <div className="project-item-no">{(No + 1).toString().padStart(2, '0')}</div>
            </div>
            <div className="project-item-desc">
                {describe[0].text}
            </div>
        </a>
    )
}

export default HomeProject
