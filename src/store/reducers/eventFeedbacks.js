import { FETCH_EVENT_FEEDBACKS, CREATE_EVENT_FEEDBACK } from '../../constants/actionTypes';

const eventFeedbackReducer = (state = { eventFeedbacks: [] }, action) => {
  switch (action.type) {
    case FETCH_EVENT_FEEDBACKS:
      return { ...state, eventFeedbacks: action.payload };

    case CREATE_EVENT_FEEDBACK:
      return { ...state, eventFeedbacks: [action.payload, ...state.eventFeedbacks] };

    default:
      return state;
  }
};

export default eventFeedbackReducer;
