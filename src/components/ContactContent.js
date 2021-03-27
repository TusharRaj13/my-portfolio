import React, { Component } from 'react'
import '../styles/ContactContent.css'


class ContactContent extends Component {
    render() {
        return (
            <section className="contactContent" id="contact">
                <div className="fake-big">
                    Contact
                </div>
                <div className="headerText highlightText">&lt; Say Hi /&gt;</div>
                <h4 style={{color:"#a2a2a2"}}>I'm always looking for opportunities to work on exciting projects.<br/> Let's make something great together.</h4>
                <div>
                    <form>
                        <div>
                            <input type="text" placeholder="Name"/>
                        </div>
                        <div>
                            <input type="email" placeholder="Email"/>
                        </div>
                        <div>
                            <textarea placeholder="Message"/>
                        </div>
                        <div>
                            <input type="submit" className="btn"/>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default ContactContent
