import React, {Component} from 'react'

class FilterString extends Component {

  constructor() {
    super()

    this.state = {
      names: [
        "Samuel",
        "Benjamin",
        "Jonathon",
        "Shane",
        "Aaron",
        "Lynnett",
        "Carol",
        "Jack"
      ],
      userInput: '',
      filteredNames: []
    }
  }
  handleChange(val) {
    this.setState({userInput: val})
  }

  filterNames(str) {
    let names = this.state.names;
    let filteredNames = []
    names.map((name) => {
      if (name.toLowerCase().includes(str.toLowerCase())) {
        filteredNames.push(name)
      }
    })
    this.setState({filteredNames: filteredNames})
  }


  render() {
    return (
      <div className="puzzleBox filterStringPB">
        <h4>Filter String</h4>
        <span className="puzzleText">{JSON.stringify(this.state.names, null, 10)}</span>
        <input className="inputLine" onChange={(e)=>this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={()=> this.filterNames(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterStringRB">{JSON.stringify(this.state.filteredNames, null, 10)}</span>
      </div>
    )
  }
}

export default FilterString;
