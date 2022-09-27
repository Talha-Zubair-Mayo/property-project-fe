import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const UserLayout = ({ children }) => {
    return (
        <div className="inner-pages maxw1600 m0a dashboard-bd">
            {/* Wrapper */}
            <div id="wrapper" className="int_main_wraapper">
                <Header />
                <section className="user-page section-padding">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-3 col-md-12 col-xs-12 pl-0 pr-0 user-dash">
                                <Sidebar />
                            </div>
                            {children}

                            {/* <Footer /> */}
                        </div>
                    </div>
                </section>
                <a data-scroll="" href="#wrapper" className="go-up">
                    <i className="fa fa-angle-double-up" aria-hidden="true" />
                </a>

            </div>
            {/* Wrapper / End */}
        </div>

    )
}

export default UserLayout