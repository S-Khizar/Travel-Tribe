import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const BookingForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();
    const [modal, setModal] = useState(false);
    const [formData, setFormData] = useState(null);
    const paymentMethod = watch('paymentMethod');

    const onSubmit = (data) => {
        setFormData(data);
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
        reset();
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md mt-6">
            <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    {...register('name', { required: 'Full name is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                <input
                    type="email"
                    placeholder="Email Address"
                    {...register('email', { required: 'Email is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}

                <div className="flex justify-between items-center">
                    <label htmlFor="checkin">Check In:</label>
                    <input
                        type="date"
                        id="checkin"
                        {...register('checkInDate', { required: 'Check-in date is required' })}
                        className="w-3/4 px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <label htmlFor="checkout">Check Out:</label>
                    <input
                        type="date"
                        id="checkout"
                        {...register('checkOutDate', { required: 'Check-out date is required' })}
                        className="w-3/4 px-3 py-2 border border-gray-300 rounded-md"
                    />
                </div>
                {errors.checkInDate && <p className="text-red-500 text-sm">{errors.checkInDate.message}</p>}
                {errors.checkOutDate && <p className="text-red-500 text-sm">{errors.checkOutDate.message}</p>}

                <input
                    type="number"
                    placeholder="Number of Guests"
                    {...register('guests', { required: 'Number of guests is required', min: 1 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
                {errors.guests && <p className="text-red-500 text-sm">{errors.guests.message}</p>}

                <textarea
                    placeholder="Special Requests"
                    {...register('specialRequests')}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />

                <select
                    {...register('paymentMethod', { required: 'Payment method is required' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                    <option value="">Select Payment Method</option>
                    <option value="credit">Credit Card</option>
                    <option value="debit">Debit Card</option>
                    <option value="paypal">PayPal</option>
                </select>
                {errors.paymentMethod && (
                    <p className="text-red-500 text-sm">{errors.paymentMethod.message}</p>
                )}

                {(paymentMethod === 'credit' || paymentMethod === 'debit') && (
                    <>
                        <input
                            type="text"
                            placeholder="Card Number"
                            {...register('cardNumber', { required: 'Card number is required' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.cardNumber && (
                            <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>
                        )}

                        <div className="flex space-x-4">
                            <input
                                type="text"
                                placeholder="MM/YY"
                                {...register('cardExpiry', { required: 'Expiry date is required' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                            <input
                                type="text"
                                placeholder="CVV"
                                {...register('cardCVV', { required: 'CVV is required' })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                            />
                        </div>
                        {errors.cardExpiry && (
                            <p className="text-red-500 text-sm">{errors.cardExpiry.message}</p>
                        )}
                        {errors.cardCVV && <p className="text-red-500 text-sm">{errors.cardCVV.message}</p>}

                        <input
                            type="text"
                            placeholder="Billing Address"
                            {...register('billingAddress', { required: 'Billing address is required' })}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                        {errors.billingAddress && (
                            <p className="text-red-500 text-sm">{errors.billingAddress.message}</p>
                        )}
                    </>
                )}

                <div className="flex items-center">
                    <input
                        type="checkbox"
                        id="agreeToTerms"
                        {...register('agreeToTerms', { required: 'You must agree to terms' })}
                        className="mr-2"
                    />
                    <label htmlFor="agreeToTerms" className="text-sm">
                        I agree to the terms and conditions
                    </label>
                </div>
                {errors.agreeToTerms && (
                    <p className="text-red-500 text-sm">{errors.agreeToTerms.message}</p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                >
                    Book Now
                </button>
            </form>

            {/* Modal */}
            {modal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
                    <div className="bg-white p-8 rounded-md shadow-lg">
                        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                        <p className="mb-4">
                            <strong>Thank You for Your Booking!</strong>
                        </p>
                        <p className="mb-4">
                            Hi <span className="font-semibold">{formData?.name}</span>,
                        </p>
                        <p className="mb-4">
                            Thank you for choosing us for your stay. Your booking has been successfully submitted, and we look forward to hosting you.
                        </p>
                        <p className="mb-4">
                            <strong>Here are the details of your booking:</strong>
                        </p>
                        <ul className="list-disc ml-6 mb-4">
                            <li><strong>Check-In Date:</strong> {formData?.checkInDate}</li>
                            <li><strong>Check-Out Date:</strong> {formData?.checkOutDate}</li>
                            <li><strong>Number of Guests:</strong> {formData?.guests}</li>
                        </ul>
                        <p className="mb-4">
                            If you have any special requests or need further assistance, feel free to contact us. We’re here to help!
                        </p>
                        <p className="mb-4">
                            We appreciate your business and can’t wait to welcome you.
                        </p>
                        <p className="font-bold">Best regards,</p>
                        <p className="font-bold">Travel Tribe Company</p>
                        <button
                            onClick={closeModal}
                            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default BookingForm;
