
function Hero() {
    
    return (
        <div className="hero">

            <img src="https://blush.design/api/download?shareUri=1lP98Ef_dNKo30yO&c=Skin_0%7Eae5d29&bg=a27bd5&w=800&h=800&fm=png"
                alt="me" class="hero__img"
            />


            <div className="hero__content">
                <h1>
                    Hey! My name is&nbsp;
                    
                    <span className="hero__name">Anjanique Mackey</span>
                </h1>

                <p> I'm a
                    <span className="hero__special-words"> MERN Stack Web Developer</span>, 
                    <span className="hero__bolded-upon-hover"> book-worm</span>,
                    <span className="hero__bolded-upon-hover"> space-geek</span>, and 
                    <span className="hero__bolded-upon-hover"> junk-food connoisseur</span>.
                    I initially fell in love with coding because
                    <span className="hero__bolded-upon-hover"> I love a good challenge</span>
                    , but I soon discovered that it's also a creative outlet for me. My ultimate goal is to use my skills to make a positive impact on the world and create software that people find useful and enjoyable. I'm always
                    <span className="hero__bolded-upon-hover"> curious and eager to learn more</span>
                    , and I'm excited to use my skills to create awesome stuff.
                </p>

                <a href="https://drive.google.com/file/d/1HaJuwxlPx4OjBeITC5tJ5XZj2uwTlMt7/view?usp=share_link" target="_blank" className="hero__button">
                    My Resume.
                </a>
            </div>

        </div>
    )
}

export default Hero;