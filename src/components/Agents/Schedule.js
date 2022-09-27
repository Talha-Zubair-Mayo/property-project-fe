import React from 'react';

export default function Schedule() {
  return (
    <>
      <div className="schedule widget-boxed mt-33 mt-0">
        <div className="widget-boxed-header">
          <h4>
            <i className="fa fa-calendar pr-3 padd-r-10" />
            Schedule a Tour
          </h4>
        </div>
        <div className="widget-boxed-body">
          <div className="row">
            <div className="col-lg-6 col-md-12 book">
              <input
                type="text"
                id="reservation-date"
                data-lang="en"
                data-large-mode="true"
                data-min-year={2017}
                data-max-year={2020}
                data-disabled-days="08/17/2017,08/18/2017"
                data-id="datedropper-0"
                data-theme="my-style"
                className="form-control"
                readOnly=""
              />
            </div>
            <div className="col-lg-6 col-md-12 book2">
              <input type="text" id="reservation-time" className="form-control" readOnly="" />
            </div>
          </div>
          <div className="row mrg-top-15 mb-3">
            <div className="col-lg-6 col-md-12 mt-4">
              <label className="mb-4">Adult</label>
              <div className="input-group">
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn counter-btn theme-cl btn-number"
                    disabled="disabled"
                    data-type="minus"
                    data-field="quant[1]"
                  >
                    <i className="fa fa-minus" />
                  </button>
                </span>
                <input
                  type="text"
                  name="quant[1]"
                  className="border-0 text-center form-control input-number"
                  data-min={0}
                  data-max={10}
                  defaultValue={0}
                />
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn counter-btn theme-cl btn-number"
                    data-type="plus"
                    data-field="quant[1]"
                  >
                    <i className="fa fa-plus" />
                  </button>
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 mt-4">
              <label className="mb-4">Children</label>
              <div className="input-group">
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn counter-btn theme-cl btn-number"
                    disabled="disabled"
                    data-type="minus"
                    data-field="quant[2]"
                  >
                    <i className="fa fa-minus" />
                  </button>
                </span>
                <input
                  type="text"
                  name="quant[2]"
                  className="border-0 text-center form-control input-number"
                  data-min={0}
                  data-max={10}
                  defaultValue={0}
                />
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn counter-btn theme-cl btn-number"
                    data-type="plus"
                    data-field="quant[2]"
                  >
                    <i className="fa fa-plus" />
                  </button>
                </span>
              </div>
            </div>
          </div>
          <a
            href="payment-method.html"
            className="btn reservation btn-radius theme-btn full-width mrg-top-10"
          >
            Submit Request
          </a>
        </div>
      </div>
    </>
  );
}
