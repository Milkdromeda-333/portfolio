import { SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";

function Socials() {
    
    return (
        <div className="socials">
            <a href="https://www.linkedin.com/in/anjanique-mackey/" target="_blank" className="socials__linkedin">
                <SiLinkedin />
            </a>

            <a href="https://twitter.com/Milkdromeda333" target="_blank" className="socials__twitter">
                <SiTwitter />
            </a>
            
            <a href="https://github.com/Milkdromeda-333" target="_blank" className="socials__github">
                <SiGithub />
            </a>

        </div>
    )
}

export default Socials;