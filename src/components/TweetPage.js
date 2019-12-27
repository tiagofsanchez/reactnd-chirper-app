import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from "./Tweet";
import NewTeet from "./NewTweet";

class TweetPage extends Component {
  render() {
    const { id, replies } = this.props;
    console.log(this.props);
    return (
      <div>
        <Tweet id={id} />
        <NewTeet id={id} />
        <h3 className="center">Tweet Replies</h3>
        <ul>
          {replies.length !== 0 &&
            replies.map(replyId => {
              return (
                <li key={replyId}>
                  <Tweet id={replyId} />
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }, props) {
  const { id } = props.match.params;
  return {
    id,
    replies: !tweets[id]
      ? []
      : tweets[id].replies.sort(
          (a, b) => tweets[b].timestamp - tweets[a].timestamp
        )
  };
}

export default connect(mapStateToProps)(TweetPage);
