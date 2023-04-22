

function Project({ ...project }) {
    
    const { name, description, liveDemoUrl, repoUrl, img, technologies, type } = project;

    const techUsedList = technologies.join(", ");
    
    return (
        <section className="project">

            <img src={img} alt="d" className="project__img" />

            <div className="project__body">

                <div className="project__header">
                    <h3 className="project__header--name">{name}.</h3>
                    
                    <span> ({type})</span>
                </div>

                <span className="project__tech-used">Tech Used:  {techUsedList}</span>

                <p>{description}</p>

                <div className="project__links">
                    
                    <a href={liveDemoUrl}
                        target="_blank"
                        className="project__link"
                    >
                        Live site.
                    </a>

                    <a href={repoUrl}
                        target="_blank"
                        className="project__link"
                    >
                        Source code.
                    </a>

                </div>
            </div>
        </section>
    )
}
export default Project;