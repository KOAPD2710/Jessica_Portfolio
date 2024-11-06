
import { Fragment, useEffect } from 'react';
import * as prismic from '@prismicio/client'
import './style.scss'
import { isEmpty } from '@/js/utils';


const ProjectDetailBody = ({ data, ...props }) => {
    useEffect(() => {
        console.log(data);
    }, [])

    return (
        <section className='proj-dtl-body'>
            <div className="container grid">
                <div className="proj-dtl-body-thumb-wrapper">
                    <div className="proj-dtl-body-thumb">
                        <img src={data.thumbnail.url} alt={data.thumbnail.alt} width={data.thumbnail.dimensions.width} height={data.thumbnail.dimensions.height} className='img img-fill' />
                    </div>
                </div>

                {data.show_progress && (
                    <Fragment>
                        <div className="proj-dtl-body-progress-label-wrapper proj-dtl-body-label">
                            <div className="proj-dtl-body-progress-label txt txt-up">({data.label_progress[0]?.text})</div>
                        </div>
                        <div className="proj-dtl-body-progress-sub-wrapper proj-dtl-body-sub">
                            <div className="proj-dtl-body-progress-sub txt">{data.sub_progress[0]?.text}</div>
                        </div>
                        <div className="proj-dtl-body-progress-desc-wrapper proj-dtl-body-desc">
                            {!isEmpty(data.desc_progress) && (
                                <div className="proj-dtl-body-progress-desc txt" dangerouslySetInnerHTML={{ __html: prismic.asHTML(data.desc_progress) }} />
                            )}
                        </div>
                    </Fragment>
                )}
            </div>
        </section>
    )
}

export default ProjectDetailBody;