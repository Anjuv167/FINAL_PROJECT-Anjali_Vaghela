import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-Form-urlencoded" },
      body: encode({ "Form-name": "contact", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <Card className="container"  id="contact">  
         <h2>Contact me here :- </h2> 
     
      <Card.Header>
       
        <Card.Body style={{backgroundImage: 'url(https://media.istockphoto.com/vectors/blue-simple-abstract-background-vector-id1185144701?k=6&m=1185144701&s=612x612&w=0&h=_yqRfwab7JM3GoAopqw8-J_H9vujYVs6keiOaxQWs-k=)', backgroundSize:'700px 400px'}} >
        <Form
          name="contact"
          onSubmit={handleSubmit}>
        
            <Form.Label htmlFor="name">
              Name
            </Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
            />

            <Form.Label htmlFor="email">
              Email
            </Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />         
          
            <Form.Label
              htmlFor="message">
              Message
            </Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              rows={3}
              onChange={(e) => setMessage(e.target.value)}
            />
            <br></br>
            <Button
            variant="primary"
            type="submit">
            Submit
            </Button>
        
        </Form>
      </Card.Body>
    </Card.Header>
  </Card>
  );
}


export default Contact;