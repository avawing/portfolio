import React from "react";
import {
  Jumbotron,
  Button,
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faNode,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import bgimage from "./assets/jumbotron.jpg";
function Resume() {
  const soft = [
    {
      key: 1,
      skill: "Dependable",
    },
    {
      key: 2,
      skill: "Punctual",
    },
    {
      key: 3,
      skill: "Dependable",
    },
    {
      key: 4,
      skill: "Fast-Learner",
    },
    {
      key: 5,
      skill: "Self-Starter",
    },
    {
      key: 6,
      skill: "Articulate",
    },
    {
      key: 7,
      skill: "Well-Spoken",
    },
    {
      key: 8,
      skill: "Multilinguage",
    },
  ];

  const hard = [
    {
      key: 1,
      skill: "Planning",
    },
    {
      key: 2,
      skill: "Teaching",
    },
    {
      key: 3,
      skill: "Leading",
    },
    {
      key: 4,
      skill: "Scheduling",
    },
    {
      key: 5,
      skill: "Management",
    },
  ];

  const stack = [
    {
      key: 1,
      skill: "HTML5",
    },
    {
      key: 2,
      skill: "CSS3",
    },
    {
      key: 3,
      skill: "JavaScript",
    },
    {
      key: 4,
      skill: "React JS - Hooks/Redux",
    },
    {
      key: 5,
      skill: "Node JS",
    },
    {
      key: 6,
      skill: "Python",
    },
    {
      key: 7,
      skill: "Git",
    },
  ];
  const education = [
    {
      title: "Old Dominion",
      degree: "Bachelor of Music in Vocal Performance",
      desc:
        "A four year program, during which I studied German, Italian, and French. I participated in school productions of opera and musical theatre. I directed and stage managed productions. I held the position of Section Leader for the Soprano Section in Concert Choir, and received many scholarships for both talent and merit.",
    },
    {
      title: "Angloville",
      degree: "TEFL 200+ Certification",
      desc:
        "A three week program held for one week in each Warsaw, Budapest, and Prague, where I taught high-caliber professionals in intensive full-time courses. We created a collaborative learning environment across group projects, one on one conversations, and casual learning at mealtimes. Students celebrated their achievements with a professional presentation at the end of the week.",
    },
    {
      title: "Lambda School",
      degree: "Pending - Endorsement",
      desc:
        "A nine month intensive bootcamp, during which I studied the full JavaScript stack. I collaborated in teams for four group projects. We covered HTML, CSS, JavaScript, React (Hooks), Redux, Node JS, Python and two months of Computer Science topics. I learned the importance of teamwork, how to achieve deliverables in a timely manner, and the importance of cross sectional communication.",
    },
  ];
  const work = [
    {
      key: 1,
      employer: "VIPKID",
      title: "Teacher",
      time: "2018 - Present",
      desc:
        "I taught English as a Second Language to children between the ages of four and twelve, for up to forty hours a week. This position taught me a lot about interpersonal communcation, as my supervisors and education partners were all working in China. There were many interesting interpersonal hurdles in meeting the parents educational standars, as well as standards in timeliness.",
      responsibilities: [
        "Maintained a tidy online workspace",
        "Wrote meaningful notes for parents and teachers, denoting a students progress and homework",
        "Maintained a high standard of learning",
        "Created an energetic and fun learning environment, even at 0400",
        "Communicated with clients, in clear language, as English was not the clients primary language",
      ],
    },
    {
      key: 2,
      employer: "51Talk",
      title: "Teacher",
      time: "2015 - 2018",
      desc:
        "I taught English as a Second Language to children and adults, between the ages of two and eighty, for up to fifty hours a week. I learned a lot about collaborating with colleagues of drastically different cultural backgrounds. My immediate supervisors were from China, and our helpdesk was based out of the Phillipines. I learned to keep a high standard of personal accountability, and ",
      responsibilities: [
        "Maintained a tidy online workspace",
        "Wrote meaningful notes for parents and teachers, denoting a students progress and homework",
        "Maintained a high standard of learning",
        "Created an energetic and fun learning environment, even at 0400",
        "Communicated with clients, in clear language, as English was not the clients primary language",
      ],
    },
    {
      key: 3,
      employer: "FREELANCE",
      title: "Soprano",
      time: "2012 - Present",
      desc:
        "I have performed, under a stage name, in dozens of productions around the world. I have learned the importance of preparation, collaboration, and teamwork.",
      responsibilities: [
        "Memorzied scores in foreign languages",
        "Translated and transliterated foreign languages for personal use",
        "Maintained a high standard artistry and performance",
        "Collaborated in a multinational and multilingual environment",
        "Stepped in, at the last moment, into productions with as little as 12 hours warning",
      ],
    },
    {
      key: 4,
      employer: "FREELANCE",
      title: "Stage Manager",
      time: "2005 - Present",
      desc:
        "Managed companies of up to 270 individuals, children and adults, in productions in North American and Europe. I learned the importance of planning and following through with actions and communications. I mediated meetings between directors and heads of departments, and helped opposing sides come to an agreement. I stayed on top of deliverables, and lended a hand when and where it was needed.",
      responsibilities: [
        "Created running scripts for dissemination amongst running crew and management",
        "Kept thorough rehearsal notes, and emailed directions to the technical leaders and the cast",
        "Created and maintained a production schedule of many moving parts across continents",
        "Created and maintained a travel schedule for multiple individuals and set pieces, between continents",
        "Jury-Rigged creative technical solutions, in real time, during live productions",
      ],
    },
    {
      key: 5,
      employer: "FREELANCE",
      title: "Drama Teacher",
      time: "2005 - 2012",
      desc:
        "I taught children at summer camps and children's theater companies, devising games and encouraging growth through improvisational exercises.",
      responsibilities: [
        "Styled children's hair and makeup for productions",
        "Interfaced with notoriously difficult clients",
        "Collaborated with the director on activities and scheduling during productions",
        "Created and maintained a host of classroom activities for children ages 9 - 18",
      ],
    },
  ];

  return (
    <div>
      <Jumbotron
        style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
      >
        <h1 className="display-3">Aveline Wingfield</h1>
        <p className="lead">Call me Ava.</p>
        <hr className="my-2" />
        <p>
          A lifetime of experience in creative fields, means creative solutions
          to unusual problems.
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90%",
          alignItems: "center",
        }}
      >
        <div
          style={{ width: "80%", display: "flex", justifyContent: "center" }}
        >
          <Card style={{ width: "100%" }}>
            <CardTitle>Skills</CardTitle>
            <CardBody style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <Card style={{ width: "30%" }}>
                <CardTitle>Soft Skills:</CardTitle>
                {soft.map((item) => (
                  <ul>
                    <li>{item.skill}</li>
                  </ul>
                ))}
              </Card>

              <Card style={{ width: "30%" }}>
                <CardTitle>Hard Skills</CardTitle>
                {hard.map((item) => (
                  <ul>
                    <li>{item.skill}</li>
                  </ul>
                ))}
              </Card>
              <Card style={{ width: "30%" }}>
                <CardTitle>Coding Stack</CardTitle>
                {stack.map((item) => (
                  <ul>
                    <li>{item.skill}</li>
                  </ul>
                ))}
              </Card>
            </CardBody>
          </Card>
        </div>
        <br />
        <Card style={{ width: "80%" }}>
          <CardTitle>Education</CardTitle>
          <CardBody>
            {education.map((item) => (
              <>
                <Card key={item.key}>
                  <CardTitle>{item.employer}</CardTitle>
                  <CardSubtitle>{item.title}</CardSubtitle>
                  <CardSubtitle>{item.time}</CardSubtitle>
                  <CardText>{item.desc}</CardText>
                </Card>
                <br />
              </>
            ))}
          </CardBody>
        </Card>
        <br />
        <Card style={{ width: "80%" }}>
          <CardTitle>Employment History</CardTitle>
          <CardBody>
            {work.map((item) => (
              <>
                <Card key={item.key}>
                  <CardTitle>{item.title}</CardTitle>
                  <CardSubtitle>{item.degree}</CardSubtitle>
                  <CardText>{item.desc}</CardText>
                  Responsibilities:
                  <ul>
                    {item.responsibilities.map((rep) => (
                      <li>{rep}</li>
                    ))}
                  </ul>
                </Card>
                <br />
              </>
            ))}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Resume;
