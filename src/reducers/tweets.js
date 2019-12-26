import { RECEIVE_TWEETS, TOOGLE_TWEET } from "../actions/tweets";

function tweets(state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      };
    case TOOGLE_TWEET:
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          likes:
            action.hasLiked === true
              ? state[action.id].likes.filter(uid => uid !== action.authUsers)
              : state[action.id].likes.concat([action.authUsers])
        }
      };
    default:
      return state;
  }
}

export default tweets;
