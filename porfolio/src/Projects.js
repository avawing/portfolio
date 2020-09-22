import React from "react";
import { Jumbotron, Button, UncontrolledCarousel } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3, faHtml5, faJs, faNode, faPython, faReact} from '@fortawesome/free-brands-svg-icons'

const items = [
  {
    src: require('./assets/Screenshot (58).png'),
    key: '1'
  },
  {
    src: require('./assets/Screenshot (59).png'),
    key: '2'
  },
  {
    src: require('./assets/Screenshot (60).png'),
    key: '3'
  },
  {
    src: require('./assets/Screenshot (61).png'),
    key: '4'
  },
  {
    src: require('./assets/Screenshot (145).png'),
    key: '5'
  }
];

function Projects() {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#B7EBF6" }}>
        <h1 className="display-3">Aveline Wingfield</h1>
        <p className="lead">
          Projects and Sundry
        </p>
        <hr className="my-2" />
        <p>A gallery of exciting, and not so exciting, creations. Gathered and displayed for your perusal.
        </p>
        <p className="lead">
          <Button className = "bg-decor">Learn More</Button>
        </p>
      </Jumbotron>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "1rem" }}>
        <FontAwesomeIcon icon = {faHtml5}/> <FontAwesomeIcon icon = {faCss3}/> <FontAwesomeIcon icon = {faJs}/> <FontAwesomeIcon icon = {faReact}/><FontAwesomeIcon icon = {faNode}/><FontAwesomeIcon icon = {faPython}/>
        </div>
      <div>
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  );
}

export default Projects;
