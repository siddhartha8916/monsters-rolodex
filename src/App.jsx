import React, { Component } from "react";
import ReactGA from 'react-ga';
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const TRACKING_ID = "G-N4XC0G0XC2"; 
ReactGA.initialize(TRACKING_ID);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      name: "Siddhartha",
      searchTerm: "",
      company: "Brainstack Technologies",
    };

    this.changeName = this.changeName.bind(this);
    this.changeCompany = this.changeCompany.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  changeName() {
    this.setState({
      name: "Shubham",
    });
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  changeCompany() {
    this.setState({
      company: "Zensar Technologies",
    });
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }))
      .catch((err) => console.log(err));
  }

  render() {
    const filteredUsers = this.state.users.filter((user) =>
      user.name.toLowerCase().includes(this.state.searchTerm)
    );

    const { searchTerm } = this.state;
    const { onSearchChange } = this;
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          value={searchTerm}
          placeholder="Search Here"
          type="search"
        />
        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
