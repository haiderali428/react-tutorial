import { useState, useCallback,useEffect } from 'react'
import './index.css'



function App() {
  const [length, setLength] = useState(8);
  const [numberallowed, setNumberallowed] = useState(false);
  const [characterallowd, setCharacterallowd] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() =>{
   let pass="";
   let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberallowed) str += "0123456789"
    if (characterallowd) str += "!@#$%^&*-_+=[]{}~`"
   
   for (let i = 1; i <=length; i++) {
    let char= Math.floor(Math.random()*str.length+1);
    
   }
   setPassword(pass);
  }, [length, numberallowed, characterallowd, setPassword]);
   useEffect( ()=> {passwordGenerator()}, [length, numberallowed, characterallowd, passwordGenerator]) 
  return (
    <>
   

    <div className='w-screen max-w-md m-auto  shadow-md rounded-lg px-4  my-8 py-4 text-orange-600 bg-gray-500'>
    <h1 className=' 
     font-bold text-2xl text-center  text-white mb-3' >Password Generator</h1> 
      <div className='flex shadow rounded-lg overflow-hidden '>
        <input type="text" value={password} className='outline-none w-full py-1 px-3' 
        placeholder='Password' readOnly/>
        <button className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 text-white'>copy</button>
      </div>
      <div className="flex gap-x-2 text-sm">
        <div className='flex item-center gap-x-1'>
          <input 
          type="range" min={8} max={100} value={length} className='cursor-pointer' 
          onChange={(e)=> {setLength(e.target.value)}}/>
          <label htmlFor="">length: {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox" defaultChecked= {numberallowed}
          id='numberInput'
          onChange={()=> {setNumberallowed((prev)=> !prev);}}/>
          <label htmlFor="">Numbers</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox" defaultChecked= {characterallowd}
          id='characterInput'
          onChange={()=> {setCharacterallowd((prev)=> !prev);}}/>
          <label htmlFor="">Characters</label>
        </div>
      </div>
       </div>
    </>
  )
}

export default App
