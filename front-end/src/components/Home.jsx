import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  // const API_URL = "http://localhost:7000/api/movies";
  const client = axios.create({
    baseURL: "http://localhost:7000/api/movies"
  })

  const getAllMovies = async () => {
    const response = await client.get('');
    setMovies(response.data);
  }

  useEffect(() => {
    getAllMovies();
  }, []);

  const handleClick = (id) => {
    const response = client.delete(`${id}`);
    setMovies(movies.filter((movie) => movie.id != id))
  }

  return (
    <div>
      {movies.map((movie) => (
        <div className="movies-div" key={movie.id}>
          <Link to={`/movies/${movie.id}`} >
            <li>{movie.title}</li>
          </Link>
          <button className="btn-delete" type="button" onClick={() => handleClick(movie.id)}>X</button>
        </div>
      ))}
    </div>
  );
}

export default Home;
