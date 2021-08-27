import React from 'react';
import {Card} from 'react-bootstrap';

function Introduction ()  {

  return (
  
    <Card className="container" id="\introduction" >
      <h2>Little introduction of Myself !</h2>
      <Card.Header >
        <Card.Body style={{textAlign:"center"}}>
        <img src="images/Anjali_profile.jpg" alt="Anjali Profile" 
        style={{float:"right",padding:"20px",width:"250px"}}/>
         <br/>
          <h1 style={{fontSize:"35px",color:"white",textShadow:"-2px 2px black, -3px 0px black, 1px 0 black, 0px 0px black"}} >
            Anjali Vaghela
            </h1>
            <br/>
          
              <p><i>an International Student origin from India </i></p>
             
              <p>
                Sandpiper Drive, Abbotsford <br />
                V2T5N3 , BC Canada.
              </p>
              
              <p><a>
                anjuvaghela007@email.com
              </a></p>
              
              
            <p className="leading-relaxed">
              (+1) 604-621-0919
            </p>
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