import React, { Component } from 'react'
import ProjectContainer from './ProjectContainer'
import '../styles/ProjectContent.css'

class ProjectContent extends Component {
    render() {
        return (
            <section className="projectContent" id="projects">
                <div className="fake-big">
                    Projects
                </div>
                <div className="headerText highlightText">&lt; I make stuff /&gt;</div>
                <h1>Here are some of my projects.</h1>
                <ProjectContainer/>
            </section>
        )
    }
}

export default ProjectContent
