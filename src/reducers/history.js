import {
  UPDATE_GUESS_HISTORY_REQUEST,
  UPDATE_GUESS_HISTORY_SUCCESS
} from "../actions/history";

const initialState = {
  history: [],
  score: 0
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GUESS_HISTORY_REQUEST: {
      const guess = action.guess;
      const currentState = state.history;

      currentState.push(guess);

      let score = guess.correct ? (score = state.score++) : state.score--;

      Object.assign({}, state, {
        history: currentState,
        score: score
      });
    }

    default:
      return state;
  }
}
