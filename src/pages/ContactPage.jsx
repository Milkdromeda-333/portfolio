
export default function ContactPage() {

    return (
        <section className="contact-page" id="contact-page">
            <div className="contact-form-container">
            <h2 className='sec-header'>Contact me.</h2>

            <form action="" className='email-form'>

                <label htmlFor="email">Your email:</label>
                <input type="text" id='email' required />

                <label htmlFor="subject-line">Subject line:</label>
                <input type="text" id='subject-line' required />

                <label htmlFor="email-body">Message:</label>
                <textarea rows='10' required />
                
                <button>Submit.</button>

                </form>
                </div>
        </section>
    );
}