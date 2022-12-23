import React from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const UserLayout = ({ children }) => {
    return (
        <>
            <Header />
            <div className='d-flex'>
                <Sidebar />
                {children}
            </div>
        </>
    )
}

export default UserLayout