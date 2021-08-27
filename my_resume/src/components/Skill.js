import React from 'react';
import { Card } from 'react-bootstrap';
import { skills } from "../Data";


function Skill() {
    return (
       
      <Card className="container" id="skills">
        <h2>
            Skills I got !
        </h2>
        <Card.Header>
        <Card.Body>
          {skills.map((skill) => (

            <div key={skill}>
              <div>

                <ol style={{fontSize:"20px"}}>
                <b> {skill.title}</b>
                </ol>
                    <li style={{margin:"10px",fontSize:"18px"}}>
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