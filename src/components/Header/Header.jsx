import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Header.css";

function Header() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsVisible(true), 1000);
    }, []);

    useEffect(() => {
        let prevScrollpos = window.scrollY;
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsVisible(prevScrollpos > currentScrollPos);
            prevScrollpos = currentScrollPos;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`header ${isVisible ? "header--visible" : ""}`}>
            <nav>
                <div className="header-links">
                    <div className="component-links">
                        <Link id="Link" to="about" smooth={true} duration={500}>
                            About
                        </Link>
                        <Link id="Link" to="projects" smooth={true} duration={500}>
                            Projects
                        </Link>
                        <Link id="Link" to="technologies" smooth={true} duration={500}>
                            Tech
                        </Link>
                        <Link id="Link" to="contact" smooth={true} duration={500}>
                            Contact
                        </Link>
                    </div>
                    <div className="social-media-links">
                        <a href="https://github.com/alancuenca">
                            <AiFillGithub />
                        </a>
                        <a href="https://linkedin.com/in/alancuencasalmeron">
                            <AiFillLinkedin />
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
