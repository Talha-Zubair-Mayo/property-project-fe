import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
            <section className="notfound  my-2 inner-pages pt-0">
                <div className="container">
                    <div className="top-headings text-center">
                        <img src={process.env.PUBLIC_URL + '/images/bg/error-404.jpg'} alt="Page 404" />
                        <h3 className="text-center">Page Not Found!</h3>
                        <p className="text-center">
                            Oops! Looks Like Something Going Rong We can’t seem to find the page
                            you’re looking for make sure that you have typed the currect URL
                        </p>
                    </div>
                    <div className="port-info">
                        <Link to="/" className="btn btn-primary btn-lg">
                            Go To Home
                        </Link>
                    </div>
                </div>
            </section>
        </>

    )
}

export default NotFound