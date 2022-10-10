import React, { useEffect, useState } from 'react';
import { getBlockBySocietyAndPhaseIdApi, getAllBlocksApi } from '../store/api';
import Block from '../components/Blocks/Block';
import { useLocation } from 'react-router-dom';
import Loading from '../utils/LoadingScreen';

export default function AllBlocks() {
  const search = useLocation().search;
  const society = new URLSearchParams(search).get('society');
  const phase = new URLSearchParams(search).get('phase');
  const [AllBlocks, setAllBlocks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (society !== null && phase !== null) {
      setIsLoading(false);
      getBlockBySocietyAndPhaseIdApi(society, phase)
        .then((block) => {
          setIsLoading(false);
          setAllBlocks(block?.data?.result);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      getAllBlocksApi()
        .then((block) => {
          setIsLoading(false);

          setAllBlocks(block?.data?.result);
        })
        .catch((error) => {
          setIsLoading(false);
        });
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
      <Loading isLoading={isLoading} />

    </>
  );
}
