/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import Emoji from '../../components/Emoji';
import Question from '../../components/Question';

const testData = [
  {
    emoji: '😀',
    description: 'grinning face',
  },
];

export default class StartPage extends Component {
  render() {
    return (
      <div className="container">
        <h1>What is this emoji?</h1>
        <h1>
          <Question />
        </h1>
        <form>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
