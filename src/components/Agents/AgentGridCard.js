import React from 'react';
import { Link } from "react-router-dom"
export default function AgentGridCard({ agent }) {
  return (
    <>
      <div className="item col-lg-6 col-md-6 col-xs-12 landscapes sale">
        <div className="project-single">
          <div className="project-inner project-head">
            <div className="homes">
              {/* homes img */}
              <Link to={`/agentdetails/${agent._id}`} className="homes-img">
                <img src={process.env.REACT_APP_IMAGE_URL + agent.photo} alt="home-1" className="img-responsive" />
              </Link>
            </div>
          </div>
          {/* homes content */}
          <div className="homes-content">
            {/* homes address */}
            <div className="the-agents">
              <h3>
                <Link to={`/agentdetails/${agent._id}`}>{`${agent?.firstName}  ${agent?.lastName}`}</Link>
              </h3>
              <ul className="the-agents-details">

                <li>
                  <Link to={`/agentdetails/${agent._id}`}>Phone: {agent?.phone}</Link>
                </li>

                <li>
                  <Link to={`/agentdetails/${agent._id}`}>Email: {agent?.email}</Link>
                </li>
              </ul>
            </div>
            <div className="footer">
              <Link to={`/agentdetails/${agent._id}`}>
                {agent?.company}
              </Link>
              <span className="view-my-listing">
                <Link to={`/properties?agent=${agent._id}`}>View My Listings</Link>
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
