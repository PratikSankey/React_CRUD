import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  // useState hook for storing data
 
  const [users, setUsers] = useState([]);
  // useEffect hook for fetching data
  useEffect(() => {
    loadUser();
  }, []);
  //Axios is used to communicate with the backend
  const loadUser = async () => {
    const result = await axios.get("http://localhost:3001/users");
    setUsers(result.data);
  };
  const deleteUser = async (id) => {
    // id is passed to delete record of particular student record
    await axios.delete(`http://localhost:3001/users/${id}`);
    loadUser();
  };
  var leng=Object.keys(users).length;
  return (
    <div className="container">
      <h1>Student Details</h1>
      <h3>Total Students: {leng}</h3>
      <table class="table">
        <thead>
          <tr className="bg-dark text-white">
            <th scope="col">Sr.No</th>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Course</th>
            <th scope="col">Picture URL</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.website}</td>
              <td>
                <Link className="btn btn-primary m-2" to={`/Show/${user.id}`}>
                  View
                </Link>
                <Link
                  className="btn btn-danger m-2"
                  onClick={() => deleteUser(user.id)}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Home;
