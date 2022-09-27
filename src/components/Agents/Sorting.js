import React from 'react';
import { Link } from 'react-router-dom';

export default function Sorting() {
  return (
    <>
        <section className="headings-2 pt-0">
          <div className="pro-wrapper">
            <div className="detail-wrapper-body">
              <div className="listing-title-bar">
                <div className="text-heading text-left">
                  <p className="font-weight-bold mb-0 mt-3">7 Search results</p>
                </div>
              </div>
            </div>
            <div className="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center grid">
              <div className="input-group border rounded input-group-lg w-auto mr-4">
                <label
                  className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3"
                  htmlFor="inputGroupSelect01"
                >
                  <i className="fas fa-align-left fs-16 pr-2" />
                  Sortby:
                </label>
                <select
                  className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby"
                  data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                  id="inputGroupSelect01"
                  name="sortby"
                >
                  <option selected="">Alphabet</option>
                  <option value={1}>Random</option>
                  <option value={1}>Rating</option>
                  <option value={1}>Number of property</option>
                </select>
              </div>
              <div className="sorting-options">
                  <Link to="/AgentListingRow" className="change-view-btn lde">
                      <i className="fa fa-th-list" />
                  </Link>
                  <Link to="/AgentListingGrid" className="change-view-btn active-view-btn">
                      <i className="fa fa-th-large" />
                  </Link>
              </div>
            </div>
          </div>
        </section>
    </>
  );
}
