import React from 'react'

const Card = ({ blogTitle, blogDescription, blogImage }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-all duration-300 mx-auto">
      <img
        src= {blogImage}
        alt="Blog Image"
        className="w-full h-60 object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-black mb-3 text-center">
          {blogTitle}
        </h2>
        <p className="text-gray-600 text-center">
          {blogDescription}
        </p>
        <div className="text-center mt-4">
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-all">
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
