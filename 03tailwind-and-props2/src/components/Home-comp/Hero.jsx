import React from 'react'
import Button from './Button'

function Hero() {
    return (
        <>
         <div className='hero-section container mx-auto grid md:grid-cols-2 gap-6 flex items-center justify-center mt-4'>
                
                <div className='flex flex-col gap-4 text-left'>
      <h1 className="text-4xl font-bold text-center text-start">Welcome to Our Blog!</h1>
      <p className="text-lg text-center text-start">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consectetur velit ac nulla dictum, ac sollicitudin enim facilisis. Nulla facilisi.
      </p>
      <Button/>
    </div>
    <div>
      {/* Insert Image from Public Folder */}
      <img src="/Images/computer.avif" alt="Blog Image" className="mx-auto rounded-xl shadow-lg w-[400px] h-[300px]" />
    </div>
                    </div>
        </>
    )
}

export default Hero
