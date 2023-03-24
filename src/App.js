import { useEffect } from "react";
import './App.css';
import searchIcon from './search.svg';

//3b491425
const API_URL = 'http://www.omdbapi.com?apikey=3b491425';

const movie1 = {
  "Title": "Batman v Superman: Dawn of Justice",
  "Year": "2016",
  "imdbID": "tt2975590",
  "Type": "movie",
  "Poster": "N/A"
}

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
        
        <div className="movie">   
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img src={movie1.Poster !== 'N/A' ? movie1.Poster : "https://via.placeholder.com/400" } alt={movie1.Title}/>
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
