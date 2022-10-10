import React from 'react'
import { Link } from 'react-router-dom';

export default function Phase({ item }) {
  return (
    <>
      <div className="col-xl-3 col-lg-6 col-sm-6" data-aos="fade-up" data-aos-delay={150}>
        <div className="small-category-2">
          <div className="small-category-2-thumb img-1">
            <Link to={`/blocks?society=${item.society._id}&phase=${item._id}`}>
              <img src={process.env.REACT_APP_IMAGE_URL + item.photo} alt="" />
            </Link>
          </div>
          <div className="sc-2-detail">
            <h4 className="sc-jb-title">
              <Link to={`/blocks?society=${item.society._id}&phase=${item._id}`}>{item.name}</Link>
            </h4>
            <span>Society : {item?.society?.name}</span>
          </div>
        </div>
      </div>
    </>
  );
}


