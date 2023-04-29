import { useState, useEffect, useRef } from "react";


function Project({ ...project }) {
    
    const { name, description, liveDemoUrl, repoUrl, svgImgUrl, pngImgUrl, technologies, type } = project;

    const [imgUrl, setImgUrl] = useState(undefined);

    const imgRef = useRef(null);

    const techUsedList = technologies.join(", ");

    useEffect(() => {
        if (navigator.userAgent.includes("Firefox")) {
            setImgUrl(pngImgUrl);
            imgRef.current.classList.add("firefox");
        } else {
            setImgUrl(svgImgUrl);
        }
    }, [])
    
    return (
        <section className="project">

            <div>
                <img src={imgUrl} alt="d" className="project__img" ref={imgRef} />
            </div>

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