
function Hero() {


    return (
        <div class="hero">

            <img src="https://blush.design/api/download?shareUri=1lP98Ef_dNKo30yO&c=Skin_0%7Eae5d29&bg=a27bd5&w=800&h=800&fm=png"
                alt="me" class="hero__img"
            />


            <div class="hero__content">
                <h1>
                    My name is
                    <span class="hero__name">Anjanique Mackey</span>
                    , and I am a web developer. I turn software dreams into software reality.
                </h1>
                <p className="hero__intro">
                    I am fueled by my passion for learning, challenges, and innovative software and designs. If your
                    team is
                    looking for a
                    curious and resourceful go-getter, you should consider me :)
                </p>

                <a href="https://drive.google.com/file/d/1qwXryyjwXAWph39JX8U4J1jbSIs2bLRb/view?usp=sharing" target="_blank" class="hero__button">
                    My Resume.
                </a>
            </div>

        </div>
    )
}

export default Hero;