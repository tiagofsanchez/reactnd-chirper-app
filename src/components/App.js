import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dasboard";
import LoadingBar from "react-redux-loading";
import NewTweet from "./NewTweet";
import TweetPage from "./TweetPage";
import Nav from "./Nav";

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
        <div>
          {loading ? null : (
            <Fragment>
              <div className="container">
                <Nav />
                <Route exact path="/" component={Dashboard} />
                <Route path="/tweet/:id" component={TweetPage} />
                <Route path="/new" component={NewTweet} />
              </div>
            </Fragment>
          )}
        </div>
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
