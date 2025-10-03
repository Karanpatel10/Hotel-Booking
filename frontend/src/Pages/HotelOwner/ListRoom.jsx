import React, { useState } from 'react'
import { roomsDummyData } from '../../assets/assets'
import Title from '../../Components/Title';

const ListRoom = () => {

  const [rooms,setRooms]=useState(roomsDummyData);

  return (
    <div>
      <Title align='left' font='outfit' title='Room Listings' subtitle='View, edit or manage all listed rooms. Keep the information up-to-date to provide the best experience for users'/>
      <p className='mt-8 text-gray-500'>All rooms</p>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-8'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>Room Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Facility</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Price /Night</th>
              <th className='py-3 px-4 text-gray-800 font-medium'>Action</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
              {
                rooms.map((item,index)=>(
                  <tr key={index}>
                    <td className='py-3 px-4 text-gray-700 border-t font-medium border-gray-300'>{item.roomType}</td>
                    <td className='py-3 px-4 text-gray-700 border-t font-medium max-sm:hidden border-gray-300'>{item.amenities.join(',')}</td>
                    <td className='py-3 px-4 text-gray-700 border-t font-medium border-gray-300'>{item.pricePerNight}</td>
                    <td className='py-3 px-4 border-t border-gray-300 text-sm text-red-500 text-center'>
                      <label className='relative inline-flex items-center cursor-pointer text-gray-900 gap-3'>
                        <input type='checkbox' checked={item.isAvailable} className='sr-only peer'/>
                        <div className='w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200'/>
                        <span className='dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition-tranform duration-200 ease-in-out peer-checked:translate-x-5:'/>
                      </label>
                    </td>
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom