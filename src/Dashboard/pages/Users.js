// @ts-nocheck
import React, { useEffect, useState } from 'react'
import { getAllUsersApi } from '../../store/api'

const UsersList = () => {
    const [usersList, setUsersList] = useState([])
    useEffect(() => {
        getAllUsersApi().then((res) => {
            console.log(res)
            setUsersList(res.data.result)
        })
    }, [])

    return (
        <div className="col-lg-9 col-md-12 col-xs-12 pl-0 user-dash2">
            <div className="dashborad-box">
                <div className="section-body listing-table">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Facebook Login</th>
                                    <th>Google Login</th>
                                    <th>Social Login ?</th>
                                    <th>Status</th>
                                    <th>Permissions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {usersList.map((user) => {
                                    return (
                                        <tr>
                                            <td></td>
                                            <td>{`${user?.firstName} ${user?.lastName}`}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role.displayName}</td>
                                            <td>{user.isFacebookLogin ? 'Yes' : "No"}</td>
                                            <td>{user.isGoogleLogin ? 'Yes' : "No"}</td>
                                            <td>{user.isSocialLogin ? 'Yes' : "No"}</td>
                                            <td className="status">
                                                {
                                                    user.enabled ? <span className=" active">Active</span> : <span className="non-active">Non-Active</span>
                                                }
                                            </td>
                                            <td className="edit">
                                                <a href="#">
                                                    <i className="fa fa-pencil" />
                                                </a>
                                            </td>
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

export default UsersList