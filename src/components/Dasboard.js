import React, { Component } from "react";
import { connect } from "react-redux";
import Tweet from './Tweet';

class Dasboard extends Component {
  render() {
    const { tweetsID } = this.props;
    return (
      <div>
        <h3 className="center">Timeline</h3>
        <ul className="dasboard-list">
          {tweetsID.map(id => {
            return <li key={id}>
              <Tweet id={id} />
            </li>;
          })}
        </ul>
      </div>
    );
  }
}

//here we are deconstructing state on the fly as this component only cares about the 
//I am not sorting the tweets atm
function mapStateToProps({ tweets }) {
  return {
    tweetsID: Object.keys(tweets)
  };
}

export default connect(mapStateToProps)(Dasboard);
