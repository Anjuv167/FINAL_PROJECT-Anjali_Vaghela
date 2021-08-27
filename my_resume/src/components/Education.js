import React from 'react';
import { educations } from "../Data";
import {Card} from "react-bootstrap"

function Education() {
    return (
    
    <Card className="container" id="educations">
      <h2>Education I have got !!!</h2>
        <Card.Header>
          
        <Card.Body className="flex" style={{backgroundImage: 'url(https://media.istockphoto.com/vectors/blue-simple-abstract-background-vector-id1185144701?k=6&m=1185144701&s=612x612&w=0&h=_yqRfwab7JM3GoAopqw8-J_H9vujYVs6keiOaxQWs-k=)', backgroundSize:'700px 500px'}} >
          {educations.map((education) => (
            <a
              key={education.image}
             >
              <a  href={education.link}>
                <img
                  alt="gallery"
                  src={education.image}
                  style={{width:"40%"}}  
                /> </a>
                  <span className=" flex" style={{margin:"50px"}}>
                    <span>
                    <b> {education.title}</b>
                    </span>
                  </span>
                  <br/>
                  <p>
                    <h5><b> {education.subtitle}</b></h5>
                  </p>
                  <p>
                    <i>{education.description}</i>
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