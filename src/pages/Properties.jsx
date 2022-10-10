import React, { useState, useEffect } from 'react';
import PropertiesGridView from '../components/Properties/PropertiesGridView';
import SearchForm from '../components/Home/SearchForm';
import PropertiesListview from '../components/Properties/PropertiesListView';
import {
  getPropertyBySocietyPhaseAndBlockIdApi,
  getAllPropertiesApi,
  getPropertiesByUserIdApi,
} from '../store/api';
import { useLocation } from 'react-router-dom';
import Loading from '../utils/LoadingScreen';

export default function PropertiesGrid() {
  const [Gridview, setGridView] = useState(true);
  const [toggleAdvancedFeatures, setToggleAdvancedFeatures] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const ToggleView = (view) => {
    if (view === 'Grid') {
      setGridView(true);
    } else {
      setGridView(false);
    }
  };

  const search = useLocation().search;
  const society = new URLSearchParams(search).get('society');
  const phase = new URLSearchParams(search).get('phase');
  const block = new URLSearchParams(search).get('block');
  const agent = new URLSearchParams(search).get('agent');
  const [AllProperties, setAllProperties] = useState([]);
  useEffect(() => {
    if (society && phase && block !== null) {
      setIsLoading(true);
      getPropertyBySocietyPhaseAndBlockIdApi(society, phase, block)
        .then((property) => {
          setAllProperties(property?.data?.result);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } else if (agent !== null) {
      setIsLoading(true);
      getPropertiesByUserIdApi(agent)
        .then((property) => {
          setAllProperties(property?.data?.result);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      getAllPropertiesApi()
        .then((property) => {
          setAllProperties(property?.data?.result);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  }, [society, phase, block, agent]);

  return (
    <>
      <div className="inner-pages homepage-4 agents list hp-6   full hd-white">
        <section className="properties-list full featured portfolio blog  p-5">
          <div className="container-fluid ">
            <div class="row">
              <div class="col-lg-8 col-md-12 blog-pots">
                <section className="headings-2 pt-0">
                  <div className="pro-wrapper">
                    <div className="detail-wrapper-body">
                      <div className="listing-title-bar">
                        <div className="text-heading text-left">
                          <p className="font-weight-bold mb-0 mt-3">{AllProperties.length} found</p>
                        </div>
                      </div>
                    </div>
                    <div className="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center grid">
                      <div className="input-group border rounded input-group-lg w-auto mr-4">
                        <label
                          className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3"
                          htmlFor="inputGroupSelect01"
                        >
                          <i className="fas fa-align-left fs-16 pr-2" />
                          Sortby:
                        </label>
                        <select
                          className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby"
                          data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                          id="inputGroupSelect01"
                          name="sortby"
                        >
                          <option selected="">Top Selling</option>
                          <option value={1}>Most Viewed</option>
                          <option value={2}>Price(low to high)</option>
                          <option value={3}>Price(high to low)</option>
                        </select>
                      </div>
                      <div className="sorting-options">
                        <a
                          onClick={() => ToggleView('List')}
                          className={
                            Gridview === true
                              ? 'cursor-pointer change-view-btn lde'
                              : 'cursor-pointer change-view-btn active-view-btn'
                          }
                        >
                          <i className="fa fa-th-list" />
                        </a>
                        <a
                          onClick={() => ToggleView('Grid')}
                          className={
                            Gridview === false
                              ? 'cursor-pointer change-view-btn lde'
                              : 'cursor-pointer change-view-btn active-view-btn'
                          }
                        >
                          <i className="fa fa-th-large" />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="row">
                  {Gridview ? (
                    <PropertiesGridView AllProperties={AllProperties} />
                  ) : (
                    <PropertiesListview AllProperties={AllProperties} />
                  )}
                </div>
              </div>
              <aside className="col-lg-4 col-md-12 car">
                <div className="widget">
                  {/* Search Fields */}
                  <div className="widget-boxed main-search-field">
                    <div className="widget-boxed-header">
                      <h4>Find Your House</h4>
                    </div>
                    {/* Search Form */}
                    <div className="trip-search">
                      <form className="form">
                        {/* Form Lookin for */}
                        <div className="form-group looking">
                          <div className="first-select wide">
                            <div className="main-search-input-item">
                              <input type="text" placeholder="Enter Keyword..." defaultValue="" />
                            </div>
                          </div>
                        </div>
                        {/*/ End Form Lookin for */}
                        {/* Form Location */}
                        <div className="form-group location">
                          <div className="nice-select form-control wide" tabIndex={0}>
                            <span className="current">
                              <i className="fa fa-map-marker" />
                              Location
                            </span>
                            <ul className="list">
                              <li data-value={1} className="option selected ">
                                New York
                              </li>
                              <li data-value={2} className="option">
                                Los Angeles
                              </li>
                              <li data-value={3} className="option">
                                Chicago
                              </li>
                              <li data-value={3} className="option">
                                Philadelphia
                              </li>
                              <li data-value={3} className="option">
                                San Francisco
                              </li>
                              <li data-value={3} className="option">
                                Miami
                              </li>
                              <li data-value={3} className="option">
                                Houston
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*/ End Form Location */}
                        {/* Form Categories */}
                        <div className="form-group categories">
                          <div className="nice-select form-control wide" tabIndex={0}>
                            <span className="current">
                              <i className="fa fa-home" aria-hidden="true" />
                              Property Type
                            </span>
                            <ul className="list">
                              <li data-value={1} className="option selected ">
                                House
                              </li>
                              <li data-value={2} className="option">
                                Apartment
                              </li>
                              <li data-value={3} className="option">
                                Condo
                              </li>
                              <li data-value={3} className="option">
                                Land
                              </li>
                              <li data-value={3} className="option">
                                Bungalow
                              </li>
                              <li data-value={3} className="option">
                                Single Family
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/*/ End Form Categories */}
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
                        {/* Form Bedrooms */}
                        <div className="form-group beds">
                          <div className="nice-select form-control wide" tabIndex={0}>
                            <span className="current">
                              <i className="fa fa-bed" aria-hidden="true" /> Bedrooms
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
                        {/* Form Bathrooms */}
                        <div className="form-group bath">
                          <div className="nice-select form-control wide" tabIndex={0}>
                            <span className="current">
                              <i className="fa fa-bath" aria-hidden="true" /> Bathrooms
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
                      </form>
                    </div>
                    {/*/ End Search Form */}
                    {/* Price Fields */}
                    <div className="main-search-field-2">
                      {/* Area Range */}
                      <div className="range-slider">
                        <label>Area Size</label>
                        <div id="area-range" data-min={0} data-max={1300} data-unit="sq ft" />
                        <div className="clearfix" />
                      </div>
                      <br />
                      {/* Price Range */}
                      <div className="range-slider">
                        <label>Price Range</label>
                        <div id="price-range" data-min={0} data-max={600000} data-unit="$" />
                        <div className="clearfix" />
                      </div>
                    </div>
                    {/* More Search Options */}
                    <a
                      onClick={() => setToggleAdvancedFeatures(!toggleAdvancedFeatures)}
                      type="button"
                      className="more-search-options-trigger margin-bottom-10 margin-top-30"
                      data-open-title="Advanced Features"
                      data-close-title="Advanced Features"
                    />
                    <div
                      className="more-search-options relative  active"
                      style={{ display: toggleAdvancedFeatures ? 'block' : 'none' }}
                    >
                      {/* Checkboxes */}
                      <div className="checkboxes one-in-row margin-bottom-10">
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
                    </div>
                    {/* More Search Options / End */}
                    <div className="col-lg-12 no-pds">
                      <div className="at-col-default-mar">
                        <button className="btn btn-default hvr-bounce-to-right" type="submit">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="widget-boxed popular mt-5 mb-0">
                    <div className="widget-boxed-header">
                      <h4>Popular Tags</h4>
                    </div>
                    <div className="widget-boxed-body">
                      <div className="recent-post">
                        <div className="tags">
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Houses
                            </a>
                          </span>
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Real Home
                            </a>
                          </span>
                        </div>
                        <div className="tags">
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Baths
                            </a>
                          </span>
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Beds
                            </a>
                          </span>
                        </div>
                        <div className="tags">
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Garages
                            </a>
                          </span>
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Family
                            </a>
                          </span>
                        </div>
                        <div className="tags">
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Real Estates
                            </a>
                          </span>
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Properties
                            </a>
                          </span>
                        </div>
                        <div className="tags no-mb">
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Location
                            </a>
                          </span>
                          <span>
                            <a href="#" className="btn btn-outline-primary">
                              Price
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* <div className="row">
             
            </div> */}
          </div>
        </section>
      </div>
      <Loading isLoading={isLoading} />
    </>
  );
}
