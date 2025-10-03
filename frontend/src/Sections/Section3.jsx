import React from 'react'
import Title from '../Components/Title'
import { assets, exclusiveOffers } from '../assets/assets'

const Section3 = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-20'>
        <div className='flex flex-col md:flex-row items-center justify-between w-full'>
            <Title align='left' title='Exclusive Offers' subtitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories'/>
            <button className='cursor-pointer font-medium group flex items-center gap-2 max-md:mt-2'>View All Offers<img src={assets.arrowIcon} alt='arrow-icon' className='group-hover:translate-x-1 transition-all'/></button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
            {
                exclusiveOffers.map((item)=>(
                    <div key={item._id} className='group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center' style={{backgroundImage:`url(${item.image})`}}>
                        <p className='font-medium px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 rounded-full'>{item.priceOff}%OFF</p>
                        <div>
                            <p className='font-medium text-2xl font-playfair'>{item.title}</p>
                            <p>{item.description}</p>
                            <p className='text-xs text-white/70 mt-3'>Expires{item.expiryDate}</p>
                        </div>
                        <button className='flex items-center gap-2 font-medium cursor-pointer mb-3'>View Offers
                            <img className='invert group-hover:translate-x-1 translate-all' src={assets.arrowIcon} alt='arrow-icon'/>
                        </button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Section3