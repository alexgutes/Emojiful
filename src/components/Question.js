import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/questions';

export class Question extends Component {
  componentWillMount() {
    this.props.dispatch(fetchQuestion());
    console.log(this.props.question);
  }

  render() {
    return (
      <div>
        <h4>{this.props.question.emoji}</h4>{' '}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question.question
});

export default connect(mapStateToProps)(Question);
