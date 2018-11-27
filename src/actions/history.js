export const UPDATE_GUESS_HISTORY_REQUEST = 'UPDATE_GUESS_HISTORY_REQUEST';

export const updateGuessHistoryRequest = guess => ({
  type: UPDATE_GUESS_HISTORY_REQUEST,
  guess
});

export const updateGuessHistory = guess => dispatch => {
  dispatch(updateGuessHistoryRequest(guess));
};
