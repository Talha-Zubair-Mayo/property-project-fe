import React from 'react';

export default function Message() {
  return (
    <>
      <div className="dashborad-box">
        <h4 className="title">Message</h4>
        <div className="section-body">
          <div className="messages">
            <div className="message">
              <div className="thumb">
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
              </div>
              <div className="body">
                <h6>Mary Smith</h6>
                <p className="post-time">22 Minutes ago</p>
                <p className="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                </p>
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
            <div className="message">
              <div className="thumb">
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/testimonials/ts-2.jpg"} alt="" />
              </div>
              <div className="body">
                <h6>Karl Tyron</h6>
                <p className="post-time">23 Minutes ago</p>
                <p className="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                </p>
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
            <div className="message">
              <div className="thumb">
                <img className="img-fluid" src={process.env.PUBLIC_URL + "/images/testimonials/ts-3.jpg"} alt="" />
              </div>
              <div className="body">
                <h6>Lisa Willis</h6>
                <p className="post-time">53 Minutes ago</p>
                <p className="content mb-0 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore
                </p>
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
