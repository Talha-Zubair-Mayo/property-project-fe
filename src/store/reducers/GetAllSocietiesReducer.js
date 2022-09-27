
import {
    GET_ALL_SOCIETIES_FAIL,
    GET_ALL_SOCIETIES_REQUEST, GET_ALL_SOCIETIES_SUCCESS,
} from "../action-types";

const initialState = {
    data: [],
    loading: false,
};

const GetAllSocietiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_SOCIETIES_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case GET_ALL_SOCIETIES_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        }

        case GET_ALL_SOCIETIES_FAIL: {
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

export default GetAllSocietiesReducer;
