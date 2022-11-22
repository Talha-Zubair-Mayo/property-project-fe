import React from "react";
const SendPinPopup = ({ MediaUpload }) => {
  return (
    <div className=" pr-3 m-0" id="selectfile">
      <div className="dropdown">
        <button
          className="sendfile-popup-btn text-darkgreen"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false">
          <i className="fas fa-paperclip"></i>
        </button>
        <div
          className="dropdown-menu dropdown-menu-width dropdown-menu-position"
          aria-labelledby="dropdownMenuButton">
          <div className="dropdown-item">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <label
                className="d-flex flex-column align-items-center cr-p"
                onClick={() => MediaUpload("image")}>
                <div className="attach-item attach-item3">
                  <i className="fa-solid fa-image"></i>
                </div>
                <p className="pt-1">Image</p>
              </label>
              <label
                onClick={() => MediaUpload("document")}
                className="d-flex flex-column align-items-center cr-p">
                <div className="attach-item attach-item1 ">
                  <i className="fa-solid fa-file"></i>
                </div>
                <p className="pt-1">Document</p>
              </label>

              <label
                onClick={() => MediaUpload("audio")}
                className="d-flex flex-column align-items-center cr-p">
                <div className="attach-item attach-item2">
                  <i className="fa-solid fa-headphones"></i>
                </div>
                <p className="pt-1">Audio</p>
              </label>

              <label
                onClick={() => MediaUpload("video")}
                className="d-flex flex-column align-items-center cr-p">
                <div className="attach-item attach-item3">
                  <i className="fa-solid fa-video"></i>
                </div>
                <p className="pt-1">Video</p>
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* <button
        type="button"
        className=" sendfile-popup-btn text-darkgreen"
        data-toggle="modal"
        data-target="#sendfile"
      >
        <i className="fas fa-paperclip"></i>
      </button>
      <div
        className="modal"
        id="sendfile"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="sendfileLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog custom-file-main" role="document">
          <div className="modal-content h-100 w-100">
            <div className="modal-body custom-file-body">
              <div className="d-flex flex-column align-items-center">
                <div className="attach-item attach-item1 ">
                  <i className="fa-solid fa-file"></i>
                </div>
                <p className="pt-1">File</p>
              </div>

              <div className="d-flex flex-column align-items-center">
                <div className="attach-item attach-item2">
                  <i className="fa-solid fa-headphones"></i>
                </div>
                <p className="pt-1">Audio</p>
              </div>

              <div className="d-flex flex-column align-items-center">
                <div className="attach-item attach-item3">
                  <i className="fa-solid fa-video"></i>
                </div>
                <p className="pt-1">Video</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SendPinPopup;
