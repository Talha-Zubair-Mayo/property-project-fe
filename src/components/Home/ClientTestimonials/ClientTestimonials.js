import React from 'react';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Slider from 'react-slick';

export default function ClientTestimonials() {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
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
      <section className="testimonials bg-white-2 rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>Clients </span>Testimonials
            </h2>
            <p>We collect reviews from our customers.</p>
          </div>

          <Slider {...settings}>
            <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>
            <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>  <div className="singleJobClinet" data-aos="zoom-in" data-aos-delay={350}>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore gna a. Ut enim ad minim veniam,
              </p>
              <div className="detailJC">
                <span>
                  <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-1.jpg"} alt="" />
                </span>
                <h5>Lisa Smith</h5>
                <p>New York</p>
              </div>
            </div>
          </Slider>


        </div>
      </section>
    </>
  );
}
