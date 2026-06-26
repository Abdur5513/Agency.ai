import React from 'react'
import Title from './Title'
import { teamData } from '../assets/assets'

function Teams() {
  return (
    <div className="flex flex-col items-center text-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-800">
      
      <Title
        title="Meet Our Team"
        desc="Our team of experts is dedicated to delivering exceptional results and driving your business forward."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-7">
        {teamData.map((team, index) => (
          <div
            key={index}
            className="flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-100 dark:border-gray-100 bg-white shadow-gray-100 dark:shadow-white/5 hover:scale-[1.03] transition-all duration-500 cursor-pointer"
          >
            <img
              src={team.image}
              className="w-12 h-12 rounded-full"
              alt={team.title}
            />

            <div className="flex-1">
              <h3 className="font-bold text-sm">{team.name}</h3>
              <p className="text-xs opacity-60">{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Teams