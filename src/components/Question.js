import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchQuestion } from '../actions/questions';

export class Question extends Component {
  componentWillMount() {
    console.log('quetion component mount');
    this.props.dispatch(fetchQuestion());
  }

  render() {
    return (
      <div>
        <h4>{this.props.question.emoji}</h4>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  question: state.question,
});

export default connect(mapStateToProps)(Question);
