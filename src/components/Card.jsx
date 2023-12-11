import React from "react";

export default function Card(props) {
    // console.log("Props passed to Card: ",props);

    const img = props.img;
    const rating = props.rating;
    const review = props.reviews;
    const country = props.country;
    const title = props.title;
    const price = props.price;
    const openSpots = props.openSpots;

    let badgetext
    if (openSpots === 0) {
        badgetext = "SOLD OUT";
    } else if (country === "Online") {
        badgetext = "ONLINE";
    }

    return (
        <div className="card">
            {badgetext && <div className="card--badge">{badgetext}</div>}
            <img className="card--img" src={`/src/images/${img}`} />
            <div className="card--rating">
                <img className="card--star" src='/src/images/star-1.png' alt="star-icon"/>
                <span>{rating}</span>
                <span className="card--gray">({review}) •</span>
                <span className="card--gray">{country}</span>
            </div>
            <h2 className="card--title">{title}</h2>
            <p className="card--price"><span className="bold">From ${price}</span> / person</p>
        </div>
    );
}
