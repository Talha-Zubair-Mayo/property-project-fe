import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocietiesAction } from '../store/actions';
import Society from '../components/Societies/Index';

export default function AllSocieties() {
  const allSocieties = useSelector((state) => state.AllSocieties);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllSocietiesAction());
  }, []);
  return (
    <>
      <section className="feature-categories bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>All </span>Societies
            </h2>
            <p>Properties In All Societies.</p>
          </div>
          <div className="row">
            {allSocieties?.data?.map((item, key) => (
              <Society item={item}/>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
