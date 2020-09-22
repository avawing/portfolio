import React from "react";

import { UncontrolledCarousel } from "reactstrap";
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

const items = [
  {
    src: require("./assets/Screenshot (58).png"),
    key: "1",
  },
  {
    src: require("./assets/Screenshot (59).png"),
    key: "2",
  },
  {
    src: require("./assets/Screenshot (60).png"),
    key: "3",
  },
  {
    src: require("./assets/Screenshot (61).png"),
    key: "4",
  },
  {
    src: require("./assets/Screenshot (145).png"),
    key: "5",
  },
];

function Carousel() {
  return (
    <div>
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
      <div>
        <UncontrolledCarousel items={items} />
      </div>
    </div>
  );
}

export default Carousel;
