
import {
    GET_ALL_PHASES_FAIL,
    GET_ALL_PHASES_REQUEST, GET_ALL_PHASES_SUCCESS,
} from "../action-types";

const initialState = {
    data: [],
    loading: false,
};

const GetAllPhasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PHASES_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case GET_ALL_PHASES_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        }

        case GET_ALL_PHASES_FAIL: {
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

export default GetAllPhasesReducer;
