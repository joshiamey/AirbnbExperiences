import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cardElements = data.map(elem => (
            <Card 
                key={elem.id}
                img={elem.coverImg}
                rating={elem.stats.rating}
                reviews={elem.stats.reviewCount}
                country={elem.location}
                title={elem.title}
                price={elem.price}
                openSpots={elem.openSpots}
              />
  ));
  return (
    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <section className="card--container">
        {cardElements}
      </section>
    </div>
  );
}