import React from 'react';
import { NavItem } from 'react-bootstrap';

export default function Propertyname({ Details }) {
  return (
    <>
      <section className="headings-2 pt-0">
        <div className="pro-wrapper">
          <div className="detail-wrapper-body">
            <div className="listing-title-bar">
              <h3>
                {Details?.title} <span className="mrg-l-5 category-tag">{Details?.status}</span>
              </h3>
              <div className="mt-0">
                <a href="#listing-location" className="listing-address">
                  <i className="fa fa-map-marker pr-2 ti-location-pin mrg-r-5" />
                  {`${Details.address}, ${Details?.city} , ${Details?.country}`}
                </a>
              </div>
            </div>
          </div>
          <div className="single detail-wrapper mr-2">
            <div className="detail-wrapper-body">
              <div className="listing-title-bar">
                <h4>${Details?.price}</h4>
                <div className="mt-0">
                  <a href="#listing-location" className="listing-address">
                    {/* <p>$ 1,200 / sq ft</p> */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
