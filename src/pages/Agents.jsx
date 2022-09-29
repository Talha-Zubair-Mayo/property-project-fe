import { useState, useEffect } from 'react';
import { getAllAgentsApi } from '../store/api';

import FeatureProperties from '../components/Agents/FeatureProperties';
import RecentProperties from '../components/Agents/RecentProperties';
import Schedule from '../components/Agents/Schedule';
import Special from '../components/Agents/Special';
import Sorting from '../components/Agents/Sorting';
import React from 'react';
import { Link } from 'react-router-dom';
import AgentGridCard from '../components/Agents/AgentGridCard';
import AgentListCard from '../components/Agents/AgentListCard';

export default function AgentListingGrid() {
  const [Gridview, setGridView] = useState(true);
  const [agentList, setAgentList] = useState([]);
  const ToggleView = (view) => {
    if (view === 'Grid') {
      setGridView(true);
    } else if (view === 'List') {
      setGridView(false);
    }
  };

  useEffect(() => {
    getAllAgentsApi()
      .then((res) => {
        setAgentList(res?.data?.result);
      })
      .catch(() => {});
  }, []);
  return (
    <>
      <div className="inner-pages agents homepage-4 hd-white">
        <div id="wrapper">
          <section className="blog blog-section portfolio pt-5">
            <div className="container">
              <section className="headings-2 pt-0 pb-55">
                <div className="pro-wrapper">
                  <div className="detail-wrapper-body">
                    <div className="listing-title-bar">
                      <div className="text-heading text-left">
                        <p className="pb-2">
                          <a href="index.html">Home </a> &nbsp;/&nbsp; <span>Agents</span>
                        </p>
                      </div>
                      <h3>All Agents</h3>
                    </div>
                  </div>
                </div>
              </section>
              <div className="row">
                <div className="col-lg-8 col-md-12 col-xs-12">
                  <section className="headings-2 pt-0">
                    <div className="pro-wrapper">
                      <div className="detail-wrapper-body">
                        <div className="listing-title-bar">
                          <div className="text-heading text-left">
                            <p className="font-weight-bold mb-0 mt-3">
                              {agentList?.length} Search results
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="cod-pad single detail-wrapper mr-2 mt-0 d-flex justify-content-md-end align-items-center grid">
                        <div className="input-group border rounded input-group-lg w-auto mr-4">
                          <label
                            className="input-group-text bg-transparent border-0 text-uppercase letter-spacing-093 pr-1 pl-3"
                            htmlFor="inputGroupSelect01"
                          >
                            <i className="fas fa-align-left fs-16 pr-2" />
                            Sortby:
                          </label>
                          <select
                            className="form-control border-0 bg-transparent shadow-none p-0 selectpicker sortby"
                            data-style="bg-transparent border-0 font-weight-600 btn-lg pl-0 pr-3"
                            id="inputGroupSelect01"
                            name="sortby"
                          >
                            <option selected="">Alphabet</option>
                            <option value={1}>Random</option>
                            <option value={1}>Rating</option>
                            <option value={1}>Number of property</option>
                          </select>
                        </div>
                        <div className="sorting-options">
                          <a
                            onClick={() => ToggleView('List')}
                            className={
                              Gridview === true
                                ? 'cursor-pointer change-view-btn lde'
                                : 'cursor-pointer change-view-btn active-view-btn'
                            }
                          >
                            <i className="fa fa-th-list" />
                          </a>
                          <a
                            onClick={() => ToggleView('Grid')}
                            className={
                              Gridview === false
                                ? 'cursor-pointer change-view-btn lde'
                                : 'cursor-pointer change-view-btn active-view-btn'
                            }
                          >
                            <i className="fa fa-th-large" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="row">
                    {agentList?.map((agent) => {
                      if (Gridview) {
                        return <AgentGridCard agent={agent} />;
                      } else {
                        return <AgentListCard agent={agent} />;
                      }
                    })}
                  </div>
                </div>
                <aside className="col-lg-4 col-md-12 car">
                  <div className="single widget">
                    <Schedule />
                    <div className="sidebar">
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
