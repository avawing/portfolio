import {
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faNode,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Jumbotron, Button, CardDeck } from "reactstrap";
import Project from "./Project";
import bgimage from "./assets/jumbotron.jpg";

const items = [
  {
    src: require("./assets/Screenshot (58).png"),
    header: "Static Marketing Page",
    role: "Marketing Page Designer",
    tech: "HTML & CSS",
    desc:
      "For this project, I worked alongside a team that was creating a functional web application. The application itself was a blogging platform, targetting expats. My web design contributed to the overall look and feel of the eventual product.",
    key: "1",
    link: "https://expat-life.netlify.app/",
    github: "https://github.com/Build-Expat-Journal-1"
  },
  {
    src: require("./assets/Screenshot (59).png"),
    header: "Photo of the Day",
    role: "Creator",
    tech: "React, Axios, ReactStrap, NASA's Photo API",
    desc:
      "The website shows NASA's current photo of the day. I also created a function to randomly generate a date and make a call to the API using the target date.",
    link: "https://nasa-photo-of-the-day-pink-iota.vercel.app/",
    key: "2",
    github: "https://github.com/avawing/nasa-photo-of-the-day"
  },
  {
    src: require("./assets/Screenshot (60).png"),
    header: "Log In/Form Submission",
    role: "Front End Designer",
    tech: "React, Axios, Material UI, Cypress",
    desc:
      "In this project, I collaborated with the website designer to create a cohesive look to the overall application. The website designer chose the colors and themes, and I implemented them into the login and registration page. During the final days of the build, I also assisted the front-end architect with her design for a more user friendly experience.",
    key: "3",
    link: "https://water-me.netlify.app/index.html",
    github: "https://github.com/Water-My-Plants-Track-Team-707"
  },
  {
    src: require("./assets/Screenshot (61).png"),
    header: "Web App",
    role: "Creator",
    tech: "React, Redux, Axios, Reactstrap ",
    desc:
      "I created a website for beer recipes based on my personal preference for IBUs. Each card displays a food pairing, directions and a shopping list of ingredients. The state is handled through redux.",
    key: "4",
    link: "https://react-redux-app-steel.vercel.app/",
    github: "https://github.com/avawing/React-Redux-App"
  },
  {
    src: require("./assets/Screenshot (145).png"),
    header: "Web App",
    role: "Front End Architect",
    tech: "React, Redux, Axios, Reactstrap, React Testing Library",
    desc:
      "I collaborated with the backend to design a schema and implement the api in a custom application. I collaborated with the front-end team to create a cohesive look throughout the UX design.",
    key: "5",
    link: "https://not-a-potluck.gebel.tech/",
    github: "https://github.com/Not-a-Potluck"
  },
  {
    src: require("./assets/Screenshot (146).png"),
    header: "Web App",
    role: "Back End Engineer",
    tech: "Node JS, SQL, Jest",
    desc:
      "I created a functional backend for a group project. Using TDD, I worked with the Front End Architect to establish and implement a functional schema. I collaborated with the other Backend End Engineer - who was working in Java - to ensure that our schema and databases were cohesive, overall creating less work for the front end.",
    key: "6",
    link: "https://water-my-plants-ten.vercel.app/",
    github: "https://github.com/BW-Water-My-Plants-1-Cori"
  },
];

function Projects() {
  return (
    <div>
      <Jumbotron
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      >
        <h1 className="display-3">Aveline Wingfield</h1>
        <p className="lead">Projects and Sundry</p>
        <hr className="my-2" />
        <p>
          A gallery of exciting, and not so exciting, creations. Gathered and
          displayed for your perusal.
        </p>
        <p className="lead">
          <Button
            className="bg-decor"
            a
            href="https://drive.google.com/uc?export=download&id=1j3KYwP0m_OeM-5ywiArxSnC9vfnfnwFL"
            download="WingfieldResume"
          >
            Learn More
          </Button>
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
        <FontAwesomeIcon icon={faNode} /> <FontAwesomeIcon icon={faGit} />
        <FontAwesomeIcon icon={faPython} />
      </div>
      <CardDeck style={{ justifyContent: "center" }}>
        {items.map((item) => (
          <Project item={item} />
        ))}
      </CardDeck>
    </div>
  );
}

export default Projects;
