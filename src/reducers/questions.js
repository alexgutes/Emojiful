import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
} from '../actions/questions';

const initialState = {
  loading: false,
  question: {},
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_REQUEST:
      return Object.assign({}, state, { loading: true });

    case FETCH_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        question: action.question,
      });

    case FETCH_QUESTION_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });

    default:
      return state;
  }
};
