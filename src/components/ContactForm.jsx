
function ContactForm() {
    

    return (
        <form className="contactForm">

            <h2 className="contactForm__header">Contact Me.</h2>
            
            <div className="contactForm__container">
                <label htmlFor="name" className="contactForm__name">
                    Name:
                    <input type="text" />
                </label>
                <label htmlFor="email" className="contactForm__email">
                    Email:
                    <input type="email" />
                </label>

                <label htmlFor="message" className="contactForm__message">
                    Message:
                    <textarea></textarea>
                </label>

                <button className="contactForm__button">Submit.</button>
                
            </div>

        </form>
    )
}

export default ContactForm;