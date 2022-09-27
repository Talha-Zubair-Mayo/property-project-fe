import React from 'react';

export default function ContactInfo() {
  return (
    <>
      <div className="single-add-property">
        <h3>Contact Information</h3>
        <div className="property-form-group">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p>
                <label htmlFor="con-name">Name</label>
                <input type="text" placeholder="Enter Your Name" id="con-name" name="con-name" />
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p>
                <label htmlFor="con-user">Username</label>
                <input
                  type="text"
                  placeholder="Enter Your Username"
                  id="con-user"
                  name="con-user"
                />
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <p className="no-mb first">
                <label htmlFor="con-email">Email</label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  id="con-email"
                  name="con-email"
                />
              </p>
            </div>
            <div className="col-lg-6 col-md-12">
              <p className="no-mb last">
                <label htmlFor="con-phn">Phone</label>
                <input
                  type="text"
                  placeholder="Enter Your Phone Number"
                  id="con-phn"
                  name="con-phn"
                />
              </p>
            </div>
          </div>
        </div>
        <div className="add-property-button pt-5">
          <div className="row">
            <div className="col-md-12">
              <div className="prperty-submit-button">
                <button type="submit">Submit Property</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
