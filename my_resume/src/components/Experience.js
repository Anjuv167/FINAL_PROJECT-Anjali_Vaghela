import React from 'react';
import { Card } from 'react-bootstrap';
import { experiences } from "../Data";

function Experience() {
    return (
      <Card className="container" id="experiences">
        <h2>
          Experiences of part time job !
        </h2>
        <Card.Header>
          {experiences.map((workexperience) => (
                <Card.Body>
                  <img
                    alt="Compony Name"
                    src={workexperience.image}
                    style={{width:"40%"}}
                  />
                    <span className=" flex" style={{margin:"50px",fontSize:"20px"}}>
                    <span>
                    <b>{workexperience.name}</b>
                    </span>
                    </span>
                    <br></br>
                    <p> - {workexperience.quote1}  </p>
                    <p> - {workexperience.quote2} </p>
                    <br></br>
                </Card.Body>
                ))}
           
        </Card.Header>
    </Card>
  );

}

export default Experience;