// @ts-nocheck
import React, { useState, useEffect } from 'react'
import moment from "moment"
import Hooks from '../../hooks';
import Loading from '../../utils/LoadingScreen'
import RecordNotFound from '../../components/RecordNotFound';
import { Link, useParams } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Modal from 'react-bootstrap/Modal';
import { Upload, Button, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { extractFilesData, getSocietiesDataById } from '../../store/api';
import { toast } from 'react-toastify';
import Table from 'react-bootstrap/Table';

const { Dragger } = Upload;
const SocietyDetails = () => {
    const { SuperAdmin } = Hooks();
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(uploading ? uploading : false);
    const { id } = useParams();
    const [uploading, setUploading] = useState(false)
    const [allSocietiesData, setAllSocietiesData] = useState([]);
    const getSocietyData = () => {
        getSocietiesDataById(id).then(res => {
            setAllSocietiesData(res?.data?.result)
            console.log(res)
        }).catch(err => {
            console.log(error)
        })
    }
    useEffect(() => {
        getSocietyData()
        setIsLoading(true);
    }, []);

    const [fileList, setFileList] = useState([]);
    const handleBeforeUpload = (file) => {
        console.log(file)
        setFileList([...fileList, file]);

        return false;
    };

    const handleChangeFiles = ({ fileList, file }) => {
        console.log("ON_CHANGE_FILES:", file);
        setFileList([...fileList]);
    };

    function handleUploadFiles() {
        setUploading(true)
        var formData = new FormData();
        fileList.forEach((file, index) => {
            console.log(file.originFileObj);
            formData.append(`xlsx`, file?.originFileObj);
        });
        extractFilesData(id, formData).then((res) => {
            getSocietyData()
            toast.success("Success", 'Data Imorted Successfully');
            setUploading(false)
            setShow(false);
        }).catch((err) => {
            setUploading(false)
            toast.error("Failed", err?.response?.message)
        })
    }

    const handleRemove = (selectedFile) => {
        if (uploading) {
            return fileList
        } else {
            return fileList.filter((file) => {
                return selectedFile.uid !== file.uid;
            });
        }
    };
    return (
        <div className="col-lg-9 col-md-12 py-3 col-xs-12 pl-0 user-dash2">
            {SuperAdmin() &&
                <>
                    <div className="Actions w-100 d-flex justify-content-end mb-2">
                        <button className="btn  btn-common" onClick={() => setShow(true)}>
                            Import Data
                        </button>
                    </div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Import  Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Dragger
                                {...{
                                    style: { width: 500 - 48 },
                                    fileList,
                                    defaultFileList: fileList,
                                    onRemove: handleRemove,
                                    beforeUpload: handleBeforeUpload,
                                    multiple: true,
                                    onChange: handleChangeFiles,
                                    listType: "picture",
                                    progress: { showInfo: true },
                                    data: (file) => {
                                        console.log("DATA:", file);
                                    }
                                }}
                            >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined fontSize={36} />
                                </p>
                                <p className="ant-upload-text">
                                    Click or drag file to this area to upload
                                </p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibit from uploading
                                    company data or other band files
                                </p>
                            </Dragger>
                            <Button
                                loading={uploading}
                                type="primary"
                                disabled={fileList.length === 0}
                                onClick={handleUploadFiles}
                                style={{ marginTop: 16 }}
                            >
                                Upload files
                            </Button>
                        </Modal.Body>
                    </Modal>


                </>
            }
            <div className="my-properties">

                {allSocietiesData.length > 0 ? (
                    <>
                        {/* <table className="table-responsive">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>Membership No</th>
                                <th>CNIC</th>
                                <th>Cell No</th>
                                <th>Tel NO</th>
                                <th>Rank</th>
                                <th>Regt</th>
                                <th>City</th>
                                <th>Mailing Address</th>
                                <th>Plot No</th>
                                <th>Plot Size</th>
                                <th>File No</th>
                                <th>Phase</th>
                                <th>Sector</th>
                                <th>Sub Project</th>
                                <th>Ref No</th>
                                <th>SecNo</th>
                                <th>Community Center</th>
                                {SuperAdmin() && (<th>Actions</th>)}
                            </tr>
                        </thead>
                        <tbody>


                            {allSocietiesData?.map((item, key) => {
                                return (
                                    <tr>
                                        <td>{item?.owner?.FullName}</td>
                                        <td>{item?.owner?.MembershipNo}</td>
                                        <td>{item?.owner?.CNIC}</td>
                                        <td>{item?.owner?.CellNo}</td>
                                        <td>{item?.owner?.TelNO}</td>
                                        <td>{item?.owner?.Rank}</td>
                                        <td>{item?.owner?.Regt}</td>
                                        <td>{item?.owner?.City}</td>
                                        <td>{item?.owner?.MailingAddress}</td>
                                        <td>{item?.PlotNo}</td>
                                        <td>{item?.PlotSize}</td>
                                        <td>{item?.Phase}</td>
                                        <td>{item?.Sector}</td>
                                        <td>{item?.SubProject}</td>
                                        <td>{item?.RefNo}</td>
                                        <td>{item?.SecNo}</td>
                                        <td>{item?.CommunityCenter}</td>
                                    </tr>)
                            })}

                        </tbody>
                    </table> */}

                        <Table striped>
                            <thead>
                                <tr>
                                    <th>Full Name</th>
                                    <th>Membership No</th>
                                    <th>CNIC</th>
                                    <th>Cell No</th>
                                    <th>Tel NO</th>
                                    <th>Rank</th>
                                    <th>Regt</th>
                                    <th>City</th>
                                    <th>Mailing Address</th>
                                    <th>Plot No</th>
                                    <th>Plot Size</th>
                                    <th>File No</th>
                                    <th>Phase</th>
                                    <th>Sector</th>
                                    <th>Sub Project</th>
                                    <th>Ref No</th>
                                    <th>SecNo</th>
                                    <th>Community Center</th>
                                    {/* {SuperAdmin() && (<th>Actions</th>)} */}
                                </tr>
                            </thead>
                            <tbody>
                                {allSocietiesData?.map((item, key) => {
                                    return (
                                        <tr>
                                            <td>{item?.owner?.FullName}</td>
                                            <td>{item?.owner?.MembershipNo}</td>
                                            <td>{item?.owner?.CNIC}</td>
                                            <td>{item?.owner?.CellNo}</td>
                                            <td>{item?.owner?.TelNO}</td>
                                            <td>{item?.owner?.Rank}</td>
                                            <td>{item?.owner?.Regt}</td>
                                            <td>{item?.owner?.City}</td>
                                            <td>{item?.owner?.MailingAddress}</td>
                                            <td>{item?.PlotNo}</td>
                                            <td>{item?.PlotSize}</td>
                                            <td>{item?.FileNo}</td>
                                            <td>{item?.Phase}</td>
                                            <td>{item?.Sector}</td>
                                            <td>{item?.SubProject}</td>
                                            <td>{item?.RefNo}</td>
                                            <td>{item?.SecNo}</td>
                                            <td>{item?.CommunityCenter}</td>
                                        </tr>)
                                })}
                            </tbody>
                        </Table>
                    </>
                ) : (
                    <RecordNotFound />
                )}


                {/* {
                    allSocieties?.length > 0 && <Pagination
                        count={totalPages}
                        size="large"
                        // page={page}
                        variant="outlined"
                        shape="rounded"
                        onChange={handlePageChange}
                    />
                } */}
            </div>
        </div>
    )
}


// CommunityCenter
// :
// ""
// FileNo
// :
// ""
// Phase
// :
// ""
// PlotNo
// :
// "557C"
// PlotSize
// :
// "50 X 90"
// RefNo
// :
// ""
// SecNo
// :
// ""
// Sector
// :
// ""
// Society
// :
// { _id: "635f6330337d0c6092bd21cf", name: "Kevin Melendez", ownerName: "Chloe Cameron",… }
// address
// :
// "Earum voluptates vol"
// createdAt
// :
// "2022-10-31T05:54:56.790Z"
// createdBy
// :
// { _id: "632953ca639b886e47ce85b4", firstName: "Andrew", lastName: "Jennings ", email: "admin@demo.com",… }
// managerName
// :
// "Whilemina Fisher"
// name
// :
// "Kevin Melendez"
// ownerName
// :
// "Chloe Cameron"
// photo
// :
// "1667195696725.png"
// removed
// :
// false
// updatedAt
// :
// "2022-10-31T05:54:56.790Z"
// __v
// :
// 0
// _id
// :
// "635f6330337d0c6092bd21cf"
// SubProject
// :
// ""
// createdAt
// :
// "2022-11-01T10:56:13.580Z"
// owner
// :
// { _id: "6360fb4dafe0199c81d90ba8", MembershipNo: "9", FullName: "SYED MOHAMMAD SAYEED AHMAD",… }
// CNIC
// :
// "35302-1977841-9"
// CellNo
// :
// "3008558677"
// City
// :
// "KARACHI"
// FullName
// :
// "SYED MOHAMMAD SAYEED AHMAD"
// MailingAddress
// :
// "52/1, 23RD STREET, OF KHAYABAN-E-BADBAN,, PHASE -V, DHA KARACHI"
// MembershipNo
// :
// "9"
// Rank
// :
// ""
// Regt
// :
// ""
// TelNO
// :
// "0300-8558677,220648797 EXT1212"
// createdAt
// :
// "2022-11-01T10:56:13.496Z"
// removed
// :
// false
// updatedAt
// :
// "2022-11-01T10:56:13.496Z"
// __v
// :
// 0
// _id
// :
// "6360fb4dafe0199c81d90ba8"
// removed
// :
// false
// updatedAt
// :
// "2022-11-01T10:56:13.580Z"

export default SocietyDetails