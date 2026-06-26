import React from 'react'
import Title from './Title'
import assets from '../assets/assets'


function OurWork() {
    const workData =[
        {
        title: 'Moblie App marketing',
        description: 'We create compelling ad campaigns that resonate with your target audience, driving engagement and conversions.',
        image: assets.work_mobile_app
    },
    {
        title: 'Dashboard management',
        description: 'We create compelling ad campaigns that resonate with your target audience, driving engagement and conversions.',
        image: assets.work_dashboard_management
    },
    {
        title: 'Fitness app promotion',
        description: 'We create compelling ad campaigns that resonate with your target audience, driving engagement and conversions.',
        image: assets.work_fitness_app
    },
]
  return (
    <>
    <div id='our-work' className='flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 text-center xl:px-40 pt-30 text-gray-700 '>

        <Title title="Our Latest Work" desc='From Strategy to execution , we craft digigital solutions that move your business forward'/>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl '>
            {
                workData.map((work, index) =>(
                    <div key={index} className='Hover:scale-102 duration-500 transition-all cursor-pointer'>
                        <img src={work.image} alt="" className='w-full  rounded-xl' />      
                        <div className='flex-1'>
                            <h3 className='font-bold text-2xl'>{work.title}</h3>
                            <p className='text-gray-500 mt-2'>{work.description}</p>        
                        </div>
                    </div>
                ))
            }
            <div>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default OurWork