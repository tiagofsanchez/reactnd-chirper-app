import { saveLikeToggle , saveTweet } from "../utils/api";
import { showLoading , hideLoading } from 'react-redux-loading';

export const RECEIVE_TWEETS = "RECEIVE_TWEETS";
export const TOOGLE_TWEET = "TOOGLE_TWEET";
export const ADD_TWEET = 'ADD_TWEET'

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

function addTweet(tweet) {
    return{
        type: ADD_TWEET,
        tweet
    }
}

export function handleAddTweet(text, replyingTo) { 
    return (dispatch, getState) => { 
        const { authUsers } = getState()
        dispatch(showLoading())
        return saveTweet({
            text, 
            author: authUsers,
            replyingTo
        })
        .then((tweet) => dispatch(addTweet(tweet)))
        .then(()=> dispatch(hideLoading()))
    }

}
