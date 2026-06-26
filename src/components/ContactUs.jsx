import React from 'react'
import Title from './Title'
import assets from '../assets/assets'

function ContactUs() {
  return (
    <>
    <div id='contact-us' className=' flex flex-col items-center text-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 py-30 text-gray-600'>
        <Title title='Reach Out To Us' desc='From strategy to execution, we craft digital solutions that move your business forword' />        
        <form action="" className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
            <div>
                <p className='mb-2 text-sm font-medium'>Your Name</p>
                <div className='flex pl-3 rounded-lg border border-gray-300'>
                    <img src={assets.person_icon} alt="" />
                    <input type="text" placeholder='Enter your name' className='w-full  p-3 text-sm outline-none ' />
                </div>
            </div>

            <div>
                <p className='mb-2 text-sm font-medium'>Your Email</p>
                <div className='flex pl-3 rounded-lg border border-gray-300'>
                    <img src={assets.email_icon} alt="" />
                    <input type="email" placeholder='Enter your Email' className='w-full  p-3 text-sm outline-none  required' />
                </div>
            </div>
            <div className='sm:col-span-2'>
                <p className='mb-2 text-sm font-medium'>Message</p>
                <textarea rows={8} placeholder='Enter your message' className='w-full p-3 text-sm outline-none rounded-lg border border-gray-300'></textarea>
            </div>
            <button type='submit ' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                submit <img src={assets.arrow_icon} className='w-4' alt="" />
            </button>

        </form>
    </div>
    </>
  )
}

export default ContactUs