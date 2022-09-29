import React from 'react';
import { Link } from 'react-router-dom';

export default function AgentListCard({ agent }) {
    return (
        <>
            <div className="col-md-12 col-xs-12 p-2">
                <div className="news-item news-item-sm">
                    <Link to={`/agentdetails/${agent?._id}`} className="news-img-link">
                        <img className="resp-img" src={process.env.REACT_APP_IMAGE_URL + agent?.photo} alt="blog image" />
                    </Link>
                    <div className="news-item-text">
                        <Link to={`/agentdetails/${agent?._id}`}>
                            <h3>
                                {`${agent?.firstName}  ${agent?.lastName}`}
                            </h3>
                        </Link>
                        <div className="the-agents">
                            <ul className="the-agents-details">         <li>
                                <Link to={`/agentdetails/${agent?._id}`}>Phone: {agent?.phone}</Link>
                            </li>         <li>
                                    <Link to={`/agentdetails/${agent?._id}`}>Email: {agent?.email}</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="news-item-bottom">
                            <Link to={`/properties?agent=${agent?._id}`} className="news-link">
                                View My Listings
                            </Link>
                            <div className="admin">
                                <p>  {agent?.company}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
