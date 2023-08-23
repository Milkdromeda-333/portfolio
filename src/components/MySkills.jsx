import { SiCss3, 
    SiHtml5, 
    SiJavascript, 
    SiReact, 
    SiNodedotjs, 
    SiExpress, 
    SiGithub, 
    SiTailwindcss, 
    SiSass, 
    SiMongodb,
    SiTypescript } from "react-icons/si";
import {MdDevices} from "react-icons/md";

function MySkills() {

    return (
        <div className="about-me">

            <div className="about-me__skills">

                <h2 className="about-me__header">My Skills. </h2>
                
                <div className="about-me__skills-container">
                
                    <div className="about-me__skill html">
                        <SiHtml5 />
                        <span>HTML</span>
                    </div>
                
                    <div className="about-me__skill css">
                        <SiCss3 />
                        <span>CSS</span>
                    </div>
                
                
                    <div className="about-me__skill javascript">
                        <SiJavascript />
                        <span>JavaScript</span>
                    </div>
                
                
                    <div className="about-me__skill react">
                        <SiReact />
                        <span>React</span>
                    </div>

                    <div className="about-me__skill typescript">
                        <SiTypescript />
                        <span>TypeScript</span>
                    </div>
                
                    <div className="about-me__skill node">
                        <SiNodedotjs />
                        <span>NodeJS</span>
                    </div>
                
                    <div className="about-me__skill express">
                        <SiExpress />
                        <span>Express</span>
                    </div>

                    <div className="about-me__skill github">
                        <SiGithub />
                        <span>Github</span>
                    </div>

                    <div className="about-me__skill tailwind">
                        <SiTailwindcss />
                        <span>Tailwind</span>
                    </div>

                    <div className="about-me__skill sass">
                        <SiSass />
                        <span>Sass</span>
                    </div>

                    <div className="about-me__skill mongodb">
                        <SiMongodb />
                        <span>MongoDB & Mongoose</span>
                    </div>
                    
                    <div className="about-me__skill responsive-design">
                        <MdDevices />
                        <span>Responsive Design</span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default MySkills;