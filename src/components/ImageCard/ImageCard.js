import React from "react";
// import images from "./images.json";

const ImageCard = props => (
  <div
      className="card"
      
      value={props.id}
      onClick={() => props.handleOnClick(props.id)}
  >
      <div className="img-container">
          <img alt={props.name} src={props.image} />
      </div>
  </div>
);

export default ImageCard;
