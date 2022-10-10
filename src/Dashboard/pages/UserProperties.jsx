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
import { toast } from 'react-toastify';
import { Pagination } from '@mui/material';
import Loading from '../../utils/LoadingScreen';
import RecordNotFound from '../../components/RecordNotFound';
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
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const search = useLocation().search;
  const society = new URLSearchParams(search).get('society');
  const phase = new URLSearchParams(search).get('phase');
  const block = new URLSearchParams(search).get('block');
  const getAllProperties = (page) => {
    if (society && phase && block !== null) {
      setIsLoading(true);
      getPropertyBySocietyPhaseAndBlockIdApi(society, phase, block, page)
        .then((response) => {
          setAllProperties(response?.data?.result);
          setTotalPages(response?.data?.pagination?.pages);
          setCurrentPage(response?.data?.pagination?.page);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error?.data?.message);
        });
    } else {
      setIsLoading(true);
      const query = `page=${page}`;
      getAllPropertiesApi(query)
        .then((response) => {
          setAllProperties(response?.data?.result);
          setTotalPages(response?.data?.pagination?.pages);
          setCurrentPage(response?.data?.pagination?.page);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          toast.error(error?.data?.message);
        });
    }
  };

  useEffect(() => {
    getAllProperties(1);
  }, [society, phase, block]);

  const editModeFunc = (data) => {
    setEditMode(true);
    setSingleProperty(data);
    setShow(true);
  };

  const deleteProperty = (id) => {
    setIsLoading(true);
    deletePropertyApi(id)
      .then((response) => {
        setIsLoading(false);
        toast.success(response?.data?.message);
        getAllProperties(currentPage);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error?.data?.message);
      });
  };

  const handlePageChange = (e, p) => {
    getAllPhases(p);
    setCurrentPage(p);
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
          {allProperties?.length > 0 && isLoading === false ? (
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
          ) : (
            <RecordNotFound />
          )}

          <div className="pagination-container">
            {allProperties?.length > 0 && (
              <Pagination
                count={totalPages}
                size="large"
                page={currentPage}
                variant="outlined"
                shape="rounded"
                onChange={handlePageChange}
              />
            )}
          </div>
        </div>
      </div>
      <Loading isLoading={isLoading} />
    </>
  );
}
