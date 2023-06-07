import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; 

const DescribeUser = () =>  {

  const { id }  = useParams();

  const client = axios.create({
    baseURL: `http://localhost:7000/api/users/${id}`
  })

  const [userDetail, setDetail] = useState([]);

  const getUserById = async () => {
    const response = await client.get('');
    setDetail(response.data);
  }

  useEffect(() => {
    getUserById();
  });

  return (
    <div className="DescribeUser">
      <ul>
        <li>{userDetail.firstname}</li>
        <li>{userDetail.lastname}</li>
        <li>{userDetail.email}</li>
        <li>{userDetail.hashedPassword}</li>
        <li>{userDetail.city}</li>
      </ul>
    </div>
  )
}

export default DescribeUser
