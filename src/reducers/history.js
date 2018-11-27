import {
  UPDATE_GUESS_HISTORY_REQUEST,
  UPDATE_GUESS_HISTORY_SUCCESS
} from '../actions/history';

const initialState = {
  history: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GUESS_HISTORY_REQUEST: {
      const guess = action.guess;
      const currentState = state.history;

      currentState.push(guess);

      Object.assign({}, state, {
        history: currentState
      });
    }

    default:
      return state;
  }
}
