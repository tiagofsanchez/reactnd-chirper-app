import React from "react";

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
      //todo: send to the my store

      console.log(`My new tweet: ${text}`)  
      this.setState(initState)

  }


  //todo: when the form is submitted we will need to redirect to HOME PAGE
  render() {
    const { text } = this.state;
    const tweetLeft = 280 - text.length
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

export default NewTweet;
