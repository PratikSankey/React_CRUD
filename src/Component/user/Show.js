import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Show = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    website: "",
  });
//alert( Object.keys(user).length);
//useParams() hook is a React Router hook that allows you to access the parameters of the current URL
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3001/users/${id}`);
    setUser(res.data);
  };
 // var leng=Object.keys(user).length;
 //<h1 className="display-4"> Count : {leng}</h1>
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        Back To Home
      </Link>
      
      <h1 className="display-4"> Student Id : {id}</h1>
      
      <hr />
      
      <ul className="list-group w-50">
        <li className="list-group-item"> Name: {user.name}</li>
        <li className="list-group-item"> Course: {user.username}</li>
        <li className="list-group-item">
           Profile:
          <img src={user.website} />
        </li>
      </ul>
    </div>
  );
};
export default Show;
