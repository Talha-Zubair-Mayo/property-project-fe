import React from 'react';
import Slider from "react-slick";

export default function FeatureProperties() {
  const settings = {
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    adaptiveHeight: true,
    loop: true,
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
      <div className="widget-boxed mt-5">
        <div className="widget-boxed-header mb-5">
          <h4>Feature Properties</h4>
        </div>
        <Slider {...settings}>
          <div className="agents-grid mr-0">
            <div className="listing-item compact">
              <a href="properties-details.html" className="listing-img-container">
                <div className="listing-badges">
                  <span className="featured">$ 230,000</span>
                  <span>For Sale</span>
                </div>
                <div className="listing-img-content">
                  <span className="listing-compact-title">
                    House Luxury <i>New York</i>
                  </span>
                  <ul className="listing-hidden-content">
                    <li>
                      Area <span>720 sq ft</span>
                    </li>
                    <li>
                      Rooms <span>6</span>
                    </li>
                    <li>
                      Beds <span>2</span>
                    </li>
                    <li>
                      Baths <span>3</span>
                    </li>
                  </ul>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-1.jpg"} alt="" />
              </a>
            </div>
          </div>
          <div className="agents-grid mr-0">
            <div className="listing-item compact">
              <a href="properties-details.html" className="listing-img-container">
                <div className="listing-badges">
                  <span className="featured">$ 6,500</span>
                  <span className="rent">For Rent</span>
                </div>
                <div className="listing-img-content">
                  <span className="listing-compact-title">
                    House Luxury <i>Los Angles</i>
                  </span>
                  <ul className="listing-hidden-content">
                    <li>
                      Area <span>720 sq ft</span>
                    </li>
                    <li>
                      Rooms <span>6</span>
                    </li>
                    <li>
                      Beds <span>2</span>
                    </li>
                    <li>
                      Baths <span>3</span>
                    </li>
                  </ul>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-2.jpg"} alt="" />
              </a>
            </div>
          </div>
          <div className="agents-grid mr-0">
            <div className="listing-item compact">
              <a href="properties-details.html" className="listing-img-container">
                <div className="listing-badges">
                  <span className="featured">$ 230,000</span>
                  <span>For Sale</span>
                </div>
                <div className="listing-img-content">
                  <span className="listing-compact-title">
                    House Luxury <i>San Francisco</i>
                  </span>
                  <ul className="listing-hidden-content">
                    <li>
                      Area <span>720 sq ft</span>
                    </li>
                    <li>
                      Rooms <span>6</span>
                    </li>
                    <li>
                      Beds <span>2</span>
                    </li>
                    <li>
                      Baths <span>3</span>
                    </li>
                  </ul>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-3.jpg"} alt="" />
              </a>
            </div>
          </div>
          <div className="agents-grid mr-0">
            <div className="listing-item compact">
              <a href="properties-details.html" className="listing-img-container">
                <div className="listing-badges">
                  <span className="featured">$ 6,500</span>
                  <span className="rent">For Rent</span>
                </div>
                <div className="listing-img-content">
                  <span className="listing-compact-title">
                    House Luxury <i>Miami FL</i>
                  </span>
                  <ul className="listing-hidden-content">
                    <li>
                      Area <span>720 sq ft</span>
                    </li>
                    <li>
                      Rooms <span>6</span>
                    </li>
                    <li>
                      Beds <span>2</span>
                    </li>
                    <li>
                      Baths <span>3</span>
                    </li>
                  </ul>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-4.jpg"} alt="" />
              </a>
            </div>
          </div>
          <div className="agents-grid mr-0">
            <div className="listing-item compact">
              <a href="properties-details.html" className="listing-img-container">
                <div className="listing-badges">
                  <span className="featured">$ 230,000</span>
                  <span>For Sale</span>
                </div>
                <div className="listing-img-content">
                  <span className="listing-compact-title">
                    House Luxury <i>Chicago IL</i>
                  </span>
                  <ul className="listing-hidden-content">
                    <li>
                      Area <span>720 sq ft</span>
                    </li>
                    <li>
                      Rooms <span>6</span>
                    </li>
                    <li>
                      Beds <span>2</span>
                    </li>
                    <li>
                      Baths <span>3</span>
                    </li>
                  </ul>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-5.jpg"} alt="" />
              </a>
            </div>
          </div>
          <div className="agents-grid mr-0">
            <div className="listing-item compact">
              <a href="properties-details.html" className="listing-img-container">
                <div className="listing-badges">
                  <span className="featured">$ 6,500</span>
                  <span className="rent">For Rent</span>
                </div>
                <div className="listing-img-content">
                  <span className="listing-compact-title">
                    House Luxury <i>Toronto CA</i>
                  </span>
                  <ul className="listing-hidden-content">
                    <li>
                      Area <span>720 sq ft</span>
                    </li>
                    <li>
                      Rooms <span>6</span>
                    </li>
                    <li>
                      Beds <span>2</span>
                    </li>
                    <li>
                      Baths <span>3</span>
                    </li>
                  </ul>
                </div>
                <img src={process.env.PUBLIC_URL + "/images/feature-properties/fp-6.jpg"} alt="" />
              </a>
            </div>
          </div>
        </Slider>

      </div>
    </>
  );
}
