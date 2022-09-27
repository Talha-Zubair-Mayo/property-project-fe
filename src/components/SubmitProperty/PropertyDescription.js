import React from 'react';

export default function PropertyDescription() {
  return (
    <>
      <div className="single-add-property">
        <h3>Property description and price</h3>
        <div className="property-form-group">
          <form>
            <div className="row">
              <div className="col-md-12">
                <p>
                  <label htmlFor="title">Property Title</label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter your property title"
                  />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  <label htmlFor="description">Property Description</label>
                  <textarea
                    id="description"
                    name="pro-dexc"
                    placeholder="Describe about your property"
                    defaultValue={''}
                  />
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12 dropdown faq-drop">
                <div className="form-group categories">
                  <div className="nice-select form-control wide" tabIndex={0}>
                    <span className="current">Select status</span>
                    <ul className="list">
                      <li data-value={1} className="option">
                        Rent
                      </li>
                      <li data-value={2} className="option">
                        Sale
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 dropdown faq-drop">
                <div className="form-group categories">
                  <div className="nice-select form-control wide" tabIndex={0}>
                    <span className="current">Type</span>
                    <ul className="list">
                      <li data-value={1} className="option">
                        house
                      </li>
                      <li data-value={2} className="option">
                        commercial
                      </li>
                      <li data-value={3} className="option">
                        apartment
                      </li>
                      <li data-value={4} className="option">
                        lot
                      </li>
                      <li data-value={5} className="option">
                        garage
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 dropdown faq-drop">
                <div className="form-group categories">
                  <div className="nice-select form-control wide" tabIndex={0}>
                    <span className="current">Rooms</span>
                    <ul className="list">
                      <li data-value={1} className="option">
                        1
                      </li>
                      <li data-value={2} className="option">
                        2
                      </li>
                      <li data-value={3} className="option">
                        3
                      </li>
                      <li data-value={4} className="option">
                        4
                      </li>
                      <li data-value={5} className="option">
                        5
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <p className="no-mb">
                  <label htmlFor="price">Price</label>
                  <input type="text" name="price" placeholder="USD" id="price" />
                </p>
              </div>
              <div className="col-lg-6 col-md-12">
                <p className="no-mb last">
                  <label htmlFor="area">Area</label>
                  <input type="text" name="area" placeholder="Sqft" id="area" />
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
