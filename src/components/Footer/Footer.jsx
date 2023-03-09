import React from "react";
import "./Footer.css"

function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="footer">
        <footer className="text-center">
            <p>Copyright Alan Cuenca ⓒ {year}</p>
        </footer>
        </div>
    );
}

export default Footer;
