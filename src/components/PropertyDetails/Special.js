import React from 'react';

export default function Special() {
  return (
    <>
      <div className="widget-boxed popular mt-5">
        <div className="widget-boxed-header">
          <h4>Specials of the day</h4>
        </div>
        <div className="widget-boxed-body">
          <div className="banner">
            <img src={process.env.PUBLIC_URL + "/images/single-property/banner.jpg"} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
