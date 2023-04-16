import Project from "./Project";
import projectData from "../project-data.json";

function Portfolio() {

    const projects = projectData.map(project => <Project {...project} />)


    return (
        <section className="portfolio" id="portfolio">
            
            <h2 className="portfolio__header">My Portfolio.</h2>

            <div className="portfolio__projects">
                {projects}
            </div>
            
        </section>
    )
}

export default Portfolio;