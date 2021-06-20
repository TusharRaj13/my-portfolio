import React, { useRef } from 'react'
import '../styles/ContactContent.css'
import { FaLinkedinIn, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa'

function ContactContent() {
    const name = useRef(null);
    const email = useRef(null);
    const msg = useRef(null);

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(name.current.value + "|" + email.current.value + "|" + msg.current.value )
    }
    
    return (
        <section className="contactContent" id="contact">
            <div className="fake-big">
                Contact
                </div>
            <div className="headerText highlightText">&lt; Say Hi /&gt;</div>
            <h4 style={{ color: "#a2a2a2" }}>I'm always looking for opportunities to work on exciting projects.<br /> Let's make something great together.</h4>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <input ref={name} type="text" placeholder="Name" />
                    </div>
                    <div>
                        <input ref={email} type="email" placeholder="Email" />
                    </div>
                    <div>
                        <textarea ref={msg} placeholder="Message" rows="4" />
                    </div>
                    <div>
                        <input type="submit" className="btn" />
                    </div>
                </form>
            </div>
            <div className="socialLink">
                <a className="socialIcon" href="https://www.instagram.com/tusharraj13/" target="_blank" rel="noreferrer">
                    <FaInstagram className="socialIco"/>
                </a>
                <a className="socialIcon" href="https://www.linkedin.com/in/tushar-raj-gupta-8b944213a/" target="_blank" rel="noreferrer">
                    <FaLinkedinIn className="socialIco"/>
                </a>
                <a className="socialIcon" href="https://twitter.com/TusharRajGupta" target="_blank" rel="noreferrer">
                    <FaTwitter className="socialIco"/>
                </a>
                <a className="socialIcon" href="https://github.com/TusharRaj13" target="_blank" rel="noreferrer">
                    <FaGithub className="socialIco"/>
                </a>
            </div>
        </section>
    )
}

export default ContactContent
