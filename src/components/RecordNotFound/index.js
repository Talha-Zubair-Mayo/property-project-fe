import React from 'react'

const RecordNotFound = () => {
    return (
        <section className="notfound  my-2 inner-pages pt-0">
            <div className="container">
                <div className="top-headings text-center">
                    <img src={process.env.PUBLIC_URL + '/images/bg/EmptyScreen.png'} alt="Page 404" />
                    <h3 className="text-center">Record Not Found!</h3>
                </div>

            </div>
        </section>

    )
}

export default RecordNotFound