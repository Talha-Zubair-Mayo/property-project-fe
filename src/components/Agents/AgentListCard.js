import React from 'react';
import { Link } from 'react-router-dom';

export default function AgentListCard() {
    return (
        <>
            <div className="col-md-12 col-xs-12 p-2">
                <div className="news-item news-item-sm">
                    <Link to="agentdetails" className="news-img-link">
                        <div className="news-item-img homes">
                            <div className="homes-tag button alt featured">3 Listings</div>
                            <img className="resp-img" src={process.env.PUBLIC_URL + "/images/team/a-1.png"} alt="blog image" />
                        </div>
                    </Link>
                    <div className="news-item-text">
                        <Link to="agentdetails">
                            <h3>Carls Jhons</h3>
                        </Link>
                        <div className="the-agents">
                            <ul className="the-agents-details">
                                <li>
                                    <a href="#">Office: (234) 0200 17813</a>
                                </li>
                                <li>
                                    <a href="#">Mobile: (657) 9854 12095</a>
                                </li>
                                <li>
                                    <a href="#">Fax: 809 123 0951</a>
                                </li>
                                <li>
                                    <a href="#">Email: info@agent.com</a>
                                </li>
                            </ul>
                        </div>
                        <div className="news-item-bottom">
                            <a href="properties-full-grid-2.html" className="news-link">
                                View My Listings
                            </a>
                            <div className="admin">
                                <p>Company Name</p>
                                <img src={process.env.PUBLIC_URL + "/images/partners/1.png"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
