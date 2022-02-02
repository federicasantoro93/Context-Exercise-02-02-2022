import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { TodosContext } from './Context/store';
const uuid = require('uuid-v4');
import Note from './Note';

export default () => {
  const {
    state: { todos },
  } = useContext(TodosContext);

  return (
    <div>
      <h2>Undone notes</h2>
      <ListGroup as="ol" numbered>
        {todos
          .filter((todo) => todo.done === false)
          .map((todo) => (
            <Note key={todo.id} note={todo} />
          ))}
      </ListGroup>
    </div>
  );
};
