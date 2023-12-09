import React from "react";
import groupImg from "../images/group_img.png";

export default function Hero() {
    return (
        <section className="hero--container">
            <img className="hero--img" src={groupImg} alt="expereinces"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by 
                one-of-a-kind hosts—all without leaving 
                home.
            </p>
        </section>
    )
}