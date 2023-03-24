import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';

//3b491425
const API_URL = 'http://www.omdbapi.com?apikey=3b491425';

const App = () => {

  // Asynchronous = takes time to fetch movies

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data)   // object data
    console.log(data.Search); //tableau d'objets
  }

  useEffect(() => {
    searchMovies('Batman');
  }, [])

  return (
    <div className="app">
      <h1>Max's Movie App</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => {}}
        />
      </div>

      <div className="container">

      </div>
    </div>
  );
}

export default App;
