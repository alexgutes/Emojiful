// import React from "react";
// import { connect } from "react-redux";

// export function ListHistory() {
// this.props.history.history
//   .map((question, index) => {
//     let correct;
//     let color;
//     if (question.correct) {
//       correct = "Correct";
//       color = "green";
//     } else {
//       correct = "Incorrect";
//       color = "red";
//     }
//       return (
//         <li key={index}>
//           <p> {question.correctAnswer}</p>
//           <p className={color}>{correct}</p>
//         </li>
//       )
//     .reverse();
//       }

// const mapStateToProps = state => ({
//   history: state.history
// });

// export default connect(mapStateToProps)(ListHistory);
