import React from "react";
import "./Projects.css";

const Projects = () => {
    const projects = [
        {
            name: "Personal Portfolio Website",
            description: "A responsive website to showcase my skills",
            tech: "React, CSS, React router",
            link: "https://github.com/gtamb/FarmingHorror"
        },
        {
            name: "Weather App",
            description: "An app that fethces real-time weatehr data, using an external API",
            tech: "JavaScript, OpenWeather APO, Bootstrap",
            link: "https://github.com/gtamb/WitchTrials"
        }
    ];
    return (
    <div className="projects-container">
        <div className="projects-content">
            {projects.map((project, index)=> (
                <div key= {index} className="project-card">
                    <h2><strong>{project.name}</strong></h2>
                    <p>{project.description}</p>
                    <p className="tech"><em>{project.tech}</em></p>
                    {project.link &&(
                        <a  
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-link"
                        >
                            View on Github
                        </a>
                    )}
                </div>
            ))}
        </div>
    </div>
    );
};

export default Projects;