import React from "react";
import "./cardlist.style.css";
import Card from "../card/card.component"

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monsters) => (
        <Card monster={monsters}/>
      ))}
    </div>
  );
};

export default CardList;
