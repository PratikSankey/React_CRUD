import axios from "axios";
import { React, useState } from "react";
import { useHistory } from "react-router-dom";


const Adduser = () => {
  //Using the history instance you can redirect users to another page
  let history = useHistory();
  const [user, setUser] = useState({
    id: "",
    name: "",
    username: "",
    website: "",
  });
  const { id, name, username, website } = user;
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    
    e.preventDefault();
    //set data
    await axios.post("http://localhost:3001/users", user);
    // redirect to home page after adding user
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter Your Id"
              name="id"
              value={id}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Course"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="url"
              className="form-control form-control-lg"
              placeholder="Enter Picture URL"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
         
          <button className="btn btn-primary btn-block"> Add User</button>
        </form>
      </div>
    </div>
  );
};
export default Adduser;
