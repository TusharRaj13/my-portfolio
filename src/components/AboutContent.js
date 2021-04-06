import React, { Component } from 'react'
import '../styles/AboutContent.css'
import profile from '../profile_img.jpg'

class AboutContent extends Component {
    render() {
        return (
            <section className="aboutContent section-blog" id="about">
                <div className="fake-big">
                    About
                </div>
                <div className="headerText highlightText">&lt; I love making stuffs /&gt;</div>
                <img src={profile} style={{marginTop: "1rem"}} height="150" width="150" alt="profile_img"/>
                <div className="infoContent">
                    <h2>
                        Hi, I'm Tushar, nice to meet you. Please take a look around!
                    </h2>
                    <p>
                        I'm passionate about building execellent software that improves the live of those around me. I specialize in creating UWP applications and web apps.
                    </p>                    
                </div>
                <br/>
                <a target="_black" rel="noreferrer" href="https://tusharrajgupta.blob.core.windows.net/docs/TusharRajGupta%20-%20CV.pdf" className="btn">Download Resume</a>
            </section>
        )
    }
}

export default AboutContent
