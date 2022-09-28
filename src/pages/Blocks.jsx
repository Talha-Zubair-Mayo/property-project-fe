import React, { useEffect, useState } from 'react';
import { getBlockBySocietyAndPhaseIdApi, getAllBlocksApi } from '../store/api';
import Block from '../components/Blocks/Block';
import { useLocation } from 'react-router-dom';

export default function AllBlocks() {
  const search = useLocation().search;
  const society = new URLSearchParams(search).get('society');
  const phase = new URLSearchParams(search).get('phase');
  const [AllBlocks, setAllBlocks] = useState([]);
  useEffect(() => {
    if (society !== null && phase !== null) {
      getBlockBySocietyAndPhaseIdApi(society, phase)
        .then((block) => {
          setAllBlocks(block?.data?.result);
        })
        .catch((error) => {});
    } else {
      getAllBlocksApi()
        .then((block) => {
          console.log(block?.data?.result);
          setAllBlocks(block?.data?.result);
        })
        .catch((error) => {});
    }
  }, [society, phase]);
  return (
    <>
      <section className="feature-categories bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>
              <span>All </span>Blocks
            </h2>
            <p>Properties In All Blocks.</p>
          </div>
          <div className="row">
            {AllBlocks?.map((item, key) => (
              <Block item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
