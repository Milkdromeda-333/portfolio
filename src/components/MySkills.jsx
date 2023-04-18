import { SiCss3, SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiGithub, SiTailwindcss, SiSass, SiMongodb } from "react-icons/si";
import {MdDevices} from "react-icons/md";

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
        <div class="about-me">

            {/* <p>
                Hey there! I'm a
               <span className="about-me__special-words"> MERN stack web developer</span> who loves diving into the nitty-gritty details of how things work. I got into this field because I love a good challenge and enjoy solving problems, but I soon discovered that it's also a really creative outlet for me. My ultimate goal is to use my skills to make a positive impact on the world and create software that people find useful and enjoyable. I'm always curious and eager to learn more, and I'm excited to use my skills to create awesome stuff.
                
            </p> */}

            <div className="about-me__skills">
                <h2 className="about-me__header">My skills include: </h2>
                
                <div className="about-me__skills-container">
                
                    <div className="about-me__skill">
                        <SiHtml5 />
                        <span>HTML</span>
                    </div>
                
                    <div className="about-me__skill">
                        <SiCss3 />
                        <span>CSS</span>
                    </div>
                
                
                    <div className="about-me__skill">
                        <SiJavascript />
                        <span>JavaScript</span>
                    </div>
                
                
                    <div className="about-me__skill">
                        <SiReact />
                        <span>React</span>
                    </div>
                
                    <div className="about-me__skill">
                        <SiNodedotjs />
                        <span>NodeJS</span>
                    </div>
                
                    <div className="about-me__skill">
                        <SiExpress />
                        <span>Express</span>
                    </div>
                    <div className="about-me__skill">
                        <SiGithub />
                        <span>Github</span>
                    </div>
                    <div className="about-me__skill">
                        <SiTailwindcss />
                        <span>Tailwind</span>
                    </div>
                    <div className="about-me__skill">
                        <SiSass />
                        <span>Sass</span>
                    </div>
                    <div className="about-me__skill">
                        <SiMongodb />
                        <span>MongoDB + Mongoose</span>
                    </div>
                    <div className="about-me__skill">
                        <MdDevices />
                        <span>Responsive Design</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MySkills;