import React, { useState } from 'react'

function SericeCard({service, index}) {
    const [position, setPosition] =useState({x:0 , y:0})
  return (
    <>
   <div className="relative overflow-hidden max-w-lg m-2 sm:m-4 rounded-xl border border-gray-200 shadow-2xl shadow-gray-100">
  
  {/* glow */}
  <div
    className="pointer-events-none blur-2xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 w-[300px] h-[300px] absolute z-0 transition-opacity duration-500 mix-blend-lighten opacity-70"
    style={{ top: position.y - 150, left: position.x - 150 }}
  />

  {/* content */}
  <div className="relative z-10 flex items-center gap-6 p-8 transition-all hover:p-7 hover:m-1 rounded-[10px] bg-white">
    
    <div className="bg-gray-100 rounded-full">
      <img
        src={service.icon}
        className="max-w-24 bg-white rounded-full m-2"
        alt=""
      />
    </div>

    <div className="flex-1">
      <h3 className="font-bold">{service.title}</h3>
      <p className="text-sm mt-2">{service.description}</p>
    </div>

  </div>
</div>
    </>
  )
}

export default SericeCard