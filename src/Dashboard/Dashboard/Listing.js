import React from 'react';

export default function Listing() {
  return (
    <>
      <div className="dashborad-box">
       
        <div className="section-body listing-table">
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Listing Name</th>
                  <th>Date</th>
                  <th>Rating</th>
                  <th>Status</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Luxury Restaurant</td>
                  <td>23 Jan 2020</td>
                  <td className="rating">
                    <span>5.0</span>
                  </td>
                  <td className="status">
                    <span className=" active">Active</span>
                  </td>
                  <td className="edit">
                    <a href="#">
                      <i className="fa fa-pencil" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Gym in Town</td>
                  <td>11 Feb 2020</td>
                  <td className="rating">
                    <span>4.5</span>
                  </td>
                  <td className="status">
                    <span className="active">Active</span>
                  </td>
                  <td className="edit">
                    <a href="#">
                      <i className="fa fa-pencil" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Cafe in Boston</td>
                  <td>09 Jan 2020</td>
                  <td className="rating">
                    <span>5.0</span>
                  </td>
                  <td className="status">
                    <span className="non-active">Non-Active</span>
                  </td>
                  <td className="edit">
                    <a href="#">
                      <i className="fa fa-pencil" />
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="pb-0">Car Dealer in New York</td>
                  <td className="pb-0">24 Feb 2018</td>
                  <td className="rating pb-0">
                    <span>4.5</span>
                  </td>
                  <td className="status pb-0">
                    <span className="active">Active</span>
                  </td>
                  <td className="edit pb-0">
                    <a href="#">
                      <i className="fa fa-pencil" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
