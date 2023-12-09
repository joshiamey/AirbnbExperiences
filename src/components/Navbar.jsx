import React from "react";
import img from '../images/airbnb 1.png'

export default function Navbar() {
    return (
        <nav className="nav--bar">
            <img className="nav--img" src={img} alt="Airbnb-icon"/>
        </nav>
    );
}