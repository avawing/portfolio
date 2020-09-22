import React from "react";
import { Jumbotron, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import Carousel from "./Carousel";

function Splash() {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "#B7EBF6" }}>
        <h1 className="display-3">Aveline Wingfield</h1>
        <p className="lead">Virginia based Full Stack Developer.</p>
        <hr className="my-2" />
        <p>
          Open for work remotely, locally, and for the right location - willing
          to relocate!
        </p>
        <p className="lead">
          <Button className="bg-decor">Learn More</Button>
        </p>
      </Jumbotron>
      <Carousel />
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

export default Splash;
