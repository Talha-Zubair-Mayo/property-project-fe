import React from 'react';
export default function UserInvoice() {
  return (
    <div className="col-lg-9 mt-3 col-md-12 col-xs-12 py-0 pl-0 user-dash2">
      {/* Print Button */}
      <div className="print-button-container">
        <a href="javascript:window.print()" className="print-button">
          Print this invoice
        </a>
      </div>
      <div className="invoice mb-0">
        <div className="card border-0">
          <div className="card-body p-0">
            <div className="row p-5 the-five">
              <div className="col-md-6">
                <img src={process.env.PUBLIC_URL + '/images/logo.svg'} width={80} alt="Logo" />
              </div>
              <div className="col-md-6 text-right">
                <p className="font-weight-bold mb-1">Invoice #550</p>
                <p className="text-muted">Due to: 4 Jan, 2020</p>
              </div>
            </div>
            <hr className="my-5" />
            <div className="row pb-5 p-5 the-five">
              <div className="col-md-6">
                <h3 className="font-weight-bold mb-4">Invoice To</h3>
                <p className="mb-0 font-weight-bold">Carls Jhons</p>
                <p className="mb-0">Acme Inc</p>
                <p className="mb-0">Est St, 77 - Central Park, NYC</p>
                <p className="mb-0">6781 45P</p>
              </div>
              <div className="col-md-6 text-right">
                <h3 className="font-weight-bold mb-4">Payment Details</h3>
                <p className="mb-1">
                  <span className="text-muted">VAT: </span> 1425782
                </p>
                <p className="mb-1">
                  <span className="text-muted">VAT ID: </span> 10253642
                </p>
                <p className="mb-1">
                  <span className="text-muted">Payment Type: </span> Root
                </p>
                <p className="mb-1">
                  <span className="text-muted">Name: </span> John Doe
                </p>
              </div>
            </div>
            <div className="row p-5 the-five">
              <div className="col-md-12">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="border-0 text-uppercase small font-weight-bold">
                        Description
                      </th>
                      <th className="border-0 text-uppercase small font-weight-bold">Price</th>
                      <th className="border-0 text-uppercase small font-weight-bold">VAT (10%)</th>
                      <th className="border-0 text-uppercase small font-weight-bold">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Standard Plan</td>
                      <td>$40</td>
                      <td>$7.55</td>
                      <td>$47.55</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="d-flex flex-row-reverse bg-dark text-white p-4">
              <div className="py-3 px-5 text-left">
                <div className="mb-2">Grand Total</div>
                <div className="h2 font-weight-light">$42.79</div>
              </div>
              <div className="py-3 px-5 text-right">
                <div className="mb-2">Discount</div>
                <div className="h2 font-weight-light">10%</div>
              </div>
              <div className="py-3 px-5 text-left">
                <div className="mb-2">Sub - Total</div>
                <div className="h2 font-weight-light">$47.55</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
