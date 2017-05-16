import React, {Component} from 'react'

class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      cars: [
        {
          make: 'Toyota',
          model: 'Tacoma',
          year: 2017
        },
        {
          make: 'Chevy',
          model: 'Impala',
          year: 1967,
          engine: 'V8'
        },
        {
          make: 'Galactic Empire',
          model: 'Death Star',
          class: 'Inter-Galactic Battlestation'
        },
        {
          make: 'Dodge',
          model: 'Challenger Hellcat',
          year: 2017,
          name: 'The Batmobile',
          class: 'High'
        }
      ],
      userInput: '',
      filteredCars: []
    }
  }

  handleChange(val) {
    this.setState({userInput: val});
  }

  filterCars(prop) {
    let cars = this.state.cars;
    let filteredCars = [];

    cars.map((car) => {
      if (car.hasOwnProperty(prop)) {
        filteredCars.push(car)
      }
    })

    this.setState({filteredCars : filteredCars})
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">Original: {JSON.stringify(this.state.cars, null, 10)}</span>
        <input className="inputLine" onChange={(e) =>this.handleChange(e.target.value)}></input>
        <button className="confirmationButton" onClick={() => this.filterCars(this.state.userInput)}>Filter</button>
        <span className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredCars, null, 10)}</span>
      </div>
    )
  }
}

export default FilterObject;
