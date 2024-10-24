import { useEffect } from "react";



const ProjectDetailHero = ({...props}) => {

    useEffect(() => {
        console.log(props)
    },[])

    return (
        <section className="proj-dtl-hero">
            <div className="container grid">
                
            </div>
        </section>
    )
}

export default ProjectDetailHero;