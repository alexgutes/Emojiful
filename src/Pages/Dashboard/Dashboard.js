import React from "react";
import { connect } from "react-redux";
import requiresLogin from "../../components/RequiresLogin";
import { Link } from "react-router-dom";
import { fetchProtectedData } from "../../actions/protected-data";
import "./Dashboard.css";

export class Dashboard extends React.Component {
  componentDidMount() {
    // this.props.dispatch(fetchProtectedData());
  }

  render() {
    return (
      <div className="container">
        <div className="dashboard">
          <h1 className="greeting">
            Welcome, {this.props.auth.currentUser.username}! 🤠
          </h1>
          <Link to="/start">
            <button className="button-primary" type="submit">
              GET STARTED
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  question: state.question
});

export default requiresLogin()(connect(mapStateToProps)(Dashboard));
