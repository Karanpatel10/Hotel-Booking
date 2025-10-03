import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets';

const RoomDetails = () => {

    const {id}=useParams();
    const [room,setRoom]=useState(null);
    const[mainImage,setMainImage]=useState(null);

    useEffect(()=>{
        const room = roomsDummyData.find(room=>room._id === id);
        room && setRoom(room);
        room && setMainImage(room.images[0])
},[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        {/* Room Details */}
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name}<span>{room.roomType}</span></h1>
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
        </div>

        {/* Room Rating*/}
        <div className='flex items-center mt-2'>
            <p>200+ Rating</p>
        </div>

        {/* Room Address */}
        <div className='flex gap-3 mt-2 items-center text-gray-500'>
            <img src={assets.locationIcon} alt='address-icon'/>
            <p>{room.hotel.address}</p>
        </div>

        {/* Room image */}
        <div className='flex flex-col lg:flex-row mt-10 gap-6'>
            <div className='w-full lg:w-1/2'>
                <img src={mainImage} alt='main-image-hotel' className='w-full rounded-xl shadow-lg object-cover'/>
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                { room?.images.length>1 && room.images.map((image,index)=>(
                    <img src={image} alt='all-image' key={index} onClick={()=>setMainImage(image)} className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}/>
                ))}
            </div>
        </div>

        {/* Room Highlight */}
        <div className=' flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl font-playfair'>Experince Luxuary Like Never Before</h1>
                
                <div className='flex gap-5 mt-2 items-center mb-6'>
                    {room.amenities.map((item,index)=>(
                        <div key={index} className='flex gap-2 items-center bg-gray-100 rounded-lg px-3 py-2'>
                            <img src={facilityIcons[item]} alt="facility-icon" className='h-5 w-5'/><span className='text-xs'>{item}</span>
                        </div>
                    ))}
                </div>

            </div>

            {/* Room Price */}
             <p className='font-medium text-2xl'>
                ${room.pricePerNight} /Night
            </p>
        </div>

        {/* CheckIn CheckOut form */}
        <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='flex flex-col'>
                    <label htmlFor='checkInDate' className='font-medium'>Check-In</label>
                    <input type='date' id='checkInDate' placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>
                <div className='w-px h-18 bg-gray-300/70 max-md:hidden'/>
                 <div className='flex flex-col'>
                    <label htmlFor='checkOutDate' className='font-medium'>Check-Out</label>
                    <input type='date' id='checkOutDate' placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>
                <div className='w-px h-18 bg-gray-300/70 max-md:hidden'/>
                 <div className='flex flex-col'>
                    <label htmlFor='Guests' className='font-medium'>Guests</label>
                    <input type='number' id='Guests' placeholder='0' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                </div>
            </div>

            <button type='submit' className='bg-primary cursor-pointer rounded-md text-white text-base max-md:w-full max-md:mt-6 md:px-6 py-3 md:py-4 hover:bg-primary-dull active:scale-95 transition-all'>
                    Check Avalibility
            </button>
        </form>

        {/* Common Facility */}
        <div className='mt-25 space-y-5'>
            {roomCommonData.map((item,index)=>(
                <div key={index}>
                    <div className='flex flex-row'>
                    <img src={item.icon} alt='commonfacility-icon'/>
                    <span className='text-base'>{item.title}</span>
                    </div>
                    <p className='text-gray-500'>{item.description}</p>
                </div>
            ))}
        </div>

        <div className='border-y border-gray-300 max-w-3xl my-15 py-15 text-gray-500'>
            <p>
                Guest will be allocated on the ground floor according to avalibility. You get a comfortable Two bedroom apartment has a true city feeling. The price quoted is for two guest, at the guest slot please mark the number of guests to get the exact price for groups. The Guests will be allocated ground floor according to availability. You get the comfortable two bedroom apartment that has a true city feeling.
            </p>
        </div>

        {/* Hosted by */}
        <div>
            <div className='flex items-start gap-4'>
                {/* <img src={room.hotel.owner.image} alt='owner-icon'/> */}
                <div className='flex flex-col'>
                    <span className='text-lg md:text-xl'>Hosted by {room.hotel.owner.username}</span>
                    <p className='ml-2'>200+ Review</p>
                </div>
            </div>
            <button className='bg-primary text-white cursor-pointer px-6 py-2.5 mt-4 rounded hover:bg-primary-dull transition-all'>Contact Now</button>
        </div>
    </div>  
  )
  
}

export default RoomDetails