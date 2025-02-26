import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

 
  // let obj = {
  //   username: "Haider Ali",
  //   age: 25,
  //   address: "Pakistan",
  //   hobbies: ["Reading", "Traveling", "Coding"],
  //   isEmployed: true,
  //   salary: 20000,
  // }

  // let newArr =[2,3,56,6]

  return (
    <>
     <h1 className="text-red-700 font-bold bg-black p-4 rounded-xl">Tailwind Test</h1>
     <Card />
     <Card name='Haider ALi' username='This is my first Component creation by using React'/>
     
    
    </>
  )
}

export default App
