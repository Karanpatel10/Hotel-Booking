import React, { useState } from 'react'
import Title from '../../Components/Title'
import { assets } from '../../assets/assets'

const AddRoom = () => {

  const[images,setImages]=useState({
    1:null,
    2:null,
    3:null,
    4:null,
  })

  const [inputs,setInputs]=useState({
    roomType:'',
    pricePerNight:'',
    amenities:{
      'Free Wifi':false,
      'Free Breakfast':false ,
      'Room Service':false,
      'Mountain View':false,
      'Pool Access':false,
       }
  })

  return (
    <>
    <form className='pb-15'>
      <Title align='left' font='outfit' title='Add Room' subtitle='Fill in the details carefully and accurate room details, pricing, and amenities, to enhance the user booking experience'/>
      {/* Upload area For Images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImages${key}`} key={key}>
            <img className='cursor-pointer opacity-80 max-h-13' alt='' src={images[key]?URL.createObjectURL(images[key]):assets.uploadArea}/>
            <input type='file' accept='image/*' id={`roomImages${key}`} hidden onChange={e=>setImages({...images,[key]:e.target.files[0]})}/>
          </label>
        ))}
      </div>
      {/* Room Type */}
      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
          <div className='flex-1 max-w-48'>
              <p className='text-gray-800 mt-4'>Room Type</p>
              <select value={inputs.value} onChange={e=>setInputs({...inputs,roomType:e.target.value})} className='border opacity-70 border-gray-300 rounded p-2 w-full mt-2'>
                <option value=''>Select Room Type</option>
                <option value='Single Room'>Single Room</option>
                <option value='Double Room'>Double Room</option>
                <option value='Luxary Room'>Luxary Room</option>
                <option value='Family Suite'>Family Suite</option>
              </select>
        </div>
      </div>
      {/* Price Per Night */}
      <div>
        <p className='mt-4 text-gray-800'>
          Price<span>/night</span>
        </p>
        <input type='number' placeholder='0' className='border border-gray-300 rounded mt-1 p-2 w-24' value={inputs.pricePerNight} onChange={e=>setInputs({...inputs,pricePerNight:e.target.value})}/>
      </div>

      {/* Amenities */}
      <div>
        <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
          {Object.keys(inputs.amenities).map((amenity,index) => (
            <div key={index} className='flex gap-4'>
              <input type='checkbox' id={`amenities${index+1}`} checked={inputs.amenities[amenity]} onChange={()=>setInputs({...inputs,amenities:{...inputs.amenities,[amenity]:!inputs.amenities[amenity]}})}/>
              <label htmlFor={`amenities${index+1}`}>{amenity}</label>
            </div>
          ))}
        </div>
      </div>
      <button className='rounded bg-primary text-white px-8 py-2 cursor-pointer mt-8'>Add Room</button>
    </form>
    </>
  )
}

export default AddRoom