import React from "react";

const Tour = ({ tour }) => {
  const { id, name, info, image, price } = tour;

  return (
    <article className="tour">
      <div className="img-container">
        <img src={image} alt={name} />
        <span className="close-btn">×</span>
      </div>
      <div className="tour-info">
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>
      <p>{info}</p>
      <button className="not-interested-btn" >
        Not Interested
      </button>
    </article>
  );
};

export default Tour;

