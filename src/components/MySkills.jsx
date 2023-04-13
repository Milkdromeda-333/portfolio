

function MySkills() {

      const skillsArr = () => {

        const skills = [
            "HTML + CSS",
            "SASS/SCSS",
            "JavaScript",
            "React.js",
            "Node.js",
            "Responsive design",
            "JWTs",
            "Git",
            "SASS/SCSS",
            "Tailwind",
            "MongoDB",
            "Mongoose",
            "Postman",
            "REST API's",
            "Express.js",
            "Command Line",
            "Github"];
        
        return skills.map(skill => <span className="skills__card" key={skill}>{skill}</span>)
    }

    return (
        <div class="skills">
            <h2 className="skills__header">My Skills and Tools.</h2>

            <div className="skills__content-container">
                {/* <img src="https://blush.design/api/download?shareUri=czOG_C4snIevzvSa&c=Skin_0%7Eae5d29&w=800&h=800&fm=png" alt="illustration" /> */}

                <div className="skills__skill-cards">
                    {skillsArr()}
                </div>
            </div>
            
        </div>
    )
}

export default MySkills;