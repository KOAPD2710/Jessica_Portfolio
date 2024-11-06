import { useEffect } from 'react';
import './style.scss'

const ProjectDetailNextProj = ({ list, ...props }) => {
    useEffect(() => {
        // console.log(list)
    }, [])
    return (
        <section className='proj-dtl-next' data-theme="dark">
            <div className="container grid">
                <div className="proj-dtl-next-label txt-24 txt-up">(other projects)</div>
                <div className="proj-dtl-next-list">
                    {list.map((item) => (
                        <div className="proj-dtl-next-item" key={item.uid}>
                            <a href={`/projects/${item.uid}`} className='proj-dtl-next-item-link h2'>
                                {item.data.name[0].text}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="line" />
        </section>
    )
}

export default ProjectDetailNextProj;