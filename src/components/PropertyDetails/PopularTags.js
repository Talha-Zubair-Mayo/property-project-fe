import React from 'react';

export default function PopularTags() {
  return (
    <>
      <div className="widget-boxed popular mt-5">
        <div className="widget-boxed-header">
          <h4>Popular Tags</h4>
        </div>
        <div className="widget-boxed-body">
          <div className="recent-post">
            <div className="tags">
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Houses
                </a>
              </span>
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Real Home
                </a>
              </span>
            </div>
            <div className="tags">
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Baths
                </a>
              </span>
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Beds
                </a>
              </span>
            </div>
            <div className="tags">
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Garages
                </a>
              </span>
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Family
                </a>
              </span>
            </div>
            <div className="tags">
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Real Estates
                </a>
              </span>
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Properties
                </a>
              </span>
            </div>
            <div className="tags no-mb">
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Location
                </a>
              </span>
              <span>
                <a href="#" className="btn btn-outline-primary">
                  Price
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
