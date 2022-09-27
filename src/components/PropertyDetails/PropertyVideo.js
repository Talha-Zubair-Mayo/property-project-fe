import React from 'react';

export default function PropertyVideo() {
  return (
    <>
      <div className="property wprt-image-video w50 pro">
        <h5>Property Video</h5>
        <img alt="image" src={process.env.PUBLIC_URL + "/images/slider/home-slider-4.jpg"} />
        <a
          className="icon-wrap popup-video popup-youtube"
          href="https://www.youtube.com/watch?v=14semTlwyUY"
        >
          <i className="fa fa-play" />
        </a>
        <div className="iq-waves">
          <div className="waves wave-1" />
          <div className="waves wave-2" />
          <div className="waves wave-3" />
        </div>
      </div>
    </>
  );
}
