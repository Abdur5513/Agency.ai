import React from 'react'

function Title({title, desc}) {
  return (
    <>
    <div>
        <h2 className='text-3xl sm:text-5xl font-medium'>{title}</h2>
        <p className='max-w-lg text-center text-gray-500 mb-6'>{desc}</p>
    </div>
    </>
  )
}

export default Title