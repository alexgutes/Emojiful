import {
  FETCH_QUESTION_REQUEST,
  FETCH_QUESTION_SUCCESS,
  FETCH_QUESTION_ERROR,
  SUBMIT_QUESTION_REQUEST,
  SUBMIT_QUESTION_SUCCESS,
  SUBMIT_QUESTION_ERROR
} from '../actions/questions';

const initialState = {
  loading: false,
  question: {},
  error: null,
  message: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_QUESTION_REQUEST:
      return Object.assign({}, state, { loading: true, error: null });

    case FETCH_QUESTION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: null,
        question: action.question
      });

    case FETCH_QUESTION_ERROR:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case SUBMIT_QUESTION_REQUEST: {
      return Object.assign({}, state, {
        loading: true,
        error: null,
        message: action.message
      });
    }

    case SUBMIT_QUESTION_SUCCESS: {
      return Object.assign({}, state, {
        loading: false,
        error: null,
        message: action.message
      });
    }

    case SUBMIT_QUESTION_ERROR: {
      return Object.assign({}, state, {
        loading: false,
        message: action.message
      });
    }

    default:
      return state;
  }
};
