import axios from "axios";
import { useState, useEffect } from "react";


function DescribeMovie() {

    const API_URL = `http://localhost:7000/api/movies/`;

    const [movieDetail, setDetail] = useState([]);
  
    useEffect(() => {
      async function getDeal() {
        try {
          const { data } = await axios.get(API_URL);
          setDetail(data);
        } catch (err) {
          console.log(err);
        }
      }
      getDeal();
    }, []);

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