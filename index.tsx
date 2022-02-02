import React, { Component } from 'react';
import { render } from 'react-dom';
import TodosProvider from './Context/store';
import Notes from './Notes';
import Input from './Input';
import DoneNotes from './DoneNotes';
import UndoneNotes from './UndoneNotes';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const App = () => {
  return (
    <TodosProvider>
      <Container>
        <Row>
          <Input />
        </Row>
        <Row>
          <Col>
            <DoneNotes />
          </Col>
          <Col>
            <UndoneNotes />
          </Col>
        </Row>
      </Container>
    </TodosProvider>
  );
};

render(<App />, document.getElementById('root'));
