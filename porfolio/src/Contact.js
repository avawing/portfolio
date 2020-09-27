import React from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGit,
  faGithub,
  faHtml5,
  faJs,
  faLinkedin,
  faNode,
  faPython,
  faReact,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import bgimage from './assets/jumbotron.jpg'
function Contact() {
  return (
    <div>
      <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
        <h1 className="display-3">Did I Catch your Eye?</h1>
        <p className="lead">Aveline Wingfield - Call me Ava.</p>
        <hr className="my-2" />
        <p>Call me anything you want, as long as you call me!</p>
        <p className="lead">
        <Button className="bg-decor"><a href='https://drive.google.com/uc?export=download&id=1j3KYwP0m_OeM-5ywiArxSnC9vfnfnwFL' download="WingfieldResume">Learn More</a></Button>
        </p>
      </Jumbotron>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "1rem",
        }}
      >
        <FontAwesomeIcon icon={faHtml5} /> <FontAwesomeIcon icon={faCss3} />{" "}
        <FontAwesomeIcon icon={faJs} /> <FontAwesomeIcon icon={faReact} />
        <FontAwesomeIcon icon={faNode} /> <FontAwesomeIcon icon = {faGit} />
        <FontAwesomeIcon icon={faPython} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
        <Form style={{ padding: "1rem" }}>
          <FormGroup>
            <Label for="subject">Subject</Label>
            <Input type="text" name="subject" id="subject" />
          </FormGroup>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input type="text" name="name" id="name" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="message">Text Area</Label>
            <Input type="textarea" name="message" id="message" />
          </FormGroup>
          <Button className="bg-decor">Send</Button>
        </Form>
        <div style={{ textAlign: "center", padding: "1rem" }}>
          <h3>Contact Information</h3>
          <p>Aveline Wingfield</p>
          <p>4201 Surf Ave.</p>
          <p>Chesapeake, VA 23325</p>
          <p>+1-757-685-6143</p>
          <p>avelinewingfield@gmail.com</p>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
            <FontAwesomeIcon icon={faTwitter} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
