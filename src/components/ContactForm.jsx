
function ContactForm() {
    

    return (
        <form className="contactForm" id="contact-form" action="https://getform.io/f/2ce088b9-a403-4aaa-94b2-a1a9fc0943cc" method="POST">

            <h2 className="contactForm__header">Contact Me.</h2>
            
            <div className="contactForm__container">
                <label htmlFor="name" className="contactForm__name">
                    Name:
                    <input type="text" name="name" required />
                </label>
                <label htmlFor="email" className="contactForm__email">
                    Email:
                    <input type="email" name='email'  required />
                </label>

                <label htmlFor="message" className="contactForm__message">
                    Message:
                    <textarea required name="message"></textarea>
                </label>

                <button type="submit" className="contactForm__button">Submit.</button>
                
            </div>

        </form>
    )
}

export default ContactForm;