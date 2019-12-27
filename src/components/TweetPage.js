import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTeet from "./NewTweet";

class TweetPage extends Component {
  render() {
    const { id, replies } = this.props;

    return (
      <div>
        <Tweet id={id} />
        <NewTeet />
      </div>
    );
  }
}

function mapStateToProps({ authUsers, users, tweets }, props) {
  const { id } = props.match.params;
  return {
    id,
    replies: !tweets[id] ? [] : tweets[id].replies
  };
}

export default connect(mapStateToProps)(TweetPage);
