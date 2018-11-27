import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from '../../components/RequiresLogin';
import { fetchProtectedData } from '../../actions/protected-data';
import './Dashboard.css';

export class Dashboard extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="dashboard container">
        <h1 className="greeting">
          Welcome,
          {this.props.username}
!
        </h1>
        <button type='submit'>
        Start Learning
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { currentUser } = state.auth;
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
  };
};

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
