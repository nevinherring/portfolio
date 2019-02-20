import React, { Component } from 'react';
import PROJECTS from './data/projects';

class Project extends Component {
    render() {
        const { title, image, description, link } = this.props.project;
        return (
            <div style={{ display: 'inline-block', width: 225, margin: 75 }}>
                <h3>{title}</h3>
                <a href={link}><img src={image} alt='profile' style={{ width: 200, height: 120 }} /></a>
                <p>{description}</p>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Hightlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;