/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion, submitAnswer } from '../../actions/questions';
// import Emoji from '../../components/Emoji';
import Question from '../../components/Question';

export class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(fetchQuestion());
    console.log(this.props.question);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="container">
        <h1>What is this emoji?</h1>
        <h1>
          <Question question={this.props.question} />
        </h1>
        <form
          onSubmit={event => {
            event.preventDefault();

            const answerObj = {
              answer: this.state.value
            };

            this.setState({ value: '' });

            this.props.dispatch(submitAnswer(answerObj));
          }}
        >
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>

        <p>{this.props.message.message}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question.question,
  message: state.question
});

export default connect(mapStateToProps)(StartPage);
