import React from 'react';
import Slider from 'react-slick';

export default function MeetOurAgents() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    adaptiveHeight: true,

    responsive: [{
      breakpoint: 1292,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 993,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: false
      }
    }, {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }]
  }
  return (
    <>
      <section className="team bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Meet Our </span>Agents
            </h2>
            <p>Our Agents are here to help you</p>
          </div>
          <div className="row team-all">

          </div>
          <Slider {...settings}>
            {/*Team Block*/}
            <div
              className="team-block "
              data-aos="fade-up"
              data-aos-delay={150}
            >
              <div className="inner-box team-details">
                <div className="image team-head">
                  <a href="agents-listing-grid.html">
                    <img src={process.env.PUBLIC_URL + "/images/team/t-5.jpg"} alt="" />
                  </a>
                  <div className="team-hover">
                    <ul className="team-social">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="instagram">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lower-box">
                  <h3>
                    <a href="agents-listing-grid.html">Carls Jhons</a>
                  </h3>
                  <div className="designation">Real Estate Agent</div>
                </div>
              </div>
            </div>
            {/*Team Block*/}
            <div
              className="team-block "
              data-aos="fade-up"
              data-aos-delay={250}
            >
              <div className="inner-box team-details">
                <div className="image team-head">
                  <a href="agents-listing-grid.html">
                    <img src={process.env.PUBLIC_URL + "/images/team/t-6.jpg"} alt="" />
                  </a>
                  <div className="team-hover">
                    <ul className="team-social">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="instagram">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lower-box">
                  <h3>
                    <a href="agents-listing-grid.html">Arling Tracy</a>
                  </h3>
                  <div className="designation">Real Estate Agent</div>
                </div>
              </div>
            </div>
            {/*Team Block*/}
            <div
              className="team-block "
              data-aos="fade-up"
              data-aos-delay={350}
            >
              <div className="inner-box team-details">
                <div className="image team-head">
                  <a href="agents-listing-grid.html">
                    <img src={process.env.PUBLIC_URL + "/images/team/t-7.jpg"} alt="" />
                  </a>
                  <div className="team-hover">
                    <ul className="team-social">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="instagram">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lower-box">
                  <h3>
                    <a href="agents-listing-grid.html">Mark Web</a>
                  </h3>
                  <div className="designation">Real Estate Agent</div>
                </div>
              </div>
            </div>
            {/*Team Block*/}
            <div
              className="team-block  pb-none"
              data-aos="fade-up"
              data-aos-delay={450}
            >
              <div className="inner-box team-details">
                <div className="image team-head">
                  <a href="agents-listing-grid.html">
                    <img src={process.env.PUBLIC_URL + "/images/team/t-8.jpg"} alt="" />
                  </a>
                  <div className="team-hover">
                    <ul className="team-social">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="instagram">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lower-box">
                  <h3>
                    <a href="agents-listing-grid.html">Katy Grace</a>
                  </h3>
                  <div className="designation">Real Estate Agent</div>
                </div>
              </div>
            </div>
            <div
              className="team-block  pb-none"
              data-aos="fade-up"
              data-aos-delay={550}
            >
              <div className="inner-box team-details">
                <div className="image team-head">
                  <a href="agents-listing-grid.html">
                    <img src={process.env.PUBLIC_URL + "/images/team/team-image-2.jpg"} alt="" />
                  </a>
                  <div className="team-hover">
                    <ul className="team-social">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="instagram">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lower-box">
                  <h3>
                    <a href="agents-listing-grid.html">Chris Melo</a>
                  </h3>
                  <div className="designation">Real Estate Agent</div>
                </div>
              </div>
            </div>
            <div
              className="team-block  pb-none"
              data-aos="fade-up"
              data-aos-delay={650}
            >
              <div className="inner-box team-details">
                <div className="image team-head">
                  <a href="agents-listing-grid.html">
                    <img src={process.env.PUBLIC_URL + "/images/team/team-image-7.jpg"} alt="" />
                  </a>
                  <div className="team-hover">
                    <ul className="team-social">
                      <li>
                        <a href="#" className="facebook">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="twitter">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="instagram">
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                      <li>
                        <a href="#" className="linkedin">
                          <i className="fa fa-linkedin" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lower-box">
                  <h3>
                    <a href="agents-listing-grid.html">Nina Thomas</a>
                  </h3>
                  <div className="designation">Real Estate Agent</div>
                </div>
              </div>
            </div>
          </Slider>

        </div>
      </section>
    </>
  );
}
