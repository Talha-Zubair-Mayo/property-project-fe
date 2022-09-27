import React from 'react';

export default function ExtraInfo() {
  return (
    <>
      <div className="single-add-property">
        <h3>Extra Information</h3>
        <div className="property-form-group">
          <div className="row">
            <div className="col-lg-4 col-md-12 dropdown faq-drop">
              <div className="form-group categories">
                <div className="nice-select form-control wide" tabIndex={0}>
                  <span className="current">Select Age</span>
                  <ul className="list">
                    <li data-value={1} className="option">
                      0-1 years
                    </li>
                    <li data-value={2} className="option">
                      0-5 years
                    </li>
                    <li data-value={1} className="option">
                      0-10 years
                    </li>
                    <li data-value={2} className="option">
                      0-15 years
                    </li>
                    <li data-value={1} className="option">
                      0-20 years
                    </li>
                    <li data-value={2} className="option">
                      0-50 years
                    </li>
                    <li data-value={1} className="option">
                      50+ years
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 dropdown faq-drop">
              <div className="form-group categories">
                <div className="nice-select form-control wide" tabIndex={0}>
                  <span className="current">Select Rooms</span>
                  <ul className="list">
                    <li data-value={1} className="option">
                      1
                    </li>
                    <li data-value={2} className="option">
                      2
                    </li>
                    <li data-value={1} className="option">
                      3
                    </li>
                    <li data-value={2} className="option">
                      4
                    </li>
                    <li data-value={1} className="option">
                      5
                    </li>
                    <li data-value={2} className="option">
                      6
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 dropdown faq-drop">
              <div className="form-group categories">
                <div className="nice-select form-control wide" tabIndex={0}>
                  <span className="current">Select Bathrooms</span>
                  <ul className="list">
                    <li data-value={1} className="option">
                      1
                    </li>
                    <li data-value={2} className="option">
                      2
                    </li>
                    <li data-value={1} className="option">
                      3
                    </li>
                    <li data-value={2} className="option">
                      4
                    </li>
                    <li data-value={1} className="option">
                      5
                    </li>
                    <li data-value={2} className="option">
                      6
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
