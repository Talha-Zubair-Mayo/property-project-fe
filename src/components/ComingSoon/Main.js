import React from 'react'

function Main() {
    return (
        <div>
            {/* <!-- START SECTION HEADINGS --> */}
            <section className="headings-7">
                <div className="text-heading text-center">
                    <div className="container">
                        <h1>We Are Coming Soon</h1>
                        {/* <!-- Final Countdown Timer Script --> */}
                        <span id="clock" className="font-36 text-center"></span>

                        <form className="bloq-email mailchimp form-inline" method="post">
                            <label for="subscribeEmail" className="error"></label>
                            <div className="email">
                                <input type="email" id="subscribeEmail" name="EMAIL" placeholder="Enter Your Email" />
                                <input type="submit" value="Subscribe" />
                                <p className="subscription-success"></p>
                            </div>
                        </form>
                        <p className="sorry mt-5">Sorry.... We are improving and fixing problems of our website. We will be back very soon....</p>
                    </div>
                </div>
            </section>
            {/* <!-- END SECTION HEADINGS --> */}
        </div>
    )
}

export default Main
