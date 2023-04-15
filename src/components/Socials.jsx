import { SiLinkedin, SiTwitter, SiGithub } from "react-icons/si";

function Socials() {
    
    return (
        <div className="socials">
            <div className="socials__linkedin">
                <SiLinkedin />
            </div>

            <div className="socials__twitter">
                <SiTwitter />
            </div>
            
            <div className="socials__github">
                <SiGithub />
            </div>

        </div>
    )
}

export default Socials;