import React from "react";
import { connect } from 'react-redux'; 
import { handleAddTweet, handleToogleTweet } from '../actions/tweets'


const initState = { text: ''}

class NewTweet extends React.Component {
  state = initState
  onChangeHandler = e => {
    const { value } = e.target;
    this.setState(prevState => ({
      ...prevState,
      text: value
    }));
  };

  handleSubmit = (e) => { 
      e.preventDefault()
    
      const { text } = this.state
      const { dispatch , id } = this.props

      dispatch(handleAddTweet(text, id))

      this.setState(initState)
  }


  //todo: when the form is submitted we will need to redirect to HOME PAGE
  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length
    console.log(this.props)
    return (
      <div>
          <h3 className='center'>Compose New Tweet</h3>
          <form className='new-tweet' onSubmit={this.handleSubmit}>
            <textarea
            className="textarea"
            maxLength= {280}
            type="text"
            onChange={this.onChangeHandler}
            placeholder="What's happening?"
            value={text}
            />
            {tweetLeft <= 100 ? <p>{tweetLeft}</p> : null}
        <button className='btn' type='submit' disabled={text===''}>Submit</button>
        </form>
      </div>
    );
  }
}

export default connect()(NewTweet);
