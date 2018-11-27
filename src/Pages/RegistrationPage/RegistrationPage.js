/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import OnboardInfo from '../../components/OnboardInfo';

export function RegistrationPage(props) {
  // If we are logged in (which happens automatically when registration
  // is successful) redirect to the user's dashboard
  if (props.loggedIn) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="container">
      <div className="row main">
        <div className="home one-half column">
          <h2>Register</h2>
          <RegistrationForm />
          <span>
            Already have an account?
            <Link to="/"> Login here</Link>
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

export default connect(mapStateToProps)(RegistrationPage);
