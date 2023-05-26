import { useState, useEffect } from 'react';
import axios from "axios";

const App = () => {
  const [movies, setMovies] = useState([]);

  const API_URL = "http://localhost:7000/api/movies";

  useEffect(() => {
    // fetch(API_URL)
    // // .then((res) => res.json())
    // .then((data) => setMovies(data.message));
    async function getAllMovies() {
      try {
        const { data } = await axios.get(API_URL);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllMovies();
  },[]);

  return (
    <div className="App">
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title}
        </li>
      ))}
    </div>
  )
}

export default App;