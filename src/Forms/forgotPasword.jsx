import { Field, Form, Formik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ForgotPassword from "../components/images/forgotpassword";
import { resetPasswordApi } from "../store/api";
import { forgetPasswordSchema } from "../utils";
import "./pform.css";
const ForgotPasword = () => {
  const search = useLocation().search;
  const code = new URLSearchParams(search).get("code");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!code) {
      navigate("/login");
    }
  }, []);
  const onSubmit = (values, props) => {
    setIsLoading(true);
    resetPasswordApi(values, code)
      .then((response) => {
        setIsLoading(false);
        navigate("/login");
        toast.success(response?.data?.message);
      })
      .catch((error) => {
        setIsLoading(false);
        toast.error(error?.data?.message);
      });
  };
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  return (
    <>
      <div className="row m-0" id="estatelogin">
        <div className="p-left p-0">
          <div className="p-left-sub">
            <p className="text-skin font-56 font-weight-800 w-50 pb-3">
              Reset
              <span className="text-light-black"> Your Password</span>
            </p>
            <div className="orangeline"></div>
            <Formik
              initialValues={initialValues}
              validationSchema={forgetPasswordSchema}
              onSubmit={onSubmit}>
              {({ touched, errors, isSubmitting, values, setFieldValue }) => (
                <Form action="" className="text-light-black">
                  <div className="d-flex flex-column mb-3">
                    <label
                      className="font-16 font-weight-600 pb-2 "
                      htmlFor="newpassword">
                      New Password
                    </label>
                    <Field
                      type="password"
                      className="p-input-style font-16 font-weight-500 w-100"
                      required
                      id="newpassword"
                      placeholder="Atlease 8 characters"
                      name="password"
                    />
                  </div>
                  <div className="d-flex flex-column mb-3">
                    <label
                      className="font-16 font-weight-600 pb-2 "
                      htmlFor="email">
                      Confirm New Password
                    </label>
                    <Field
                      type="password"
                      className="p-input-style font-16 font-weight-500 w-100"
                      required
                      id="password"
                      placeholder="Atlease 8 characters"
                      minLength={8}
                      name="confirmPassword"
                    />
                  </div>

                  <button
                    type="submit"
                    className="e-btn-style bg-skin  text-white font-weight-600  w-100 ">
                    Save
                  </button>
                </Form>
              )}
            </Formik>

            {/* <p className="pt-5 text-light-black font-weight-500 copyright">
              © Copyright 2022 Estate Book. All Rights Reserved
            </p> */}
          </div>
        </div>
        <div className="p-right  p-0">
          <div className="p-right-sub">
            <p className="text-skin font-56 font-weight-800">
              <span className="text-light-black">Forgot Your </span>Password?
            </p>
            <p className="pt-4 text-light-black font-weight-500 w-75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="w-100 d-flex align-items-center ">
              <ForgotPassword />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPasword;
