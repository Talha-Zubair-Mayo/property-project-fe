import React, { useEffect, useState } from 'react';

import AgentName from '../components/AgentDetails/AgentName';
import ContactAgent from '../components/AgentDetails/ContactAgent';
import Schedule from '../components/PropertyDetails/Schedule';
import AddReview from '../components/PropertyDetails/AddReview';
import Description from '../components/PropertyDetails/Description';
import FeatureProperties from '../components/PropertyDetails/FeatureProperties';
import RecentProperties from '../components/PropertyDetails/RecentProperties';
import Reviews from '../components/PropertyDetails/Reviews';
import SimilarProperties from '../components/AgentDetails/SimilarProperties';
import Special from '../components/PropertyDetails/Special';
import AgentListCard from '../components/Agents/AgentListCard';
import { getAgentByIdApi, getPropertiesByUserIdApi } from "../store/api"
import { useParams } from 'react-router-dom';
export default function AgentDetails() {
  const [agentdetails, setAgentDetails] = useState({})
  const [AgentProperties, setAgentProperties] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    if (id) {
      getAgentByIdApi(id).then((res) => {
        setAgentDetails(res?.data?.result);
      })
      getPropertiesByUserIdApi(id)
        .then((property) => {
          setAgentProperties(property?.data?.result);
        })
        .catch((error) => { });
    }
  }, [id])
  return (
    <>
      <div className="inner-pages agents homepage-4 det hd-white">
        <div id="wrapper">
          <section className="blog blog-section portfolio single-proper details mb-0">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-xs-12">
                  <div className="row">
                    <div className="col-md-12 col-xs-12">
                      <AgentName agent={agentdetails} />
                      <AgentListCard agent={agentdetails} />
                    </div>
                  </div>
                  <div className="blog-pots py-0">
                    <Description />
                    <div className="row">
                      {AgentProperties?.length > 0 && AgentProperties.map((item, key) => (
                        <div className="col-md-6 mb-3">
                          <SimilarProperties item={item} />
                        </div>
                      ))}
                    </div>

                    <Reviews />
                    <AddReview />
                  </div>
                </div>
                <aside className="col-lg-4 col-md-12 car">
                  <div className="single widget">
                    <Schedule />
                    <div className="sidebar">
                      <ContactAgent />
                      <div className="main-search-field-2">
                        <RecentProperties />
                        <FeatureProperties />
                        <Special />
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
