import { useState, useEffect } from "react";
import './App.css';
import MovieCard from "./MovieCard";
import searchIcon from './search.svg';

const API_URL = `https://www.omdbapi.com?apikey=${process.env.REACT_APP_API_KEY}`;

const App = () => {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    // console.log(data)
    // console.log(data.Search);
    setMovies(data.Search)
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
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

        {movies?.length > 0 
          ? (
            <div className="container">
              {
                movies.map((movie, index) => (
                  <MovieCard movie={movie} key={index}/>
                ))
              } 
            </div>   
          ) : (
            <div className="empty">
              <h2>No movies found</h2>
            </div>
          )
        }
    </div>
  );
}

export default App;
