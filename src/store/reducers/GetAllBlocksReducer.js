
import {
    GET_ALL_BLOCKS_FAIL,
    GET_ALL_BLOCKS_REQUEST, GET_ALL_BLOCKS_SUCCESS,
} from "../action-types";

const initialState = {
    data: [],
    loading: false,
};

const GetAllBlocksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_BLOCKS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }

        case GET_ALL_BLOCKS_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        }

        case GET_ALL_BLOCKS_FAIL: {
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

export default GetAllBlocksReducer;
