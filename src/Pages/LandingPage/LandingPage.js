import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from '../../components/LoginForm/LoginForm';
import OnboardInfo from '../../components/OnboardInfo';
import './LandingPage.css';

export function LandingPage(props) {
  // If we are logged in redirect straight to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div className="container">
      <div className="row main">
        <div className="home one-half column">
          <h4 className="login-header">Login</h4>
          <LoginForm />
          <span>
            Don't have an account?
            {' '}
            <Link to="/register">Sign Up</Link>
          </span>
        </div>
        <OnboardInfo />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.currentUser !== null,
});

export default connect(mapStateToProps)(LandingPage);
