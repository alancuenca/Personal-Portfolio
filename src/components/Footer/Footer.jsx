import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p>Copyright Alan Cuenca ⓒ {year}</p>
        </footer>
    );
}

export default Footer;
