
function Hero() {
    
    return (
        <div className="hero">

            <img
                src="/avatar.png"
                alt="me" className="hero__img"
            />

            <div className="hero__content">
                <h1>
                    My name is&nbsp;
                    
                    <span className="hero__name">Anjanique Mackey.</span>
                </h1>

                <p> I'm a
                    <span className="hero__special-words"> Software Engineer</span>, 
                    <span className="hero__bolded-upon-hover"> book-worm</span>,
                    <span className="hero__bolded-upon-hover"> space-geek</span>, and 
                    <span className="hero__bolded-upon-hover"> junk-food connoisseur</span>.
                    I initially fell in love with coding because
                    <span className="hero__bolded-upon-hover"> I love a good challenge</span>
                    , but I soon discovered that it's also a creative outlet for me. My ultimate goal is to use my skills to make a positive impact on the world and create software that people find useful and enjoyable. I'm always
                    <span className="hero__bolded-upon-hover"> curious and eager to learn more</span>
                    , and I'm excited to use my skills to create awesome stuff.
                </p>

                <a
                    href="https://docs.google.com/document/d/1PjOD_dFpQ-n9ZNWwhVltftP73XCcLNuWFAWLEpymTN0/edit?usp=sharing"
                    target="_blank"
                    className="hero__button"
                >
                    My Resume.
                </a>
            </div>

        </div>
    )
}

export default Hero;