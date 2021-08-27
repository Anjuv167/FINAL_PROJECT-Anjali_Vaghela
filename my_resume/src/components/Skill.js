import React from 'react';
import { Card } from 'react-bootstrap';
import { skills } from "../Data";


function Skill() {
    return (
       
      <Card className="container" id="skills">
        <h2>
            Skills I got :-
        </h2>
        <Card.Header>
        <Card.Body style={{backgroundImage: 'url(https://media.istockphoto.com/vectors/blue-simple-abstract-background-vector-id1185144701?k=6&m=1185144701&s=612x612&w=0&h=_yqRfwab7JM3GoAopqw8-J_H9vujYVs6keiOaxQWs-k=)', backgroundSize:'700px 400px'}}>
          {skills.map((skill) => (

            <div key={skill}>
              <div>

                <ol>
                <b> {skill.title}</b>
                </ol>
                    <li style={{margin:"10px"}}>
                           {skill.subtitle}
                    </li>
                  
                <br/>
              </div>
            </div>
          ))}
        </Card.Body>
      </Card.Header>
  </Card>
  
  );
}

export default Skill;