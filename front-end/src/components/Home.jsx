import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  const API_URL = "http://localhost:7000/api/movies";

  useEffect(() => {
    async function getAllMovies() {
      try {
        const { data } = await axios.get(API_URL);
        setMovies(data);
      } catch (err) {
        console.log(err);
      }
    }
    getAllMovies();
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <li>{movie.title}</li>
        </Link>
      ))}
    </div>
  );
}

export default Home;
