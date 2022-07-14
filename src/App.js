import React from 'react';
import './style.css';
import Greet from './greet';

export default function App() {
  return (
    <div>
      <h1>Hi this React </h1>
      <br />

      <Greet name="Diana" character="wonderwomen" />
      <Greet name="Bruce Banner" character="Hulk" />
      <Greet name="Angelina" character="Captain Marvel" />
    </div>
  )
}
