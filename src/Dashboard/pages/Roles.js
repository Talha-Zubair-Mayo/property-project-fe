// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { getAllRolesApi } from '../../store/api'

const RolesList = () => {
    const [RolesList, setRolesList] = useState([])
    useEffect(() => {
        getAllRolesApi().then((res) => {
            console.log(res)
            setRolesList(res.data.result)
        })
    }, [])

    return (
        <div className="col-lg-9 col-md-12 col-xs-12 pl-0 role-dash2">
            <div className="dashborad-box">
                <div className="section-body listing-table">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Role Type</th>
                                    <th>Code</th>
                                    <th>Created At</th>
                                </tr>
                            </thead>
                            <tbody>
                                {RolesList.map((role) => {
                                    return (
                                        <tr>
                                            <td>{role?.displayName}</td>
                                            <td>{role.roleType}</td>
                                            <td>{role.codeName}</td>
                                            <td>{role.created}</td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RolesList