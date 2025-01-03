import { useState, useEffect } from 'react'

import './App.css'
import { use } from 'react'


function App() {
  // const [color, setColor]= useState("olive");

  const [color, setColor] = useState(()=>{
 return localStorage.getItem('backgroundColor') || 'olive';
  });

  useEffect(()=>{
    return localStorage.setItem('backgroundColor',color);
  }, [color]);
 
  return (
   <div className='w-screen h-screen animation-200' style={{backgroundColor: color}}>
    <div className='fixed flex flex-wrap justify-center inset-x-14 bottom-12   '>
      <div className='flex gap-3 flex-wrap px-3 py-2 shadow-2xl bg-white rounded-3xl'>
      <button
  onClick={() => setColor("rgb(153, 27, 27)")}
  className="px-5 py-1 bg-red-800 shadow-2xl text-white rounded-full"
>
  Red
</button>
<button
  onClick={() => setColor("rgb(34, 197, 94)")}
  className="px-5 py-1 bg-green-800 shadow-2xl text-white rounded-full"
>
  Green
</button>
<button
  onClick={() => setColor("rgb(59, 130, 246)")}
  className="px-5 py-1 bg-blue-800 shadow-2xl text-white rounded-full"
>
  Blue
</button>
<button
  onClick={() => setColor("rgb(202, 138, 4)")}
  className="px-5 py-1 bg-yellow-800 shadow-2xl text-white rounded-full"
>
  Yellow
</button>
<button
  onClick={() => setColor("rgb(126, 34, 206)")}
  className="px-5 py-1 bg-purple-800 shadow-2xl text-white rounded-full"
>
  Purple
</button>
<button
  onClick={() => setColor("rgb(0, 0, 0)")}
  className="px-5 py-1 bg-black shadow-2xl text-white rounded-full"
>
  Black
</button>

      </div>
    </div>
   </div>
  )
}

export default App
