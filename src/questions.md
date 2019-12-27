# A couple of questions with regards to the tweeter app

A couple of general questions and a couple of them that are a little bit more specific:
. How create your store: I really struggle with how should one select the different slices of the state so that we can scale an application?
. In general, how to design to the reducer to immutable? Specially in really complex examples

## NewTweet component details:

There are a couple of things that I don't get:
. How do I get the id from the new tweet?

```jsx
//in NewTweet component
handleSubmit = e => {
  e.preventDefault();
  const { text } = this.state;
  const { dispatch, id } = this.props;
  dispatch(handleAddTweet(text, id));
  this.setState(initState);
};
```

This is only possible after us creating the `action creators` that will update the database and the store itself. Here I will only have access to dispatch if I connect my component to the store with `connect`.

```jsx
//in my tweets action creators

function addTweet(tweet) {
  return {
    type: ADD_TWEET,
    tweet
  };
}

export function handleAddTweet(text, replyingTo) {
  return (dispatch, getState) => {
    const { authUsers } = getState();
    dispatch(showLoading());
    return saveTweet({
      text,
      author: authUsers,
      replyingTo
    })
      .then(tweet => dispatch(addTweet(tweet)))
      .then(() => dispatch(hideLoading()));
  };
}
```

In my `NewTweet` component I have `text` as state and `dispatch` as props, so how will I know the id?
The data structure of tweet contains way more stuff: id, author, likes, replies... How are those properties of the tweet object being created? The reducer for adding a new tweet is very simple.

```jsx
return {
  ...state,
  [action.tweet.id]: action.tweet,
  ...replyingTo
};
```

However, in my action creator we don't have and `action.tweet.id`, so how is that being generated?

## Other detais and things that I am confused with:

### What is `match` property that is being passed to <TweetPage />?

Well, apparently it passes the props that we want as an objet to our component and in this case we used it as a mean to get the id and mimic the way that the app would work.

### All across the project, I haven't put sorted my tweets
