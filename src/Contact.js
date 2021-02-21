import React from 'react'
import "./Contact.css"
function Contact() {
    return (
        <div className="contact_section">
            <header className="masthead contact_bg">
            <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-lg-6 mr-auto">
                            <div className="site-heading lower_text">
                                <h1>Contact Me</h1>
                                <span className="subheading">Have questions? Something to tell me?</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

             <div className="container contact_body">
                <p className="contact">
                    Want to get in touch? Send me an email at kylexu4@g.ucla.edu. Ask me about anything, I'm almost always on the internet these days so I'll respond promptly. Let me know if you have similar interests and hobbies, I'd love to learn from you!
                </p>
                <p className="contact">
                    For technical or employment inquries check out the link to the technical page located at the top or at the footer of this page. For further questions call me at (618)-550-8029 or send me an email.
                </p>
            </div>
        </div>

    )
}

export default Contact
