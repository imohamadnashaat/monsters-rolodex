import { Component } from 'react';
import './App.css';
import SearchBox from './components/serach-box/search-box.component';
import CardList from './components/card-list/card-list.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users, searchMonsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filterdMonsters = monsters.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <SearchBox
          onSearchHandler={onSearchChange}
          className="search-box"
          placeholder="search monster"
        />
        <CardList monsters={filterdMonsters} />
        <button>Button</button>
      </div>
    );
  }
}

export default App;
