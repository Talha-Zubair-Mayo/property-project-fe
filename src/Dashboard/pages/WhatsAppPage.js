import { useCallback, useEffect, useState } from "react";
import TextMessage from "../WhatsAppComponents/WhatsApp/TextMessage";
import * as WA_API from "../../store/api";
import ImageMessage from "../WhatsAppComponents/WhatsApp/ImageMessage";
import VideoMessage from "../WhatsAppComponents/WhatsApp/VideoMessage";
import VoiceMessage from "../WhatsAppComponents/WhatsApp/VoiceMessage";
import { Button, Modal } from "antd";
import MessageRecorder from "../WhatsAppComponents/Tools/VoiceRocorder";
import { Skeleton, message } from 'antd'
import { VideoCameraAddOutlined, FileDoneOutlined, AudioOutlined, PictureOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import DocMessage from "../WhatsAppComponents/WhatsApp/DocumentMessage";
import React from "react";

function App() {
    const [msg, setMsg] = useState("");
    const [messageArray, setMessageArray] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const MediaUpload = useCallback((type) => {
        const inputFile = document.createElement('input');
        inputFile.type = 'file';
        // @ts-ignore
        inputFile.accept = type === "image" ? "image/jpeg" : type === "video" ? "video/mp4" : type === "document" ? "application/pdf" : type === "audio" && "audio/mp3";
        inputFile.addEventListener('change', (e) => {
            // @ts-ignore
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append("receiver", "923154074657");
            formData.append("mediaType", type);
            formData.append("file", file);
            message.loading("Sending...", 1000)
            // @ts-ignore
            WA_API.SendMultimediaMessage(formData).then(res => {
                message.destroy();
                message.success("Sent ", 2)
            });
        });
        inputFile.click();
    }, [])

    const resetScroll = () => {
        var elem = document.getElementById('msgArea');
        // @ts-ignore
        elem.scrollTop = elem.scrollTopMax;
    }
    useEffect(() => {

        var interval = setInterval(() => {
            var msgs = WA_API.GetAllMessagesByNumber();
            msgs.then((resp) => {
                var data = [];
                resp.data.forEach((element) => {
                    //In case the messages are in text formate
                    if (element.message.body.messages[0].type === "text") {
                        if (element.message.way === "send") {
                            data.push({
                                tWay: "send",
                                msg: element.message.body.messages[0].text.body,
                                type: "text",
                            });
                        } else {
                            data.push({
                                cName: element.message.body.messages[0].from,
                                tWay: "receive",
                                msg: element.message.body.messages[0].text.body,
                                type: "text",
                            });
                        }
                    } else if (element.message.body.messages[0].type === "image") {
                        if (element.message.way === "send") {
                            data.push({
                                tWay: "send",
                                msg: "",
                                type: "image",
                                link: `http://localhost:8888/api/loadfile?messageId=${element.message.body.messages[0].id}&fileType=image&way=sent`,
                            });
                        } else {
                            data.push({
                                cName: element.message.body.messages[0].from,
                                tWay: "receive",
                                msg: "",
                                type: "image",
                                link: `http://localhost:8888/api/loadfile?messageId=${element.message.body.messages[0].id}&fileType=image&way=received`,
                            });
                        }
                    } else if (element.message.body.messages[0].type === "document") {
                        if (element.message.way === "send") {
                            data.push({
                                tWay: "send",
                                msg: "",
                                type: "document",
                                link: `http://localhost:8888/api/loadfile?messageId=${element.message.body.messages[0].id}&fileType=document&way=sent`,
                            });
                        } else {
                            data.push({
                                cName: element.message.body.messages[0].from,
                                tWay: "receive",
                                msg: "",
                                type: "document",
                                link: `http://localhost:8888/api/loadfile?messageId=${element.message.body.messages[0].id}&fileType=document&way=received`,
                            });
                        }
                    } else if (element.message.body.messages[0].type === "video") {
                        if (element.message.way === "send") {
                            data.push({
                                tWay: "send",
                                msg: "",
                                type: "video",
                                link: `http://localhost:8888/api/loadfile?messageId=${element.message.body.messages[0].id}&fileType=video&way=sent`,
                            });
                        } else {
                            data.push({
                                cName: element.message.body.messages[0].from,
                                tWay: "receive",
                                msg: "",
                                type: "video",
                                link: `http://localhost:8888/api/loadfile?messageId=${element.message.body.messages[0].id}&fileType=video&way=received`,
                            });
                        }
                    } else if (element.message.body.messages[0].type === "audio") {
                        if (element.message.way === "send") {
                            data.push({
                                tWay: "send",
                                msg: "",
                                type: "audio",
                                link: `http://localhost:8888/api/loadfile?messageId=${element.message.body.messages[0].id}&fileType=audio&way=sent`,
                            });
                        } else {
                            data.push({
                                cName: element.message.body.messages[0].from,
                                tWay: "receive",
                                msg: "",
                                type: "audio",
                                link: `http://localhost:8888/api/loadfile?messageId=${element.message.body.messages[0].id}&fileType=audio&way=received`,
                            });
                        }
                    }
                });

                // @ts-ignore
                setMessageArray(old => {
                    if (old.length < data.length) {
                        if (data[0].tWay !== 'send')
                            message.info("New Message Received", 3);
                        localStorage.setItem('isUpdated', 'true');
                        return data.sort().reverse()
                    }
                    else return old;
                });

            });
        }, 3000);

        return () => {
            return clearInterval(interval)
        }

    }, []);

    const onchange = (e) => {
        setMsg(e.target.value);
    };

    const onKeyPress = (event) => {
        if (event.charCode === 13) {
            message.loading("Sending...", 1000000)
            WA_API.SendTextMessage({ receiver: "923154074657", text: msg }).then(
                // @ts-ignore
                (resp) => {
                    message.destroy();
                    setMsg("");
                    message.success("Send ", 2)
                }
            );
        }
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    // @ts-ignore
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    if (localStorage.getItem('isUpdated') === 'true') {
        setTimeout(() => {
            resetScroll()
        }, 1000)
        localStorage.setItem('isUpdated', 'false');
    }

    return (
        <>
            <div className="chatBox">
                <div className="title">Client Name</div>
                <div className="box" id="msgArea">
                    {messageArray &&
                        messageArray.length > 0 ?
                        messageArray.map((item, index) => {
                            // @ts-ignore
                            if (item.type === "text")
                                return (
                                    <TextMessage
                                        key={index}
                                        // @ts-ignore
                                        message={item.msg}
                                        // @ts-ignore
                                        transmissionOrientation={item.tWay}
                                        // @ts-ignore
                                        clientName={item.cName}
                                    />
                                );
                            // @ts-ignore
                            else if (item.type === "image")
                                return (
                                    <ImageMessage
                                        key={index}
                                        // @ts-ignore
                                        link={item.link}
                                        // @ts-ignore
                                        transmissionOrientation={item.tWay}
                                        // @ts-ignore
                                        clientName={item.cName}
                                    />
                                );
                            // @ts-ignore
                            else if (item.type === "audio")
                                return (
                                    <VoiceMessage
                                        key={index}
                                        // @ts-ignore
                                        link={item.link}
                                        // @ts-ignore
                                        transmissionOrientation={item.tWay}
                                        // @ts-ignore
                                        clientName={item.cName}
                                    />
                                );
                            // @ts-ignore
                            else if (item.type === "video")
                                return (
                                    <VideoMessage
                                        key={index}
                                        // @ts-ignore
                                        link={item.link}
                                        // @ts-ignore
                                        transmissionOrientation={item.tWay}
                                        // @ts-ignore
                                        clientName={item.cName}
                                    />
                                );
                            // @ts-ignore
                            else if (item.type === "document")
                                return (
                                    <DocMessage
                                        key={index}
                                        // @ts-ignore
                                        link={item.link}
                                        // @ts-ignore
                                        transmissionOrientation={item.tWay}
                                        // @ts-ignore
                                        clientName={item.cName}
                                    />
                                );
                        }) : <><Skeleton active /><Skeleton active /><Skeleton active /><Skeleton active /><Skeleton active /></>
                    }
                </div>
                <div className="typing-area">
                    <div className="input-field">
                        <div className="pop-container">
                            <div className="popup" onClick={() => {
                                // @ts-ignore
                                document.getElementById("myPopup").classList.toggle("show");
                            }}>
                                <svg className="input-icon-mar" height="24" width="24">
                                    <path fill="currentColor"
                                        d="M1.816,15.556v0.002c0,1.502,0.584,2.912,1.646,3.972s2.472,1.647,3.974,1.647 c1.501,0,2.91-0.584,3.972-1.645l9.547-9.548c0.769-0.768,1.147-1.767,1.058-2.817c-0.079-0.968-0.548-1.927-1.319-2.698 c-1.594-1.592-4.068-1.711-5.517-0.262l-7.916,7.915c-0.881,0.881-0.792,2.25,0.214,3.261c0.959,0.958,2.423,1.053,3.263,0.215 c0,0,3.817-3.818,5.511-5.512c0.28-0.28,0.267-0.722,0.053-0.936c-0.08-0.08-0.164-0.164-0.244-0.244 c-0.191-0.191-0.567-0.349-0.957,0.04c-1.699,1.699-5.506,5.506-5.506,5.506c-0.18,0.18-0.635,0.127-0.976-0.214 c-0.098-0.097-0.576-0.613-0.213-0.973l7.915-7.917c0.818-0.817,2.267-0.699,3.23,0.262c0.5,0.501,0.802,1.1,0.849,1.685 c0.051,0.573-0.156,1.111-0.589,1.543l-9.547,9.549c-0.756,0.757-1.761,1.171-2.829,1.171c-1.07,0-2.074-0.417-2.83-1.173 c-0.755-0.755-1.172-1.759-1.172-2.828l0,0c0-1.071,0.415-2.076,1.172-2.83c0,0,5.322-5.324,7.209-7.211 c0.157-0.157,0.264-0.579,0.028-0.814c-0.137-0.137-0.21-0.21-0.342-0.342c-0.2-0.2-0.553-0.263-0.834,0.018 c-1.895,1.895-7.205,7.207-7.205,7.207C2.4,12.645,1.816,14.056,1.816,15.556z">
                                    </path>
                                </svg>
                                <span className="popuptext" id="myPopup">
                                    <ul>
                                        <li style={{ margin: '5px' }} onClick={() => MediaUpload('image')}>
                                            <span>
                                                <PictureOutlined />
                                            </span>
                                        </li>
                                        <li style={{ margin: '5px' }} onClick={() => MediaUpload('video')}>
                                            <span>
                                                <VideoCameraAddOutlined />
                                            </span>
                                        </li>
                                        <li style={{ margin: '5px' }} onClick={() => MediaUpload('audio')}>
                                            <span>
                                                <CustomerServiceOutlined />
                                            </span>
                                        </li>
                                        <li style={{ margin: '5px' }} onClick={() => MediaUpload('document')}>
                                            <span>
                                                <FileDoneOutlined />
                                            </span>
                                        </li>
                                        <li style={{ margin: '5px' }} onClick={() => resetScroll()}>
                                            <span>
                                                **
                                            </span>
                                        </li>
                                    </ul>
                                </span>
                            </div>

                        </div>
                        <input
                            onKeyPress={onKeyPress}
                            onChange={onchange}
                            type="text"
                            placeholder="Type Your Message"
                            value={msg}
                            required
                        />
                    </div>
                    <Button onClick={showModal} style={{ margin: 5 }}>
                        <AudioOutlined />
                    </Button>
                </div>
            </div>
            <Modal
                // title="Basic Modal"
                open={isModalOpen}
                // @ts-ignore
                onOk={false}
                onCancel={handleCancel}
            >
                <MessageRecorder />
            </Modal>
        </>
    );
}

export default App;
