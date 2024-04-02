import React, { Component } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
//import { robots } from "./robots"; // we dont use this anymore because we are fetching from an API
import "./App.css";
import Scroll from "./Scroll";

//STATE object that describes your application
//STATE is able to change and affect the application
//PROPS just read only, never change
//STATE >> PROPS

//use constructor to create state
class App extends Component {
  constructor() {
    super();
    this.state = {
      //robots: robots, //robots : [] will be empty array
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
      //.then((users) => {}); //this is return empty array
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
    // const filteredRobots = this.state.robots.filter(robots => {
    //   return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    // })
    // console.log(filteredRobots);
  };
  //anytime input is changed, it will log the event
  // console.log(event.target.value); will log the value of the input
  //return robots.name.toLowerCase().includes(searchfield.toLowerCase()) will return the robots that match the input
  //includes(searchfield.toLowerCase()) will return the robots that match the input
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f2">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobots} />;
          </Scroll>
        </div>
      )
      //Scroll is a parent of CardList, so it can wrap CardList, CardList is a child of Scroll
      ;
    }
  }
}
//access robots using this.state.robots
//state is passed down to components as props
//CardList accepts robots as props even in App.js it is state
export default App;
