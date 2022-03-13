import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

export default function Card(props) {
  // console.log(props.url);
  return (
    <div className="card-container">
      <img src={props.url} className="card-image" alt="mountain" />
      <div className="card-content">
        <h5>{props.genre}</h5>
        <h1>{props.heading}</h1>
        <p>{props.paragraph}</p>
        <Link className="learnMore" to="/about">
          <p>Learn More {">"}</p>
        </Link>
      </div>
    </div>
  );
}
