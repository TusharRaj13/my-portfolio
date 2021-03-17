import React, { Component } from 'react'
import "../styles/NavBar.css"

class NavBar extends Component {

    clickHandler = (str) => {
        console.log(str);
    }
    render() {
        return (
            <div className="sidebar">
                <nav>
                    <ul>
                       <li><a href="#home" className="dot" onClick={this.clickHandler(this)}><span className="number">01</span><span className="title">HOME</span></a></li>  
                       <li><a href="#about" className="dot" onClick={this.clickHandler("about")}><span className="number">02</span><span className="title">ABOUT</span></a></li>  
                       <li><a href="#projects" className="dot" onClick={this.clickHandler("projects")}><span className="number">03</span><span className="title">PROJECTS</span></a></li>  
                       <li><a href="#contact" className="dot" onClick={this.clickHandler("contact")}><span className="number">04</span><span className="title">CONTACT</span></a></li>  
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar
