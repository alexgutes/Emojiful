/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestion, submitAnswer } from "../../actions/questions";
import { updateGuessHistory } from "../../actions/history";
import Question from "../../components/Question";
import "./StartPage.css";

export class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchQuestion());
    console.log(this.props.question);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  isIncorrect(message) {
    if (message === "Correct") {
      return message;
    }
    if (message === "Incorrect") {
      return (
        <div>
          <p>Incorrect</p>
          <p>
            Correct Answer:{" "}
            {
              this.props.history.history[this.props.history.history.length - 1]
                .correctAnswer
            }
          </p>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="two-thirds column question-wrapper">
            <h3>What is this emoji?</h3>
            <div className="question">
              <Question className="question" question={this.props.question} />
            </div>

            <form
              onSubmit={event => {
                event.preventDefault();

                const answerObj = {
                  answer: this.state.value
                };

                const historyObj = {
                  guess: this.state.value,
                  correctAnswer: this.props.question.description,
                  correct: this.state.value === this.props.question.description
                };

                this.setState({ value: "" });

                this.props.dispatch(submitAnswer(answerObj));
                this.props.dispatch(updateGuessHistory(historyObj));
              }}
            >
              <ul className="flex-outer">
                <li className="answer-input u-full-width">
                  <input
                    className="u-full-width"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange}
                    placeholder="TYPE THE ANSWER"
                  />
                </li>
                <li className="answer">
                  <button className="button-primary" type="submit">
                    Answer
                  </button>
                </li>
              </ul>
            </form>
          </div>
          <div className="one-third column">
            <div className="score-wrapper">
              <p>Score: {this.props.history.score}</p>
              {this.isIncorrect(this.props.message.message)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question.question,
  message: state.question,
  history: state.history
});

export default connect(mapStateToProps)(StartPage);

// User Story: As a user, when I am using the app, my progress should be recorded so I know which questions I got correct or wrong
