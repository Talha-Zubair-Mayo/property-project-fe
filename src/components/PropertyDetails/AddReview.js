import React from 'react';

export default function AddReview() {
  return (
    <>
      <section className="single reviews leve-comments details">
        <div id="add-review" className="add-review-box">
          {/* Add Review */}
          <h3 className="listing-desc-headline margin-bottom-20 mb-4">Add Review</h3>
          <span className="leave-rating-title">Your rating for this listing</span>
          {/* Rating / Upload Button */}
          <div className="row mb-4">
            <div className="col-md-6">
              {/* Leave Rating */}
              <div className="clearfix" />
              <div className="leave-rating margin-bottom-30">
                <input type="radio" name="rating" id="rating-1" defaultValue={1} />
                <label htmlFor="rating-1" className="fa fa-star" />
                <input type="radio" name="rating" id="rating-2" defaultValue={2} />
                <label htmlFor="rating-2" className="fa fa-star" />
                <input type="radio" name="rating" id="rating-3" defaultValue={3} />
                <label htmlFor="rating-3" className="fa fa-star" />
                <input type="radio" name="rating" id="rating-4" defaultValue={4} />
                <label htmlFor="rating-4" className="fa fa-star" />
                <input type="radio" name="rating" id="rating-5" defaultValue={5} />
                <label htmlFor="rating-5" className="fa fa-star" />
              </div>
              <div className="clearfix" />
            </div>
            <div className="col-md-6">
              {/* Uplaod Photos */}
              <div className="add-review-photos margin-bottom-30">
                <div className="photoUpload">
                  <span>
                    <i className="sl sl-icon-arrow-up-circle" /> Upload Photos
                  </span>
                  <input type="file" className="upload" />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 data">
              <form action="#">
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="First Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Last Name"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                </div>
                <div className="col-md-12 form-group">
                  <textarea
                    className="form-control"
                    id="exampleTextarea"
                    rows={8}
                    placeholder="Review"
                    required=""
                    defaultValue={''}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg mt-2">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
