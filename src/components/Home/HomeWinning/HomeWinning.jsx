import React from "react";
import "./HomeWinning.css";
import Card from "./Card";
import data from "../../../Data/CardContent.json"

export default function HomeWinning() {
    const cardArray = data.map(item=>{
        return (
            <Card 
                {...item}                
            />
        )
    })
  return (
    <div className="container">
      <div style={{textAlign:'center', fontSize:30,marginBottom:5}}>
        The <b>Winning Formula</b>
      </div>
      <hr />
      <div className="cards-container">
        {cardArray}
      </div>
    </div>
  );
}
