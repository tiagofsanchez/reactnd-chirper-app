import React, { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dasboard";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }

  render() {
    const { loading } = this.props;
    console.log(this.props)
    return <div>{loading ? null : <Dashboard />}</div>;
  }
}

//loading check if the user is authenticated
function mapStateToProps({ authUsers }) {
  return {
    loading: authUsers === null
  };
}

export default connect(mapStateToProps)(App);
