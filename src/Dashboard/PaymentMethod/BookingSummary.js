import React from 'react';

export default function BookingSummary() {
  return (
    <>
      <div className="tr-single-box mb-0">
        <div className="tr-single-body">
          <div className="tr-single-header">
            <h4>
              <i className="fa fa-star-o" />
              Booking Summary
            </h4>
          </div>
          <div className="booking-price-detail side-list no-border mb-3">
            <h5>Reservation Details</h5>
            <ul>
              <li>
                Date<strong className="pull-right">18 Jun 2018</strong>
              </li>
              <li>
                Time<strong className="pull-right">9pm 10pm</strong>
              </li>
              <li>
                From<strong className="pull-right">10 jan 2019</strong>
              </li>
            </ul>
          </div>
          <div className="booking-price-detail side-list no-border">
            <h5>Pricing Details</h5>
            <ul>
              <li>
                Dining<strong className="pull-right">$150</strong>
              </li>
              <li>
                Reservation<strong className="pull-right">$60</strong>
              </li>
              <li>
                Tax<strong className="pull-right">$53</strong>
              </li>
              <li className="red pb-0">
                Total Cost<strong className="pull-right">$263</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
