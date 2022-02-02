import React, { useContext } from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { TodosContext } from './Context/store';
const uuid = require('uuid-v4');
import Note from './Note';

export default () => {
  const { addTodos } = useContext(TodosContext);

  const onType = (e: {
    key: string;
    keyCode: number;
    target: { value: string };
  }) => {
    if (e.key === 'Enter' || e.keyCode === 13) {
      addTodos({
        text: e.target.value,
        id: uuid(),
        done: false,
      });

      e.target.value = '';
    }
  };

  return (
    <div>
      <h1
        style={{
          fontFamily: 'Segoe UI',
          marginTop: '30px',
          marginBottom: '20px',
          marginLeft: 'calc(50% - 40px)',
        }}
      >
        Notes
      </h1>
      {/*Input*/}
      <InputGroup
        style={{
          width: 300,
          marginBottom: '50px',
          marginLeft: 'calc(50% - 150px)',
        }}
        size="sm"
        className="mb-3"
      >
        <InputGroup.Text id="inputGroup-sizing-sm">
          Insert a note
        </InputGroup.Text>
        {/*FormControl gestisce gli eventi dell'input di react bootstrap*/}
        <FormControl
          onKeyDown={onType}
          aria-label="Small"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
  );
};
