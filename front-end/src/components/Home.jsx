import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [movies, setMovies] = useState([]);

  // const API_URL = "http://localhost:7000/api/movies";
  const client = axios.create({
    baseURL: "http://localhost:7000/api/movies"
  });

  // useEffect(() => {
  //   async function getAllMovies() {
  //     try {
  //       const { data } = await axios.get('');
  //       setMovies(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getAllMovies();
  // }, []);

  useEffect(() => {
    client.get('')
    .then((response) => {
      setMovies(response.data)
    })
  });

  // const handleDelete = (id) => {
  //   client.delete(
  // }

  return (
    <div>
      {movies.map((movie) => (
        <Link to={`/movies/${movie.id}`} key={movie.id}>
          <li>{movie.title}</li>
          {/* <button onClick={()=> handleDelete(movie.id)}>X</button> */}
        </Link>
      ))}
    </div>
  );
}

export default Home;
