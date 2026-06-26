import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import SericeCard from './SericeCard'

function Services() {
    const servicesData =[
        {
            title: 'Advertising',
            description: 'We create compelling ad campaigns that resonate with your target audience, driving engagement and conversions.',
            icon: assets.ads_icon
        },
                {
            title: 'Content Marketing',
            description: 'Our content marketing strategies are designed to tell your brand story in a way that captivates and converts.',
            icon: assets.marketing_icon
        },
                {
            title: 'content writing',
            description: 'Our content writing services deliver high-quality, SEO-optimized content that engages your audience and boosts your online presence.',
            icon: assets.content_icon
        },
                {
            title: 'Social Media ',
            description: 'We manage your social media presence with engaging content and strategic campaigns that grow your audience and enhance brand loyalty.',
            icon: assets.social_icon
        },
    ]



  return (
    <>
    <div id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray text-center'>

        <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden' />
        <Title title='How Can We Help?' desc='From strategy to execution , we craft digital solutions that move your bussiness forward'/>

       <div className='flex flex-col md:grid grid-cols-2'>
        {servicesData.map((service, index) => (
  <SericeCard service={service} index={index} key={index} />
))}
       </div>

    </div>
    </>
  )
}

export default Services