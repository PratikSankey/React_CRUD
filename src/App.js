import "./App.css";
import Home from "./Component/Pages/Home";
import Adduser from "./Component/user/Adduser";
import Navbar from "./Component/Layout/Navbar";
import Show from "./Component/user/Show";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/Adduser" component={Adduser}></Route>
          <Route exact path="/Show/:id" component={Show}></Route>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
