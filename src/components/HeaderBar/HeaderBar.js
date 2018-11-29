/* eslint-disable react/jsx-filename-extension */
import React from "react";
import { connect } from "react-redux";
import { clearAuth } from "../../actions/auth";
import { clearAuthToken } from "../../local-storage";

import Emoji from "../Emoji";
import "./HeaderBar.css";
import { Redirect } from "react-router-dom";

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    console.log(this.props);
    // window.location.href = "/logout";
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button
          className="button-primary"
          type="button"
          onClick={() => {
            this.logOut();
          }}
        >
          Log out
        </button>
      );
    } else {
      return <Redirect to="/logout" />;
    }
    return (
      <div className="header-container">
        <ul className="header-list">
          <li>
            <h3 className="logo">
              Emojiful <Emoji symbol="😜" />
            </h3>
          </li>
          <li className="logout-button">{logOutButton}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(HeaderBar);
