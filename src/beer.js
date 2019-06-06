import React from "react";

function Beer(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.img} />
      <button onClick={() => props.like(props.id)}>Like</button>
    </div>
  );
}

export default Beer;
