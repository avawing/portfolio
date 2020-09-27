import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCss3, faGit, faHtml5, faJs, faNode, faPython, faReact} from '@fortawesome/free-brands-svg-icons'
import bgimage from './assets/jumbotron.jpg'
function Resume() {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
        <h1 className="display-3">Aveline Wingfield</h1>
        <p className="lead">Call me Ava.</p>
        <hr className="my-2" />
        <p>
          A lifetime of experience in creative fields, means creative solutions
          to unusual problems.
        </p>
        <p className="lead">
        <Button className="bg-decor"><a href='https://drive.google.com/uc?export=download&id=1j3KYwP0m_OeM-5ywiArxSnC9vfnfnwFL' download="WingfieldResume">Learn More</a></Button>
        </p>
      </Jumbotron>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "1rem" }}>
        <FontAwesomeIcon icon={faHtml5} /> <FontAwesomeIcon icon={faCss3} />{" "}
        <FontAwesomeIcon icon={faJs} /> <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faNode} /> <FontAwesomeIcon icon = {faGit} />
        <FontAwesomeIcon icon={faPython} />
      </div>
      <div style = {{display: "flex", justifyContent: "space-around"}}>
      <iframe src="https://resume.creddle.io/embed/29z0mf5wncw"
  width="854" height="1105" seamless></iframe>
  </div>
    </div>
  );
}

export default Resume;
