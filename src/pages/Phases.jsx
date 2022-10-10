import React from 'react';
import { useDispatch } from 'react-redux';
import Phase from '../components/Phases/index';
import Loading from '../utils/LoadingScreen';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPhaseBySocietyidApi, getAllPhasesApi } from '../store/api';
import { useState } from 'react';
export default function AllPhases() {
  const search = useLocation().search;
  const society = new URLSearchParams(search).get('society');
  const [AllPhases, setAllPhases] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (society !== null) {
      setIsLoading(true);
      getPhaseBySocietyidApi(society)
        .then((phase) => {
          setIsLoading(false);
          setAllPhases(phase?.data?.result);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);

      getAllPhasesApi()
        .then((phase) => {
          setIsLoading(false);

          setAllPhases(phase?.data?.result);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  }, []);
  return (
    <div>
      <section className="feature-categories bg-white rec-pro">
        <div className="container-fluid">
          <div className="sec-title">
            <h2>All Phases</h2>
            <p>Properties in all phases</p>
          </div>
          <div className="row">
            {AllPhases?.map((item, key) => {
              return <Phase item={item} />;
            })}
          </div>
        </div>
      </section>
      <Loading isLoading={isLoading} />
    </div>
  );
}
