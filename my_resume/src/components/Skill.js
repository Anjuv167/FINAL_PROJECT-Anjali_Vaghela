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
        <Card.Body>
          {skills.map((skill) => (

            <div key={skill}>
              <div>

              <p>
                <b> {skill.title}</b>
              </p>
                  <span style={{margin:"50px"}}>
                    
                           {skill.subtitle}
                      
                  </span>
                <br/>
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