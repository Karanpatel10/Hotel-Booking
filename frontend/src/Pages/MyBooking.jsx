import React, { useState } from 'react'
import Title from '../Components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBooking = () => {
    
    const[booking,setBooking]=useState(userBookingsDummyData);

  return (
    <div className='py-28 md:pb-35 md:mt-15 px-4 md:px-16 lg:px-24 xl:px-32'>
        <Title title='My Bookings' subtitle='Easily manage your past, current, and upcoming hotel reservation in one place. Plan your trips seamlessly with just a few clicks' align='left'/>

        <div className='max-w-6xl mt-8 w-full text-gray-800'/>

        <div className=' hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
            <div className='w-1/3'>Hotels</div>
            <div className='w-1/3'>Date & Timings</div>
            <div className='w-1/3'>Payment</div>
        </div>

        {
            booking.map((item)=>(
               <div key={item._id} className=' hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3 items-center'>
                    <div className='flex flex-row gap-5'>
                        <img src={item.room.images[0]} alt='hotel-icon' className='min-md:w-44 rounded shadow object-cover'/>
                        <div className='flex flex-col gap-2'>
                            <p>{item.hotel.name} ({item.room.roomType})</p>
                            <p className='flex gap-2 text-sm text-gray-500 items-center'><img src={assets.locationIcon} alt='location-icon'/>{item.hotel.address}</p>
                             <p className='flex gap-2 text-sm text-gray-500 items-center'><img src={assets.guestsIcon} alt='guest-icon'/>{item.guests}</p>
                             <p className='text-sm text-gray-500 items-center px-3'>Total:${item.totalPrice}</p>
                        </div>
                    </div>

                    <div className='flex flex-row gap-10'>
                         <div className='flex flex-col'>
                            <p>Check-In</p><div className='text-sm text-gray-500 items-center flex'>{new Date(item.checkInDate).toDateString()}</div>
                        </div>
                        <div>
                            <p>Check_Out</p><div className='text-sm text-gray-500 items-center flex'>{new Date(item.checkOutDate).toDateString()}</div>
                        </div>
                    </div>

                    <div className='text-sm text-gray-500 flex flex-col gap-3'>
                        <div className='flex  flex-row gap-2'>
                            <div className={`h-4 w-4 rounded-full ${item.isPaid?'bg-green-500':'bg-red-500'}`}></div>
                             <div className={`${item.isPaid?'text-green-500':'text-red-500'} text-sm`}>{item.isPaid?"Paid":"UnPaid"}</div>
                        </div>
                        {
                            !item.isPaid &&(
                                <div>
                                    <button className='border border-gray-400 px-4 py-1.5 rounded-full cursor-pointer transition-all text-sm hover:bg-gray-50'>Pay Now</button>
                                 </div>
                            )
                        }
                    </div>
                </div>
            ))
        }
    </div>

    
  )
}

export default MyBooking