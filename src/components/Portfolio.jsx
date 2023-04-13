import Project from "./Project";
import projectData from "../project-data.json";

function Portfolio() {

    const testProj = {
        title: "Test project",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed nisl sodales, viverra nunc sed, scelerisque turpis.",
        liveUrl: "ccf",
        imgUrl: "/551d4ad5-0a39-450b-9648-09bd396fec0c.png",
        techUsed: ["react", "html","react", "html"]
    }

    const projects = projectData.map(project => <Project {...project} />)


    return (
        <section className="portfolio">
            <h2 className="portfolio__header">My Portfolio.</h2>

            <div className="portfolio__projects">
                {projects}
            </div>
            
        </section>
    )
}

export default Portfolio;