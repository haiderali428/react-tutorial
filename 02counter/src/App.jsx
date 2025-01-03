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
    if(counter< 20){
      counter= counter+1;
     setCounter(counter)
    }
    else{
      alert("you reached maximum Value!");
    }
   
  }
   
  // const addValue = ()=>{
  //    setCounter(prevCounter => prevCounter + 1);
  //    setCounter(prevCounter => prevCounter + 1);
  //    setCounter(prevCounter => prevCounter + 1);
  //    setCounter(prevCounter => prevCounter + 1);

  // }
  const removeValue = () => {
    console.log("clicked" , counter);
    if(counter> 0){
      counter= counter-1;
    setCounter(counter)
    }
    else{
      alert("you reached minimum Value!");
    }
   
   
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
