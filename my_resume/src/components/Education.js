import React from 'react';
import { educations } from "../Data";
import {Card} from "react-bootstrap"

function Education() {
    return (
    
    <Card className="container" id="educations">
      <h2>Education I have got !!!</h2>
        <Card.Header>
          
        <Card.Body className="flex">
          {educations.map((education) => (
            <a
              key={education.image}
             >
              
                <img
                  alt="gallery"
                  src={education.image}
                  style={{width:"40%"}}
                  href={education.link}
                />
                  <span className=" flex" style={{margin:"50px"}}>
                    <span>
                    <b> {education.title}</b>
                    </span>
                  </span>
            
                  <p>
                    <b> {education.subtitle}</b>
                  </p>
                  <br></br>

                  <p>
                    <i>{education.description}</i>
                  </p>

                  <br></br>
                </a>
              ))}
          </Card.Body>
          </Card.Header>
        </Card>
    
  );
}

export default Education;