import React from "react";
import { Link } from "react-scroll";
import { VscAccount } from "react-icons/vsc";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import "./Header.css";

function Header() {
    return (
        <header>
            <nav>
                <div className="header-logo">
                    <h1>
                        <VscAccount />Personal Portfolio
                    </h1>
                </div>
                <div className="header-links">
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                    <Link to="technologies" smooth={true} duration={500}>
                        Technologies
                    </Link>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                    <a href="https://github.com/alancuenca">
                        <AiFillGithub />                    </a>
                    <a href="https://linkedin.com/in/alancuencasalmeron">
                        <AiFillLinkedin />
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
