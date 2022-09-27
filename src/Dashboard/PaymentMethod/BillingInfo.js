import React from 'react';

export default function BillingInfo() {
  return (
    <>
      <div className="col-md-12 col-lg-6">
        <div className="tr-single-box">
          <div className="tr-single-body">
            <div className="tr-single-header">
              <h4>
                <i className="far fa-address-card pr-2" />
                Billing Information
              </h4>
            </div>
            <div className="row">
              <div className="col-sm-6">
                <label>Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Email</label>
                <input type="email" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Phone</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>City</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>State</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Country</label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-sm-6">
                <label>Address</label>
                <input type="text" className="form-control address mb-0" />
              </div>
              <div className="col-sm-6">
                <label>Zip</label>
                <input type="text" className="form-control mb-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
