import React, { useState, useEffect } from 'react'
import Hooks from '../../hooks';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormDataFunc, PhasesValidationSchema } from '../../utils';
import { addNewPhaseApi, deletePhaseApi, editPhaseApi, getPhaseBySocietyidApi, getAllPhasesApi } from '../../store/api';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSocietiesAction, getAllPhasesAction } from '../../store/actions';
import moment from "moment"
import Modal from 'react-bootstrap/Modal';
import { Link, useLocation } from 'react-router-dom';
export default function AllPhases() {
  const allSocieties = useSelector(state => state.AllSocieties);
  // const AllPhases = useSelector(state => state.AllPhases);

  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const handleClose = () => setShow(false);
  const dispatch = useDispatch();

  const search = useLocation().search;
  const society = new URLSearchParams(search).get('society');
  const [AllPhases, setAllPhases] = useState([]);
  useEffect(() => {
    if (society !== null) {
      getPhaseBySocietyidApi(society)
        .then((phase) => {
          setAllPhases(phase?.data?.result);
        })
        .catch((error) => { });
    } else {
      getAllPhasesApi()
        .then((phase) => {
          console.log(phase?.data?.result);
          setAllPhases(phase?.data?.result);
        })
        .catch((error) => { });
    }
  }, []);


  useEffect(() => {
    dispatch(getAllSocietiesAction())
    dispatch(getAllPhasesAction())
  }, [])
  const { SuperAdmin } = Hooks();
  const [initialValues, setInitialValues] = useState({
    name: '',
    ownerName: '',
    status: '',
    society: '',
    photo: ''
  });
  const onSubmit = (values, props) => {

    if (editMode) {
      editPhaseApi(initialValues._id, FormDataFunc(values)).then((response) => {
        handleClose();
        props.resetForm();
        if (society !== null) {
          getPhaseBySocietyidApi(society)
            .then((phase) => {
              setAllPhases(phase?.data?.result);
            })
            .catch((error) => { });
        } else {
          getAllPhasesApi()
            .then((phase) => {
              console.log(phase?.data?.result);
              setAllPhases(phase?.data?.result);
            })
            .catch((error) => { });
        }
        setEditMode(false);
        setInitialValues({
          name: '',
          ownerName: '',
          status: '',
          society: '',

        })
      }).catch((err) => { })
    } else {
      addNewPhaseApi(FormDataFunc(values)).then((response) => {
        if (society !== null) {
          getPhaseBySocietyidApi(society)
            .then((phase) => {
              setAllPhases(phase?.data?.result);
            })
            .catch((error) => { });
        } else {
          getAllPhasesApi()
            .then((phase) => {
              console.log(phase?.data?.result);
              setAllPhases(phase?.data?.result);
            })
            .catch((error) => { });
        }
        props.resetForm();
        handleClose();
      }).catch((err) => { })
    }

  };
  const deletePhase = (id) => {
    deletePhaseApi(id).then((response) => {
      dispatch(getAllPhasesAction())
    }).catch((err) => { })
  }

  const editModeFunc = (data) => {
    setEditMode(true);
    setInitialValues({
      _id: data._id,
      name: data.name,
      ownerName: data.ownerName,
      status: data.status,
      society: data.society,

    });
    setShow(true)
  }


  return (
    <>
      <div className="col-lg-9 col-md-12 py-3 col-xs-12 pl-0 user-dash2">
        {SuperAdmin() &&
          <> <div className="Actions w-100 d-flex justify-content-end mb-2">
            <button className="btn  btn-common" onClick={() => setShow(true)}>
              Add New Phase
            </button>
          </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{editMode ? "Edit Phase" : "New Phase"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={PhasesValidationSchema}

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
                          <Field as="select" className='form-control' name="society">
                            {allSocieties?.data?.map((item, key) => {
                              return <option key={key} value={item?._id}>{item?.name}</option>
                            })}
                          </Field>
                          <ErrorMessage component="div" name="society" className="invalid-feedback" />

                        </div>

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
                <th>Owner Name</th>

                <th>Added by</th>
                {SuperAdmin() && (<th>Actions</th>)}
              </tr>
            </thead>
            <tbody>

              {AllPhases?.map((item, key) => {
                return (<tr>
                  <td className="image myelist">
                    <Link to={`/dashboard/blocks?society=${item?.society._id}&phase=${item?._id}`}>
                      <img
                        alt="my-properties-3"
                        src={process.env.REACT_APP_IMAGE_URL + item?.photo}
                        className="img-fluid"
                      />
                    </Link>
                  </td>
                  <td>
                    <div className="inner">
                      <Link to={`/dashboard/blocks?society=${item?.society._id}&phase=${item?._id}`}> <h2>{item?.name}</h2></Link>
                      <figure>
                        <i className="lni-map-marker" /> {item?.address}
                      </figure>

                    </div>
                  </td>
                  <td>{moment(item?.createdAt).format('llll')}</td>
                  <td>{item?.society?.name}</td>
                  <td>{item?.ownerName}</td>

                  <td>{`${item?.createdBy.firstName}  ${item?.createdBy.lastName}`}</td>

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
          <div className="pagination-container">
            <nav>
              <ul className="pagination">
                <li className="page-item">
                  <a className="btn btn-common" href="#">
                    <i className="lni-chevron-left" /> Previous{' '}
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
  )
}
