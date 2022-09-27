import {
  USER_LOGIN_SUCCESS,
} from "../action-types";

const initialState = {
  data: {},
  loading: false,
};

const UserLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }

    default:
      return state;
  }
};

export default UserLoginReducer;
