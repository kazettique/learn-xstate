import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import TrafficLight from './components/TrafficLight';

function App() {
  return (
    <div className="App">
      <Counter />
      <hr />
      <ToDoList />
      <hr />
      <TrafficLight />
    </div>
  );
}

export default App;
