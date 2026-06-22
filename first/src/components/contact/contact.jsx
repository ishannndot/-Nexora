import React from 'react'
import "./contact.css"

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Message sent successfully!");
        e.target.reset();
    };

    return (
        <>
            <div className="contact">

                <div className="contact-heading">
                    <h1>Contact Us</h1>
                    <p>
                        Let's discuss your next project and turn your ideas
                        into powerful digital solutions.
                    </p>
                </div>

                <div className="contact-container">

                    <div className="contact-info">
                        <h2>Get In Touch</h2>

                        <p>Email: hello@nexora.com</p>
                        <p>Phone: +91 XXXXX XXXXX</p>
                        <p>Location: India</p>
                    </div>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            required
                        />

                        <input
                            type="email"
                            placeholder="Your Email"
                            required
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            required
                        />

                        <textarea
                            placeholder="Your Message"
                            required
                        ></textarea>

                        <button type="submit">
                            Send Message
                        </button>

                    </form>

                </div>

            </div>
        </>
    )
}

export default Contact