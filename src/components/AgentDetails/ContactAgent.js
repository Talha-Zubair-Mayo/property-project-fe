import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { agentContactFormValidationSchema } from '../../utils';
import { contactAgentApi } from '../../store/api';
import { toast } from "react-toastify"
import { useSelector } from 'react-redux';
export default function ContactAgent({ agent }) {
  const userinfo = useSelector((state) => state?.UserLogin?.data?.user);
  const onSubmit = (values, props) => {
    console.log(values)
    contactAgentApi(agent._id, values).then((response) => {
      props.resetForm();
      toast.success('Appointment created Successfully', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    })
      .catch((error) => {
        toast.error(error?.data?.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        props.resetForm();
      });
  };

  const initialValues = {
    fullName: userinfo?.firstName + " " + userinfo?.lastName,
    email: userinfo?.email,
    phone: '',
    meetingTime: '',
    message: ''
  };
  return (
    <>
      <div className="widget-boxed mt-33 mt-5">
        <div className="sidebar-widget author-widget2">
          <div className="agent-contact-form-sidebar border-0 pt-0">
            <h4>Contact {`${agent.firstName} ${agent.lastName}`}</h4>
            <Formik
              initialValues={initialValues}
              validationSchema={agentContactFormValidationSchema}
              onSubmit={onSubmit}
            >
              {({ touched, errors, isSubmitting, values }) => (
                <div className="login">
                  <Form autoComplete="off">
                    <div className="form-group">
                      <label>Full Name</label>
                      <Field
                        disabled
                        type="text"
                        name="fullName"
                        placeholder="Enter Full Name"
                        autoComplete="off"
                        className={`form-control
                          ${touched.fullName && errors.fullName ? 'is-invalid' : ''}`}
                      />
                      <i className="icon_mail_alt" />
                      <ErrorMessage component="div" name="fullName" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label> Email</label>
                      <Field
                        disabled
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
                      <label> Phone</label>
                      <Field
                        type="Text"
                        name="phone"
                        placeholder="Enter Phone"
                        autoComplete="off"
                        className={`form-control
                       ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                      />
                      <i className="icon_lock_alt" />
                      <ErrorMessage component="div" name="phone" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label>Meeting Time</label>
                      <Field
                        type="datetime-local" id="meetingTime" name="meetingTime"
                        className={`form-control
                       ${touched.meetingTime && errors.meetingTime ? 'is-invalid' : ''}`}
                      />
                      <i className="icon_lock_alt" />
                      <ErrorMessage component="div" name="meetingTime" className="invalid-feedback" />
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <Field
                        as='textarea'
                        placeholder="Message" name="message" required="" defaultValue={''}
                        className={`form-control
                       ${touched.message && errors.message ? 'is-invalid' : ''}`}
                      />

                      <ErrorMessage component="div" name="message" className="invalid-feedback" />
                    </div>
                    {isSubmitting ? <input
                      type="button"
                      disabled={isSubmitting}
                      name="sendmessage"
                      className="multiple-send-message not-allowed"
                      defaultValue="Submit Request"
                    /> : <input
                      type="submit"
                      name="sendmessage"
                      className="multiple-send-message"
                      defaultValue="Submit Request"
                    />}


                  </Form>
                </div>
              )}
            </Formik>

          </div>
        </div>
      </div>
    </>
  );
}
