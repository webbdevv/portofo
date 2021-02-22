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
import End from "./End";
import Contact from './Contact';
import Projects from './Projects';

function App() {
  return (
    <div>
    <Router>
      <div>
        <Switch>

          <Route path="/about">
            <Navigation/>
            <Main/>
            <Footer/>
          </Route>

          <Route path="/technical">
            <div className="tech-page">
            <Navigation/>
            <Edu/>
            <Experience/>
            <Projects/>
            <Footer/>
            </div>
          </Route>


          <Route path="/contact">
            <Navigation/>
            <Contact/>
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
  </div>
  );
}

export default App;
