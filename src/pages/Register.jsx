import React from 'react';
import { DataEncryption, FormDataFunc, registerValidationSchema } from '../utils';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { userRegisterApi } from '../store/api';
import { Link, useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const onSubmit = (values, props) => {
    userRegisterApi(FormDataFunc(values))
      .then((response) => {
        navigate('/login');
      })
      .catch((error) => {
        console.log;
      });
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    photo: '',
    userType: 'customer',
  };

  return (
    <div className="inner-pages">
      <section className="headings">
        <div className="text-heading text-center">
          <div className="container">
            <h1>Register</h1>
            <h2>
              <a href="index.html">Home </a> &nbsp;/&nbsp; Register
            </h2>
          </div>
        </div>
      </section>
      <div id="login">
        <Formik
          initialValues={initialValues}
          validationSchema={registerValidationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors, isSubmitting, values, setFieldValue }) => (
            <div className="login">
              <Form autoComplete="off">
                <div className="form-group">
                  <label> First Name</label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="Enter First Name"
                    autoComplete="off"
                    className={`form-control
                    ${touched.firstName && errors.firstName ? 'is-invalid' : ''}`}
                  />
                  <i className="ti-user" />
                  <ErrorMessage component="div" name="firstName" className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label> Last Name</label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    autoComplete="off"
                    className={`form-control
                    ${touched.lastName && errors.lastName ? 'is-invalid' : ''}`}
                  />
                  <i className="ti-user" />
                  <ErrorMessage component="div" name="lastName" className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label> Email</label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    autoComplete="off"
                    className={`form-control
                    ${touched.email && errors.email ? 'is-invalid' : ''}`}
                  />
                  <i className="icon_mail_alt" />
                  <ErrorMessage component="div" name="email" className="invalid-feedback" />
                </div>
                <div className="form-group">
                  <label> Password</label>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    autoComplete="off"
                    className={`form-control
                    ${touched.password && errors.password ? 'is-invalid' : ''}`}
                  />
                  <i className="icon_lock_alt" />
                  <ErrorMessage component="div" name="password" className="invalid-feedback" />
                </div>

                <div className="form-group">
                  <label>Confirm password</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Your Password"
                    autoComplete="off"
                    className={`form-control
                    ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''}`}
                  />
                  <i className="icon_lock_alt" />
                  <ErrorMessage
                    component="div"
                    name="confirmPassword"
                    className="invalid-feedback"
                  />
                </div>
                <div className="form-group">
                  <label>Profile Image</label>
                  <input
                    type="file"
                    name="photo"
                    accept="image/png, image/gif, image/jpeg"
                    onChange={(event) => {
                      setFieldValue('photo', event.currentTarget.files[0]);
                    }}
                    className={`${touched.photo && errors.photo ? 'is-invalid' : ''}`}
                  />
                  <i className="icon_lock_alt" />
                  <ErrorMessage component="div" name="photo" className="invalid-feedback" />
                </div>
                <div className="row mb-2 form-group">
                  <div className="col-8">
                    <div className="custom-control custom-radio custom-control-inline">
                      <Field
                        type="radio"
                        checked
                        id="customRadioInline1"
                        name="userType"
                        value="customer"
                        className="custom-control-input"
                      />
                      <label className="custom-control-label" htmlFor="customRadioInline1">
                        Customer
                      </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline">
                      <Field
                        type="radio"
                        id="customRadioInline2"
                        name="userType"
                        value="agent"
                        className="custom-control-input"
                      />
                      <label className="custom-control-label" htmlFor="customRadioInline2">
                        Agent
                      </label>
                    </div>
                  </div>
                  <ErrorMessage component="div" name="userType" className="invalid-feedback" />
                </div>

                <div id="pass-info" className="clearfix" />
                <button type="submit" className="btn_1 rounded full-width add_top_30">
                  Register Now!
                </button>
                <div className="text-center add_top_10">
                  Already have an acccount?{' '}
                  <strong>
                    <Link to="/login">Sign In</Link>
                  </strong>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
