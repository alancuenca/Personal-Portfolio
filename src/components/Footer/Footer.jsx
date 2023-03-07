import React from "react";

function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="text-center text-white-50">
            <p>Copyright Alan Cuenca ⓒ {year}</p>
        </footer>
    );
}

export default Footer;
