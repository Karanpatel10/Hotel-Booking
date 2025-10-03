import React, { useState } from 'react'
import Title from '../../Components/Title.jsx'
import { assets, dashboardDummyData } from '../../assets/assets'

const Dashboard = () => {

  const [dashboard,setDashboard]=useState(dashboardDummyData)
   
  return (
    <div>
      <Title title='Dashboard' align='left' font='outfit' subtitle='Monitor your room listings, track bookings and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations'>
      </Title>

      <div className='flex gap-4 my-8'>

        {/* Total Bookings */}
        <div className='flex p-4  pr-8 border border-primary/10 bg-primary/3'>
          <img src={assets.totalBookingIcon} alt='booking-icon' className='h-10 max-sm:hidden'/>
          <div className='font-medium flex flex-col sm:ml-4 items-center'>
            <p className='text-blue-500 text-lg'>Total Booking</p>
            <p className='text-base text-neutral-400'>{dashboard.totalBookings}</p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className='flex p-4  pr-8 border border-primary/10 bg-primary/3'>
          <img src={assets.totalRevenueIcon} alt='booking-icon' className='h-10 max-sm:hidden'/>
          <div className='font-medium flex flex-col sm:ml-4 items-center'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-base text-neutral-400'>${dashboard.totalRevenue}</p>
          </div>
        </div>

      </div>

     {/* Recent Booking */}
        <h2 className='font-medium mb-5 text-xl text-blue-950/70'>Recent Booking</h2>

        <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
          <table className='w-full'>
            <thead className='bg-gray-50'>
              <tr>
                <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
                <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
                <th className='py-3 px-4 text-gray-800 font-medium'>Total Amount</th>
                <th className='py-3 px-4 text-gray-800 font-medium'>Payment Status</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
                {dashboard.bookings.map((item)=>(
                  <tr key={item._id}>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user.username}</td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.room.roomType}</td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.totalPrice}</td>
                    <td className='py-3 px-4 text-gray-700 border-t border-gray-300'><button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid?'bg-green-200 text-green-600':'bg-red-200 text-red-600'}`}>{item.isPaid?"Completed":"Pending"}</button></td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

    </div>
  )
}

export default Dashboard