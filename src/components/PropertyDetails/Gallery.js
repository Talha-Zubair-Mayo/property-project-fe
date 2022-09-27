import React from 'react';

export default function Gallery({ Details }) {
  return (
    <>
      <div id="listingDetailsSlider" className="carousel listing-details-sliders slide mb-30">
        <h5 className="mb-4">Gallery</h5>
        <div className="carousel-inner">
          {Details?.photo?.map((item, key) =>
          (
            <div className="active item carousel-item" data-slide-number={parseInt(key)}>
              <img src={process.env.REACT_APP_IMAGE_URL + item} className="img-fluid" alt="slider-listing" />
            </div>
          ))
          }

        </div>
        {/* main slider carousel nav controls */}
        <ul className="carousel-indicators smail-listing list-inline">
          {Details?.photo?.map((item, key) =>
          (
            <li className="list-inline-item active">
              <a
                id="carousel-selector-0"
                className="selected"
                data-slide-to={parseInt(key)}
                data-target="#listingDetailsSlider"
              >
                <img src={process.env.REACT_APP_IMAGE_URL + item} className="img-fluid" alt="listing-small" />
              </a>
            </li>
          ))
          }

        </ul>
        {/* main slider carousel items */}
      </div>
    </>
  );
}
