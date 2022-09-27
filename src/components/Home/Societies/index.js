import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocietiesApi } from '../../../store/api';
import Society from '../../../components/Societies/Index';

export default function PopularPlaces() {
  const [Societies, setSocieties] = useState([]);
  useEffect(() => {
    getAllSocietiesApi()
      .then((society) => {
        setSocieties(society?.data?.result);
      })
      .catch((error) => { });
  }, []);
  return (
    <>
      <section className="feature-categories bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              Societies
            </h2>
            {/* <p>Properties In  All Societies.</p> */}
          </div>
          <div className="row">

            {Societies?.slice(0, 8)?.map((item, key) => (
              <Society item={item} />
            ))}
          </div>
          {/* /row */}
        </div>
      </section>
    </>
  );
}
