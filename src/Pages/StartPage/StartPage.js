/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestion, submitAnswer } from "../../actions/questions";
import { updateGuessHistory } from "../../actions/history";
import Question from "../../components/Question";
import "./StartPage.css";
import { list } from "postcss";
import ListHistory from "../../components/ListHistory";

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
      return <span className="green">✅ {message}</span>;
    }
    if (message === "Incorrect") {
      return (
        <div>
          <p className="red">❌ Incorrect</p>
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
    let listHistory = this.props.history.history
      .map((question, index) => {
        let correct;
        let color;
        let emoji;
        if (question.correct) {
          correct = "Correct";
          color = "green";
          emoji = "✅";
        } else {
          correct = "Incorrect";
          color = "red";
          emoji = "❌";
        }
        return (
          <li key={index}>
            <span> {question.correctAnswer}</span>{" "}
            <span className={color}>{emoji}</span>
          </li>
        );
      })
      .reverse();

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
            <div className="progress-wrapper">
              <h5>Progress</h5>
              <ul>{listHistory}</ul>
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
