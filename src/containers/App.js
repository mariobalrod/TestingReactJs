import React, { Component } from 'react';

import Navbar from '../components/Navbar'
import Searchbar from '../components/Searchbar'
import Content from '../components/Content'


class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = process.env.REACT_APP_API
  }

  /* Funcion para cuando se le da enter en el buscador con un buscador */
  handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.state.searchTerm}`)
    .then(data => data.json())
    .then(data => {
      this.setState({ movies: [...data.results]})
    })
  }

  /* Funcion para cuando se cambia el valor de la busqueda */
  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value})
  }

  render(){
    return (
      <div className="App">
        <Navbar />
        <Searchbar  handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Content movies={this.state.movies} />
        
      </div>
    );
  }
}

export default App;
