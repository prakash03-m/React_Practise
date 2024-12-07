import React from 'react';
import './App.css';
// import { Counter } from './practiceSoln/counter/Counter';
// import { ToggleSwitch } from './practiceSoln/toggleSwitch/ToggleSwitch';
// import { ToDoList } from './practiceSoln/toDoList/ToDoList';
import { APIFetch } from './practiceSoln/apifetch/APIFetch';

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <ToggleSwitch /> */}
      {/* <ToDoList /> */}
      <APIFetch />
    </div>
  );
}

export default App;
