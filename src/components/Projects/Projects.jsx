import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"
import { projects } from "../../constants/constants";
import "./Projects.css";

function Projects() {
    const [currentProject, setCurrentProject] = useState(0);
    const [direction, setDirection] = useState(null);

    const nextProject = () => {
        setDirection("next");
        setCurrentProject((currentProject + 1) % projects.length);
    };

    const prevProject = () => {
        setDirection("prev");
        setCurrentProject((currentProject + projects.length - 1) % projects.length);
    };

    return (
        <section id="projects">
            <h2 className="projects-header">Projects</h2>
            <div className="projects-container">
                <div className="project-slideshow">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`project-slide ${index === currentProject ? "active" : ""} ${direction}`}
                        >
                            <h3 className="project-title">{project.title}</h3>
                            <button className={`prev-arrow ${currentProject === 0 ? "disable" : ""}`} onClick={prevProject} disabled={currentProject === 0}>
                                <IoIosArrowBack />
                            </button>
                            <button className={`next-arrow ${currentProject === projects.length - 1 ? "disable" : ""}`} onClick={nextProject} disabled={currentProject === projects.length - 1}>
                                <IoIosArrowForward />
                            </button>


                            <div className="main-img-container">
                                <img src={project.image} alt={project.title} className={`main-img`} />
                                <div className="project-info">
                                    <p>{project.description}</p>
                                    <h3>Technologies</h3>
                                    <p>{project.technologies}</p>
                                    <a href={project.link} rel="noreferrer" target="_blank">
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href={project.github} className="github" rel="noreferrer" target="_blank">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>

                            <div className="thumbnail-container">
                                {projects.map((proj, ind) => (
                                    <img
                                        key={ind}
                                        src={proj.image}
                                        alt={proj.title}
                                        className={`thumbnail ${ind === currentProject ? "active" : ""}`}
                                        onClick={() => setCurrentProject(ind)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
