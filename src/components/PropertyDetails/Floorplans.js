import React from 'react';

export default function Floorplans() {
  return (
    <>
      <div className="floor-plan property wprt-image-video w50 pro">
        <h5>Floor Plans</h5>
        <img alt="image" src={process.env.PUBLIC_URL + "/images/bg/floor-plan-1.png"} />
      </div>
    </>
  );
}
