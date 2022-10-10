import React from 'react'

const Search = () => {
    return (
        <div className="rld-main-search">
            <div className="row">
                <div className="rld-single-input">
                    <input type="text" placeholder="Enter Keyword..." />
                </div>
                <div className="rld-single-select ml-22">
                    <select className="select single-select">
                        <option value={1}>Property Type</option>
                        <option value={2}>Family House</option>
                        <option value={3}>Apartment</option>
                        <option value={3}>Condo</option>
                    </select>
                </div>
                <div className="rld-single-select">
                    <select className="select single-select mr-0">
                        <option value={1}>Location</option>
                        <option value={2}>Los Angeles</option>
                        <option value={3}>Chicago</option>
                        <option value={3}>Philadelphia</option>
                        <option value={3}>San Francisco</option>
                        <option value={3}>Miami</option>
                        <option value={3}>Houston</option>
                    </select>
                </div>
                <div className="dropdown-filter d-none d-none d-lg-none d-xl-block">
                    <span>Advanced Search</span>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 pl-0">
                    <a className="btn btn-yellow" href="#">
                        Search Now
                    </a>
                </div>
              
            </div>
        </div>
    )
}

export default Search