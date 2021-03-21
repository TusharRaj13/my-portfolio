import React, { Component } from 'react'
import '../styles/HeaderContent.css'
// import { PrimaryButton, DefaultButton } from '@fluentui/react'



class HeaderContent extends Component {
    render() {
        return (
            <section className="homeContent" id="home">
                <div className="contentContainer">
                    <div className="flex">
                        <div className="headerText">
                            Hello, I'm <span className="highlightText">Tushar Raj Gupta</span>.<br/>I'm a full stack web and UWP developer.<br/>
                            <a href="#projects" className="btn">View My Work</a>
                        </div>   
                        {/* <PrimaryButton text="View My Work" /> */}
                    </div>
                </div>                
            </section>
        )
    }
}

export default HeaderContent
