import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet } from "../utils/helpers";

class Tweet extends Component {
  
  
  render() {
    console.log(this.props);
    return <div className="tweet"></div>;
  }
}

function mapStateToProps({ authUsers, users, tweets }, { id }) {
  const tweet = tweets[id];

  return {
    authUsers,
    tweet: formatTweet(tweet , users[tweet.author] , authUsers)
  };
}

export default connect(mapStateToProps)(Tweet);
