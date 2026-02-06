import React from "react";

function Card(props) {
  return (
    <div className="feature-card" onClick={props.onClick}>
      <h3>{props.heading}</h3>
      <p>{props.subHeading}</p>
    </div>
  );
}
export default Card;
