import { SiCss3, SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiGithub, SiTailwindcss, SiSass, SiAxios } from "react-icons/si";


function MySkills() {

    //   const skillsArr = () => {

    //     const skills = [
    //         "HTML + CSS",
    //         "SASS/SCSS",
    //         "JavaScript",
    //         "React.js",
    //         "Node.js",
    //         "Responsive design",
    //         "JWTs",
    //         "Git",
    //         "SASS/SCSS",
    //         "Tailwind",
    //         "MongoDB",
    //         "Mongoose",
    //         "Postman",
    //         "REST API's",
    //         "Express.js",
    //         "Command Line",
    //         "Github"];
        
    //     return skills.map(skill => <span className="skills__card" key={skill}>{skill}</span>)
    // }

    return (
        <div class="skills">
            <div className="skills__skill">
                <SiHtml5 />
                <span>HTML</span>
            </div>
            
            <div className="skills__skill">
                <SiCss3 />
                <span>CSS</span>
            </div>
            
                
            <div className="skills__skill">
                <SiJavascript />
                <span>JavaScript</span>
            </div>
            
                            
            <div className="skills__skill">
                <SiReact />
                <span>React</span>
            </div>
                
            <div className="skills__skill">
                <SiNodedotjs />
                <span>NodeJS</span>
            </div>
            
            <div className="skills__skill">
                <SiExpress />
                <span>Express</span>
            </div>
        
            <div className="skills__skill">
                <SiGithub />
                <span>Github</span>
            </div>

            <div className="skills__skill">
                <SiTailwindcss />
                <span>Tailwind</span>
            </div>

            <div className="skills__skill">
                <SiSass />
                <span>Sass</span>
            </div>

            <div className="skills__skill">
                <SiAxios />
                <span>Axios</span>
            </div>
            
        </div>
    )
}

export default MySkills;