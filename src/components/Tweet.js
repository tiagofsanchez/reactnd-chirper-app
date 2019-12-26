import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import {
  TiArrowBackOutline,
  TiHeartOutline,
  TiHeartFullOutline
} from "react-icons/ti/index.js";

class Tweet extends Component {
  toParent = (e, id) => {
    e.preventDefautl();
    // todo: render parent tweet
  };

  handleLike = () => {
    //topo: fill the heart of the like button
  };

  render() {
    const { tweet } = this.props;
    const {
      name,
      avatar,
      timestamp,
      text,
      hasLiked,
      likes,
      replies,
      parent
    } = tweet;

    return (
      <div className="tweet">
        <img src={avatar} alt={`Avatar of ${name}`} className="avatar" />
        <div className="tweet-info">
          <div>
            <span>{name}</span>
            <div>{formatDate(timestamp)}</div>
            {parent && (
              <button
                className="replying-to"
                onClick={e => this.toParent(e, parent.id)}
              >
                replying to @{parent.author}
              </button>
            )}
            <p>{text}</p>
          </div>
          <div className="tweet-icons">
            <TiArrowBackOutline className="tweet-icon" />
            <span>{replies !== 0 && replies}</span>
            <button className="heart-button" onClick={this.handleLike}>
              {hasLiked === true ? (
                <TiHeartFullOutline color="red" className="tweet-icon" />
              ) : (
                <TiHeartOutline className="tweet-icon" />
              )}
            </button>
            <span>{likes !== 0 && likes}</span>
          </div>
        </div>
      </div>
    );
  }
}

//here I am deconstructing the different arguments from the store
function mapStateToProps({ authUsers, users, tweets }, { id }) {
  const tweet = tweets[id];
  //you will have to pass all details of the parentTweet so that you can render after
  const parentTweet = tweet ? tweets[tweet.replyingTo] : null;

  return {
    authUsers,
    tweet: tweet
      ? formatTweet(tweet, users[tweet.author], authUsers, parentTweet)
      : null
  };
}

export default connect(mapStateToProps)(Tweet);
