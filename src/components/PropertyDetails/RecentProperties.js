import React from 'react';

export default function RecentProperties() {
  return (
    <>
      <div className="widget-boxed mt-5">
        <div className="widget-boxed-header">
          <h4>Recent Properties</h4>
        </div>
        <div className="widget-boxed-body">
          <div className="recent-post">
            <div className="recent-main">
              <div className="recent-img">
                <a href="blog-details.html">
                  <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-1.jpg"} alt="" />
                </a>
              </div>
              <div className="info-img">
                <a href="blog-details.html">
                  <h6>Family Home</h6>
                </a>
                <p>$230,000</p>
              </div>
            </div>
            <div className="recent-main my-4">
              <div className="recent-img">
                <a href="blog-details.html">
                  <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-2.jpg"} alt="" />
                </a>
              </div>
              <div className="info-img">
                <a href="blog-details.html">
                  <h6>Family Home</h6>
                </a>
                <p>$230,000</p>
              </div>
            </div>
            <div className="recent-main">
              <div className="recent-img">
                <a href="blog-details.html">
                  <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-3.jpg"} alt="" />
                </a>
              </div>
              <div className="info-img">
                <a href="blog-details.html">
                  <h6>Family Home</h6>
                </a>
                <p>$230,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
