import React, { useEffect, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FormDataMultipleFiles, PropertySchema } from "../../utils";
import { getAllSocietiesAction } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  getBlockBySocietyAndPhaseIdApi,
  getPhaseBySocietyidApi,
  addNewPropertyApi,
  editPropertyApi,
} from "../../store/api";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import Loading from "../../utils/LoadingScreen";

export default function UserAddProperty({
  editMode,
  setEditMode,
  Values,
  handleClose,
}) {
  const allSocieties = useSelector((state) => state?.AllSocieties);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [phasesBySociety, setPhasesBySociety] = useState([]);
  const [BlockBySocietyAndPhaseId, setBlockBySocietyAndPhaseId] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const Features = [
    "Air Conditioning",
    "Swimming Pool",
    "Central Heating",
    "Laundry Room",
    "Gym",
    "Cinema",
    "Alarm",
    "Window Covering",
    "Refrigerator",
    "TV Cable & WIFI",
  ];

  let initialValues = {
    title: Values?.title ? Values.title : "",
    description: Values?.description ? Values.description : "",
    status: Values?.status ? Values.status : "",
    type: Values?.type ? Values.type : "",
    rooms: Values?.rooms ? Values.rooms : 0,
    price: Values?.price ? Values.price : 0,
    area: Values?.area ? Values.area : 0,
    address: Values?.address ? Values.address : "",
    city: Values?.city ? Values.city : "",
    state: Values?.state ? Values.state : "",
    country: Values?.country ? Values.country : "",
    latitude: Values?.latitude ? Values.latitude : "",
    longitude: Values?.longitude ? Values.longitude : "",
    age: Values?.age ? Values.age : "",
    bathrooms: Values?.bathrooms ? Values.bathrooms : 0,
    condition: Values?.condition ? Values.condition : "",
    ctInfoName: Values?.ctInfoName ? Values.ctInfoName : "",
    ctInfoUsername: Values?.ctInfoUsername ? Values.ctInfoUsername : "",
    ctInfoEmail: Values?.ctInfoEmail ? Values.ctInfoEmail : "",
    ctInfoPhone: Values?.ctInfoPhone ? Values.ctInfoPhone : "",
    society: Values?.society ? Values.society?._id : "",
    phase: Values?.phase ? Values.phase?._id : "",
    block: Values?.block ? Values.block?._id : "",
    features: Values?.features ? Values.features : [],
    photo: [],
  };
  useEffect(() => {
    dispatch(getAllSocietiesAction());
    if (editMode) {
      getPhaseBySocietyidApi(Values?.society?._id).then((res) => {
        setPhasesBySociety(res.data.result);
      });
      getBlockBySocietyAndPhaseIdApi(
        Values?.society?._id,
        Values.phase?._id
      ).then((res) => {
        setBlockBySocietyAndPhaseId(res.data.result);
      });
    }
  }, [editMode]);
  const onSubmit = (values, props) => {
    if (editMode) {
      setIsLoading(true);
      editPropertyApi(Values._id, FormDataMultipleFiles(values))
        .then((response) => {
          setIsLoading(false);
          toast.success(response?.data?.message);
          setEditMode(false);
          handleClose();
          props.resetForm();
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(error?.data?.message);
        });
    } else {
      setIsLoading(true);
      addNewPropertyApi(FormDataMultipleFiles(values))
        .then((response) => {
          setIsLoading(false);
          toast.success(response?.data?.message);
          props.resetForm();
          navigate("/dashboard/properties");
        })
        .catch((err) => {
          setIsLoading(false);
          toast.error(error?.data?.message);
        });
    }
  };
  const SelectSociety = (value) => {
    setPhasesBySociety([]);
    setBlockBySocietyAndPhaseId([]);
    if (value !== "Select Society") {
      getPhaseBySocietyidApi(value).then((res) => {
        setPhasesBySociety(res.data.result);
      });
    }
  };

  const SelectPhase = (society, value) => {
    if (value !== "Select Phase") {
      getBlockBySocietyAndPhaseIdApi(society, value).then((res) => {
        setBlockBySocietyAndPhaseId(res.data.result);
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={PropertySchema}>
        {({ touched, errors, isSubmitting, values, setFieldValue }) => (
          <Form
            className={`${
              editMode ? "col-lg-12" : "col-lg-9"
            } col-md-12 mb-2 col-xs-12 royal-add-property-area section_100 pl-0 user-dash2`}>
            <div className="single-add-property">
              <h3>Property description and price</h3>
              <div className="property-form-group">
                <div className="row">
                  <div className="col-md-12 mb-2">
                    <div>
                      <label htmlFor="title">Property Title</label>
                      <Field
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Enter your property title"
                      />
                      <ErrorMessage
                        component="div"
                        name="title"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-2">
                    <div>
                      <label htmlFor="description">Property Description</label>
                      <Field
                        as="textarea"
                        id="description"
                        name="description"
                        placeholder="Describe about your property"
                      />
                      <ErrorMessage
                        component="div"
                        name="description"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-12 mb-2">
                    <div className="form-group categories">
                      <Field as="select" name="status" className="form-control">
                        <option className="option">Select Status</option>
                        <option className="option" value="rent">
                          Rent
                        </option>
                        <option className="option" value="sale">
                          Sale
                        </option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="status"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-2">
                    <div className="form-group categories">
                      <Field as="select" name="type" className="form-control">
                        <option className="option" value="">
                          Select Type
                        </option>
                        <option className="option" value="house">
                          house
                        </option>
                        <option className="option" value="commercial">
                          commercial
                        </option>
                        <option className="option" value="apartment">
                          apartment
                        </option>
                        <option className="option" value="lot">
                          lot
                        </option>
                        <option className="option" value="garage">
                          garage
                        </option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="type"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-2">
                    <div className="form-group categories">
                      <Field
                        as="select"
                        onChange={(e) => {
                          setFieldValue("rooms", parseInt(e.target.value));
                        }}
                        name="rooms"
                        className="form-control">
                        <option className="option" value={1}>
                          1
                        </option>
                        <option className="option" value={2}>
                          2
                        </option>
                        <option className="option" value={3}>
                          3
                        </option>
                        <option className="option" value={4}>
                          4
                        </option>
                        <option className="option" value={5}>
                          5
                        </option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="rooms"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="no-mb">
                      <label htmlFor="price">Price</label>
                      <Field
                        type="number"
                        name="price"
                        placeholder="USD"
                        id="price"
                      />
                    </div>
                    <ErrorMessage
                      component="div"
                      name="price"
                      className="text-danger"
                    />
                  </div>
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="no-mb last">
                      <label htmlFor="area">Area</label>
                      <Field
                        type="Number"
                        name="area"
                        placeholder="Sqft"
                        id="area"
                      />
                    </div>
                    <ErrorMessage
                      component="div"
                      name="area"
                      className="text-danger"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-add-property">
              <h3>property Media</h3>
              <div className="property-form-group">
                <div className="row">
                  <div className="col-md-12 mb-2">
                    <UploadComponent
                      photos={photos}
                      setPhotos={setPhotos}
                      setFieldValue={setFieldValue}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="single-add-property">
              <h3>property Location</h3>
              <div className="property-form-group">
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="selectBoxes">
                      <label htmlFor="address">Society</label>
                      <Field
                        as="select"
                        className="form-control"
                        onChange={(e) => {
                          SelectSociety(e.target.value);
                          setFieldValue("society", e.target.value);
                        }}
                        name="society">
                        <option>Select Society</option>

                        {allSocieties?.data?.map((item, key) => {
                          return (
                            <option key={key} value={item._id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="society"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="selectBoxes">
                      <label htmlFor="address">Phase</label>
                      <Field
                        as="select"
                        className="form-control"
                        onChange={(e) => {
                          SelectPhase(values.society, e.target.value);
                          setFieldValue("phase", e.target.value);
                        }}
                        name="phase">
                        <option>Select Phase</option>
                        {phasesBySociety?.map((item, key) => {
                          return (
                            <option key={key} value={item._id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="phase"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="selectBoxes">
                      <label htmlFor="address">Block</label>
                      <Field as="select" name="block" className="form-control">
                        <option className="option">Select Block</option>
                        {BlockBySocietyAndPhaseId?.map((item, key) => {
                          return (
                            <option key={key} value={item._id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="block"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div>
                      <label htmlFor="address">Address</label>
                      <Field
                        type="text"
                        name="address"
                        placeholder="Enter Your Address"
                        id="address"
                      />
                      <ErrorMessage
                        component="div"
                        name="address"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div>
                      <label htmlFor="city">City</label>
                      <Field
                        type="text"
                        name="city"
                        placeholder="Enter Your City"
                        id="city"
                      />
                      <ErrorMessage
                        component="div"
                        name="city"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div>
                      <label htmlFor="state">State</label>
                      <Field
                        type="text"
                        name="state"
                        placeholder="Enter Your State"
                        id="state"
                      />
                      <ErrorMessage
                        component="div"
                        name="state"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div>
                      <label htmlFor="country">Country</label>
                      <Field
                        type="text"
                        name="country"
                        placeholder="Enter Your Country"
                        id="country"
                      />
                      <ErrorMessage
                        component="div"
                        name="country"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="no-mb first">
                      <label htmlFor="latitude">Google Maps latitude</label>
                      <Field
                        type="text"
                        name="latitude"
                        placeholder="Google Maps latitude"
                        id="latitude"
                      />
                      <ErrorMessage
                        component="div"
                        name="latitude"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="no-mb last">
                      <label htmlFor="longitude">Google Maps longitude</label>
                      <Field
                        type="text"
                        name="longitude"
                        placeholder="Google Maps longitude"
                        id="longitude"
                      />
                      <ErrorMessage
                        component="div"
                        name="longitude"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-add-property">
              <h3>Extra Information</h3>
              <div className="property-form-group">
                <div className="row align-content-center">
                  <div className="col-lg-4 col-md-12 mb-2">
                    <div className="form-group categories">
                      <Field as="select" name="age" className="form-control">
                        <option className="option">Select Age</option>
                        <option className="option" value="0-1">
                          0-1 years
                        </option>
                        <option className="option" value="0-5">
                          0-5 years
                        </option>
                        <option className="option" value="0-10">
                          0-10 years
                        </option>
                        <option className="option" value="0-15">
                          0-15 years
                        </option>
                        <option className="option" value="0-20">
                          0-20 years
                        </option>
                        <option className="option" value="0-50">
                          0-50 years
                        </option>
                        <option className="option" value="50">
                          50+ years
                        </option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="age"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-2 ">
                    <div className="form-group categories">
                      <Field
                        as="select"
                        onChange={(e) => {
                          setFieldValue("bathrooms", parseInt(e.target.value));
                        }}
                        name="bathrooms"
                        className="form-control">
                        <option className="option" value={1}>
                          1
                        </option>
                        <option className="option" value={2}>
                          2
                        </option>
                        <option className="option" value={3}>
                          3
                        </option>
                        <option className="option" value={4}>
                          4
                        </option>
                        <option className="option" value={5}>
                          5
                        </option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="bathrooms"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-12 mb-2 dropdown faq-drop">
                    <div className="form-group categories">
                      <Field
                        as="select"
                        name="condition"
                        className="form-control">
                        <option className="option">Select Condition</option>
                        <option className="option" value="furnished">
                          Furnished
                        </option>
                        <option className="option" value="unfurnished">
                          Unfurnished
                        </option>
                      </Field>
                      <ErrorMessage
                        component="div"
                        name="condition"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-add-property">
              <h3>Property Features</h3>
              <div className="property-form-group">
                <div className="row">
                  <div className="col-md-12 mb-2">
                    <ul className="pro-feature-add pl-0">
                      {Features.map((item, key) => (
                        <li className="fl-wrap filter-tags clearfix">
                          <div className="checkboxes float-left">
                            <div className="filter-tags-wrap">
                              <Field
                                id={`check-${key}`}
                                type="checkbox"
                                name="features"
                                // checked={values ? values?.features?.includes(item) : false}
                                value={item}
                              />
                              <label htmlFor={`check-${key}`}>{item}</label>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="single-add-property">
              <h3>Contact Information</h3>
              <div className="property-form-group">
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div>
                      <label htmlFor="con-name">Name</label>
                      <Field
                        type="text"
                        placeholder="Enter Your Name"
                        id="con-name"
                        name="ctInfoName"
                      />
                      <ErrorMessage
                        component="div"
                        name="ctInfoName"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div>
                      <label htmlFor="con-user">Username</label>
                      <Field
                        type="text"
                        placeholder="Enter Your Username"
                        id="con-user"
                        name="ctInfoUsername"
                      />
                      <ErrorMessage
                        component="div"
                        name="ctInfoUsername"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="no-mb first">
                      <label htmlFor="con-email">Email</label>
                      <Field
                        type="email"
                        placeholder="Enter Your Email"
                        id="con-email"
                        name="ctInfoEmail"
                      />
                      <ErrorMessage
                        component="div"
                        name="ctInfoEmail"
                        className="text-danger"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 mb-2">
                    <div className="no-mb last">
                      <label htmlFor="con-phn">Phone</label>
                      <Field
                        type="text"
                        placeholder="Enter Your Phone Number"
                        id="con-phn"
                        name="ctInfoPhone"
                      />
                      <ErrorMessage
                        component="div"
                        name="ctInfoPhone"
                        className="text-danger"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="add-property-button pt-5">
                <div className="row">
                  <div className="col-md-12 mb-2">
                    <div className="prperty-submit-button">
                      <button type="submit">Submit Property</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Loading isLoading={isLoading} />
    </>
  );
}

const UploadComponent = (props) => {
  const { setFieldValue, photos, setPhotos } = props;

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      setFieldValue("photo", []);
      setPhotos([]);
      setFieldValue("photo", acceptedFiles);
      setPhotos(
        acceptedFiles.map((file) => {
          return URL.createObjectURL(file);
        })
      );
    },
  });
  return (
    <div>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        {photos?.length > 0 ? (
          photos?.map((item, key) => {
            return <li key={key}>{item}</li>;
          })
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
    </div>
  );
};
