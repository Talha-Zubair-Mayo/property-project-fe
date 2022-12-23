import { api } from "./../interceptor/interceptor";
// var moment = require("moment-timezone");
export const API_URL = process.env.REACT_APP_API_URL;
export var countryInfo;
export var token = localStorage.getItem("token");
let config = {};
if (token) {
  config.headers = { Authorization: token };
}
// User Login API
export const userLoginApi = async (Data) => {
  const res = await api.post("/login", Data);
  return res;
};

// User Register API

export const userRegisterApi = async (Data) => {
  const res = await api.post("/register", Data);

  return res;
};

//  Forgot Password API
export const forgotPasswordApi = async (email) => {
  const res = await api.get(
    "/forgot-password-link?email=" + email
  );
  return res;
};
//  Reset Password Verification API
export const verifyForgotPasswordKey = async (Data) => {
  const res = await api.post(
    "/forgot-password-link-check",
    Data
  );
  return res;
};
// Reset Password API
export const resetPasswordApi = async (Data, code) => {
  config.headers = { Authorization: code };
  const res = await api.post("/resetpassword", Data, config);
  return res;
};

export const updateUserApi = async (id, Data) => {
  const res = await api.patch(`/user/${id}`, Data, config);
  return res;
};
export const verifyAccount = async (Data) => {
  const res = await api.post("/accountverification", Data);
  return res;
};


// Society Api
export const addNewSocietyApi = async (Data) => {
  const res = await api.post(`/society/create`, Data, config);
  return res;
};


export const editSocietyApi = async (id, Data) => {
  const res = await api.patch(`/society/update/${id}`, Data, config);
  return res;
};



export const getAllSocietiesApi = async (page) => {
  const res = await api.get(`/society/list?page=${page}`);
  return res;
};


export const deleteSocietyApi = async (id) => {
  const res = api.delete(`/society/delete/${id}`, config);
  return res;
}



// Phase Api
export const addNewPhaseApi = async (Data) => {
  const res = await api.post(`/phase/create`, Data, config);
  return res;
};

export const editPhaseApi = async (id, Data) => {
  const res = await api.patch(`/phase/update/${id}`, Data, config);
  return res;
};
export const getAllPhasesApi = async (page) => {
  const res = await api.get(`/phase/list?page=${page}`);
  return res;
};

export const deletePhaseApi = async (id) => {
  const res = api.delete(`/phase/delete/${id}`, config);
  return res;
}

export const getPhaseBySocietyidApi = async (id, page) => {
  const res = await api.get(`/phase/list?society=${id}&page=${page}`);
  return res;
}



// block Api
export const addNewBlockApi = async (Data) => {
  const res = await api.post(`/block/create`, Data, config);
  return res;
};


export const editBlockApi = async (id, Data) => {
  const res = await api.patch(`/block/update/${id}`, Data, config);
  return res;
};



export const getAllBlocksApi = async (page) => {
  const res = await api.get(`/block/list?page=${page}`);
  return res;
};


export const deleteBlockApi = async (id) => {
  const res = api.delete(`/block/delete/${id}`, config);
  return res;
}

export const getBlockBySocietyAndPhaseIdApi = async (society, phase, page) => {
  const res = await api.get(`/block/list?society=${society}&phase=${phase}&page=${page}`);
  return res;
}


// Property Api
export const addNewPropertyApi = async (Data) => {
  config.ContentType = `multipart/form-data`;
  const res = await api.post(`/property/create`, Data, config);
  return res;
};


export const editPropertyApi = async (id, Data) => {
  config.ContentType = `multipart/form-data`;
  const res = await api.patch(`/property/update/${id}`, Data, config);
  return res;
};



export const getAllPropertiesApi = async (query) => {
  // const url = query ? 
  const res = await api.get(`/property/list?${query ? query : ''}`);
  return res;
};


export const deletePropertyApi = async (id) => {
  const res = api.delete(`/property/delete/${id}`, config);
  return res;
}

export const getPropertyBySocietyPhaseAndBlockIdApi = async (society, phase, block, page) => {
  const res = await api.get(`/property/list?society=${society}&phase=${phase}&block=${block}&page=${page}`);
  return res;
}
export const getPropertyDetailsApi = async (propertyId) => {
  const res = await api.get(`/property/read/${propertyId}`);
  return res;
}
export const getPropertiesByUserIdApi = async (user) => {
  const res = await api.get(`/property/list?user=${user}&page=`);
  return res;
}


// Agents

export const getAllAgentsApi = async (query) => {
  const res = await api.get('/agents/list');
  return res;
};
export const getAgentByIdApi = async (id) => {
  const res = await api.get(`/agents/read/${id}`);
  return res;
};

export const contactAgentApi = async (id, Data) => {
  const res = await api.post(`/agents/contact/${id}`, Data, config);
  return res;
}



export const getAllAppointmentsApi = async (query) => {
  const res = await api.get(`/agents/appointements/list?${query}`, config);
  return res;
}


// Event Api
export const addNewEventApi = async (Data) => {
  const res = await api.post(`/events/create`, Data, config);
  return res;
};

export const editEventApi = async (id, Data) => {
  const res = await api.patch(`/events/update/${id}`, Data, config);
  return res;
};
export const getAllEventsApi = async (user) => {
  const res = await api.get(`/events/list?user=${user}`, config);
  return res;
};

export const deleteEventApi = async (id) => {
  const res = api.delete(`/events/delete/${id}`, config);
  return res;
}


export const extractFilesData = async (id, Data) => {
  const res = await api.post(`/readfiledata/${id}`, Data);
  return res;
};

export const getSocietiesDataById = async (id, page) => {
  const res = await api.get(`/getProperties/?society=${id}&page=${page}`);
  return res;
}

// WhatsApp Api 

export const GetMediaFile = async (Data) => {
  const res = await api.get("/loadfile", Data);
  return res;
};

export const GetLastMessage = async (Data) => {
  const res = await api.get("/last_message", Data);
  return res;
};
//receiver='Any Receiver Number', text='any message'
export const SendTextMessage = async (Data) => {
  const res = await api.post("/send_text_message", Data);
  return res;
};

export const SendMultimediaMessage = async (Data) => {
  console.log(Data)
  const res = await api.post("/send_multimedia_message", Data, {
    headers: {
      'ContentType': 'multipart/form-data'
    }
  });
  return res;
};

export const GetAllMessagesByNumber = async (phoneNumber) => {
  const res = await api.get(`/loadmessagebyuser/${phoneNumber}`);
  return res;
};

export const getAllWhatsAppProfilesApi = async () => {
  const res = await api.get("/getwhatsappuserlist");
  return res;
}

export const socialRegisterApi = async (data) => {
  const res = await api.post("/socialregister", data);
  return res;
}

export const socialLoginApi = async (data) => {
  const res = await api.post("/sociallogin", data);
  return res;
}

export const getAllUsersApi = async () => {
  const res = await api.get(`/userlist`, config);
  return res;
};

export const getAllRolesApi = async () => {
  const res = await api.get(`/roleslist`, config);
  return res;
};

