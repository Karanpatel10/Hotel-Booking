import React from 'react'
import O_Navbar from '../../Components/HotelOwner/O_Navbar'
import O_Sidebar from '../../Components/HotelOwner/O_Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
        <O_Navbar/>
        <div className='flex flex-1'>
            <O_Sidebar/>
            <div className='flex-1 h-full p-4 pt-10 md:px-10'>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Layout