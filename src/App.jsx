
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Components/Footer"
import HotelPage from "./Components/HotelPage"
import HotelSection from "./Components/HotelSection"
import Navbar from "./Components/Navbar"
import hoteldata from "./data.json"
import { useEffect, useState } from "react"
import About from "./Components/About"
import HostPropertyForm from "./Components/HostPropertyForm"



function App() {
  const[data,setData]=useState([]);
  useEffect(()=>{
    setData(hoteldata);
  },[])

  return (
    <BrowserRouter>
      <Navbar />
       <Routes>
          <Route path="/" element={<HotelSection hoteldata={hoteldata}/>}/>
          <Route path="hotel/:id" element={<HotelPage hotelData={hoteldata}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/traveltribehost" element={<HostPropertyForm/>}/>

      </Routes> 
      
       <Footer /> 

    </BrowserRouter>

    
    
  )
}

export default App
