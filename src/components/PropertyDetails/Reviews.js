import React from 'react';

export default function Reviews() {
  return (
    <>
      <section className="reviews comments">
        <h3 className="mb-5">3 Reviews</h3>
        <div className="row mb-5">
          <ul className="col-12 commented pl-0">
            <li className="comm-inf">
              <div className="col-md-2">
                <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-5.jpg"} className="img-fluid" alt="" />
              </div>
              <div className="col-md-10 comments-info">
                <div className="conra">
                  <h5 className="mb-2">Mary Smith</h5>
                  <div className="rating-box">
                    <div className="detail-list-rating mr-0">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                </div>
                <p className="mb-4">May 30 2020</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue
                  dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer
                  tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.
                </p>
                <div className="rest">
                  <img src={process.env.PUBLIC_URL + "/images/single-property/s-1.jpg"} className="img-fluid" alt="" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="row">
          <ul className="col-12 commented pl-0">
            <li className="comm-inf">
              <div className="col-md-2">
                <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-4.jpg"} className="img-fluid" alt="" />
              </div>
              <div className="col-md-10 comments-info">
                <div className="conra">
                  <h5 className="mb-2">Abraham Tyron</h5>
                  <div className="rating-box">
                    <div className="detail-list-rating mr-0">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                    </div>
                  </div>
                </div>
                <p className="mb-4">june 1 2020</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue
                  dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer
                  tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="row mt-5">
          <ul className="col-12 commented mb-0 pl-0">
            <li className="comm-inf">
              <div className="col-md-2">
                <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-3.jpg"} className="img-fluid" alt="" />
              </div>
              <div className="col-md-10 comments-info">
                <div className="conra">
                  <h5 className="mb-2">Lisa Williams</h5>
                  <div className="rating-box">
                    <div className="detail-list-rating mr-0">
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star" />
                      <i className="fa fa-star-o" />
                    </div>
                  </div>
                </div>
                <p className="mb-4">jul 12 2020</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue
                  dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer
                  tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.
                </p>
                <div className="resti">
                  <div className="rest">
                    <img src={process.env.PUBLIC_URL + "/images/single-property/s-2.jpg"} className="img-fluid" alt="" />
                  </div>
                  <div className="rest">
                    <img src={process.env.PUBLIC_URL + "/images/single-property/s-3.jpg"} className="img-fluid" alt="" />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
