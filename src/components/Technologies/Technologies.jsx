import React, { useState } from "react";
import "./Technologies.css";
import { technologies } from "../../constants/constants";
import { BiData, BiCodeCurly } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { Tabs, Tab } from 'react-bootstrap';
import { motion } from 'framer-motion';

function Technologies() {
    const iconMap = {
        FaReact: FaReact,
        BiData: BiData,
        BiCodeCurly: BiCodeCurly,
    };

    const [activeTab, setActiveTab] = useState("Front-end Development");

    const itemVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 300, damping: 30 }
        },
        closed: {
            opacity: 0,
            y: 20,
            transition: { duration: 0.2 }
        }
    };

    const listVariants = {
        open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
                type: "spring",
                bounce: .7,
                duration: 0.7,
                delayChildren: 0.1,
                staggerChildren: 0.07
            }
        },
        closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3
            }
        }
    };

    return (
        <section id="technologies">
                <h2 className="technologies-header">Tech Stack</h2>
            <div className="tab-container">
            <Tabs  key={activeTab} activeKey={activeTab} onSelect={(key) => setActiveTab(key)}>
                {technologies.map((section, i) => {
                    const IconComponent = iconMap[section.icon];
                    return (
                        <Tab
                            eventKey={section.group}
                            title={
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <IconComponent />
                                    <span>{section.group}</span>
                                </motion.div>
                            }
                            key={i}
                        >
                            <motion.ul
                                className="list-group"
                                variants={listVariants}
                                initial="closed"
                                animate="open"
                            >
                                {section.tech.map((tech, j) => {
                                    return (
                                        <motion.li
                                            className="list-group-item list-group-item-action"
                                            key={j}
                                            variants={itemVariants}
                                        >
                                            {tech}
                                        </motion.li>
                                    );
                                })}
                            </motion.ul>
                        </Tab>
                    );
                })}
            </Tabs>
            </div>
        </section>
    );
}

export default Technologies;
