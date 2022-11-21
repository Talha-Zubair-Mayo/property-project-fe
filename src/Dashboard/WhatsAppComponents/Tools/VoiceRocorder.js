import React from "react";
import { useState } from "react";
// import { Recorder } from "react-voice-recorder";
// import "react-voice-recorder/dist/index.css";
import { SendMultimediaMessage } from "../../../store/api";

const MessageRecorder = () => {
  const [recordState, setRe_state] = useState({
    audioDetails: {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    },
  });

  const handleAudioStop = (data) => {
    console.log(data);
    setRe_state({ audioDetails: data });
  };

  const handleAudioUpload = (blobfile) => {
    const formData = new FormData();
    formData.append("receiver", "923156566058");
    formData.append("mediaType", "audio");
    formData.append("file", blobfile);
    SendMultimediaMessage(formData).then((resp) => {
      console.log(resp);
    });
  };

  const handleReset = () => {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0,
      },
    };
    setRe_state({ audioDetails: reset });
  };

  return (
    <Recorder
      record={true}
      title={"New recording"}
      audioURL={recordState.audioDetails.url}
      handleAudioStop={(data) => handleAudioStop(data)}
      handleAudioUpload={(data) => handleAudioUpload(data)}
      handleReset={() => handleReset()}
    />
  );
};

export default MessageRecorder;


