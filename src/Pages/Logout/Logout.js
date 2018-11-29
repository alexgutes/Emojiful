import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Logout.css";
import Emoji from "../../components/Emoji";

export default class Logout extends Component {
  render() {
    return (
      <div className="container">
        <div className="row logout-row">
          <div className="twelve columns logout-wrapper">
            <h5>
              You have been succesfully logged out.
              <Emoji symbol="👋" />
            </h5>
            <Link to="/">
              <button className="button-primary">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
