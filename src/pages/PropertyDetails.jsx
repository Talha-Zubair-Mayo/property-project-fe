import React, { useEffect, useState } from 'react';
import AddReview from '../components/PropertyDetails/AddReview';
import AgentInfo from '../components/PropertyDetails/AgentInfo';
import Description from '../components/PropertyDetails/Description';
import FeatureProperties from '../components/PropertyDetails/FeatureProperties';
import Floorplans from '../components/PropertyDetails/Floorplans';
import Gallery from '../components/PropertyDetails/Gallery';
import Location from '../components/PropertyDetails/Location';
import Nearby from '../components/PropertyDetails/Nearby';
import PopularTags from '../components/PropertyDetails/PopularTags';
import Details from '../components/PropertyDetails/Details';
import Propertyname from '../components/PropertyDetails/Propertyname';
import PropertyVideo from '../components/PropertyDetails/PropertyVideo';
import Reviews from '../components/PropertyDetails/Reviews';
import Index from '../components/PropertyDetails/Schedule';
import SimilarProperties from '../components/PropertyDetails/SimilarProperties';
import Special from '../components/PropertyDetails/Special';
import RecentProperties from '../components/PropertyDetails/RecentProperties';
import { useParams } from 'react-router-dom';
import { getPropertyDetailsApi } from '../store/api';
import AddNotes from '../components/PropertyDetails/AddNotes';
import Hooks from '../hooks';
export default function PropertyDetails() {
  const [propertyDetails, setPropertyDetails] = useState({});
  const { AgentRole, SuperAdmin } = Hooks();
  let { id } = useParams();
  useEffect(() => {
    if (id) {
      getPropertyDetailsApi(id)
        .then((res) => {
          setPropertyDetails(res.data.result);
        })
        .catch((error) => {});
    }
  }, []);
  return (
    <>
      <div className="inner-pages sin-1 homepage-4 hd-white">
        <div id="wrapper">
          <section className="single-proper blog details">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 blog-pots">
                  <div className="row">
                    <div className="col-md-12">
                      <Propertyname Details={propertyDetails} />
                      <Gallery Details={propertyDetails} />
                      <Description Details={propertyDetails} />
                    </div>
                  </div>
                  <Details Details={propertyDetails} />
                  {/* <Floorplans Details={propertyDetails} /> */}
                  {/* <Nearby Details={propertyDetails} /> */}
                  {/* <PropertyVideo Details={propertyDetails} /> */}
                  {/* <Location Details={propertyDetails} /> */}
                  {AgentRole() || SuperAdmin() ? <AddNotes /> : <></>}

                  <Reviews Details={propertyDetails} />
                  {AgentRole() ||
                    (SuperAdmin() === false && <AddReview Details={propertyDetails} />)}
                </div>
                <aside className="col-lg-4 col-md-12 car">
                  <div className="single widget">
                    {/* <Index Details={propertyDetails} /> */}
                    <div className="sidebar">
                      <AgentInfo Details={propertyDetails} />
                      <div className="main-search-field-2">
                        <RecentProperties Details={propertyDetails} />

                        {/* <Special Details={propertyDetails} /> */}
                        <PopularTags Details={propertyDetails} />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
              {/* <SimilarProperties Details={propertyDetails} /> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
