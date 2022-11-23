import React, { useEffect, useState } from "react";
import { FormDataFunc, registerValidationSchema } from "../utils";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { socialRegisterApi, userRegisterApi } from "../store/api";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../utils/LoadingScreen";
import { loadGapiInsideDOM } from "gapi-script";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { loginAction } from "../store/actions";
import { useDispatch } from "react-redux";
function Register() {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      await loadGapiInsideDOM();
    })();
  });
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values, props) => {
    setIsLoading(true);
    userRegisterApi(FormDataFunc(values))
      .then((response) => {
        setIsLoading(false);
        navigate("/login");
        props.resetForm();
        props.setSubmitting(false);
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error?.data?.message);
      });
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: "",
    userType: "customer",
  };

  const responseGoogleSuccess = (response) => {
    const user = {
      firstName: response?.profileObj.givenName,
      lastName: response?.profileObj.familyName,
      socialId: `google-${response.googleId}`,
      email: response?.profileObj.email,
      userType: "agent",
      photo: response?.profileObj.imageUrl,
      isGoogleLogin: true,
      isFacebookLogin: false,
    };
    socialRegisterApi(user)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        localStorage.setItem("token", response?.data?.result?.token);
        navigate("/dashboard");
        dispatch(loginAction(response?.data?.result));
        toast.success(response?.data?.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err?.data?.message);
      });
    console.log(user);
  };

  // Error Handler
  const responseGoogleError = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    const user = {
      firstName: response.name.split(" ")[0],
      lastName: response.name.split(" ")[1],
      socialId: `facebook-${response.userID}`,
      email: response.email,
      userType: "agent",
      photo: response.picture.data.url,
      isGoogleLogin: false,
      isFacebookLogin: true,
    };
    socialRegisterApi(user)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        localStorage.setItem("token", response?.data?.result?.token);
        navigate("/dashboard");
        dispatch(loginAction(response?.data?.result));
        toast.success(response?.data?.message);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(user);
  };

  return (
    <>
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
            onSubmit={onSubmit}>
            {({ touched, errors, isSubmitting, values, setFieldValue }) => (
              <div className="login">
                <div className="access_social">
                  <GoogleLogin
                    clientId="277094535108-is872kf6iqvfqkp8kk88v3pni5kp5nva.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <button
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        type="button"
                        className="social_bt google">
                        Register with Google
                      </button>
                    )}
                    buttonText="Login"
                    onSuccess={responseGoogleSuccess}
                    onFailure={responseGoogleError}
                    cookiePolicy={"single_host_origin"}
                  />

                  <FacebookLogin
                    appId="889699102378305"
                    callback={responseFacebook}
                    fields="name,email,picture"
                    render={(renderProps) => (
                      <button
                        type="button"
                        className="social_bt facebook"
                        onClick={renderProps.onClick}>
                        Register with Facebook
                      </button>
                    )}
                  />
                  {/* <button type="button" className="social_bt facebook">
                    Register with Facebook
                  </button> */}
                </div>
                <Form autoComplete="off">
                  <div className="form-group">
                    <label> First Name</label>
                    <Field
                      type="text"
                      name="firstName"
                      placeholder="Enter First Name"
                      autoComplete="off"
                      className={`form-control
                    ${
                      touched.firstName && errors.firstName ? "is-invalid" : ""
                    }`}
                    />
                    <i className="ti-user" />
                    <ErrorMessage
                      component="div"
                      name="firstName"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label> Last Name</label>
                    <Field
                      type="text"
                      name="lastName"
                      placeholder="Enter Last Name"
                      autoComplete="off"
                      className={`form-control
                    ${touched.lastName && errors.lastName ? "is-invalid" : ""}`}
                    />
                    <i className="ti-user" />
                    <ErrorMessage
                      component="div"
                      name="lastName"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label> Email</label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      autoComplete="off"
                      className={`form-control
                    ${touched.email && errors.email ? "is-invalid" : ""}`}
                    />
                    <i className="icon_mail_alt" />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="form-group">
                    <label> Password</label>
                    <Field
                      type="password"
                      name="password"
                      placeholder="Enter password"
                      autoComplete="off"
                      className={`form-control
                    ${touched.password && errors.password ? "is-invalid" : ""}`}
                    />
                    <i className="icon_lock_alt" />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>

                  <div className="form-group">
                    <label>Confirm password</label>
                    <Field
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm Your Password"
                      autoComplete="off"
                      className={`form-control
                    ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    }`}
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
                        setFieldValue("photo", event.currentTarget.files[0]);
                      }}
                      className={`${
                        touched.photo && errors.photo ? "is-invalid" : ""
                      }`}
                    />
                    <i className="icon_lock_alt" />
                    <ErrorMessage
                      component="div"
                      name="photo"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="row mb-2 form-group">
                    <div className="col-8">
                      <div className="custom-control custom-radio custom-control-inline">
                        <Field
                          type="radio"
                          id="customRadioInline1"
                          name="userType"
                          value="customer"
                          className="custom-control-input"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline1">
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
                        <label
                          className="custom-control-label"
                          htmlFor="customRadioInline2">
                          Agent
                        </label>
                      </div>
                    </div>
                    <ErrorMessage
                      component="div"
                      name="userType"
                      className="invalid-feedback"
                    />
                  </div>

                  <div id="pass-info" className="clearfix" />
                  <button
                    type="submit"
                    className="btn_1 rounded full-width add_top_30">
                    Register Now!
                  </button>
                  <div className="text-center add_top_10">
                    Already have an acccount?{" "}
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
      <Loading isLoading={isLoading} />
    </>
  );
}

export default Register;
