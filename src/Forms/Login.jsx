import { ErrorMessage, Field, Form, Formik } from "formik";
import { loadGapiInsideDOM } from "gapi-script";
import React, { useEffect, useState } from "react";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import FacebookIcon from "../components/images/facebook";
import GoogleIcon from "../components/images/Google";
import { loginAction } from "../store/actions";
import { userLoginApi, socialLoginApi } from "../store/api";
import { loginValidationSchema } from "../utils";
import "./pform.css";
const LoginPage = () => {
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
        navigate("/dashboard");
        dispatch(loginAction(response?.data?.result));
        toast.success(response?.data?.message);
      })
      .catch((err) => {
        toast.error(err?.data?.message);
      });
    console.log(user);
  };

  const initialValues = {
    userEmailPhone: "talha@redfireai.com",
    password: "Pa$$w0rd!",
    rememberMe: false,
  };
  return (
    <>
      <div className="row m-0" id="estatelogin">
        <div className="p-left p-0">
          <div className="p-left-sub">
            <p className="text-skin font-56 font-weight-800 w-50 pb-3">
              Welcome <span className="text-light-black">Back!</span>
            </p>
            <div className="orangeline"></div>
            <Formik
              initialValues={initialValues}
              validationSchema={loginValidationSchema}
              onSubmit={onSubmit}>
              {({ touched, errors, isSubmitting, values }) => (
                <Form action="" className="text-light-black">
                  <div className="d-flex flex-column mb-3">
                    <label
                      className="font-16 font-weight-600 pb-2 "
                      htmlFor="email">
                      Email
                    </label>
                    <Field
                      type="email"
                      className={`form-control form-control p-input-style font-16 font-weight-500 w-100
                    ${touched.userEmailPhone && errors.userEmailPhone ? "is-invalid" : ""}`}
                      id="email"
                      placeholder="abcd@gmail.com"
                      name="userEmailPhone"
                    />
                    <ErrorMessage
                      component="div"
                      name="userEmailPhone"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="d-flex flex-column mb-3">
                    <div className="d-flex justify-content-between align-items-center font-16 font-weight-600 pb-2 ">
                      <label htmlFor="password">Password</label>
                      <p className="text-skin">Forget Password?</p>
                    </div>
                    <Field
                      type="password"
                      className={`form-control form-control p-input-style font-16 font-weight-500 w-100
                    ${touched.password && errors.password ? "is-invalid" : ""}`}
                      id="password"
                      placeholder="Atlease 8 characters"
                      minLength={8}
                      name="password"
                    />
                    <ErrorMessage
                      component="div"
                      name="password"
                      className="invalid-feedback"
                    />
                  </div>
                  <label className="custom-checkbox d-flex align-items-center">
                    <span className="pl-2 text-light-black font-weight-600">
                      Stay signed in
                    </span>
                    <input type="checkbox" />
                    <span className="checkmark"></span>
                  </label>
                  <button
                    type="submit"
                    className="e-btn-style bg-skin mt-5 text-white font-weight-600 mb-5 w-100">
                    Login
                  </button>
                </Form>
              )}
            </Formik>
            <div className="estate-or-divider mb-5">
              <span className="text-light-black font-weight-500">
                Or Login With
              </span>
            </div>

            <div className="justify-content-between d-flex align-items-center text-light-black mb-5 mb-220px">
              <GoogleLogin
                clientId="277094535108-is872kf6iqvfqkp8kk88v3pni5kp5nva.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    type="button"
                    className="e-btn-style bg-white font-weight-600 w-100">
                    <GoogleIcon /> <span className="pl-2">Google</span>
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleError}
                cookiePolicy={"single_host_origin"}
              />
              <ReactFacebookLogin
                appId="680504097055422"
                callback={responseFacebook}
                fields="name,email,picture"
                // @ts-ignore
                render={(renderProps) => (
                  <button
                    type="button"
                    onClick={renderProps.onClick}
                    className="e-btn-style mr-4 bg-white font-weight-600 w-100">
                    <FacebookIcon /> <span className="pl-2">Facebook</span>
                  </button>
                )}
              />
              {/* <button className="e-btn-style mr-4 bg-white font-weight-600 w-100">
                <FacebookIcon /> <span className="pl-2">Facebook</span>
              </button>
              <button className="e-btn-style bg-white font-weight-600 w-100">
                <GoogleIcon /> <span className="pl-2">Google</span>
              </button> */}
            </div>

            <p className="pt-5 text-light-black font-weight-500 copyright">
              © Copyright 2022 Estate Book. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="p-right  p-0">
          <div className="p-right-sub">
            <p className="text-skin font-56 font-weight-800">
              <span className="text-light-black">Login To</span> Your Account
            </p>
            <p className="pt-4 text-light-black font-weight-500 w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-100 d-flex align-items-center ">
              {/* <Loginmain /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
