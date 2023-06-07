import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

const DescribeMovie = () =>  {

  const { id }  = useParams();

  const client = axios.create({
    baseURL: `http://localhost:7000/api/movies/${id}`
  })

  const [movieDetail, setDetail] = useState([]);

  const getMovieById = async () => {
    const response = await client.get('');
    setDetail(response.data);
  }

  useEffect(() => {
    getMovieById();
  });

  return (
    <div className="DescribeMovie">
      <ul>
        <li>{movieDetail.id}</li>
        <li>{movieDetail.title}</li>
        <li>{movieDetail.director}</li>
        <li>{movieDetail.year}</li>
        <li>{movieDetail.duration}</li>
      </ul>
    </div>
  )
}

export default DescribeMovie
