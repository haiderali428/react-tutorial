import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   
  // this is hook it give two things in array first variable value and second method call
   let [counter, setCounter] =useState(15);
  // let counter = 5;
  const addValue = () => {
    console.log("clicked" , counter);
   counter= counter+1;
     setCounter(counter)
  }
  const removeValue = () => {
    console.log("clicked" , counter);
    counter= counter-1;
    setCounter(counter)
  }
  return (
    <>
     
    <h1>Haider ALi</h1>
    <h2>Counter Value: {counter}</h2>
    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
