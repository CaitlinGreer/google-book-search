import React, { Component } from 'react';
import Header from './Header/Header';
import SearchBar from './SearchBar/SearchBar';
import SearchFilter from './SearchFilter/SearchFilter';

class App extends Component {
  render() {
  return (
    <main className='App'>
      <Header />
      <SearchBar />
      <SearchFilter />
    </main>
  )};
}

export default App;
