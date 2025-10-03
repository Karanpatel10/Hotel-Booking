import React from 'react'
import { assets } from '../../assets/assets'
import { data, NavLink } from 'react-router-dom'

const O_Sidebar = () => {

    const sidebarLinks=[
        {name:"Dashboard",path:"/owner",icon:assets.dashboardIcon},
        {name:"Add Room",path:"/owner/add_room",icon:assets.addIcon},
        {name:"List Room",path:"/owner/list_room",icon:assets.dashboardIcon},

    ]

  return (
    <div className='flex flex-col transition-all duration-300 w-16 border-r min-h-full border-gray-300 md:w-64'>
        {
            sidebarLinks.map((data,index)=>(
               <NavLink key={index} to={data.path} end='/owner' className={({isActive})=>`flex items-center py-3 px-4 md:px-8 gap-3 ${isActive?"border-r-4 md:border-r-[6px] bg-blue-600/10 text-blue-600":"hover:bg-gray-100/90 border-white text-gray-700"}`}><img src={data.icon} alt={data.name} className='h-min-6 min-w-6'/>
               <p className='md:block hidden text-center'>{data.name}</p>
               </NavLink>

            ))
        }
    </div>
  )
}

export default O_Sidebar