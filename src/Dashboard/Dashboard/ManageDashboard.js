import React from 'react';

export default function ManageDashboard() {
  return (
    <>
      <div className="dashborad-box stat bg-white">
        <h4 className="title">Manage Dashboard</h4>
        <div className="section-body">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-xs-12 dar pro mr-3">
              <div className="item">
                <div className="icon">
                  <i className="fa fa-list" aria-hidden="true" />
                </div>
                <div className="info">
                  <h6 className="number">345</h6>
                  <p className="type ml-1">Published Property</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-xs-12 dar rev mr-3">
              <div className="item">
                <div className="icon">
                  <i className="fas fa-star" />
                </div>
                <div className="info">
                  <h6 className="number">116</h6>
                  <p className="type ml-1">Total Reviews</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 dar com mr-3">
              <div className="item mb-0">
                <div className="icon">
                  <i className="fas fa-comments" />
                </div>
                <div className="info">
                  <h6 className="number">223</h6>
                  <p className="type ml-1">Messages</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 dar booked">
              <div className="item mb-0">
                <div className="icon">
                  <i className="fas fa-heart" />
                </div>
                <div className="info">
                  <h6 className="number">432</h6>
                  <p className="type ml-1">Times Bookmarked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
