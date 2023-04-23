import React from 'react';
import Image from 'react-bootstrap/Image';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import NewOrder from './NewOrder';
import NewCoffeetypeForm from './new-coffeetype-form';
export default function Coffee() {
    return(
      //8.-10. Components are the button, List Group,Image, and Accordion 
    <>
      <Button variant="secondary">Our Drink Groups</Button>{' '}
      <ListGroup>
        <ListGroup.Item>Specialty Lattes</ListGroup.Item>
        <ListGroup.Item>Cold Brews</ListGroup.Item>
        <ListGroup.Item>Hot Chocolates</ListGroup.Item>
        <ListGroup.Item>Frappacinos</ListGroup.Item>
        <ListGroup.Item>Bottled Soda</ListGroup.Item>
      </ListGroup>


      

    <Image src='./dino.jpg' className='dinosaur' alt='Photo by Joyce Adams on Unsplash'></Image>
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Our Motto</Accordion.Header>
        <Accordion.Body>
         Coffee is the game and The T-Rex of Coffee our name.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Our Inspiration</Accordion.Header>
        <Accordion.Body>
         We love coffee and we love t-rex's. The owner's nephew loves T-Rex's so the name is dedicated to him.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
      {/* <NewOrder/> */}




      <h2>Please add a coffee type for a order.</h2>
      <NewCoffeetypeForm/>
      <NewOrder>NewOrder</NewOrder>
      </>
          
         
    );
}
