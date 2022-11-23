import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { DataEncryption, loginValidationSchema } from "../utils";
import { socialLoginApi, userLoginApi } from "../store/api";
import { useDispatch } from "react-redux";
import { loginAction } from "../store/actions";
import { toast } from "react-toastify";
import Loading from "../utils/LoadingScreen";
import GoogleLogin from "react-google-login";
import { loadGapiInsideDOM } from "gapi-script";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function Login() {
  useEffect(() => {
    (async () => {
      await loadGapiInsideDOM();
    })();
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (values, props) => {
    setIsLoading(true);

    userLoginApi(values)
      .then((response) => {
        setIsLoading(false);
        localStorage.setItem("token", response?.data?.result?.token);
        navigate("/dashboard");
        dispatch(loginAction(response?.data?.result));
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error?.data?.message);
      });
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
    socialLoginApi(user)
      .then((response) => {
        console.log(response);
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
      socialId: `facebook-${response.userID}`,
    };
    socialLoginApi(user)
      .then((response) => {
        console.log(response);
        setIsLoading(false);
        localStorage.setItem("token", response?.data?.result?.token);
        // navigate("/");
        dispatch(loginAction(response?.data?.result));
        toast.success(response?.data?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
    console.log(user);
  };

  const initialValues = {
    email: "admin@demo.com",
    password: "admin@demo.com",
    rememberMe: false,
  };
  return (
    <>
      <div className="inner-pages">
        <div className="clearfix" />
        {/* Header Container / End */}
        <section className="headings">
          <div className="text-heading text-center">
            <div className="container">
              <h1>Login</h1>
              <h2>
                <Link to="/">Home </Link> &nbsp;/&nbsp; login
              </h2>
            </div>
          </div>
        </section>

        <div id="login">
          <Formik
            initialValues={initialValues}
            validationSchema={loginValidationSchema}
            onSubmit={onSubmit}>
            {({ touched, errors, isSubmitting, values }) => (
              <div className="login">
                <Form autoComplete="off">
                  <div className="access_social">
                    <GoogleLogin
                      clientId="277094535108-is872kf6iqvfqkp8kk88v3pni5kp5nva.apps.googleusercontent.com"
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                          type="button"
                          className="social_bt google">
                          Login with Google
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
                  </div>
                  <div className="divider">
                    <span>Or</span>
                  </div>
                  {/* <div className="d-flex flex-column align-items-center justify-content-center">
                    <div className="d-flex justify-content-between align-items-cenetr w-100">
                      <button className="google-btn">Login with Google</button>
                      <button className="facebook-btn">
                        Login with Facebook
                      </button>
                    </div>
                    <p className="pt-2">Or</p>
                  </div> */}
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

                  <div className="fl-wrap filter-tags clearfix add_bottom_30">
                    <div className="checkboxes float-left">
                      <div className="filter-tags-wrap">
                        <Field id="check-b" type="checkbox" name="rememberMe" />
                        <label htmlFor="check-b">Remember me</label>
                      </div>
                    </div>
                    <div className="float-right mt-1">
                      <a id="forgot" href="/">
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <button type="submit" className="btn_1 rounded full-width">
                    Login to Property
                  </button>
                  <div className="text-center add_top_10">
                    New to Property ?{" "}
                    <strong>
                      <Link to="/register">Sign up!</Link>
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

export default Login;
