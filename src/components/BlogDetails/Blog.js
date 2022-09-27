import React from 'react'

function Blog() {
    return (
        <div>
            <section className="blog blog-section bg-white">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9 col-md-12 blog-pots">
                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <div className="news-item details no-mb2">
                                        <a href="blog-details.html" className="news-img-link">
                                            <div className="news-item-img">
                                                <img className="img-responsive" src={process.env.PUBLIC_URL + "/images/blog/b-1.jpg"} alt="blog image" />
                                            </div>
                                        </a>
                                        <div className="news-item-text details pb-0">
                                            <a href="blog-details.html"><h3>Real Estate News</h3></a>
                                            <div className="dates">
                                                <span className="date">April 11, 2020 &nbsp;/</span>
                                                <ul className="action-list pl-0">
                                                    <li className="action-item pl-2"><i className="fa fa-heart"></i> <span>306</span></li>
                                                    <li className="action-item"><i className="fa fa-comment"></i> <span>34</span></li>
                                                    <li className="action-item"><i className="fa fa-share-alt"></i> <span>122</span></li>
                                                </ul>
                                            </div>
                                            <div className="news-item-descr big-news details visib mb-0">
                                                <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ea? Vitae pariatur ab amet iusto tempore neque a, deserunt eaque recusandae obcaecati eos atque delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi labore vel enim repellendus excepturi autem. Eligendi cum laboriosam exercitationem illum repudiandae quasi sint dicta consectetur porro fuga ea, perspiciatis aut!</p>

                                                <p className="d-none d-sm-none d-lg-block d-md-block">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ea? Vitae pariatur ab amet iusto tempore neque a, deserunt eaque recusandae obcaecati eos atque delectus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi labore vel enim repellendus excepturi autem. Eligendi cum laboriosam exercitationem illum repudiandae quasi sint dicta consectetur porro fuga ea, perspiciatis aut!</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <section className="comments">
                                <h3 className="mb-5">5 Comments</h3>
                                <div className="row mb-4">
                                    <ul className="col-12 commented">
                                        <li className="comm-inf">
                                            <div className="col-md-2">
                                                <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-4.jpg"} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-md-10 comments-info">
                                                <h5 className="mb-1">Mario Smith</h5>
                                                <p className="mb-4">Jun 23, 2020</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row ml-5">
                                    <ul className="col-12 commented">
                                        <li className="comm-inf">
                                            <div className="col-md-2">
                                                <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-5.jpg"} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-md-10 comments-info">
                                                <h5 className="mb-1">Mary Tyron</h5>
                                                <p className="mb-4">Jun 23, 2020</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="row my-4">
                                    <ul className="col-12 commented">
                                        <li className="comm-inf">
                                            <div className="col-md-2">
                                                <img src={process.env.PUBLIC_URL + "/images/testimonials/ts-6.jpg"} className="img-fluid" alt="" />
                                            </div>
                                            <div className="col-md-10 comments-info no-mb">
                                                <h5 className="mb-1">Leo Williams</h5>
                                                <p className="mb-4">Jun 23, 2020</p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquam, quam congue dictum luctus, lacus magna congue ante, in finibus dui sapien eu dolor. Integer tincidunt suscipit erat, nec laoreet ipsum vestibulum sed.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section className="leve-comments wpb">
                                <h3 className="mb-5">Leave a Comment</h3>
                                <div className="row">
                                    <div className="col-md-12 data">
                                        <form action="#">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" placeholder="First Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="text" name="name" className="form-control" placeholder="Last Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                                                </div>
                                            </div>
                                            <div className="col-md-12 form-group">
                                                <textarea className="form-control" id="exampleTextarea" rows="8" placeholder="Message" required></textarea>
                                            </div>
                                            <button type="submit" className="btn btn-primary btn-lg mt-2">Submit Comment</button>
                                        </form>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <aside className="col-lg-3 col-md-12">
                            <div className="widget">
                                <h5 className="font-weight-bold mb-4">Search</h5>
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-primary" type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                                    </span>
                                </div>
                                <div className="recent-post py-5">
                                    <h5 className="font-weight-bold">Category</h5>
                                    <ul>
                                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>House</a></li>
                                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Garages</a></li>
                                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Real Estate</a></li>
                                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Real Home</a></li>
                                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Bath</a></li>
                                        <li><a href="#"><i className="fa fa-caret-right" aria-hidden="true"></i>Beds</a></li>
                                    </ul>
                                </div>
                                <div className="recent-post">
                                    <h5 className="font-weight-bold mb-4">Popular Tags</h5>
                                    <div className="tags">
                                        <span><a href="#" className="btn btn-outline-primary">Houses</a></span>
                                        <span><a href="#" className="btn btn-outline-primary">Real Home</a></span>
                                    </div>
                                    <div className="tags">
                                        <span><a href="#" className="btn btn-outline-primary">Baths</a></span>
                                        <span><a href="#" className="btn btn-outline-primary">Beds</a></span>
                                    </div>
                                    <div className="tags">
                                        <span><a href="#" className="btn btn-outline-primary">Garages</a></span>
                                        <span><a href="#" className="btn btn-outline-primary">Family</a></span>
                                    </div>
                                    <div className="tags">
                                        <span><a href="#" className="btn btn-outline-primary">Real Estates</a></span>
                                        <span><a href="#" className="btn btn-outline-primary">Properties</a></span>
                                    </div>
                                    <div className="tags">
                                        <span><a href="#" className="btn btn-outline-primary">Location</a></span>
                                        <span><a href="#" className="btn btn-outline-primary">Price</a></span>
                                    </div>
                                </div>
                                <div className="recent-post pt-5">
                                    <h5 className="font-weight-bold mb-4">Recent Posts</h5>
                                    <div className="recent-main">
                                        <div className="recent-img">
                                            <a href="blog-details.html"><img src={process.env.PUBLIC_URL + "/images/blog/b-1.jpg"} alt="" /></a>
                                        </div>
                                        <div className="info-img">
                                            <a href="blog-details.html"><h6>Real Estate</h6></a>
                                            <p>May 10, 2020</p>
                                        </div>
                                    </div>
                                    <div className="recent-main my-4">
                                        <div className="recent-img">
                                            <a href="blog-details.html"><img src={process.env.PUBLIC_URL + "/images/blog/b-2.jpg"} alt="" /></a>
                                        </div>
                                        <div className="info-img">
                                            <a href="blog-details.html"><h6>Real Estate</h6></a>
                                            <p>May 10, 2020</p>
                                        </div>
                                    </div>
                                    <div className="recent-main no-mb">
                                        <div className="recent-img">
                                            <a href="blog-details.html"><img src={process.env.PUBLIC_URL + "/images/blog/b-3.jpg"} alt="" /></a>
                                        </div>
                                        <div className="info-img">
                                            <a href="blog-details.html"><h6>Real Estate</h6></a>
                                            <p>May 10, 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Blog
