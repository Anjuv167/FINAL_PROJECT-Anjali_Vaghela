import React from 'react';
import { educations } from "../Data";
import {Card} from "react-bootstrap"

function Education() {
    return (
    
    <Card className="container" id="educations">
      <h2>Education I have got !</h2>
        <Card.Header>
          
        <Card.Body className="flex"  >
          {educations.map((education) => (
            <a
              key={education.image}
             >
              <a  href={education.link}>
                <img
                  alt="gallery"
                  src={education.image}
                  style={{width:"30%"}}  
                /> </a>
                  <span className=" flex" style={{margin:"50px",fontSize:"20px"}}>
                    <span>
                    <b> {education.title}</b>
                    </span>
                  </span>
                  <br/>
                  <br/>
                  <p>
                    <h5><b> {education.subtitle}</b></h5>
                  </p>
                  <p>
                    {education.description}
                  </p>
                  <br></br>
                  <br></br>
               </a>
              ))}
          </Card.Body>
          </Card.Header>
        </Card>
    
  );
}

export default Education;