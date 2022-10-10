import React, { useEffect, useState } from 'react';
import { getAllPropertiesApi } from '../../../store/api';
import Slider from "react-slick";
import { Link } from 'react-router-dom';
export default function PopularProperties() {
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
  const [AllProperties, setAllProperties] = useState([]);
  useEffect(() => {
    getAllPropertiesApi()
      .then((property) => {
        setAllProperties(property?.data?.result);
      })
      .catch((error) => { });
  }, []);
  return (
    <>
      <section className="featured portfolio rec-pro disc">
        <div className="container-fluid">
          <div className="sec-title discover">
            <h2>
              <span>Discover </span>Popular Properties
            </h2>
            <p>We provide full service at every step.</p>
          </div>
          <div className="portfolio col-xl-12">
            <Slider {...settings}>

              {AllProperties.map((item, key) => (<div className="agents-grid" data-aos="fade-up">
                <div className="landscapes">
                  <div className="project-single">
                    <div className="project-inner project-head">
                      <div className="homes">
                        {/* homes img */}
                        <Link to={`/propertydetails?propertyId=${item?._id}`} className="homes-img">
                          {item?.featured && <div className="homes-tag button alt featured">Featured</div>}
                          {item?.status === 'sale' && <div className="homes-tag button alt sale">For Sale</div>}
                          {item?.status === 'rent' && <div className="homes-tag button sale rent">For Rent</div>}
                          <img src={process.env.REACT_APP_IMAGE_URL + item?.photo[0]} alt="home-1" className="img-responsive" />
                        </Link>
                      </div>
                      <div className="button-effect">
                        <Link to={`/propertydetails?propertyId=${item?._id}`} className="btn">
                          <i className="fa fa-link" />
                        </Link>
                        <a
                          href="https://www.youtube.com/watch?v=14semTlwyUY"
                          className="btn popup-video popup-youtube"
                        >
                          <i className="fas fa-video" />
                        </a>
                        <Link to={`/propertydetails?propertyId=${item?._id}`} className="img-poppu btn">
                          <i className="fa fa-photo" />
                        </Link>
                      </div>
                    </div>
                    {/* homes content */}
                    <div className="homes-content">
                      {/* homes address */}
                      <h3>
                        <Link to={`/propertydetails?propertyId=${item?._id}`}>   {item?.title}</Link>
                      </h3>
                      <p className="homes-address mb-3">
                        <Link to={`/propertydetails?propertyId=${item?._id}`}>
                          <i className="fa fa-map-marker" />
                          <span>{`${item?.society?.name} , ${item?.phase.name} , ${item?.block?.name} ${item?.city} , ${item?.country}`}</span>
                        </Link>
                      </p>
                      {/* homes List */}
                      <ul className="homes-list clearfix pb-3">
                        <li className="the-icons">
                          <i className="flaticon-bed mr-2" aria-hidden="true" />
                          <span>{item?.roms} Bedrooms</span>
                        </li>
                        <li className="the-icons">
                          <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                          <span>{item?.bathrooms} Bathrooms</span>
                        </li>
                        <li className="the-icons">
                          <i className="flaticon-square mr-2" aria-hidden="true" />
                          <span>{item?.area} sq ft</span>
                        </li>
                        <li className="the-icons">
                          <i className="flaticon-car mr-2" aria-hidden="true" />
                          <span>2 Garages</span>
                        </li>
                      </ul>
                      <div className="price-properties footer pt-3 pb-0">
                        <h3 className="title mt-3">
                          <Link to={`/propertydetails?propertyId=${item?._id}`}>${item?.price}</Link>
                        </h3>
                        <div className="compare">
                          <a href="#" title="Compare">
                            <i className="flaticon-compare" />
                          </a>
                          <a href="#" title="Share">
                            <i className="flaticon-share" />
                          </a>
                          <a href="#" title="Favorites">
                            <i className="flaticon-heart" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>))}

            </Slider>

          </div>
        </div>
      </section>
    </>
  );
}
