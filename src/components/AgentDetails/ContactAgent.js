import React from 'react';

export default function ContactAgent() {
  return (
    <>
      <div className="widget-boxed mt-33 mt-5">
        <div className="sidebar-widget author-widget2">
          <div className="agent-contact-form-sidebar border-0 pt-0">
            <h4>Contact Carls Jhons</h4>
            <form
              name="contact_form"
              method="post"
              action="https://code-theme.com/html/findhouses/functions.php"
            >
              <input type="text" id="fname" name="full_name" placeholder="Full Name" required="" />
              <input
                type="number"
                id="pnumber"
                name="phone_number"
                placeholder="Phone Number"
                required=""
              />
              <input
                type="email"
                id="emailid"
                name="email_address"
                placeholder="Email Address"
                required=""
              />
              <textarea placeholder="Message" name="message" required="" defaultValue={''} />
              <input
                type="submit"
                name="sendmessage"
                className="multiple-send-message"
                defaultValue="Submit Request"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
