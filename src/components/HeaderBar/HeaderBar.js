/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { clearAuth } from '../../actions/auth';
import { clearAuthToken } from '../../local-storage';
import './HeaderBar.css';

export class HeaderBar extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    // Only render the log out button if we are logged in
    let logOutButton;
    if (this.props.loggedIn) {
      logOutButton = (
        <button type="submit" onClick={() => this.logOut()}>
          Log out
        </button>
      );
    }
    return (
      <div className="header-container">
        <ul className="header-list">
          <li>
            <h3 className="logo">Emoji Learn</h3>
          </li>
          <li>{logOutButton}</li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(HeaderBar);
