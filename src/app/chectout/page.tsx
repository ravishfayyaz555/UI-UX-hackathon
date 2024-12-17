
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Checkout() {
 return (
 <div className="max-w-screen-2xl container mx-auto pb-8 px-4">

 {/* Banner Section */}
 <div className="relative">
 <Image
 src="/image/shop.jpeg"
 alt="Checkout Banner"
 height={400}
 width={1600}
 className="w-full h-[250px] object-cover"
 />
 <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white bg-black bg-opacity-50">
 Checkout Page
 </h1>
 </div>

 {/* Placeholder Content */}
 <div className="flex flex-col items-center justify-center mt-10 text-center">
 <h2 className="text-xl font-semibold">Billing Information</h2>
 <p className="mt-4 text-gray-500">
 This section is reserved for billing details. You can customize it as needed.
 </p>

 <div className="w-full max-w-md mt-6">
 <div className="mb-4">
 <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
 Name
 </label>
 <input
 type="text"
 id="name"
 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
 placeholder="Enter your name"
 />
 </div>
 <div className="mb-4">
 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
 Email
 </label>
 <input
 type="email"
 id="email"
 className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
 placeholder="Enter your email"
 />
 </div>
 </div>
 </div>

 <div className="flex flex-col items-center justify-center mt-10 text-center">
 <h2 className="text-xl font-semibold">Order Summary</h2>
 <p className="mt-4 text-gray-500">
 This section is reserved for order details. Customize it with your product data.
 </p>

 <div className="w-full max-w-md mt-6 border-t pt-4">
 <p className="flex justify-between">
 <span>Product Name</span>
 <span>Price</span>
 </p>
 <p className="flex justify-between mt-2 text-gray-600">
 <span>Example Product</span>
 <span>$100.00</span>
 </p>
 </div>

 <button className="mt-6 px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
 Proceed to Payment
 </button>
 </div>
 </div>
 );
}

export default Checkout;