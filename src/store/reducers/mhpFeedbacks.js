import { FETCH_MHP_FEEDBACKS, CREATE_MHP_FEEDBACK } from '../../constants/actionTypes';

const mhpFeedbackReducer = (state = { mhpFeedbacks: [] }, action) => {
  switch (action.type) {
    case FETCH_MHP_FEEDBACKS:
      return { ...state, mhpFeedbacks: action.payload };

    case CREATE_MHP_FEEDBACK:
      return { ...state, mhpFeedbacks: [action.payload, ...state.mhpFeedbacks] };

    default:
      return state;
  }
};

export default mhpFeedbackReducer;
