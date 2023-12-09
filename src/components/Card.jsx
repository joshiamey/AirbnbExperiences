import React from "react";
import img from '/src/images/image-12.png';
import staricon from '/src/images/star-1.png';

export default function Card() {
    return (
        <div className="card">
            <img className="card--img" src={img} alt="Zaferes"/>
            <div className="card--rating">
                <img className="card--star" src={staricon} alt="star-icon"/>
                <span>5.0</span>
                <span className="card--gray">(6) •</span>
                <span className="card--gray">USA</span>
            </div>
            <h2 className="card--title">Life lessons with Katie Zaferes</h2>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    );
}
