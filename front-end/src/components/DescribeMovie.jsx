import axios from "axios";
import { useState, useEffect } from "react";
import {
  BrowserRouter as useParams
} from "react-router-dom";


const DescribeMovie = () =>  {

  // console.log(props);
  // const url = window.location.href;
  // console.log(url);
  const{ id } = useParams();
  console.log(id);

  // const API_URL = `http://localhost:7000/api/movies/${id}`;

  // const [movieDetail, setDetail] = useState([]);

  // useEffect(() => {
  //   async function getMovieById() {
  //     try {
  //       const { data } = await axios.get(API_URL);
  //       setDetail(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  //   getMovieById();
  // });

  // return (
  //   <div className="DescribeMovie">
  //     <ul>
  //       <li>{movieDetail.id}</li>
  //       <li>{movieDetail.title}</li>
  //       <li>{movieDetail.director}</li>
  //       <li>{movieDetail.year}</li>
  //       <li>{movieDetail.duration}</li>
  //     </ul>
  //   </div>
  // )

  return (
    <div className="t">{ id }</div>
  )
}

export default DescribeMovie