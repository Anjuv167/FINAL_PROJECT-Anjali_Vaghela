import React from 'react';
import { Card } from 'react-bootstrap';
import { experiences } from "../Data";

function Experience() {
    return (
      <Card className="container" id="experiences">
        <h2>
          Experiences of Work - part time
        </h2>
        <Card.Header>
          {experiences.map((workexperience) => (
                <Card.Body style={{backgroundImage: 'url(https://media.istockphoto.com/vectors/blue-simple-abstract-background-vector-id1185144701?k=6&m=1185144701&s=612x612&w=0&h=_yqRfwab7JM3GoAopqw8-J_H9vujYVs6keiOaxQWs-k=)', backgroundSize:'700px 600px'}}>
                  <img
                    alt="Compony Name"
                    src={workexperience.image}
                    style={{width:"40%"}}
                  />
                    <span className=" flex" style={{margin:"50px"}}>
                    <span style={{size:""}}>
                    <b>{workexperience.name}</b>
                    </span>
                    </span>
                    <br></br>
                    <p> - {workexperience.quote1}</p>
                    <p> - {workexperience.quote2}</p>
                    <br></br>
                </Card.Body>
                ))}
           
        </Card.Header>
    </Card>
  );

}

export default Experience;