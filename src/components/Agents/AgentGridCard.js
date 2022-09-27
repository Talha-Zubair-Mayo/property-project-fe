import React from 'react';
import { Link } from "react-router-dom"
export default function AgentGridCard() {
  return (
    <>
      <div className="item col-lg-6 col-md-6 col-xs-12 landscapes sale">
        <div className="project-single">
          <div className="project-inner project-head">
            <div className="homes">
              {/* homes img */}
              <Link to="agentdetails" className="homes-img">
                <div className="homes-tag button alt featured">3 Listings</div>
                <img src={process.env.PUBLIC_URL + "/images/team/a-1.png"} alt="home-1" className="img-responsive" />
              </Link>
            </div>
          </div>
          {/* homes content */}
          <div className="homes-content">
            {/* homes address */}
            <div className="the-agents">
              <h3>
                <Link to="agentdetails">Carls Jhons</Link>
              </h3>
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
            <div className="footer">
              <a href="agent-details.html">
                <img src={process.env.PUBLIC_URL + "/images/partners/1.png"} alt="" className="mr-2" /> Company Name
              </a>
              <span className="view-my-listing">
                <a href="properties-full-grid-2.html">View My Listings</a>
              </span>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
