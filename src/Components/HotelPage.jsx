import React, { useEffect, useState } from 'react';
import { CiHeart } from 'react-icons/ci';
import { IoShareOutline } from 'react-icons/io5';
import { useParams } from 'react-router-dom';
import BookingForm from './BookingForm';

const HotelPage = ({ hotelData }) => {
  const { id } = useParams();
  const [hotelDetails, setHotelDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const NumericId= Number(id)
      const filteredHotel = hotelData.find((hotelInfo) => hotelInfo.id === NumericId);
      
      if (filteredHotel) {
        setHotelDetails(filteredHotel);
      } else {
        setError('Hotel not found');
      }
    } catch (err) {
      setError('An error occurred while fetching the hotel details');
    } finally {
      setLoading(false);
    }
  }, [id, hotelData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    hotelDetails && (
      <div className="max-w-5xl mx-auto p-8">
        {/* Header Section */}
        <div className='flex-col'>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">{hotelDetails.hotelName}</h1>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition duration-300 ease-in-out"
            >
              <IoShareOutline className="text-2xl" />
              <span className="underline">Share</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition duration-300 ease-in-out"
            >
              <CiHeart className="text-2xl" />
              <span className="underline">Save</span>
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="rounded-lg overflow-hidden shadow-lg mb-8">
          <img src={hotelDetails.img} alt={hotelDetails.title} className="w-full h-80 object-cover" />
        </div>

        {/* Description Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <p className="text-lg text-gray-700 leading-relaxed">{hotelDetails.description}</p>
          <div className="mt-4">
            <p className="text-sm text-gray-500">{hotelDetails.distance}</p>
            <p className="mt-2 text-xl font-semibold text-gray-900">$ {hotelDetails.price}</p>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Amenities</h2>
          <ul className="list-disc pl-6 space-y-2">
            {hotelDetails.amenities.map((amenity, index) => (
              <li key={index} className="text-lg text-gray-600">{amenity}</li>
            ))}
          </ul>
        </div>

        {/* Reviews Section */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Reviews</h2>
          <p className="text-lg font-bold mb-4 text-gray-900">
            Overall Rating: {hotelDetails.rating} / 5 ({hotelDetails.reviews} reviews)
          </p>
          {hotelDetails.reviews_data.map((review, index) => (
            <div key={index} className="mb-6 pb-4 border-b border-gray-200">
              <p className="text-lg font-semibold text-gray-800">{review.user}</p>
              <p className="text-sm text-gray-500">{review.date}</p>
              <p className="mt-2 text-gray-700">{review.comment}</p>
              <p className="mt-1 text-sm text-yellow-600">Rating: {review.rating}</p>
            </div>
          ))}
        </div>
        </div>
        <div className='flex items-center justify-center'>
        <BookingForm/>

        </div>
        
        
      </div>
    )
  );
};

export default HotelPage;
