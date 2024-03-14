import React, { useState } from "react";

const Tour = ({ tour, removeTour }) => {
  const { id, name, info, image, price } = tour;
  const [showMore, setShowMore] = useState(false)
 
  function toggleShow() {
    setShowMore(!showMore)
  }
  return (
    <article className="tour">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="tour-info">
        <h3>{name}</h3>
        <h4>${price}</h4>
      </div>
      <p>
         {showMore ? info : `${info.slice(0,220)}`}
         <button onClick={toggleShow} className="btnShow">
        {showMore ? "Show Less" : "Show More"}
        </button>
      </p>
      <button className="not-interested-btn" onClick={() => removeTour(id)}>
        Not Interested
      </button>
    </article>
  );
};

export default Tour;

