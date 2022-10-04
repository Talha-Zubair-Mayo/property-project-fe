import React, { useState, useEffect } from 'react'
import Hooks from '../../hooks';
import { getAllAppointmentsApi } from '../../store/api';
import moment from "moment"
import { Link, useLocation, useParams } from 'react-router-dom';
export default function Appointments() {
    const { AgentRole, UserDetails } = Hooks();
    const { id } = useParams();
    const [AllAppointments, setAllAppointments] = useState([]);

    const getAllAppointments = () => {
        if (AgentRole() && UserDetails().id === id) {
            getAllAppointmentsApi(`appointedTo=${id}`)
                .then((appointment) => {
                    setAllAppointments(appointment?.data?.result);
                })
                .catch((error) => { });
        } else {
            getAllAppointmentsApi(`createdBy=${id}`)
                .then((appointment) => {
                    console.log(appointment?.data?.result);
                    setAllAppointments(appointment?.data?.result);
                })
                .catch((error) => { });
        }
    }
    useEffect(() => {
        getAllAppointments();
    }, []);

    return (
        <>
            <div className="col-lg-9 col-md-12 py-3 col-xs-12 pl-0 user-dash2">

                <div className="my-properties">
                    <table className="table-responsive">
                        <thead>
                            
                            <tr>
                                <th>Appointment Date</th>
                                <th>Date Added</th>
                                <th>Appoited To</th>
                                <th>Added by</th>
                                <th>Message</th>

                                {AgentRole() && (<th>Actions</th>)}
                            </tr>
                        </thead>
                        <tbody>

                            {AllAppointments?.map((item, key) => {
                                return (
                                    <tr>
                                        <td>{moment(item?.meetingTime).format('llll')}</td>
                                        <td>{moment(item?.createdAt).format('llll')}</td>

                                        <td>{`${item?.appointedTo?.firstName}  ${item?.appointedTo?.lastName}`}</td>

                                        <td>{`${item?.createdBy.firstName}  ${item?.createdBy.lastName}`}</td>
                                        <td>{item.message}</td>

                                        {AgentRole() && (<td className="actions">
                                            <button onClick={() => editModeFunc(item)} className="edit">
                                                <i className="fa fa-check" />
                                            </button>
                                            <button onClick={() => deletePhase(item?._id)} className="delete" >
                                                <i className="fa fa-times" />
                                            </button>
                                        </td>)}
                                    </tr>)
                            })}

                        </tbody>  
                    </table>
                    <div className="pagination-container">
                        <nav>
                            <ul className="pagination">
                                <li className="page-item">
                                    <a className="btn btn-common" href="#">
                                        <i className="lni-chevron-left" /> Previous{' '}
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        1
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        2
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="page-link" href="#">
                                        3
                                    </a>
                                </li>
                                <li className="page-item">
                                    <a className="btn btn-common" href="#">
                                        Next <i className="lni-chevron-right" />
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
