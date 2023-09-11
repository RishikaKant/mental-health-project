import { CREATE_MHP_FEEDBACK, FETCH_MHP_FEEDBACKS } from '../constants/actionTypes';
import * as api from '../api/index';

export const getMhpFeedbacks = (mhpId) => async (dispatch) => {
  try {
    const { data } = await api.fetchMhpFeedbackById(mhpId);
    dispatch({ type: FETCH_MHP_FEEDBACKS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const createMhpFeedback = (mhpFeedback) => async (dispatch) => {
  try {
    const { data } = await api.createMhpFeedback(mhpFeedback);
    dispatch({ type: CREATE_MHP_FEEDBACK, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
