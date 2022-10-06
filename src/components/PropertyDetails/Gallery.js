import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
export default function Gallery({ Details }) {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];

  return (
    <>

      <div id="listingDetailsSlider" className="carousel listing-details-sliders slide mb-30">
        <h5 className="mb-4">Gallery</h5>
        <Slide>
          {Details?.photo?.map((item, index) => (
            <div className="each-slide-effect">
              <div style={{ 'backgroundImage': `url(${process.env.REACT_APP_IMAGE_URL + item})` }}>
                {/* <span>Slide {index} </span> */}
              </div>
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}
