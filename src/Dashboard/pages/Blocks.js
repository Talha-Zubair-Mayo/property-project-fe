import React, { useState, useEffect } from 'react'
import Hooks from '../../hooks';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormDataFunc, BlocksValidationSchema } from '../../utils';
import { addNewBlockApi, deleteBlockApi, editBlockApi, getPhaseBySocietyidApi, getAllBlocksApi, getBlockBySocietyAndPhaseIdApi } from '../../store/api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocietiesAction, } from '../../store/actions';
import moment from "moment"
import Modal from 'react-bootstrap/Modal';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import Pagination from '@mui/material/Pagination';
import Loading from '../../utils/LoadingScreen'

export default function AllBlocks() {
  const allSocieties = useSelector(state => state.AllSocieties);
  // const AllBlocks = useSelector(state => state.AllBlocks);
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [phasesBySociety, setPhasesBySociety] = useState([])
  const handleClose = () => setShow(false);
  const [totalPages, setTotalPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const dispatch = useDispatch();
  const search = useLocation().search;
  const society = new URLSearchParams(search).get('society');
  const phase = new URLSearchParams(search).get('phase');
  const [AllBlocks, setAllBlocks] = useState([]);

  const getAllBlocks = (page) => {
    if (society !== null && phase !== null) {
      setIsLoading(true)
      getBlockBySocietyAndPhaseIdApi(society, phase, page)
        .then((response) => {
          setIsLoading(false)
          setAllBlocks(response?.data?.result);
          setTotalPages(response?.data?.pagination?.pages);
          setCurrentPage(response?.data?.pagination?.page)
        })
        .catch((error) => {
          setIsLoading(false)
          toast.error(error?.data?.message);

        });
    } else {
      setIsLoading(true)
      getAllBlocksApi(page)
        .then((response) => {
          setIsLoading(false)
          setAllBlocks(response?.data?.result);
          setTotalPages(response?.data?.pagination?.pages);
          setCurrentPage(response?.data?.pagination?.page)
        })
        .catch((error) => {
          setIsLoading(false)
          toast.error(error?.data?.message);

        });
    }
  }
  useEffect(() => {
    dispatch(getAllSocietiesAction())
    getAllBlocks(1)
  }, []);




  const { SuperAdmin } = Hooks();
  const [initialValues, setInitialValues] = useState({
    name: '',
    ownerName: '',
    status: '',
    society: '',
    phase: '',
  });
  const SelectSociety = (value) => {
    if (value !== 'Select Society') {
      getPhaseBySocietyidApi(value).then((response) => {
        setPhasesBySociety(response.data.result);
      })
    }
  }
  const onSubmit = (values, props) => {
    if (editMode) {
      setIsLoading(true)
      editBlockApi(initialValues._id, FormDataFunc(values)).then((response) => {
        toast.success(response?.data?.message);
        handleClose();
        props.resetForm();
        getAllBlocks(currentPage)
        setEditMode(false);
        setInitialValues({
          name: '',
          ownerName: '',
          status: '',
          society: '',
          phase: '',

        })
      }).catch((error) => {
        setIsLoading(false)
        toast.error(error?.data?.message);

      })
    } else {
      setIsLoading(true)
      addNewBlockApi(FormDataFunc(values)).then((response) => {
        toast.success(response?.data?.message);
        getAllBlocks(currentPage)
        props.resetForm();
        handleClose();
      }).catch((error) => {
        setIsLoading(false)
        toast.error(error?.data?.message);

      })
    }

  };
  const deletePhase = (id) => {
    setIsLoading(true)
    deleteBlockApi(id).then((response) => {
      setIsLoading(false)
      getAllBlocks(currentPage)
      toast.success(response?.data?.message);
    }).catch((error) => {
      setIsLoading(false)
      toast.error(error?.data?.message);

    })
  }
  const editModeFunc = (data) => {
    getPhaseBySocietyidApi(data.society._id).then((response) => {
      setPhasesBySociety(response.data.result);
      setEditMode(true);
      setInitialValues({
        _id: data?._id,
        name: data?.name,
        ownerName: data?.ownerName,
        status: data?.status,
        society: data?.society,
        phasee: data?.phasee

      });
      setShow(true)
    })
  }

  const handlePageChange = (e, p) => {
    getAllBlocks(p)
    setCurrentPage(p)
  }
  return (
    <>
      <div className="col-lg-9 col-md-12 py-3 col-xs-12 pl-0 user-dash2">
        {SuperAdmin() &&
          <> <div className="Actions w-100 d-flex justify-content-end mb-2">
            <button className="btn  btn-common" onClick={() => setShow(true)}>
              Add New Block
            </button>
          </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{editMode ? "Edit Block" : "New Block"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={BlocksValidationSchema}

                >
                  {({ touched, errors, isSubmitting, values, setFieldValue }) => (
                    <Form autoComplete="off">
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Name</label>
                          <Field
                            type="text"
                            className={`form-control
                                ${touched.name && errors.name ? 'is-invalid' : ''}`}
                            id="inputName4"

                            placeholder="Enter Name"
                            name='name'
                          />
                          <ErrorMessage component="div" name="name" className="invalid-feedback" />

                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputownerName4">Owner Name</label>
                          <Field
                            type="text"
                            className={`form-control
                                ${touched.ownerName && errors.ownerName ? 'is-invalid' : ''}`}
                            id="inputownerName4"
                            name="ownerName"
                            placeholder="Enter Owner Name"
                          />
                          <ErrorMessage component="div" name="ownerName" className="invalid-feedback" />

                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Society</label>
                          <Field as="select" className='form-control' onChange={(e) => {
                            SelectSociety(e.target.value)
                            setFieldValue('society', e.target.value)
                          }} name="society">
                            <option >Select Society</option>
                            {allSocieties?.data?.map((item, key) => {
                              return <option key={key} value={item?._id}>{item?.name}</option>
                            })}
                          </Field>
                          <ErrorMessage component="div" name="society" className="invalid-feedback" />

                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Phase</label>
                          <Field as="select" className='form-control' name="phase">
                            <option >Select Phase</option>
                            {phasesBySociety?.map((item, key) => {
                              return <option key={key} value={item?._id}>{item?.name}</option>
                            })}
                          </Field>
                          <ErrorMessage component="div" name="phase" className="invalid-feedback" />

                        </div>


                      </div>

                      <div className="form-row">
                        <div className="form-group col-md-6">
                          <label htmlFor="inputEmail4">Status</label>
                          <Field as="select" className='form-control' placeholder="Select Society" name="status">
                            <option value='Active'>Active</option>
                            <option value='InActive'>InActive</option>
                          </Field>
                          <ErrorMessage component="div" name="status" className="invalid-feedback" />

                        </div>


                      </div>

                      <div className="form-group">
                        <input
                          type="file"
                          className="form-control-file"
                          id="exampleFormControlFile1"
                          name='photo'
                          accept=".png, .jpg, .jpeg"
                          onChange={(event) => {
                            setFieldValue('photo', event.currentTarget.files[0]);
                          }}
                        />
                        <ErrorMessage component="div" name="photo" className="invalid-feedback" />
                      </div>

                      <button disabled={isSubmitting} type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </Form>
                  )}
                </Formik>

              </Modal.Body>
            </Modal>


          </>
        }
        <div className="my-properties">
          <table className="table-responsive">
            <thead>
              <tr>
                <th className="pl-2">All</th>
                <th className="p-0" />
                <th>Date Added</th>
                <th>Society</th>
                <th>Phase</th>
                <th>Owner Name</th>
                <th>Added by</th>
                {SuperAdmin() && (<th>Actions</th>)}
              </tr>
            </thead>
            <tbody>

              {AllBlocks?.map((item, key) => {
                return (<tr>
                  <td className="image myelist">
                    <Link to={`/dashboard/properties?society=${item?.society._id}&phase=${item?.phase?._id}&block=${item?._id}`}>
                      <img
                        alt="my-properties-3"
                        src={process.env.REACT_APP_IMAGE_URL + item?.photo}
                        className="img-fluid"
                      />
                    </Link>
                  </td>
                  <td>
                    <div className="inner">
                      <Link to={`/dashboard/properties?society=${item?.society._id}&phase=${item?.phase?._id}&block=${item?._id}`}> <h2>{item?.name}</h2></Link>
                      <figure>
                        <i className="lni-map-marker" />{item?.address}
                      </figure>

                    </div>
                  </td>
                  <td>{moment(item?.createdAt).format('llll')}</td>
                  <td>{item?.society?.name}</td>
                  <td>{item?.phase?.name}</td>
                  <td>{item?.ownerName}</td>

                  <td>{`${item?.createdBy?.firstName}  ${item?.createdBy?.lastName}`}</td>

                  {SuperAdmin() && (<td className="actions">
                    <button onClick={() => editModeFunc(item)} className="edit">
                      <i className="fa fa-pencil-alt" />

                    </button>
                    <button onClick={() => deletePhase(item?._id)} className="delete" >
                      <i className="far fa-trash-alt" />
                    </button>
                  </td>)}
                </tr>)
              })}

            </tbody>
          </table>
          {
            AllBlocks?.length > 0 &&
            <Pagination
              count={totalPages}
              size="large"
              page={currentPage}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          }
        </div>
      </div>
      <Loading isLoading={isLoading}/>
    </>
  )
}
