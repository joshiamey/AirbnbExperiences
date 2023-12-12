import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() {
  const cardElements = data.map(elem => (
            <Card 
                key={elem.id}
                {...elem}
              />
  ));
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <section className="card--container">
        {cardElements}
      </section>
    </div>
  );
}