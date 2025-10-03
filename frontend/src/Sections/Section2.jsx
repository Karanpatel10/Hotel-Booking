import React from 'react'
import Hotel_Card from '../Components/Hotel_Card'
import Title from '../Components/Title'
import {roomsDummyData } from '../assets/assets'
import {useNavigate } from 'react-router-dom'

const Section2 = () => {

    const navigate=useNavigate();

  return (
    
    <div className='flex flex-col gap-20 items-center px-6 md:px-16 lg:px-24 bg-slate-100 py-20'>
     
       <Title title='Featured Destination' subtitle='Discover out handpicked selection of exceptional properties around the world, offering unparalled luxary and unforgettable experinces'/>
    
        <div className='flex flex-wrap items-center justify-center gap-10'>
            {
                roomsDummyData.slice(0,4).map((room,index)=>(
                    <Hotel_Card key={room._id} room={room} index={index}/>
                ))
            }
        </div>

        <button onClick={()=>{navigate('/hotel_roooms'),scrollTo(0,0)}} className=' text-sm font-medium cursor-pointer  bg-white hover:bg-gray-100 transition-all rounded px-10 py-3 flex items-center justify-center'>
            View All Destination
        </button>

    </div>
  )
}

export default Section2