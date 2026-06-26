import React from 'react'
import { company_logos } from '../assets/assets'

function TrustedBy() {
  return (
    <>
    <div className="flex flex-col items-center text-center px-4 sm:px-12 lg:px-24 xl:px-40 gap-10 text-gray-500 py-10 ">
  <h3 className="font-bold text-center">Trusted By Leading Companies</h3>
        <div className='flex items-center justify-center flex-wrap gap-10 m-4'>
            {company_logos.map((logo, index)=>(
                <img src={logo} key={index } className='h-6 sm:h-8 md:h-10 lg:h-12 object-contain dark:drop-shadow-xl' alt="" />
            ))}
        </div>
    </div>
    </>
  )
}

export default TrustedBy