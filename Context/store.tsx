import React, { createContext, useReducer } from 'react';

const initialState = {
  todos: [
    {
      text: 'Prima nota',
      id: 1,
      done: true,
    },
    {
      text: 'Seconda nota',
      id: 2,
      done: false,
    },
    {
      text: 'Terza nota',
      id: 3,
      done: true,
    },
    {
      text: 'Quarta nota',
      id: 4,
      done: false,
    },
  ],
  addTodos: () => {},
  removeTodos: () => {},
  completed: () => {},
};

export const TodosContext = createContext(initialState);

const todosReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return {
        todos: [...state.todos, action.payload],
      };

    case 'remove':
      return {
        todos: state.todos.filter((item) => item.id !== action.payload),
      };

    case 'done':
      const newTodoState = [...state.todos];
      const foundIndex = newTodoState.findIndex(
        (note) => note.id === action.payload
      );
      newTodoState[foundIndex] = {
        ...newTodoState[foundIndex],
        done: !newTodoState[foundIndex].done,
      };
      return {
        todos: newTodoState,
      };

    default:
      return state;
  }
};

export default ({ children }) => {
  const [state, dispatch] = useReducer(todosReducer, initialState);

  const addTodos = (note: any) =>
    dispatch({
      type: 'add',
      payload: note,
    });

  const removeTodos = (id: any) =>
    dispatch({
      type: 'remove',
      payload: id,
    });

  const completed = (id: any) =>
    dispatch({
      type: 'done',
      payload: id,
    });

  return (
    <TodosContext.Provider value={{ state, addTodos, removeTodos, completed }}>
      {children}
    </TodosContext.Provider>
  );
};
