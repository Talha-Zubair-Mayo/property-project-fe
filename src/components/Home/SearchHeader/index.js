import React from 'react';
import Search from '../Search';
import SearchForm from '../SearchForm';
export default function Banner() {
  $('.dropdown-filter').on('click', function () {
    $('.explore__form-checkbox-list').toggleClass('filter-block');
  });

  return (
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
                <SearchForm />
                {/*/ End Search Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  );
}
