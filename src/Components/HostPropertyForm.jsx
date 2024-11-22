import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const HostPropertyForm = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const[showModal,setShowModal]=useState(false);
  const[hostData,SetHostData]=useState([])

  const onSubmit = (data) => {

    SetHostData(data);
    
    setShowModal(true)
    
    // Handle form submission, e.g., send data to a server
    
  };
  const closemodal=()=>{

    setShowModal(false);
    reset();
  }

  return (
    <div className="flex flex-col md:flex-row
     justify-around mt-8 mb-8 ">
      <div className=' md:w-1/3'>
      <h1 className="text-2xl font-bold mb-4">Host Your Property</h1>
      <p className="mb-4 text-lg">
        Welcome to the property hosting page, where you can easily list your property and make it available for guests to book. Whether you have a cozy apartment, a charming house, or a unique vacation rental, we’re here to help you showcase your property to potential guests. Our user-friendly form will guide you through every step of the listing process, ensuring that you provide all the necessary information to attract the right guests and maximize your booking potential.
      </p>
      <p className="mb-4 text-lg">
        Hosting your property offers a fantastic opportunity to earn extra income while sharing your unique space with travelers from around the world. By listing your property, you can tap into a global market of guests seeking comfortable, memorable stays. Our platform connects hosts with a diverse audience, allowing you to highlight the features and amenities that make your property stand out.
      </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className=" md:w-1/2 border-2 p-7 rounded-lg">
        
        {/* Basic Property Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Property Name</label>
          <input
            type="text"
            {...register('propertyName', { required: 'Property name is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.propertyName && <p className="text-red-500 text-xs mt-1">{errors.propertyName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Property Type</label>
          <input
            type="text"
            {...register('propertyType', { required: 'Property type is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.propertyType && <p className="text-red-500 text-xs mt-1">{errors.propertyType.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Location</label>
          <input
            type="text"
            {...register('location', { required: 'Location is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows="4"
          />
          {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
        </div>

        {/* Property Details */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Bedrooms</label>
          <input
            type="number"
            {...register('bedrooms', { required: 'Number of bedrooms is required', min: 1 })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.bedrooms && <p className="text-red-500 text-xs mt-1">{errors.bedrooms.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Number of Bathrooms</label>
          <input
            type="number"
            {...register('bathrooms', { required: 'Number of bathrooms is required', min: 1 })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.bathrooms && <p className="text-red-500 text-xs mt-1">{errors.bathrooms.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Maximum Guests</label>
          <input
            type="number"
            {...register('maxGuests', { required: 'Maximum guests is required', min: 1 })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.maxGuests && <p className="text-red-500 text-xs mt-1">{errors.maxGuests.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Square Footage</label>
          <input
            type="number"
            {...register('squareFootage')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Check-in Time</label>
          <input
            type="time"
            {...register('checkInTime')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Check-out Time</label>
          <input
            type="time"
            {...register('checkOutTime')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Pricing */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Nightly Rate ($)</label>
          <input
            type="number"
            {...register('nightlyRate', { required: 'Nightly rate is required', min: 0 })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.nightlyRate && <p className="text-red-500 text-xs mt-1">{errors.nightlyRate.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cleaning Fee ($)</label>
          <input
            type="number"
            {...register('cleaningFee', { required: 'Cleaning fee is required', min: 0 })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.cleaningFee && <p className="text-red-500 text-xs mt-1">{errors.cleaningFee.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Security Deposit ($)</label>
          <input
            type="number"
            {...register('securityDeposit', { required: 'Security deposit is required', min: 0 })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.securityDeposit && <p className="text-red-500 text-xs mt-1">{errors.securityDeposit.message}</p>}
        </div>

        {/* Host Information */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Host Name</label>
          <input
            type="text"
            {...register('hostName', { required: 'Host name is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.hostName && <p className="text-red-500 text-xs mt-1">{errors.hostName.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            {...register('contactEmail', { required: 'Contact email is required' })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
          {errors.contactEmail && <p className="text-red-500 text-xs mt-1">{errors.contactEmail.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            {...register('phoneNumber')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Submit Listing
        </button>
      </form>
      {
  showModal && (
    <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center'>
      <div className='p-6 bg-white rounded-lg shadow-lg w-full max-w-md mx-4'>
        <h2 className='text-xl font-semibold mb-4 text-gray-800'>Thank You!</h2>
        <p className='mb-6 text-gray-700'>
          Thank you, {hostData?.hostName}, for choosing to host with us. We’re excited to help you share your property with travelers and provide a memorable experience for guests. If you have any questions or need assistance, don’t hesitate to reach out to our support team.
        </p>
        <button
          onClick={closemodal}
          className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Close
        </button>
      </div>
    </div>
  )
}

    </div>
  );
};

export default HostPropertyForm;
