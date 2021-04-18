import React, { useRef } from 'react'
import '../styles/ContactContent.css'


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
        </section>
    )
}

export default ContactContent
