import React from 'react';
import {Card} from 'react-bootstrap';

function Introduction ()  {

  return (
  
    <Card className="container" id="\introduction">
      <h2>Little introduction of Myself:-</h2>
      <Card.Header >
        <Card.Body>
          <Card.Title>
            HELLO , I'm  Anjali Vaghela.
            </Card.Title>
              <Card.Subtitle><i>I am an International Student origin from India </i></Card.Subtitle>
              <br />
              <Card.Subtitle>
                Sandpiper Drive, Abbotsford <br />
                V2T5N3 , BC Canada.
              </Card.Subtitle>
              <br />
              <Card.Subtitle><a>
                anjuvaghela007@email.com
              </a></Card.Subtitle>
              <br />
              
            <Card.Subtitle className="leading-relaxed">
              123-456-7890
            </Card.Subtitle>
            <br />
            <a
              href="#contact">
              Contact me :-
            </a>
            <br></br>
            <a
              href="#experiences">
              My job experiences :-
            </a>
            <br></br>
            <img
            alt="hero"
            src="./coding.svg"
          />
          
        </Card.Body>
      </Card.Header>
  </Card>
   
  );
    
}
    
export default Introduction;