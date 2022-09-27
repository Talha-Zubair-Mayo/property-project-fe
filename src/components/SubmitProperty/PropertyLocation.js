import React from 'react';

export default function PropertyLocation() {
  return (
    <>
      <div className="single-add-property">
        <h3>property Location</h3>
        <div className="property-form-group">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                <label htmlFor="address">Address</label>
                <input type="text" name="address" placeholder="Enter Your Address" id="address" />
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p>
                <label htmlFor="city">City</label>
                <input type="text" name="city" placeholder="Enter Your City" id="city" />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                <label htmlFor="state">State</label>
                <input type="text" name="state" placeholder="Enter Your State" id="state" />
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p>
                <label htmlFor="country">Country</label>
                <input type="text" name="country" placeholder="Enter Your Country" id="country" />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="no-mb first">
                <label htmlFor="latitude">Google Maps latitude</label>
                <input
                  type="text"
                  name="latitude"
                  placeholder="Google Maps latitude"
                  id="latitude"
                />
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="no-mb last">
                <label htmlFor="longitude">Google Maps longitude</label>
                <input
                  type="text"
                  name="longitude"
                  placeholder="Google Maps longitude"
                  id="longitude"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
