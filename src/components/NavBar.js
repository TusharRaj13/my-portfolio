import React, { Component } from 'react'
import "../styles/NavBar.css"
import { FaHome, FaIdCard, FaBriefcase, FaAddressBook, FaArrowLeft, FaPaintBrush } from 'react-icons/fa'
// import { Link } from 'react-scroll';

class NavBar extends Component {
    constructor(props) {
        super(props)
        var t = localStorage.getItem('theme');
        if(!t){
            t = 0;
        }
        this.state = {
            index : parseInt(t)
        }
        this.changeTheme(t);
        //this.changeThemeHandler = this.changeThemeHandler.bind(this);
    }

    theme_list = [
        {
            name : "Theme-Red",
            accent : "#f25002",
            accentDark : "#f4631b"
        },
        {
            name : "Theme-Green",
            accent : "#107b10",
            accentDark: "#0e6e0e"
        },
        {
            name : "Theme-Green2",
            accent : "#7bff00",
            accentDark: "#8ac113"
        },
        {
            name : "Theme-Blue",
            accent : "#00a4ef",
            accentDark: "#18acf1"
        },
        {
            name : "Theme-Yellow",
            accent : "#ffb900",
            accentDark: "#ffc219"
        },
        {
            name : "Theme-Pink",
            accent : "#ee206b",
            accentDark: "#ef3478"
        }
    ]

    changeTheme(themeIndex){
        document.documentElement.classList.add('theme-transition')
        // this.theme_list.find((theme) => {
        //     if(theme.name === themeInfo){
        //         document.documentElement.style.setProperty('--accent',theme.accent);
        //     }
        // })
        var theme = this.theme_list[themeIndex%this.theme_list.length];
        document.documentElement.style.setProperty('--accent', theme.accent);
        document.documentElement.style.setProperty('--accent-dark', theme.accentDark)
        localStorage.setItem('theme', themeIndex%this.theme_list.length);
        window.setTimeout(function() {
            document.documentElement.classList.remove('theme-transition')
          }, 500)
    }
    
    // changeThemeHandler() {
    //     // e.preventDefault();
    //     this.changeTheme("blue");
    // }

    clickHandler = () => {
        this.setState(
            {index : this.state.index+1}
        )
        this.changeTheme(this.state.index);
    }
    
    render() {
        return (
            <div>
                <nav className="navbar">
                    <ul className="navbar-nav">
                        <li className="logo">
                            <a className="nav-link" href="#home">
                                <span className="link-text">Tushar Raj</span>
                                <FaArrowLeft className="nav-icon" />
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#home">
                                <FaHome className="nav-icon" />
                                <span className="link-text">Home</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">
                                <FaIdCard className="nav-icon" />
                                <span className="link-text">About</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">
                                <FaBriefcase className="nav-icon" />
                                <span className="link-text">Projects</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">
                                <FaAddressBook className="nav-icon" />
                                <span className="link-text">Contact</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={this.clickHandler} >
                                <FaPaintBrush className="nav-icon" />
                                <span className="link-text">Theme</span>
                            </div>
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
