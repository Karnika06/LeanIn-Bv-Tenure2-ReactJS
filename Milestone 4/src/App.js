//import Create from "./Components/Create";
import Home from './Components/Home.js';
import Navbar from "./Components/Navbar";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import BlogDetails from "./Components/BlogDetails";
import About from './Components/About';
import { Create } from './Components/Create.js';


function App() {
  return (
    <Router>
    <div className= "App">
      <Navbar/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>

        <Route path="/create">
          <Create/>
        </Route>

        <Route path = "/about">
          <About/>
        </Route>

        <Route path = "/blog/:id">
          <BlogDetails/>
        </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;
