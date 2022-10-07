import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { profileValidationSchema } from '../../utils';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/actions';
import { updateUserApi } from "../../store/api"
import { toast } from 'react-toastify';
export default function PersonalInformation() {
  const userInfo = useSelector((state) => state.UserLogin.data.user);

  const dispatch = useDispatch();

  const onSubmit = (values, props) => {
    updateUserApi(userInfo?._id, values)
      .then((response) => {
        dispatch(loginAction(response.data.result));
        toast.success(response?.data?.message)
      })
      .catch((error) => {
        toast.error(error?.data?.message)
      });
  };

  const initialValues = {
    firstName: userInfo?.firstName ? userInfo?.firstName : '',
    lastName: userInfo?.lastName ? userInfo?.lastName : '',
    phone: userInfo?.phone ? userInfo?.phone : '',
    company: userInfo?.company ? userInfo?.company : '',
    address: userInfo?.address ? userInfo?.address : '',
    about: userInfo?.about ? userInfo?.about : ''
  };

  return (
    <>
      <div className="dashborad-box mb-0">
        <h4 className="heading pt-0">Personal Information</h4>
        <div className="section-inforamation">
          <Formik
            initialValues={initialValues}
            validationSchema={profileValidationSchema}
            onSubmit={onSubmit}
          >
            {({ touched, errors, isSubmitting, values }) => (
              <Form>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>First Name</label>
                      <Field type="text" name='firstName'
                        className={`form-control
                        ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`
                        } placeholder="Enter your First name" />
                      <ErrorMessage component="div" name="firstName" className="invalid-feedback" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Last Name</label>
                      <Field type="text" name="lastName"
                        className={`form-control
                        ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                        placeholder="Enter your Last name" />
                      <ErrorMessage component="div" name="lastName" className="invalid-feedback" />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Phone Number</label>
                      <Field type="text" name='phone' className={`form-control
                        ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                        placeholder="Ex: +1-800-7700-00" />
                      <ErrorMessage component="div" name="phone" className="invalid-feedback" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Company</label>
                      <Field type="text" name='company'
                        className={`form-control
                        ${touched.company && errors.company ? 'is-invalid' : ''}`}
                        placeholder="Enter Your Company" />
                      <ErrorMessage component="div" name="company" className="invalid-feedback" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Address</label>
                      <Field as='textarea'
                        name="address"
                        className={`form-control
                        ${touched.address && errors.address ? 'is-invalid' : ''}`}
                        placeholder="Write your address here"
                      />
                      <ErrorMessage component="div" name="address" className="invalid-feedback" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>About Yourself</label>
                      <Field as='textarea'
                        name="about"
                        className={`form-control
                       ${touched.about && errors.about ? 'is-invalid' : ''}`}
                        placeholder="Write about userself"
                      />
                      <ErrorMessage component="div" name="about" className="invalid-feedback" />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-lg mt-2">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
