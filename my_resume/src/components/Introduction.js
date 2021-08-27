import React from 'react';
import {Card} from 'react-bootstrap';

function Introduction ()  {

  return (
  
    <Card className="container" id="\introduction">
      <h2>Little introduction of Myself:-</h2>
      <Card.Header >
        <Card.Body>
        <img src="https://media.kaufland-online.de/images/items/original/967f4c36846c1f7eb16e347008b1bd76.jpg" alt="Pineapple" style={{float:"right",padding:"10px",width:"200px"}}/>
          <Card.Title>
            Anjali Vaghela
            </Card.Title>
              <Card.Subtitle><i>an International Student origin from India </i></Card.Subtitle>
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
              Contact me 
            </a>
            <br></br>
          
        </Card.Body>
      </Card.Header>
  </Card>
   
  );
    
}
    
export default Introduction;