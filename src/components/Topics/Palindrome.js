import React, {Component} from 'react'

class Palindrome extends Component {

  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleChange(val) {
    this.setState({userInput: val})
  }

  isPalindrome(str) {
    let forwards = str;
    let backwards = str;

    backwards = backwards.split('');
    backwards = backwards.reverse();
    backwards = backwards.join('');

    (forwards === backwards)? this.setState({palindrome: 'True'}) :this.setState({palindrome: 'False'})
  }

  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Palindrome</h4>
        <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => {this.isPalindrome(this.state.userInput)}}>Check</button>
        <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome;
