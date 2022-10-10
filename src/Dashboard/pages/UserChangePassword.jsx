import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { resetPasswordApi } from '../../store/api';
import { resetPasswordValidationSchema } from '../../utils';
import Loading from '../../utils/LoadingScreen';
export default function UserChangePassword() {
  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = (values, props) => {
    setIsLoading(true);
    resetPasswordApi(values)
      .then((response) => {
        // navigate('/');
        props.resetForm();
        toast.success(response?.data?.message);
        setIsLoading(false);
      })
      .catch((error) => {
        toast.error(error?.data?.message);
        setIsLoading(false);
      });
  };

  const initialValues = {
    currentPassword: '',
    password: '',
    confirmPassword: '',
  };
  return (
    <div className="col-lg-9 col-md-9 col-xs-9">
      <div className="my-address">
        <h3 className="heading pt-0">Change Password</h3>

        <Formik
          initialValues={initialValues}
          validationSchema={resetPasswordValidationSchema}
          onSubmit={onSubmit}
        >
          {({ touched, errors, isSubmitting, values }) => (
            <div className="login">
              <Form autoComplete="off">
                {/* <div className="form-group">
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
                </div> */}

                <div className="row">
                  <div className="col-lg-12 ">
                    <div className="form-group name">
                      <label>Current Password</label>
                      <Field
                        type="password"
                        name="currentPassword"
                        className={`form-control
                    ${touched.currentPassword && errors.currentPassword ? 'is-invalid' : ''}`}
                        placeholder="Current Password"
                      />
                      <ErrorMessage
                        component="div"
                        name="currentPassword"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group email">
                      <label>New Password</label>
                      <Field
                        type="password"
                        name="password"
                        className={`form-control
                    ${touched.password && errors.password ? 'is-invalid' : ''}`}
                        placeholder="New Password"
                      />
                      <ErrorMessage component="div" name="password" className="invalid-feedback" />
                    </div>
                  </div>
                  <div className="col-lg-12 ">
                    <div className="form-group subject">
                      <label>Confirm New Password</label>
                      <Field
                        type="password"
                        name="confirmPassword"
                        className={`form-control
                      ${touched.confirmPassword && errors.confirmPassword ? 'is-invalid' : ''}`}
                        placeholder="Confirm New Password"
                      />
                      <ErrorMessage
                        component="div"
                        name="confirmPassword"
                        className="invalid-feedback"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="send-btn mt-2">
                      <button type="submit" className="btn btn-common">
                        Send Changes
                      </button>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          )}
        </Formik>
      </div>

      <Loading isLoading={isLoading} />
    </div>
  );
}
