import React, { useEffect, useState } from "react";
import Facebook from "../components/images/facebook";
import Google from "../components/images/Google";
import Signupnewmain from "../components/images/signupnewmain";
import "./pform.css";
import { MuiTelInput } from "mui-tel-input";
import { loadGapiInsideDOM } from "gapi-script";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginAction } from "../store/actions";
import { userRegisterApi, socialRegisterApi } from "../store/api";
import { FormDataFunc, registerValidationSchema } from "../utils";
import { ErrorMessage, Field, Form, Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import ReactFacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
const Signup = () => {
  const [phone, setPhone] = React.useState("+9239699999");
  const handleChange = (newPhone) => {
    setPhone(newPhone);
  };

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
    console.log(values);
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
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
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
      <div className="row m-0" id="estatelogin">
        <div className="p-left p-0">
          <div className="p-left-sub">
            <p className="text-skin font-56 font-weight-800 pb-3">
              Sign <span className="text-light-black">Up</span>
            </p>
            <div className="orangeline"></div>
            <Formik
              initialValues={initialValues}
              validationSchema={registerValidationSchema}
              onSubmit={onSubmit}>
              {({ touched, errors, isSubmitting, values, setFieldValue }) => (
                <Form action="" className="text-light-black">
                  <div className="d-flex flex-column mb-3">
                    <label
                      className="font-16 font-weight-600 pb-2 "
                      htmlFor="email">
                      Email
                    </label>
                    <Field
                      type="email"
                      id="email"
                      placeholder="abcd@gmail.com"
                      name="email"
                      className={`form-control p-input-style font-16 font-weight-500 w-100
                    ${touched.email && errors.email ? "is-invalid" : ""}`}
                    />
                    <ErrorMessage
                      component="div"
                      name="email"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="d-flex flex-column mb-3">
                    <label
                      className="font-16 font-weight-600 pb-2 "
                      htmlFor="email">
                      Phone Number <span className="text-skin">*</span>
                    </label>
                    <PhoneInput
                      onChange={(phone) => setFieldValue("phone", phone)}
                      specialLabel={""}
                      disableDropdown={false}
                      inputProps={{
                        name: "phone",
                        required: true,
                        autoFocus: true,
                      }}
                    />
                    <ErrorMessage
                      component="div"
                      name="phone"
                      className="invalid-feedback"
                    />
                  </div>
                  <div className="d-flex flex-column mb-3">
                    <div className="d-flex justify-content-between align-items-center font-16 font-weight-600 pb-2 ">
                      <label htmlFor="password">Password</label>
                    </div>
                    <Field
                      type="password"
                      className={`form-control p-input-style font-16 font-weight-500 w-100
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
                  <div className="d-flex flex-column mb-3">
                    <div className="d-flex justify-content-between align-items-center font-16 font-weight-600 pb-2 ">
                      <label htmlFor="password">Re-Enter Password</label>
                    </div>
                    <Field
                      type="password"
                      className={`form-control p-input-style font-16 font-weight-500 w-100
                    ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "is-invalid"
                        : ""
                    }`}
                      id="confirmPassword"
                      placeholder="Atlease 8 characters"
                      minLength={8}
                      name="confirmPassword"
                    />
                    <ErrorMessage
                      component="div"
                      name="confirmPassword"
                      className="invalid-feedback"
                    />
                  </div>

                  <button
                    type="submit"
                    className="e-btn-style bg-skin mt-5 text-white font-weight-600 mb-5 w-100 ">
                    Sign Up
                  </button>
                </Form>
              )}
            </Formik>

            <div className="estate-or-divider mb-5">
              <span className="text-light-black font-weight-500">
                Or Login With
              </span>
            </div>

            <div className="justify-content-between d-flex align-items-center text-light-black mb-5 ">
              <GoogleLogin
                clientId="277094535108-is872kf6iqvfqkp8kk88v3pni5kp5nva.apps.googleusercontent.com"
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    type="button"
                    className="e-btn-style bg-white font-weight-600 w-100">
                    <Google /> <span className="pl-2">Google</span>
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogleSuccess}
                onFailure={responseGoogleError}
                cookiePolicy={"single_host_origin"}
              />

              <ReactFacebookLogin
                appId="889699102378305"
                callback={responseFacebook}
                fields="name,email,picture"
                render={(renderProps) => (
                  <button
                    type="button"
                    onClick={renderProps.onClick}
                    className="e-btn-style mr-4 bg-white font-weight-600 w-100">
                    <Facebook /> <span className="pl-2">Facebook</span>
                  </button>
                )}
              />
              {/* <button className="e-btn-style mr-4 bg-white font-weight-600 w-100">
                <Facebook /> <span className="pl-2">Facebook</span>
              </button> */}
            </div>
            <p className="text-center mb-5 font-weight-500 mb-220px">
              Already have an account? <span className="text-skin">Login</span>
            </p>

            <p className="pt-5 text-light-black font-weight-500 copyright">
              © Copyright 2022 Estate Book. All Rights Reserved
            </p>
          </div>
        </div>
        <div className="p-right  p-0">
          <div className="p-right-sub">
            <p className="text-skin font-56 font-weight-800">
              <span className="text-light-black">Create Your</span> New Account
            </p>
            <p className="pt-4 text-light-black font-weight-500 w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-100 d-flex align-items-center ">
              <Signupnewmain />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
