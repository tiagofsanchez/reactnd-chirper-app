import { saveLikeToggle } from "../utils/api";

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOOGLE_TWEET = "TOOGLE_TWEET";

export function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  };
}

function toogleTweets({ id, authUsers, hasLiked }) {
  return {
    type: TOOGLE_TWEET,
    id,
    authUsers,
    hasLiked
  };
}
//this is using optimistic UI updates so that the user can see reall time what is happening
export function handleToogleTweet(info) {
  return dispatch => {
    dispatch(toogleTweets(info));
    return saveLikeToggle(info).catch(e => {
      console.warn("Error in the handleToogleTweet:", e);
      dispatch(toogleTweets(info));
      alert("There was an error liking the tweet. Try again!");
    });
  };
}
