import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from './Navigation';
import Main from './Main';
import Description from './Description';
import Edu from './Edu';
import Experience from './Experience';
import Self from "./Self";
import Footer from "./Footer";
import End from "./End"

function App() {
  return (
    <Router>
      <div>
        {/* <Navigation/>
        <Main/>
        <Description/>
        <Self/>
        <End/>
        <Footer/>
        <Edu/>
        <Experience/> */}

        <Switch>

          <Route path="/about">
            <Navigation/>
            <Main/>
            <Footer/>
          </Route>

          <Route path="/technical">
            <Navigation/>
            <Edu/>
            <Experience/>
            <Footer/>
          </Route>


          <Route path="/contact">
            <Navigation/>
            <Footer/>
          </Route>
          
          <Route path="/">
            <Navigation/>
            <Main/>
            <Description/>
            <Self/>
            <End/>
            <Footer/>
          </Route>

        </Switch>
      </div>
  </Router>
  );
}

export default App;
