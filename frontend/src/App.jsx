import './App.css'
import Header from './Components/Header'
import {Route, Routes, useLocation} from 'react-router-dom'
import HeroSection from './Components/HeroSection';

import Footer from './Components/Footer';
import Hotels from './Pages/Hotels';
import RoomDetails from './Pages/RoomDetails';
import MyBooking from './Pages/MyBooking';
import HotelReg from './Components/HotelReg';
import Layout from './Pages/HotelOwner/Layout';
import Dashboard from './Pages/HotelOwner/Dashboard';
import AddRoom from './Pages/HotelOwner/AddRoom';
import ListRoom from './Pages/HotelOwner/ListRoom';

function App() {
  const isOwnerPath=useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Header/>}
      {/* {false && <HotelReg/>} */}
      <div>
        <Routes>
          <Route path='/' element={<HeroSection/>}/>
          <Route path='/hotel_rooms' element={<Hotels/>}/>
          <Route path='/hotel_rooms/:id' element={<RoomDetails/>}/>
          <Route path='/my_booking' element={<MyBooking/>}/>
          <Route path='/owner' element={<Layout/>}>
            <Route index  element={<Dashboard/>}/>
            <Route path='add_room' element={<AddRoom/>}/>
            <Route path='list_room' element={<ListRoom/>}/>
            <Route/>
          </Route>
      </Routes>
      </div>

      <Footer/>
    </div>
  )
}

export default App
