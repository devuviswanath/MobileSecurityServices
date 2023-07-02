import React from 'react';
import {ListGroup} from 'react-bootstrap';

function Sidebar() {
const experts = ["First expert", "Second expert", "Third expert"]
  return (
   <>
   <h2>Available Experts</h2>
   <ListGroup>
    {experts.map((expert, idx) => (
        <ListGroup.Item key={idx}>{expert}</ListGroup.Item>
    ))}
   </ListGroup>
    <h2> Experts </h2>
   </>
  )
}

export default Sidebar
