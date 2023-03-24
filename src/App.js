import { useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import searchIcon from './search.svg';

const API_URL = `http://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data)
    console.log(data.Search); // search array
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
        <MovieCard movie1={movie1}/>
      </div>
    </div>
  );
}

export default App;
