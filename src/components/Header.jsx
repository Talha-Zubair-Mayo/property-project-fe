import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Header = () => {
  const options = {
    loop: true,
    margin: 5,
    items: 4,
    autoplay: true,
  };
  return (
    <>
      {/* Wrapper */}
      <div id="wrapper">
        <section
          id="hero-area"
          className="parallax-searchs home15 overlay thome-6 thome-1"
          data-stellar-background-ratio="0.5"
        >
          <div className="hero-main">
            <div className="container" data-aos="zoom-in">
              <div className="row">
                <div className="col-12">
                  <div className="hero-inner">
                    {/* Welcome Text */}
                    <div className="welcome-text">
                      <h1 className="h1">
                        Find Your Dream
                        <br className="d-md-none" />
                        <span className="typed border-bottom" />
                      </h1>
                      <p className="mt-4">We Have Over Million Properties For You.</p>
                    </div>
                    {/*/ End Welcome Text */}
                    {/* Search Form */}
                    <div className="col-12">
                      <div className="banner-search-wrap">
                        <ul className="nav nav-tabs rld-banner-tab">
                          <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#tabs_1">
                              For Sale
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#tabs_2">
                              For Rent
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          <div className="tab-pane fade show active" id="tabs_1">
                            <div className="rld-main-search">
                              <div className="row">
                                <div className="rld-single-input">
                                  <input type="text" placeholder="Enter Keyword..." />
                                </div>
                                <div className="rld-single-select ml-22">
                                  <select className="select single-select">
                                    <option value={1}>Property Type</option>
                                    <option value={2}>Family House</option>
                                    <option value={3}>Apartment</option>
                                    <option value={3}>Condo</option>
                                  </select>
                                </div>
                                <div className="rld-single-select">
                                  <select className="select single-select mr-0">
                                    <option value={1}>Location</option>
                                    <option value={2}>Los Angeles</option>
                                    <option value={3}>Chicago</option>
                                    <option value={3}>Philadelphia</option>
                                    <option value={3}>San Francisco</option>
                                    <option value={3}>Miami</option>
                                    <option value={3}>Houston</option>
                                  </select>
                                </div>
                                <div className="dropdown-filter d-none d-none d-lg-none d-xl-block">
                                  <span>Advanced Search</span>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                                  <a className="btn btn-yellow" href="#">
                                    Search Now
                                  </a>
                                </div>
                                <div className="explore__form-checkbox-list full-filter d-none d-none d-lg-none d-xl-flex">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                      {/* Form Property Status */}
                                      <div className="form-group categories">
                                        <div className="nice-select form-control wide" tabIndex={0}>
                                          <span className="current">
                                            <i className="fa fa-home" />
                                            Property Status
                                          </span>
                                          <ul className="list">
                                            <li data-value={1} className="option selected ">
                                              For Sale
                                            </li>
                                            <li data-value={2} className="option">
                                              For Rent
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {/*/ End Form Property Status */}
                                    </div>
                                    <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                      {/* Form Bedrooms */}
                                      <div className="form-group beds">
                                        <div className="nice-select form-control wide" tabIndex={0}>
                                          <span className="current">
                                            <i className="fa fa-bed" aria-hidden="true" />
                                            Bedrooms
                                          </span>
                                          <ul className="list">
                                            <li data-value={1} className="option selected">
                                              1
                                            </li>
                                            <li data-value={2} className="option">
                                              2
                                            </li>
                                            <li data-value={3} className="option">
                                              3
                                            </li>
                                            <li data-value={3} className="option">
                                              4
                                            </li>
                                            <li data-value={3} className="option">
                                              5
                                            </li>
                                            <li data-value={3} className="option">
                                              6
                                            </li>
                                            <li data-value={3} className="option">
                                              7
                                            </li>
                                            <li data-value={3} className="option">
                                              8
                                            </li>
                                            <li data-value={3} className="option">
                                              9
                                            </li>
                                            <li data-value={3} className="option">
                                              10
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {/*/ End Form Bedrooms */}
                                    </div>
                                    <div className="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                                      {/* Form Bathrooms */}
                                      <div className="form-group bath">
                                        <div className="nice-select form-control wide" tabIndex={0}>
                                          <span className="current">
                                            <i className="fa fa-bath" aria-hidden="true" />
                                            Bathrooms
                                          </span>
                                          <ul className="list">
                                            <li data-value={1} className="option selected">
                                              1
                                            </li>
                                            <li data-value={2} className="option">
                                              2
                                            </li>
                                            <li data-value={3} className="option">
                                              3
                                            </li>
                                            <li data-value={3} className="option">
                                              4
                                            </li>
                                            <li data-value={3} className="option">
                                              5
                                            </li>
                                            <li data-value={3} className="option">
                                              6
                                            </li>
                                            <li data-value={3} className="option">
                                              7
                                            </li>
                                            <li data-value={3} className="option">
                                              8
                                            </li>
                                            <li data-value={3} className="option">
                                              9
                                            </li>
                                            <li data-value={3} className="option">
                                              10
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {/*/ End Form Bathrooms */}
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 py-1 pr-30 mr-5 sld">
                                      {/* Price Fields */}
                                      <div className="main-search-field-2">
                                        {/* Area Range */}
                                        <div className="range-slider">
                                          <label>Area Size</label>
                                          <div
                                            id="area-range"
                                            data-min={0}
                                            data-max={1300}
                                            data-unit="sq ft"
                                          />
                                          <div className="clearfix" />
                                        </div>
                                        <br />
                                        {/* Price Range */}
                                        <div className="range-slider">
                                          <label>Price Range</label>
                                          <div
                                            id="price-range"
                                            data-min={0}
                                            data-max={600000}
                                            data-unit="$"
                                          />
                                          <div className="clearfix" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                      {/* Checkboxes */}
                                      <div className="checkboxes one-in-row margin-bottom-10 ch-1">
                                        <input id="check-2" type="checkbox" name="check" />
                                        <label htmlFor="check-2">Air Conditioning</label>
                                        <input id="check-3" type="checkbox" name="check" />
                                        <label htmlFor="check-3">Swimming Pool</label>
                                        <input id="check-4" type="checkbox" name="check" />
                                        <label htmlFor="check-4">Central Heating</label>
                                        <input id="check-5" type="checkbox" name="check" />
                                        <label htmlFor="check-5">Laundry Room</label>
                                        <input id="check-6" type="checkbox" name="check" />
                                        <label htmlFor="check-6">Gym</label>
                                        <input id="check-7" type="checkbox" name="check" />
                                        <label htmlFor="check-7">Alarm</label>
                                        <input id="check-8" type="checkbox" name="check" />
                                        <label htmlFor="check-8">Window Covering</label>
                                      </div>
                                      {/* Checkboxes / End */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                      {/* Checkboxes */}
                                      <div className="checkboxes one-in-row margin-bottom-10 ch-2">
                                        <input id="check-9" type="checkbox" name="check" />
                                        <label htmlFor="check-9">WiFi</label>
                                        <input id="check-10" type="checkbox" name="check" />
                                        <label htmlFor="check-10">TV Cable</label>
                                        <input id="check-11" type="checkbox" name="check" />
                                        <label htmlFor="check-11">Dryer</label>
                                        <input id="check-12" type="checkbox" name="check" />
                                        <label htmlFor="check-12">Microwave</label>
                                        <input id="check-13" type="checkbox" name="check" />
                                        <label htmlFor="check-13">Washer</label>
                                        <input id="check-14" type="checkbox" name="check" />
                                        <label htmlFor="check-14">Refrigerator</label>
                                        <input id="check-15" type="checkbox" name="check" />
                                        <label htmlFor="check-15">Outdoor Shower</label>
                                      </div>
                                      {/* Checkboxes / End */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="tabs_2">
                            <div className="rld-main-search">
                              <div className="row">
                                <div className="rld-single-input">
                                  <input type="text" placeholder="Enter Keyword..." />
                                </div>
                                <div className="rld-single-select ml-22">
                                  <select className="select single-select">
                                    <option value={1}>Property Type</option>
                                    <option value={2}>Family House</option>
                                    <option value={3}>Apartment</option>
                                    <option value={3}>Condo</option>
                                  </select>
                                </div>
                                <div className="rld-single-select">
                                  <select className="select single-select mr-0">
                                    <option value={1}>Location</option>
                                    <option value={2}>Los Angeles</option>
                                    <option value={3}>Chicago</option>
                                    <option value={3}>Philadelphia</option>
                                    <option value={3}>San Francisco</option>
                                    <option value={3}>Miami</option>
                                    <option value={3}>Houston</option>
                                  </select>
                                </div>
                                <div className="dropdown-filter">
                                  <span>Advanced Search</span>
                                </div>
                                <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                                  <a className="btn btn-yellow" href="#">
                                    Search Now
                                  </a>
                                </div>
                                <div className="explore__form-checkbox-list full-filter">
                                  <div className="row">
                                    <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0">
                                      {/* Form Property Status */}
                                      <div className="form-group categories">
                                        <div className="nice-select form-control wide" tabIndex={0}>
                                          <span className="current">
                                            <i className="fa fa-home" />
                                            Property Status
                                          </span>
                                          <ul className="list">
                                            <li data-value={1} className="option selected ">
                                              For Sale
                                            </li>
                                            <li data-value={2} className="option">
                                              For Rent
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {/*/ End Form Property Status */}
                                    </div>
                                    <div className="col-lg-4 col-md-6 py-1 pr-30 pl-0 ">
                                      {/* Form Bedrooms */}
                                      <div className="form-group beds">
                                        <div className="nice-select form-control wide" tabIndex={0}>
                                          <span className="current">
                                            <i className="fa fa-bed" aria-hidden="true" />
                                            Bedrooms
                                          </span>
                                          <ul className="list">
                                            <li data-value={1} className="option selected">
                                              1
                                            </li>
                                            <li data-value={2} className="option">
                                              2
                                            </li>
                                            <li data-value={3} className="option">
                                              3
                                            </li>
                                            <li data-value={3} className="option">
                                              4
                                            </li>
                                            <li data-value={3} className="option">
                                              5
                                            </li>
                                            <li data-value={3} className="option">
                                              6
                                            </li>
                                            <li data-value={3} className="option">
                                              7
                                            </li>
                                            <li data-value={3} className="option">
                                              8
                                            </li>
                                            <li data-value={3} className="option">
                                              9
                                            </li>
                                            <li data-value={3} className="option">
                                              10
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {/*/ End Form Bedrooms */}
                                    </div>
                                    <div className="col-lg-4 col-md-6 py-1 pl-0 pr-0">
                                      {/* Form Bathrooms */}
                                      <div className="form-group bath">
                                        <div className="nice-select form-control wide" tabIndex={0}>
                                          <span className="current">
                                            <i className="fa fa-bath" aria-hidden="true" />
                                            Bathrooms
                                          </span>
                                          <ul className="list">
                                            <li data-value={1} className="option selected">
                                              1
                                            </li>
                                            <li data-value={2} className="option">
                                              2
                                            </li>
                                            <li data-value={3} className="option">
                                              3
                                            </li>
                                            <li data-value={3} className="option">
                                              4
                                            </li>
                                            <li data-value={3} className="option">
                                              5
                                            </li>
                                            <li data-value={3} className="option">
                                              6
                                            </li>
                                            <li data-value={3} className="option">
                                              7
                                            </li>
                                            <li data-value={3} className="option">
                                              8
                                            </li>
                                            <li data-value={3} className="option">
                                              9
                                            </li>
                                            <li data-value={3} className="option">
                                              10
                                            </li>
                                          </ul>
                                        </div>
                                      </div>
                                      {/*/ End Form Bathrooms */}
                                    </div>
                                    <div className="col-lg-5 col-md-12 col-sm-12 py-1 pr-30 mr-5 sld">
                                      {/* Price Fields */}
                                      <div className="main-search-field-2">
                                        {/* Area Range */}
                                        <div className="range-slider">
                                          <label>Area Size</label>
                                          <div
                                            id="area-range-rent"
                                            data-min={0}
                                            data-max={1300}
                                            data-unit="sq ft"
                                          />
                                          <div className="clearfix" />
                                        </div>
                                        <br />
                                        {/* Price Range */}
                                        <div className="range-slider">
                                          <label>Price Range</label>
                                          <div
                                            id="price-range-rent"
                                            data-min={0}
                                            data-max={600000}
                                            data-unit="$"
                                          />
                                          <div className="clearfix" />
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                      {/* Checkboxes */}
                                      <div className="checkboxes one-in-row margin-bottom-10 ch-1">
                                        <input id="check-16" type="checkbox" name="check" />
                                        <label htmlFor="check-16">Air Conditioning</label>
                                        <input id="check-17" type="checkbox" name="check" />
                                        <label htmlFor="check-17">Swimming Pool</label>
                                        <input id="check-18" type="checkbox" name="check" />
                                        <label htmlFor="check-18">Central Heating</label>
                                        <input id="check-19" type="checkbox" name="check" />
                                        <label htmlFor="check-19">Laundry Room</label>
                                        <input id="check-20" type="checkbox" name="check" />
                                        <label htmlFor="check-20">Gym</label>
                                        <input id="check-21" type="checkbox" name="check" />
                                        <label htmlFor="check-21">Alarm</label>
                                        <input id="check-22" type="checkbox" name="check" />
                                        <label htmlFor="check-22">Window Covering</label>
                                      </div>
                                      {/* Checkboxes / End */}
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-sm-12 py-1 pr-30">
                                      {/* Checkboxes */}
                                      <div className="checkboxes one-in-row margin-bottom-10 ch-2">
                                        <input id="check-23" type="checkbox" name="check" />
                                        <label htmlFor="check-23">WiFi</label>
                                        <input id="check-24" type="checkbox" name="check" />
                                        <label htmlFor="check-24">TV Cable</label>
                                        <input id="check-25" type="checkbox" name="check" />
                                        <label htmlFor="check-25">Dryer</label>
                                        <input id="check-26" type="checkbox" name="check" />
                                        <label htmlFor="check-26">Microwave</label>
                                        <input id="check-27" type="checkbox" name="check" />
                                        <label htmlFor="check-27">Washer</label>
                                        <input id="check-28" type="checkbox" name="check" />
                                        <label htmlFor="check-28">Refrigerator</label>
                                        <input id="check-29" type="checkbox" name="check" />
                                        <label htmlFor="check-29">Outdoor Shower</label>
                                      </div>
                                      {/* Checkboxes / End */}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*/ End Search Form */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="feature-categories bg-white rec-pro">
          <div className="container-fluid">
            <div className="sec-title">
              <h2>
                <span>Popular </span>Places
              </h2>
              <p>Properties In Most Popular Places.</p>
            </div>
            <div className="row">
              {/* Single category */}
              <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="small-category-2">
                  <div className="small-category-2-thumb img-1">
                    <a href="properties-full-grid-1.html">
                      <img src={process.env.PUBLIC_URL + 'images/popular-places/12.jpg'} alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-full-grid-1.html">New York</a>
                    </h4>
                    <span>203 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={250}>
                <div className="small-category-2">
                  <div className="small-category-2-thumb img-2">
                    <a href="properties-full-grid-1.html">
                      <img src={process.env.PUBLIC_URL + 'images/popular-places/13.jpg'} alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-full-grid-1.html">Los Angeles</a>
                    </h4>
                    <span>307 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={350}>
                <div className="small-category-2">
                  <div className="small-category-2-thumb img-3">
                    <a href="properties-full-grid-1.html">
                      <img src={process.env.PUBLIC_URL + 'images/popular-places/14.jpg'} alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-full-grid-1.html">San Francisco</a>
                    </h4>
                    <span>409 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={450}>
                <div className="small-category-2">
                  <div className="small-category-2-thumb img-3">
                    <a href="properties-full-grid-1.html">
                      <img src={process.env.PUBLIC_URL + 'images/popular-places/9.jpg'} alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-full-grid-1.html">Atlanta</a>
                    </h4>
                    <span>409 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={150}>
                <div className="small-category-2 mob-mt">
                  <div className="small-category-2-thumb img-8">
                    <a href="properties-full-grid-1.html">
                      <img src={process.env.PUBLIC_URL + 'images/popular-places/15.jpg'} alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-full-grid-1.html">Miami</a>
                    </h4>
                    <span>145 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={250}>
                <div className="small-category-2">
                  <div className="small-category-2-thumb img-10">
                    <a href="properties-full-grid-1.html">
                      <img src={process.env.PUBLIC_URL + 'images/popular-places/10.jpg'} alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-full-grid-1.html">Chicago</a>
                    </h4>
                    <span>112 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={350}>
                <div className="small-category-2 si-mt">
                  <div className="small-category-2-thumb img-11">
                    <a href="properties-full-grid-1.html">
                      <img src={process.env.PUBLIC_URL + 'images/popular-places/5.jpg'} alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-full-grid-1.html">Houston</a>
                    </h4>
                    <span>254 Properties</span>
                  </div>
                </div>
              </div>
              {/* Single category */}
              <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={450}>
                <div className="small-category-2 no-mb si-mt">
                  <div className="small-category-2-thumb img-11">
                    <a href="properties-full-grid-1.html">
                      <img src={process.env.PUBLIC_URL + 'images/popular-places/6.jpg'} alt="" />
                    </a>
                  </div>
                  <div className="sc-2-detail">
                    <h4 className="sc-jb-title">
                      <a href="properties-full-grid-1.html">Orlando</a>
                    </h4>
                    <span>254 Properties</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
        </section>
        {/* END SECTION POPULAR PLACES */}
        {/* START SECTION FEATURED PROPERTIES */}
        <section className="featured portfolio bg-white-2 rec-pro full-l">
          <div className="container-fluid">
            <div className="sec-title">
              <h2>
                <span>Featured </span>Properties
              </h2>
              <p>These are our featured properties</p>
            </div>
            <div className="row portfolio-items">
              <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 landscapes sale">
                <div className="project-single" data-aos="fade-right">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button alt featured">Featured</div>
                        <div className="homes-tag button alt sale">For Sale</div>
                        <img
                          src={process.env.PUBLIC_URL + 'images/blog/b-11.jpg'}
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a href="single-property-2.html" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">Real Luxury Family House Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-square mr-2" aria-hidden="true" />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="price-properties footer pt-3 pb-0">
                      <h3 className="title mt-3">
                        <a href="single-property-1.html">$ 150,000</a>
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
              <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 people rent">
                <div className="project-single" data-aos="fade-left">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button sale rent">For Rent</div>
                        <img
                          src={process.env.PUBLIC_URL + 'images/blog/b-12.jpg'}
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a href="single-property-2.html" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">Real Luxury Family House Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-square mr-2" aria-hidden="true" />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="price-properties footer pt-3 pb-0">
                      <h3 className="title mt-3">
                        <a href="single-property-1.html">$ 150,000</a>
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
              <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 people landscapes sale">
                <div className="project-single" data-aos="fade-right">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button alt sale">For Sale</div>
                        <img
                          src={process.env.PUBLIC_URL + 'images/blog/b-1.jpg'}
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a href="single-property-2.html" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">Real Luxury Family House Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-square mr-2" aria-hidden="true" />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="price-properties footer pt-3 pb-0">
                      <h3 className="title mt-3">
                        <a href="single-property-1.html">$ 150,000</a>
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
              <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 people landscapes rent no-pb">
                <div className="project-single no-mb" data-aos="fade-left">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button alt featured">Featured</div>
                        <div className="homes-tag button sale rent">For Rent</div>
                        <img
                          src={process.env.PUBLIC_URL + 'images/feature-properties/fp-10.jpg'}
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a href="single-property-2.html" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">Real Luxury Family House Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="properties-details.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-square mr-2" aria-hidden="true" />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="price-properties footer pt-3 pb-0">
                      <h3 className="title mt-3">
                        <a href="single-property-1.html">$ 150,000</a>
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
              <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 people sale no-pb">
                <div className="project-single no-mb" data-aos="fade-right">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button alt featured">Featured</div>
                        <div className="homes-tag button alt sale">For Sale</div>
                        <img
                          src={process.env.PUBLIC_URL + 'images/feature-properties/fp-11.jpg'}
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a href="single-property-2.html" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">Real Luxury Family House Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-square mr-2" aria-hidden="true" />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="price-properties footer pt-3 pb-0">
                      <h3 className="title mt-3">
                        <a href="single-property-1.html">$ 150,000</a>
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
              <div className="item col-xl-6 col-lg-12 col-md-12 col-xs-12 it2 web rent no-pb">
                <div className="project-single no-mb last" data-aos="fade-left">
                  <div className="project-inner project-head">
                    <div className="homes">
                      {/* homes img */}
                      <a href="single-property-1.html" className="homes-img">
                        <div className="homes-tag button sale rent">For Rent</div>
                        <img
                          src={process.env.PUBLIC_URL + 'images/feature-properties/fp-12.jpg'}
                          alt="home-1"
                          className="img-responsive"
                        />
                      </a>
                    </div>
                    <div className="button-effect">
                      <a href="single-property-1.html" className="btn">
                        <i className="fa fa-link" />
                      </a>
                      <a
                        href="https://www.youtube.com/watch?v=14semTlwyUY"
                        className="btn popup-video popup-youtube"
                      >
                        <i className="fas fa-video" />
                      </a>
                      <a href="single-property-2.html" className="img-poppu btn">
                        <i className="fa fa-photo" />
                      </a>
                    </div>
                  </div>
                  {/* homes content */}
                  <div className="homes-content">
                    {/* homes address */}
                    <h3>
                      <a href="single-property-1.html">Real Luxury Family House Villa</a>
                    </h3>
                    <p className="homes-address mb-3">
                      <a href="single-property-1.html">
                        <i className="fa fa-map-marker" />
                        <span>Est St, 77 - Central Park South, NYC</span>
                      </a>
                    </p>
                    {/* homes List */}
                    <ul className="homes-list clearfix pb-3">
                      <li className="the-icons">
                        <i className="flaticon-bed mr-2" aria-hidden="true" />
                        <span>6 Bedrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                        <span>3 Bathrooms</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-square mr-2" aria-hidden="true" />
                        <span>720 sq ft</span>
                      </li>
                      <li className="the-icons">
                        <i className="flaticon-car mr-2" aria-hidden="true" />
                        <span>2 Garages</span>
                      </li>
                    </ul>
                    <div className="price-properties footer pt-3 pb-0">
                      <h3 className="title mt-3">
                        <a href="single-property-1.html">$ 150,000</a>
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
            </div>
            <div className="bg-all">
              <a href="properties-full-grid-1.html" className="btn btn-outline-light">
                View More
              </a>
            </div>
          </div>
        </section>
        {/* END SECTION FEATURED PROPERTIES */}
        {/* START SECTION WHY CHOOSE US */}
        <section className="how-it-works bg-white rec-pro">
          <div className="container-fluid">
            <div className="sec-title">
              <h2>
                <span>Why </span>Choose Us
              </h2>
              <p>We provide full service at every step.</p>
            </div>
            <div className="row service-1">
              <article
                className="col-lg-3 col-md-6 col-xs-12 serv"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="serv-flex">
                  <div className="art-1 img-13">
                    <img src={process.env.PUBLIC_URL + 'images/icons/icon-4.svg'} alt="" />
                    <h3>Wide Renge Of Properties</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits
                      adipisicing lacus consectetur Business Directory.
                    </p>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-3 col-md-6 col-xs-12 serv"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                <div className="serv-flex">
                  <div className="art-1 img-14">
                    <img src={process.env.PUBLIC_URL + 'images/icons/icon-5.svg'} alt="" />
                    <h3>Trusted by thousands</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits
                      adipisicing lacus consectetur Business Directory.
                    </p>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-3 col-md-6 col-xs-12 serv mb-0 pt"
                data-aos="fade-up"
                data-aos-delay={350}
              >
                <div className="serv-flex arrow">
                  <div className="art-1 img-15">
                    <img src={process.env.PUBLIC_URL + 'images/icons/icon-6.svg'} alt="" />
                    <h3>Financing made easy</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits
                      adipisicing lacus consectetur Business Directory.
                    </p>
                  </div>
                </div>
              </article>
              <article
                className="col-lg-3 col-md-6 col-xs-12 serv mb-0 pt its-2"
                data-aos="fade-up"
                data-aos-delay={450}
              >
                <div className="serv-flex">
                  <div className="art-1 img-14">
                    <img src={process.env.PUBLIC_URL + 'images/icons/icon-15.svg'} alt="" />
                    <h3>We are here near you</h3>
                  </div>
                  <div className="service-text-p">
                    <p className="text-center">
                      lorem ipsum dolor sit amet, consectetur pro adipisici consectetur debits
                      adipisicing lacus consectetur Business Directory.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* END SECTION WHY CHOOSE US */}
        {/* START SECTION RECENTLY PROPERTIES */}
        <section className="featured portfolio rec-pro disc">
          <div className="container-fluid">
            <div className="sec-title discover">
              <h2>
                <span>Discover </span>Popular Properties
              </h2>
              <p>We provide full service at every step.</p>
            </div>
            <div className="portfolio col-xl-12">
              <OwlCarousel className="owl-theme" {...options}>
                <div className="agents-grid" data-aos="fade-up" data-aos-delay={150}>
                  <div className="landscapes">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button alt featured">Featured</div>
                            <div className="homes-tag button alt sale">For Sale</div>
                            <img
                              src={process.env.PUBLIC_URL + 'images/blog/b-11.jpg'}
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a href="single-property-2.html" className="img-poppu btn">
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">Real House Luxury Villa</a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-3">
                          <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true" />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true" />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true" />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                        <div className="price-properties footer pt-3 pb-0">
                          <h3 className="title mt-3">
                            <a href="single-property-1.html">$ 350,000</a>
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
                </div>
                <div className="agents-grid" data-aos="fade-up" data-aos-delay={250}>
                  <div className="people">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button sale rent">For Rent</div>
                            <img
                              src={process.env.PUBLIC_URL + 'images/blog/b-12.jpg'}
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a href="single-property-2.html" className="img-poppu btn">
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">Real House Luxury Villa</a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-3">
                          <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true" />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true" />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true" />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                        <div className="price-properties footer pt-3 pb-0">
                          <h3 className="title mt-3">
                            <a href="single-property-1.html">$ 150,000</a>
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
                </div>
                <div className="agents-grid" data-aos="fade-up" data-aos-delay={350}>
                  <div className="people landscapes no-pb pbp-3">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button alt sale">For Sale</div>
                            <img
                              src={process.env.PUBLIC_URL + 'images/blog/b-1.jpg'}
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a href="single-property-2.html" className="img-poppu btn">
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">Real House Luxury Villa</a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-3">
                          <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true" />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true" />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true" />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                        <div className="price-properties footer pt-3 pb-0">
                          <h3 className="title mt-3">
                            <a href="single-property-1.html">$ 350,000</a>
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
                </div>
                <div className="agents-grid" data-aos="fade-up" data-aos-delay={450}>
                  <div className="landscapes">
                    <div className="project-single no-mb">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button alt featured">Featured</div>
                            <div className="homes-tag button sale rent">For Rent</div>
                            <img
                              src={process.env.PUBLIC_URL + 'images/feature-properties/fp-10.jpg'}
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a href="single-property-2.html" className="img-poppu btn">
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">Real House Luxury Villa</a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="properties-details.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-3">
                          <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true" />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true" />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true" />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                        <div className="price-properties footer pt-3 pb-0">
                          <h3 className="title mt-3">
                            <a href="single-property-1.html">$ 150,000</a>
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
                </div>
                <div className="agents-grid" data-aos="fade-up">
                  <div className="people">
                    <div className="project-single no-mb">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button alt sale">For Sale</div>
                            <img
                              src={process.env.PUBLIC_URL + 'images/feature-properties/fp-11.jpg'}
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a href="single-property-2.html" className="img-poppu btn">
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">Real House Luxury Villa</a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-3">
                          <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true" />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true" />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true" />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                        <div className="price-properties footer pt-3 pb-0">
                          <h3 className="title mt-3">
                            <a href="single-property-1.html">$ 350,000</a>
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
                </div>
                <div className="agents-grid" data-aos="fade-up">
                  <div className="people landscapes no-pb pbp-3">
                    <div className="project-single no-mb last">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button sale rent">For Rent</div>
                            <img
                              src={process.env.PUBLIC_URL + 'images/feature-properties/fp-12.jpg'}
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a href="single-property-2.html" className="img-poppu btn">
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        <h3>
                          <a href="single-property-1.html">Real House Luxury Villa</a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        <ul className="homes-list clearfix pb-3">
                          <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true" />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true" />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true" />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                        <div className="price-properties footer pt-3 pb-0">
                          <h3 className="title mt-3">
                            <a href="single-property-1.html">$ 150,000</a>
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
                </div>
                <div className="agents-grid" data-aos="fade-up">
                  <div className="landscapes">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button alt featured">Featured</div>
                            <div className="homes-tag button alt sale">For Sale</div>
                            <img
                              src={process.env.PUBLIC_URL + 'images/blog/b-11.jpg'}
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a href="single-property-2.html" className="img-poppu btn">
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      <div className="homes-content">
                        <h3>
                          <a href="single-property-1.html">Real House Luxury Villa</a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-3">
                          <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true" />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true" />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true" />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                        <div className="price-properties footer pt-3 pb-0">
                          <h3 className="title mt-3">
                            <a href="single-property-1.html">$ 350,000</a>
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
                </div>
                <div className="agents-grid" data-aos="fade-up">
                  <div className="people">
                    <div className="project-single">
                      <div className="project-inner project-head">
                        <div className="homes">
                          {/* homes img */}
                          <a href="single-property-1.html" className="homes-img">
                            <div className="homes-tag button sale rent">For Rent</div>
                            <img
                              src={process.env.PUBLIC_URL + 'images/blog/b-12.jpg'}
                              alt="home-1"
                              className="img-responsive"
                            />
                          </a>
                        </div>
                        <div className="button-effect">
                          <a href="single-property-1.html" className="btn">
                            <i className="fa fa-link" />
                          </a>
                          <a
                            href="https://www.youtube.com/watch?v=14semTlwyUY"
                            className="btn popup-video popup-youtube"
                          >
                            <i className="fas fa-video" />
                          </a>
                          <a href="single-property-2.html" className="img-poppu btn">
                            <i className="fa fa-photo" />
                          </a>
                        </div>
                      </div>
                      {/* homes content */}
                      <div className="homes-content">
                        {/* homes address */}
                        <h3>
                          <a href="single-property-1.html">Real House Luxury Villa</a>
                        </h3>
                        <p className="homes-address mb-3">
                          <a href="single-property-1.html">
                            <i className="fa fa-map-marker" />
                            <span>Est St, 77 - Central Park South, NYC</span>
                          </a>
                        </p>
                        {/* homes List */}
                        <ul className="homes-list clearfix pb-3">
                          <li className="the-icons">
                            <i className="flaticon-bed mr-2" aria-hidden="true" />
                            <span>6 Bedrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-bathtub mr-2" aria-hidden="true" />
                            <span>3 Bathrooms</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-square mr-2" aria-hidden="true" />
                            <span>720 sq ft</span>
                          </li>
                          <li className="the-icons">
                            <i className="flaticon-car mr-2" aria-hidden="true" />
                            <span>2 Garages</span>
                          </li>
                        </ul>
                        <div className="price-properties footer pt-3 pb-0">
                          <h3 className="title mt-3">
                            <a href="single-property-1.html">$ 150,000</a>
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
                </div>
              </OwlCarousel>
            </div>
          </div>
        </section>
        <section className="team bg-white rec-pro">
          <div className="container-fluid">
            <div className="sec-title">
              <h2>
                <span>Meet Our </span>Agents
              </h2>
              <p>Our Agents are here to help you</p>
            </div>
            <div className="row team-all">
              <div
                className="team-block col-sm-6 col-md-4 col-lg-4 col-xl-2"
                data-aos="fade-up"
                data-aos-delay={150}
              >
                <div className="inner-box team-details">
                  <div className="image team-head">
                    <a href="agents-listing-grid.html">
                      <img src={process.env.PUBLIC_URL + 'images/team/t-5.jpg'} alt="" />
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
              <div
                className="team-block col-sm-6 col-md-4 col-lg-4 col-xl-2"
                data-aos="fade-up"
                data-aos-delay={250}
              >
                <div className="inner-box team-details">
                  <div className="image team-head">
                    <a href="agents-listing-grid.html">
                      <img src={process.env.PUBLIC_URL + 'images/team/t-6.jpg'} alt="" />
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
              <div
                className="team-block col-sm-6 col-md-4 col-lg-4 col-xl-2"
                data-aos="fade-up"
                data-aos-delay={350}
              >
                <div className="inner-box team-details">
                  <div className="image team-head">
                    <a href="agents-listing-grid.html">
                      <img src={process.env.PUBLIC_URL + 'images/team/t-7.jpg'} alt="" />
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
                className="team-block col-sm-6 col-md-4 col-lg-4 col-xl-2 pb-none"
                data-aos="fade-up"
                data-aos-delay={450}
              >
                <div className="inner-box team-details">
                  <div className="image team-head">
                    <a href="agents-listing-grid.html">
                      <img src={process.env.PUBLIC_URL + 'images/team/t-8.jpg'} alt="" />
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
                className="team-block col-sm-6 col-md-4 col-lg-4 col-xl-2 pb-none"
                data-aos="fade-up"
                data-aos-delay={550}
              >
                <div className="inner-box team-details">
                  <div className="image team-head">
                    <a href="agents-listing-grid.html">
                      <img src={process.env.PUBLIC_URL + 'images/team/team-image-2.jpg'} alt="" />
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
                className="team-block col-sm-6 col-md-4 col-lg-4 col-xl-2 pb-none"
                data-aos="fade-up"
                data-aos-delay={650}
              >
                <div className="inner-box team-details">
                  <div className="image team-head">
                    <a href="agents-listing-grid.html">
                      <img src={process.env.PUBLIC_URL + 'images/team/team-image-7.jpg'} alt="" />
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
            </div>
          </div>
        </section>

        <a data-scroll="" href="#wrapper" className="go-up">
          <i className="fa fa-angle-double-up" aria-hidden="true" />
        </a>
      </div>
    </>
  );
};

export default Header;
