import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({img,hotelName,distance,date,price,id}) => {
  return (
    
    <Link to={`/hotel/${id}`}>
    <div className='flex flex-col gap-y-2 p-7 shadow-lg  rounded-lg border boreder-2 border-blue-500 w-80 cursor-pointer hover:shadow-2xl'>
        <img src={img} alt={hotelName} className='w-64 h-40 rounded-lg  mb-4' />

        <div className='flex flex-col  text-xl   '>
        <p >{hotelName}</p>
        <p className='text-gray-400'>{distance}</p>
        <p className='text-gray-400'>{date}</p>
        <p>$ <span>{price}</span> </p>
        </div>



    </div>
    </Link>
  )
}

export default Card