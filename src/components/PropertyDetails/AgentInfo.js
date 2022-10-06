import React from 'react';
import ContactAgent from '../AgentDetails/ContactAgent';
import Hooks from '../../hooks';

export default function AgentInfo({ Details }) {
  return (
    <>
      <div className="widget-boxed mt-33 mt-5">
        <div className="widget-boxed-header">
          <h4>Agent Information</h4>
        </div>
        <div className="widget-boxed-body">
          <div className="sidebar-widget author-widget2">
            <div className="author-box clearfix">
              <img src={process.env.REACT_APP_IMAGE_URL + Details?.createdBy?.photo} alt="author-image" className="author__img" />
              <h4 className="author__title">{`${Details?.createdBy?.firstName}  ${Details?.createdBy?.lastName}`}</h4>
              <p className="author__meta">Agent of Property</p>
            </div>
            <ul className="author__contact">
              <li>
                <span className="la la-phone">
                  <i className="fa fa-phone" aria-hidden="true" />
                </span>
                <a href="#">{Details.ctInfoPhone}</a>
              </li>
              <li>
                <span className="la la-envelope-o">
                  <i className="fa fa-envelope" aria-hidden="true" />
                </span>
                <a href="#">{Details?.ctInfoEmail}</a>
              </li>
            </ul>
            <ContactAgent agent={Details?.createdBy} />
          </div>
        </div>
      </div>
    </>
  );
}
