import React from 'react';

export default function PropertyDetails({ Details }) {
  return (
    <>
      <div className="single homes-content details mb-30">
        {/* title */}
        <h5 className="mb-4">Property Details</h5>
        <ul className="homes-list clearfix">
          <li>
            <span className="font-weight-bold mr-1">Property ID:</span>
            <span className="det">V254680</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Property Type:</span>
            <span className="det">{Details?.type}</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Property status:</span>
            <span className="det">For Sale</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Property Price:</span>
            <span className="det">${Details.price}</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Rooms:</span>
            <span className="det">{Details?.rooms}</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Bedrooms:</span>
            <span className="det">{Details?.rooms}</span>
          </li>
          <li>
            <span className="font-weight-bold mr-1">Bath:</span>
            <span className="det">{Details?.batrhrooms}</span>
          </li>
          {/* <li>
            <span className="font-weight-bold mr-1">Garages:</span>
            <span className="det">2</span>
          </li> */}
          <li>
            <span className="font-weight-bold mr-1">Age:</span>
            <span className="det">{Details?.age} years</span>
          </li>
        </ul>
        {/* title */}
        <h5 className="mt-5">Amenities</h5>
        {/* cars List */}
        <ul className="homes-list clearfix">
          {Details?.features?.map((item, key) => (
            <li>
              <i className="fa fa-check-square" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}

        </ul>
      </div>
    </>
  );
}
