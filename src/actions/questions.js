import API_BASE_URL from '../config';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';

export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST,
});

export const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  question,
});

export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error,
});

export const fetchQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchQuestionRequest());
  fetch(`${API_BASE_URL}/questions`, {
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`,
    },
  })
    .then(res => res.json())
    .then((res) => {
      console.log('test');
      dispatch(fetchQuestionSuccess(res));
    })
    .catch(err => dispatch(fetchQuestionError(err)));
};
