import { api } from "./../interceptor/interceptor";
// var moment = require("moment-timezone");
export const API_URL = process.env.REACT_APP_API_URL;
export var countryInfo;
export var token = localStorage.getItem("token");
let config = {};
if (token) {
  console.log(token)
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
export const resetPasswordApi = async (Data) => {
  const res = await api.put("/reset-password", Data);
  return res;
};

export const updateUserApi = async (id, Data) => {
  const res = await api.patch(`/user/${id}`, Data, config);
  return res;
};


// Society Api
export const addNewSocietyApi = async (Data) => {
  const res = await api.post("/society/create", Data, config);
  return res;
};


export const editSocietyApi = async (id, Data) => {
  const res = await api.patch(`/society/update/${id}`, Data, config);
  return res;
};



export const getAllSocietiesApi = async () => {
  const res = await api.get("/society/list");
  return res;
};


export const deleteSocietyApi = async (id) => {
  const res = api.delete(`/society/delete/${id}`, config);
  return res;
}



// Phase Api
export const addNewPhaseApi = async (Data) => {
  const res = await api.post("/phase/create", Data, config);
  return res;
};

export const editPhaseApi = async (id, Data) => {
  console.log(id, Data)
  const res = await api.patch(`/phase/update/${id}`, Data, config);
  return res;
};
export const getAllPhasesApi = async () => {
  const res = await api.get("/phase/list");
  return res;
};

export const deletePhaseApi = async (id) => {
  const res = api.delete(`/phase/delete/${id}`, config);
  return res;
}

export const getPhaseBySocietyidApi = async (id) => {
  const res = await api.get(`/phase/list?society=${id}`);
  return res;
}



// block Api
export const addNewBlockApi = async (Data) => {
  const res = await api.post("/block/create", Data, config);
  return res;
};


export const editBlockApi = async (id, Data) => {
  const res = await api.patch(`/block/update/${id}`, Data, config);
  return res;
};



export const getAllBlocksApi = async () => {
  const res = await api.get("/block/list");
  return res;
};


export const deleteBlockApi = async (id) => {
  const res = api.delete(`/block/delete/${id}`, config);
  return res;
}

export const getBlockBySocietyAndPhaseIdApi = async (society, phase) => {
  const res = await api.get(`/block/list?society=${society}&phase=${phase}`);
  return res;
}


// Property Api
export const addNewPropertyApi = async (Data) => {
  console.log(Data)
  config.ContentType = "multipart/form-data";
  const res = await api.post("/property/create", Data, config);
  return res;
};


export const editPropertyApi = async (id, Data) => {
  console.log(id, Data)
  config.ContentType = "multipart/form-data";
  const res = await api.patch(`/property/update/${id}`, Data, config);
  return res;
};



export const getAllPropertiesApi = async (query) => {
  const url = query ? `/property/list${query}` : '/property/list'
  const res = await api.get(url);
  return res;
};


export const deletePropertyApi = async (id) => {
  const res = api.delete(`/property/delete/${id}`, config);
  return res;
}

export const getPropertyBySocietyPhaseAndBlockIdApi = async (society, phase, block) => {
  const res = await api.get(`/property/list?society=${society}&phase=${phase}&block=${block}`);
  return res;
}
export const getPropertyDetailsApi = async (propertyId) => {
  const res = await api.get(`/property/read/${propertyId}`);
  return res;
}
export const getPropertiesByUserIdApi = async (user) => {
  const res = await api.get(`/property/list?user=${user}`);
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

