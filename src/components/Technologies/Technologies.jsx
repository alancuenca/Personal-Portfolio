import React, { useState } from "react";
import "./Technologies.css";
import { technologies } from "../../constants/constants";
import { BiData, BiCodeCurly } from "react-icons/bi";
import { FaReact } from "react-icons/fa";

function Technologies() {

    const iconMap = {
        FaReact: FaReact,
        BiData: BiData,
        BiCodeCurly: BiCodeCurly,
    };

    return (
        <section id="technologies">
            <div className="technologies-header">
                <h2>Technologies</h2>
            </div>
            <div className="grid-container">
                {technologies.map((section, i) => {
                    const IconComponent = iconMap[section.icon];
                    return (
                        <div className="grid-item" key={i}>
                            <h4>
                                <IconComponent /> {section.group}
                            </h4>
                            <ul className="list-group">
                                {section.tech.map((tech, j) => {
                                    return (
                                        <li className="list-group-item list-group-item-action" key={j}>
                                            {tech}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Technologies;