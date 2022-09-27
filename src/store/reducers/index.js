import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import UserLoginReducer from "./LoginReducer";
import GetAllSocietiesReducer from "./GetAllSocietiesReducer"
import GetAllPhasesReducer from "./GetAllPhasesReducer"
import GetAllBlocksReducer from "./GetAllBlocksReducer"
const Reducers = {
  UserLogin: persistReducer({ key: "login", storage }, UserLoginReducer),
  AllSocieties: persistReducer({ key: 'AllSocieties', storage }, GetAllSocietiesReducer),
  AllPhases: persistReducer({ key: 'AllPhases', storage }, GetAllPhasesReducer),
  AllBlocks: persistReducer({ key: 'AllBlocks', storage }, GetAllBlocksReducer)
};

export default Reducers;
