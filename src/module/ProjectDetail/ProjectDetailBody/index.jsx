
import { useEffect } from 'react';
import './style.scss'
import { generateHtmlFromJson } from '@/js/utils';

const ProjectDetailBody = ({bodyContent, ...props}) => {
    useEffect(() => {
        generateHtmlFromJson(props.data.content)
    }, [])

    return (
        <section className='proj-dtl-body'>
            <div className="container grid">
                <div className="proj-dtl-body-content richtext">{bodyContent}</div>
                {/* <div className='proj-dtl-body-content' dangerouslySetInnerHTML={{ __html: contentText }}/> */}
            </div>
        </section>
    )
}

export default ProjectDetailBody;