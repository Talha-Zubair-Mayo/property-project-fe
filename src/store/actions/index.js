import * as api from "../api";
import * as types from "../action-types";
import { toast } from "react-toastify";
import axios from "axios";


export const loginAction = (data) => async (dispatch) => {
  dispatch({
    type: types.USER_LOGIN_SUCCESS,
    payload: data,
    loading: false,
  });
};

export const getAllSocietiesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_ALL_SOCIETIES_REQUEST,
      loading: true,
    });
    const { data } = await api.getAllSocietiesApi();
    dispatch({
      type: types.GET_ALL_SOCIETIES_SUCCESS,
      payload: data?.result,
    });

  } catch (error) {

    dispatch({
      type: types.GET_ALL_SOCIETIES_FAIL,
      payload: error,
    });
  }
}



export const getAllPhasesAction = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_ALL_PHASES_REQUEST,
      loading: true,
    });
    const { data } = await api.getAllPhasesApi();
    dispatch({
      type: types.GET_ALL_PHASES_SUCCESS,
      payload: data?.result,
    });

  } catch (error) {

    dispatch({
      type: types.GET_ALL_PHASES_FAIL,
      payload: error,
    });
  }
}




export const getAllBlocksAction = () => async (dispatch) => {
  try {
    dispatch({
      type: types.GET_ALL_BLOCKS_REQUEST,
      loading: true,
    });
    const { data } = await api.getAllBlocksApi();
    dispatch({
      type: types.GET_ALL_BLOCKS_SUCCESS,
      payload: data?.result,
    });

  } catch (error) {

    dispatch({
      type: types.GET_ALL_BLOCKS_FAIL,
      payload: error,
    });
  }
}



