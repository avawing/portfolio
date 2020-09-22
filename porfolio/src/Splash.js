import React from 'react'
import { Jumbotron, Button, UncontrolledCarousel, Form, FormGroup, Label, Input } from 'reactstrap';

const items = [
    {
      src: require('./assets/Screenshot (58).png'),
      altText: 'Slide 1',
      caption: 'Slide 1',
      header: 'Slide 1 Header',
      key: '1'
    },
    {
      src: require('./assets/Screenshot (59).png'),
      altText: 'Slide 2',
      caption: 'Slide 2',
      header: 'Slide 2 Header',
      key: '2'
    },
    {
      src: require('./assets/Screenshot (60).png'),
      altText: 'Slide 3',
      caption: 'Slide 3',
      header: 'Slide 3 Header',
      key: '3'
    },
    {
      src: require('./assets/Screenshot (61).png'),
      altText: 'Slide 4',
      caption: 'Slide 4',
      header: 'Slide 4 Header',
      key: '4'
    },
    {
      src: require('./assets/Screenshot (145).png'),
      altText: 'Slide 5',
      caption: 'Slide 5',
      header: 'Slide 5 Header',
      key: '5'
    }
  ];

function Splash(){
    return(
        <div>
        <Jumbotron style = {{backgroundColor:"#B7EBF6"}}>
          <h1 className="display-3">Aveline Wingfield</h1>
          <p className="lead">Virginia based Full Stack Developer.</p>
          <hr className="my-2" />
          <p>Open for work remotely, locally, and for the right location - willing to relocate!</p>
          <p className="lead">
            <Button className = "bg-decor">Learn More</Button>
          </p>
        </Jumbotron>

        <div><UncontrolledCarousel items={items} /></div>
        <div style = {{display: "grid", gridTemplateColumns:"auto auto"}}>
      <Form style = {{padding: "1rem"}}>
      <FormGroup>
        <Label for="subject">Subject</Label>
        <Input type="text" name="subject" id="subject"/>
      </FormGroup>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input type="text" name="name" id="name"/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email"/>
      </FormGroup>
      <FormGroup>
        <Label for="message">Text Area</Label>
        <Input type="textarea" name="message" id="message" />
      </FormGroup>
        <Button className = "bg-decor">Send</Button>
      </Form>
      <div style = {{textAlign: "center", padding: "1rem"}}>
       <h3>Contact Information</h3>
       <p>Aveline Wingfield</p>
       <p>4201 Surf Ave.</p>
       <p>Chesapeake, VA 23325</p>
       <p>+1-757-685-6143</p>
       <p>avelinewingfield@gmail.com</p>
      </div>
      </div>
      </div>
    )
}

export default Splash