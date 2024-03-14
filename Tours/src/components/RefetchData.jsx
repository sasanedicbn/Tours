import React from "react";

const RefetchData = ({ refetchData }) => {
  return (
    <div className="refetch-container">
      <h1 className="refetch-title">No tours left!</h1>
      <button onClick={() => refetchData()} className="refetch-button">
        Refetch Data
      </button>
    </div>
  );
};

export default RefetchData;
