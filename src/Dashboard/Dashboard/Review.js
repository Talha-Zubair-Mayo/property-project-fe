import React from 'react';

export default function Review() {
  return (
    <>
      <div className="dashborad-box">
        <h4 className="title">Review</h4>
        <div className="section-body">
          <div className="reviews">
            <div className="review">
              <div className="thumb">
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/testimonials/ts-4.jpg"} alt="" />
              </div>
              <div className="body">
                <h5>Family House</h5>
                <h6>Mary Smith</h6>
                <p className="post-time">10 hours ago</p>
                <p className="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                </p>
                <ul className="starts mb-0">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
                <div className="controller">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-trash-alt" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="thumb">
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/testimonials/ts-5.jpg"} alt="" />
              </div>
              <div className="body">
                <h5>Bay Apartment</h5>
                <h6>Karl Tyron</h6>
                <p className="post-time">22 hours ago</p>
                <p className="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                </p>
                <ul className="starts mb-0">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
                <div className="controller">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-trash-alt" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="review">
              <div className="thumb">
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/testimonials/ts-6.jpg"} alt="" />
              </div>
              <div className="body">
                <h5>Family House Villa</h5>
                <h6>Lisa Willis</h6>
                <p className="post-time">51 hours ago</p>
                <p className="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                </p>
                <ul className="starts mb-0">
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star" />
                  </li>
                  <li>
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
                <div className="controller">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-eye" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="far fa-trash-alt" />
                      </a>
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
