import React, { Component } from 'react'
import { Icon } from '@fluentui/react/lib/Icon'
import "../styles/NavBar.css"

class NavBar extends Component {
    constructor(props) {
        super(props)
        var t = localStorage.getItem('theme');
        if(!t)
            t = "red";
        this.state = {
             theme : t
        }
        this.changeTheme(this.state.theme);
        this.changeThemeHandler = this.changeThemeHandler.bind(this);
    }

    changeTheme(themeInfo){
        document.documentElement.style.setProperty('--accent',themeInfo);
        localStorage.setItem('theme', themeInfo);
    }
    
    changeThemeHandler() {
        // e.preventDefault();
        this.changeTheme("blue");
    }
    
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="logo">
                            <a className="nav-link" href="#home">
                                <span className="link-text">Tushar Raj</span>
                                <Icon iconName="SkypeCircleArrow" className="nav-icon" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home">
                                <Icon iconName="Home" className="nav-icon" />
                                <span className="link-text">Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                <Icon iconName="ContactInfo" className="nav-icon" />
                                <span className="link-text">About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                <Icon iconName="ProjectCollection" className="nav-icon" />
                                <span className="link-text">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                <Icon iconName="ContactLink" className="nav-icon" />
                                <span className="link-text">Contact</span>
                            </a>
                        </li>
                        {/* <li className="nav-item">
                            <button className="btn" onClick={this.changeThemeHandler}>Change Theme</button>
                        </li> */}
                        {/* <li><a href="#about" className="dot" onClick={this.clickHandler("about")}><span className="number">02</span><span className="title">ABOUT</span></a></li>  
                       <li><a href="#projects" className="dot" onClick={this.clickHandler("projects")}><span className="number">03</span><span className="title">PROJECTS</span></a></li>  
                       <li><a href="#contact" className="dot" onClick={this.clickHandler("contact")}><span className="number">04</span><span className="title">CONTACT</span></a></li>   */}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavBar
