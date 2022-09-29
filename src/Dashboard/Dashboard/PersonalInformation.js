import React from 'react';

export default function PersonalInformation() {
  return (
    <>
      <div className="dashborad-box mb-0">
        <h4 className="heading pt-0">Personal Information</h4>
        <div className="section-inforamation">
          <form>
            <div className="row">
              <div className="col-sm-6">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" className="form-control" placeholder="Enter your First name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" className="form-control" placeholder="Enter your Last name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ex: example@domain.com"
                  />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="text" className="form-control" placeholder="Ex: +1-800-7700-00" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    placeholder="Write your address here"
                    defaultValue={''}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>About Yourself</label>
                  <textarea
                    name="address"
                    className="form-control"
                    placeholder="Write about userself"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-lg mt-2">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
