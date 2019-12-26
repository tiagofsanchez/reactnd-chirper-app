import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dasboard";
import LoadingBar from "react-redux-loading";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;

    return (
      <div>
        <LoadingBar />
        <div>{loading ? null : <Dashboard />}</div>
      </div>
    );
  }
}

//loading check if the user is authenticated
function mapStateToProps({ authUsers }) {
  return {
    loading: authUsers === null
  };
}

export default connect(mapStateToProps)(App);
