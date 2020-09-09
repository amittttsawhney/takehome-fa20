import React, { Component } from 'react'
import Instructions from './Instructions'
import Restaurant from './Restaurant'
import Counter from './Counter'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      restaurants: [
        {id: 1, name: "Golden Harbor", rating: 10},
        {id: 2, name: "Potbelly", rating: 6},
        {id: 3, name: "Noodles and Company", rating: 8},
      ], 
      addRestaurant: ''
    }
  }

  addRestaurant = () => {
    var nextId = this.state.restaurants[this.state.restaurants.length - 1].id + 1;
    var name = document.getElementById("new-restaurant").value;
    var rating = 0;
    var restaurant = {id: nextId, name: name, rating: rating};

    this.setState({restaurants: this.state.restaurants.concat(restaurant)});
  }

  handleRestaurantFieldChange = (e) => {
    this.setState({addRestaurant: e.target.value});
  } 

  render() {
    return (
      <div className="App">
        <Instructions complete={true} />
        {this.state.restaurants.map(x => (
          <Restaurant id={x.id} name={x.name} rating={x.rating} />
        ))}
        <input value = {this.state.addRestaurant} onChange = {this.handleRestaurantFieldChange} id = "new-restaurant" />
        <button onClick={this.addRestaurant} type = "button">Add new Restaurant</button>
      </div>
    )
  }
}

export default App
