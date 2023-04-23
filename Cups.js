import React from 'react';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure'; 
import Button from 'react-bootstrap/Button';
 {/*Below is 5. and 6. for the form for the cups and its figure. Components 7. is the form for the types of cups they want us to make. */}
export default function Cups() {
    return(
    <>
      <Figure>
      <Figure.Image
        alt="Our cups"
        src="./coffeecups.jpg"
      />
      <Figure.Caption>
        We are open to provide creative and sustainable cups to drink our beloved coffee!
      </Figure.Caption>
    </Figure>
      <Form> Please send us what kind of cups you would like for us to sell!
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
          
          </>
    );
}