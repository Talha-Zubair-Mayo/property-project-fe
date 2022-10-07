import React, { useState, useEffect } from 'react'
import Hooks from '../../hooks';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { FormDataFunc, SocietiesValidationSchema } from '../../utils';
import { addNewSocietyApi, deleteSocietyApi, editSocietyApi, getAllSocietiesApi } from '../../store/api';
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment"
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import { toast } from 'react-toastify';
export default function AllSocieties() {
  // const allSocieties = useSelector(state => state.AllSocieties)
  const [allSocieties, setAllSocieties] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [show, setShow] = useState(false);
  const [editMode, setEditMode] = useState(false)
  const handleClose = () => setShow(false);
  const getAllSocieties = (page) => {
    getAllSocietiesApi(page ? page : 1).then((response) => {
      setAllSocieties(response?.data?.result)
      setTotalPages(response?.data?.pagination?.pages)
    })
  }

  useEffect(() => {
    getAllSocieties()
  }, [])
  const { SuperAdmin } = Hooks();
  const [initialValues, setInitialValues] = useState({
    name: '',
    ownerName: '',
    address: '',
    managerName: '',
    photo: []
  });
  const onSubmit = (values, props) => {
    if (editMode) {
      editSocietyApi(initialValues._id, FormDataFunc(values)).then((response) => {
        toast.success(response?.data?.message);
        handleClose();
        props.resetForm();
        getAllSocieties()
        setEditMode(false);
        setInitialValues({
          name: '',
          ownerName: '',
          address: '',
          managerName: '',
          photo: []
        })
      }).catch((error) => {
        toast.error(error?.data?.message);

      })
    } else {
      addNewSocietyApi(FormDataFunc(values)).then((response) => {
        toast.success(response?.data?.message);
        handleClose();
        props.resetForm();
        getAllSocieties()
      }).catch((error) => {
        toast.error(error?.data?.message);
      })
    }

  };
  const deleteSociety = (id) => {
    deleteSocietyApi(id).then((response) => {
      toast.success(response?.data?.message);
      getAllSocieties()
    }).catch((error) => {
      toast.error(error?.data?.message);
    })
  }

  const editModeFunc = (data) => {
    setEditMode(true);
    setInitialValues({
      _id: data._id,
      name: data.name,
      ownerName: data.ownerName,
      address: data.address,
      managerName: data.managerName,
      photo: data.photo
    });
    setShow(true)
  }

  const handlePageChange = (e, p) => {
    console.log(p)
    getAllSocieties(p)
  }


  return (
    <>
      <div className="col-lg-9 col-md-12 py-3 col-xs-12 pl-0 user-dash2">
        {SuperAdmin() &&
          <> <div className="Actions w-100 d-flex justify-content-end mb-2">
            <button className="btn  btn-common" onClick={() => setShow(true)}>
              Add New Society
            </button>
          </div>
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{editMode ? "Edit Society" : "New Society"}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Formik
                  initialValues={initialValues}
                  onSubmit={onSubmit}
                  validationSchema={SocietiesValidationSchema}
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
                          <label htmlFor="inputEmail4">Manager Name</label>
                          <Field
                            type="text"
                            className={`form-control
                                ${touched.managerName && errors.managerName ? 'is-invalid' : ''}`}
                            id="inputName4"
                            name="managerName"
                            placeholder="Enter Manager Name"
                          />
                          <ErrorMessage component="div" name="managerName" className="invalid-feedback" />

                        </div>

                      </div>
                      <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <Field
                          type="text"
                          className={`form-control
                                ${touched.address && errors.address ? 'is-invalid' : ''}`}
                          id="inputAddress"
                          name="address"
                          placeholder="Enter 1234 Main St"
                        />
                        <ErrorMessage component="div" name="address" className="invalid-feedback" />

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

                      <button type="submit" className="btn btn-primary">
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
                <th>Owner Name</th>
                <th>Manager Name</th>
                <th>Added by</th>
                {SuperAdmin() && (<th>Actions</th>)}
              </tr>
            </thead>
            <tbody>

              {allSocieties?.map((item, key) => {
                return (<tr>
                  <td className="image myelist">
                    <Link to={`/dashboard/phases?society=${item?._id}`}>
                      <img
                        alt="my-properties-3"
                        src={process.env.REACT_APP_IMAGE_URL + item.photo}
                        className="img-fluid"
                      />
                    </Link>
                  </td>
                  <td>
                    <div className="inner">
                      <Link to={`/dashboard/phases?society=${item?._id}`}> <h2>{item?.name}</h2></Link>
                      <figure>
                        <i className="lni-map-marker" /> {item.address}
                      </figure>

                    </div>
                  </td>
                  <td>{moment(item.createdAt).format('llll')}</td>
                  <td>{item.ownerName}</td>
                  <td>{item.managerName}</td>
                  <td>{`${item.createdBy.firstName}  ${item.createdBy.lastName}`}</td>

                  {SuperAdmin() && (<td className="actions">
                    <button onClick={() => editModeFunc(item)} className="edit">
                      <i className="fa fa-pencil-alt" />

                    </button>
                    <button onClick={() => deleteSociety(item._id)} className="delete" >
                      <i className="far fa-trash-alt" />
                    </button>
                  </td>)}
                </tr>)
              })}

            </tbody>
          </table>
          {
            allSocieties?.length > 0 && <Pagination
              count={totalPages}
              size="large"
              // page={page}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          }
        </div>
      </div>
    </>
  )
}
