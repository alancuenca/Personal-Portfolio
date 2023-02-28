import React from "react";
import "./About.css"
import { profile } from "../../constants/profile";

function About() {
    return (
        <section id="about">
            <div className="about-header">
                <h2>About Me</h2>
            </div>
            <div className="about-container">
                {profile.map((profile, i) => (
                    <div key={i} className="about-image-container">
                        <img src={profile.image} alt={profile.i} className="about-image" />
                    </div>
                ))}
                <div className="about-paragraphs">
                    <p>
                        Located in the Central Coast of California. Full-stack web developer with over 2 years of development experience. Specialist in Javascript and adept in utilizing cutting-edge technologies such as React.JS, CSS frameworks and Node.JS to bring web designs to life. Committed to staying current with industry trends and continuously improving my skills.
                    </p>
                    <p>
                        Honed soft skills with over 10 years of professional experience in management and education. Personal development and growth within these fields have enhanced my performance as a team member and focus towards contribution to overall operational success.
                    </p>
                    <p>
                        Let's connect and see how I can bring value to your projects.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;
