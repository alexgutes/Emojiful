import API_BASE_URL from '../config';

export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST';
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS';
export const FETCH_QUESTION_ERROR = 'FETCH_QUESTION_ERROR';

export const fetchQuestionRequest = () => ({
  type: FETCH_QUESTION_REQUEST
});

export const fetchQuestionSuccess = question => ({
  type: FETCH_QUESTION_SUCCESS,
  question
});

export const fetchQuestionError = error => ({
  type: FETCH_QUESTION_ERROR,
  error
});

export const fetchQuestion = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchQuestionRequest());

  fetch(`${API_BASE_URL}/questions`, {
    headers: {
      // Provide our existing token as credentials to get a new one
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => res.json())
    .then(res => dispatch(fetchQuestionSuccess(res.question)))
    .catch(err => dispatch(fetchQuestionError(err)));
};

// === Submission ===
export const submitAnswer = answer => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(submitQuestionRequest());

  console.log(answer);

  fetch(`${API_BASE_URL}/questions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(answer)
  })
    .then(response => {
      return response.json();
    })
    .then(response => {
      console.log(response);
      if (response.message === 'Incorrect') {
        dispatch(submitQuestionError(response.message));
      } else {
        dispatch(submitQuestionSuccess(response.message));
      }
    })
    .then(() => dispatch(fetchQuestion()))
    .catch(error => console.log(error));
};

export const SUBMIT_QUESTION_REQUEST = 'SUBMIT_QUESTION_REQUEST';
export const SUBMIT_QUESTION_SUCCESS = 'SUBMIT_QUESTION_SUCCESS';
export const SUBMIT_QUESTION_ERROR = 'SUBMIT_QUESTION_ERROR';

export const submitQuestionRequest = () => ({
  type: SUBMIT_QUESTION_REQUEST
});

export const submitQuestionSuccess = message => ({
  type: SUBMIT_QUESTION_SUCCESS,
  message
});

export const submitQuestionError = message => ({
  type: SUBMIT_QUESTION_ERROR,
  message
});
