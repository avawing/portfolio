import React from "react";
import Navbar from "./Navbar";
import {Route} from 'react-router-dom'
import Splash from './Splash'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'
import { Container, Row } from "reactstrap";



function App() {
  return (
    <div>
      <Container><Row>
        </Row></Container>
      <Navbar />
      <Route exact path = "/">
        <Splash />
      </Route>
      <Route path = "/projects">
        <Projects />
      </Route>
      <Route path = "/resume">
        <Resume />
      </Route>
      <Route path = "/contact">
        <Contact />
      </Route>


      <div></div>
    </div>
  );
}

export default App;
