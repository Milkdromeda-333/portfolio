import { SiCss3, SiHtml5, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiGithub, SiTailwindcss, SiSass, SiMongodb } from "react-icons/si";
import {MdDevices} from "react-icons/md";

function MySkills() {

    return (
        <div class="about-me">

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