import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  getAllPropertiesApi,
  deletePropertyApi,
  getPropertyBySocietyPhaseAndBlockIdApi,
} from '../../store/api';
import Hooks from '../../hooks';
import moment from 'moment';
import UserAddProperty from './UserAddProperty';
import Modal from 'react-bootstrap/Modal';
import { useLocation } from 'react-router-dom';

export default function UserProperties() {
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [singleProperty, setSingleProperty] = useState(undefined);
  const handleClose = () => {
    setShow(false);
    setSingleProperty(undefined);
    setEditMode(false);
  };
  const [allProperties, setAllProperties] = useState([]);
  const { SuperAdmin, AgentRole, UserDetails } = Hooks();

  const search = useLocation().search;
  const society = new URLSearchParams(search).get('society');
  const phase = new URLSearchParams(search).get('phase');
  const block = new URLSearchParams(search).get('block');
  useEffect(() => {
    if (society && phase && block !== null) {
      getPropertyBySocietyPhaseAndBlockIdApi(society, phase, block)
        .then((property) => {
          setAllProperties(property?.data?.result);
        })
        .catch((error) => {});
    } else {
      getAllPropertiesApi()
        .then((property) => {
          setAllProperties(property?.data?.result);
        })
        .catch((error) => {});
    }
  }, [society, phase, block]);

  const editModeFunc = (data) => {
    setEditMode(true);
    setSingleProperty(data);
    setShow(true);
  };

  const deleteProperty = (id) => {
    deletePropertyApi(id)
      .then((response) => {
        getAllPropertiesApi()
          .then((properties) => {
            setAllProperties(properties.data.result);
          })
          .catch((err) => {});
      })
      .catch((err) => {});
  };
  return (
    <>
      <Modal fullscreen={true} dialogClassName="my-modal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Property</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="inner-pages maxw1600 m0a dashboard-bd">
            {/* Wrapper */}
            <div id="wrapper" className="int_main_wraapper">
              <section className="user-page m-0 p-0 section-padding">
                <div className="container-fluid">
                  <div className="row">
                    {/* <div className="col-md-3"></div> */}
                    <div className="col-md-12">
                      <UserAddProperty
                        Values={singleProperty}
                        editMode={editMode}
                        setEditMode={setEditMode}
                        handleClose={handleClose}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            {/* Wrapper / End */}
          </div>
        </Modal.Body>
      </Modal>
      <div className="col-lg-9 col-md-12 col-xs-12 pl-0 mt-2 user-dash2">
        <div className="my-properties">
          <table className="table-responsive">
            <thead>
              <tr>
                <th className="pl-2">All</th>
                <th className="p-0" />
                <th>Date Added</th>
                <th>Society</th>
                <th>Phase</th>
                <th>Block</th>
                <th>Owner Name</th>
                <th>Added by</th>
                {SuperAdmin() || (AgentRole() && <th>Actions</th>)}
              </tr>
            </thead>
            <tbody>
              {allProperties?.map((item, key) => {
                return (
                  <tr>
                    <td className="image myelist">
                      <a href="single-property-1.html">
                        <img
                          alt="my-properties-3"
                          src={process.env.REACT_APP_IMAGE_URL + item?.photo[0]}
                          className="img-fluid"
                        />
                      </a>
                    </td>
                    <td>
                      <div className="inner">
                        <a href="single-property-1.html">
                          <h2>{item?.title}</h2>
                        </a>
                        <figure>
                          <i className="lni-map-marker" /> {item?.address}
                        </figure>
                      </div>
                    </td>
                    <td>{moment(item?.createdAt).format('llll')}</td>
                    <td>{item?.society?.name}</td>
                    <td>{item?.phase?.name}</td>
                    <td>{item?.block?.name}</td>
                    <td>{item?.ctInfoName}</td>

                    <td>{`${item?.createdBy.firstName}  ${item?.createdBy.lastName}`}</td>

                    {SuperAdmin() && (
                      <td className="actions">
                        <button onClick={() => editModeFunc(item)} className="edit">
                          <i className="fa fa-pencil-alt" />
                        </button>
                        <button onClick={() => deleteProperty(item?._id)} className="delete">
                          <i className="far fa-trash-alt" />
                        </button>
                      </td>
                    )}
                    {AgentRole() && UserDetails().id === item?.createdBy._id && (
                      <td className="actions">
                        <button onClick={() => editModeFunc(item)} className="edit">
                          <i className="fa fa-pencil-alt" />
                        </button>
                        <button onClick={() => deleteProperty(item?._id)} className="delete">
                          <i className="far fa-trash-alt" />
                        </button>
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="pagination-container">
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="btn btn-common" href="#">
                    <i className="lni-chevron-left" /> Previous
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="btn btn-common" href="#">
                    Next <i className="lni-chevron-right" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
