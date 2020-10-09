import React, {useState} from 'react'
import {
    Button,
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle, Modal, ModalBody, ModalFooter, ModalHeader
  } from "reactstrap";
  import {
    faGithub
  } from "@fortawesome/free-brands-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Project(props){
    const {item} = props
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return(
        <>
        <Card key={item.key} style={{minWidth:"20em", maxWidth:"25em", margin:"2rem",padding: "2rem"}}>
          <CardImg top width="100%" src={item.src} alt="Card image cap" />
          <CardBody>
            <CardTitle><h4>{item.header}</h4></CardTitle>
            <CardSubtitle>{item.role}</CardSubtitle>
            <CardText>{item.tech}</CardText>
            <Button className="bg-decor" onClick={toggle}>Button</Button>
          </CardBody>
        </Card>

<Modal isOpen={modal} toggle={toggle} key = {item.key}>
<ModalHeader toggle={toggle}>{item.header}</ModalHeader>
<ModalBody>
  {item.desc}
</ModalBody>
<CardImg top width="100%" src={item.src} alt="Card image cap" />
<ModalFooter>
    <a href = {item.github}>
<FontAwesomeIcon icon = {faGithub} /></a>
  <Button className="bg-decor"><a href = {item.link}>Visit</a></Button>{' '}
  <Button color="secondary" onClick={toggle}>Cancel</Button>
</ModalFooter>

</Modal>
</>
    )
  
}

export default Project