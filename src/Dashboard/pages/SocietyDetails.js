// @ts-nocheck
import React, { useState, useEffect } from 'react'
import moment from "moment"
import Hooks from '../../hooks';
import Loading from '../../utils/LoadingScreen'
import RecordNotFound from '../../components/RecordNotFound';
import { Link, useParams } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Upload, Button, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { extractFilesData, getSocietiesDataById } from '../../store/api';
import { toast } from 'react-toastify';
import { Space, Table, Tag } from 'antd';
import { Pagination } from 'antd';
import WhatsAppChat from "../WhatsAppComponents/ChatScreen"
import RecentChatPP from '../WhatsAppComponents/ChatScreen/chatpopup';
const { Dragger } = Upload;
const SocietyDetails = () => {
    const { SuperAdmin } = Hooks();
    const [isLoading, setIsLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [pages, setPages] = useState([])
    const handleClose = () => {
        setShow(uploading ? uploading : false)
    };
    const { id } = useParams();
    const [uploading, setUploading] = useState(false)
    const [allSocietiesData, setAllSocietiesData] = useState([]);
    const [current, setCurrent] = useState(1);

    const getSocietyData = (page) => {
        setIsLoading(true);
        getSocietiesDataById(id, page).then(res => {
            setAllSocietiesData(res?.data?.result.map(item => {
                return ({
                    ...item,
                    CNIC: item?.owner?.CNIC,
                    CellNo: item?.owner?.CellNo,
                    City: item?.owner?.City,
                    FullName: item?.owner?.FullName,
                    MailingAddress: item?.owner?.MailingAddress,
                    MembershipNo: item?.owner?.MembershipNo,
                    Rank: item?.owner?.Rank,
                    Regt: item?.owner?.Regt,
                    TelNO: item?.owner?.TelNO,
                    WtsApp: '3154074657'
                })
            }))
            setPages(res?.data?.pagination?.count)
            setIsLoading(false);
        }).catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        getSocietyData(1)

    }, []);
    const onChange = (page) => {
        getSocietyData(page);
        setCurrent(page);
    };
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
            console.log(err)
            setUploading(false)
            toast.error("Failed", err?.response?.data?.message)
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

    const columns = [
        {
            title: 'Full Name',
            dataIndex: 'FullName',
            key: 'FullName',

            width: 600
        },
        {
            title: 'Membership No',
            dataIndex: 'MembershipNo',
            key: 'MembershipNo',
            width: 600
        }, {
            title: 'CNIC',
            dataIndex: 'CNIC',
            key: 'CNIC',
            width: 800
        }, {
            title: 'Tel NO',
            name: 'telNO',
            dataIndex: 'TelNO',
            key: 'TelNO',
            width: 800
        }, {
            title: 'Cell No',
            dataIndex: 'CellNo',
            key: 'CellNo',
            width: 800
        },
        {
            title: 'WhatsApp',
            dataIndex: 'WtsApp',
            key: 'WtsApp',
            render: text => <Link to={`/whatsapp/92` + text}>{text}</Link>,
            width: 600
        },
        {
            title: 'Rank',
            dataIndex: 'Rank',
            key: 'Rank',
            width: 800
        }, {
            title: 'Regt',
            dataIndex: 'Regt',
            key: 'Regt',
            width: 800
        }, {
            title: 'City',
            name: 'City',
            dataIndex: 'City',
            key: 'City',
            width: 800
        }, {
            title: 'Mailing Address',
            dataIndex: 'MailingAddress',
            key: 'MailingAddress',
            width: 800
        }, {
            title: 'Plot No',
            dataIndex: 'PlotNo',
            key: 'PlotNo',
            width: 800
        }, {
            title: 'Phase',
            dataIndex: 'Phase',
            key: 'Phase',
            width: 800
        }, {
            title: 'Sector',
            dataIndex: 'Sector',
            key: 'Sector',
            width: 800
        }, {
            title: 'Sub Project',
            dataIndex: 'SubProject',
            key: 'SubProject',
            width: 800
        }, {
            title: 'Ref No',
            dataIndex: 'RefNo',
            key: 'RefNo',
            width: 800
        },
        , {
            title: 'Sec No',
            dataIndex: 'SecNo',
            key: 'SecNo',
            width: 800
        },
        , {
            title: 'Community Center',
            dataIndex: 'CommunityCenter',
            key: 'CommunityCenter',
            width: 800
        },
    ]
    const itemRender = (_, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        }
        if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    };
    return (
        <div className="col-lg-9 col-md-12 py-3 col-xs-12 pl-0 user-dash2 border-1 position-relative">
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
                <Table columns={columns} loading={isLoading} dataSource={allSocietiesData} pagination={false} scroll={{ x: 3000 }} />
                <Pagination defaultPageSize={10} current={current} onChange={onChange} total={pages} />

            </div>
            

        </div>
    )
}


export default SocietyDetails