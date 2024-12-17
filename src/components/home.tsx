'use client';

import React from 'react';
import { FaClock, FaCalendarAlt } from 'react-icons/fa'; 

const HomeSection: React.FC = () => {
 return (
 <>
 {/* Existing Sections */}
 <section className="flex flex-col-reverse md:flex-row items-center py-16 bg-amber-100">
 <div className="text-center md:text-left md:w-1/2 px-6 md:px-12">
 <h1 className="text-7xl font-semibold mb-4 text-black">Rocket Single <br />Seater</h1>
 <button className="text-black underline text-2xl">
 Shop Now
 </button>
 </div>
 <div className="md:w-1/2 w-full px-6 md:px-12">
 <img
 src="/images/asgaarsofa.png" //replace actual image
 alt="Sofa"
 className="w-full h-full object-cover"
 />
 </div>
 </section>
 <section className="flex flex-col md:flex-row items-center justify-between py-16 gap-8 bg-gray-100">
 <div className="flex flex-col items-center md:items-start md:w-1/2 px-6">
 <img
 src="/images/singlesofa.jpeg" //replace actual image
 alt="Side Table Left"
 className="w-96 h-full ml-24"
 />
 <h2 className="text-2xl font-semibold mt-4 ml-28">Side Table</h2>
 <a
 href="hashtag#viewMoreLeft"
 className="text-black underline mt-2 text-lg ml-28"
 >
 View More
 </a>
 </div>

 <div className="flex flex-col items-center md:items-start md:w-1/2 px-6">
 <img
 src="/images/table1.jpeg" //replace actual image
 alt="Side Table Right"
 className="w-96 h-full"
 />
 <h2 className="text-2xl font-semibold mt-4 ml-16">Side Table</h2>
 <a
 href="hashtag#viewMoreRight"
 className="text-black underline mt-2 text-lg ml-16"
 >
 View More
 </a>
 </div>
 </section>
 <section className="py-16 bg-white">
 <div className="text-center mb-12">
 <h2 className="text-4xl font-bold text-gray-800">Top Pick for You</h2>
 <p className="text-lg text-gray-600 mt-4">
 Explore our top-rated products, handpicked just for you.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 md:px-12">
 <div className="bg-gray-50 shadow-lg rounded-lg p-4">
 <img
 src="/images/diningtable.jpeg" 
 alt="Product 1"
 className="w-full h-40 object-cover rounded-lg mb-4"
 />
 <h3 className="text-xl font-semibold mb-2">Product Name 1</h3>
 <p className="text-gray-600 mb-4">A brief description of the product.</p>
 <p className="text-xl font-bold text-black">Rs: 25,000</p>
 </div>
 <div className="bg-gray-50 shadow-lg rounded-lg p-4">
 <img
 src="/images/image6.jpeg" 
 alt="Product 2"
 className="w-full h-40 object-cover rounded-lg mb-4"
 />
 <h3 className="text-xl font-semibold mb-2">Product Name 2</h3>
 <p className="text-gray-600 mb-4">A brief description of the product.</p>
 <p className="text-xl font-bold text-black">Rs: 30,000</p>
 </div>
 <div className="bg-gray-50 shadow-lg rounded-lg p-4">
 <img
 src="/images/image7.jpeg" 
 alt="Product 3"
 className="w-full h-40 object-cover rounded-lg mb-4"
 />
 <h3 className="text-xl font-semibold mb-2">Product Name 3</h3>
 <p className="text-gray-600 mb-4">A brief description of the product.</p>
 <p className="text-xl font-bold text-black">Rs: 35,000</p>
 </div>
 <div className="bg-gray-50 shadow-lg rounded-lg p-4">
 <img
 src="/images/image8.jpeg" 
 alt="Product 4"
 className="w-full h-40 object-cover rounded-lg mb-4"
 />
 <h3 className="text-xl font-semibold mb-2">Product Name 4</h3>
 <p className="text-gray-600 mb-4">A brief description of the product.</p>
 <p className="text-xl font-bold text-black">Rs: 40,000</p>
 </div>
 </div>
 </section>
 {/* New Section */}
 <section className="flex flex-col md:flex-row items-center py-16 gap-8 bg-gray-200 px-6 md:px-12">
 {/* Left Side: Image */}
 <div className="md:w-1/2">
 <img
 src="/images/image9.png"
 alt="New Arrival Sofa"
 className="w-full h-full object-cover ml-10"
 />
 </div>

 {/* Right Side: Text and Button */}
 <div className="md:w-1/2 text-center md:text-left ml-16">
 <h4 className="text-2xl text-gray-600 font-medium mb-2">New Arrival</h4>
 <h2 className="text-6xl font-bold text-gray-800 mb-4">Asgarda Sofa</h2>
 <button className="px-6 py-2 border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition">
 Order Now
 </button>
 </div>
 </section>

 {/* Our Blog Section */}
 <section className="py-16 bg-gray-100">
 <div className="text-center mb-12">
 <h2 className="text-4xl font-bold text-gray-800">Our Blog</h2>
 <p className="text-lg text-gray-600 mt-4">
 Stay updated with the latest trends and articles from our team.
 </p>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-12">
 {/* Blog Card 1 */}
 <div className="bg-white shadow-lg rounded-lg p-6">
 <img
 src="/images/image10.jpeg"
 alt="Blog 1"
 className="w-full h-40 object-cover rounded-lg mb-4"
 />
 <p className="text-gray-600 mb-4">
 A brief introduction to the blog content. <a href="#" className="text-blue-500 underline">Read more</a>
 </p>
 <div className="flex items-center text-gray-500 text-sm">
 <FaClock className="mr-2" /> 10 min read
 <FaCalendarAlt className="ml-4 mr-2" /> Jan 10, 2024
 </div>
 </div>
 {/* Blog Card 2 */}
 <div className="bg-white shadow-lg rounded-lg p-6">
 <img
 src="/images/image11.jpeg" // Replace with actual image
 alt="Blog 2"
 className="w-full h-40 object-cover rounded-lg mb-4"
 />
 <p className="text-gray-600 mb-4">
 Another engaging article to dive into. <a href="#" className="text-blue-500 underline">Read more</a>
 </p>
 <div className="flex items-center text-gray-500 text-sm">
 <FaClock className="mr-2" /> 8 min read
 <FaCalendarAlt className="ml-4 mr-2" /> Feb 15, 2024
 </div>
 </div>

 {/* Blog Card 3 */}
 <div className="bg-white shadow-lg rounded-lg p-6">
 <img
 src="/images/image12.jpeg" 
 alt="Blog 3"
 className="w-full h-40 object-cover rounded-lg mb-4"
 />
 <p className="text-gray-600 mb-4">
 Discover insights and more. <a href="#" className="text-blue-500 underline">Read more</a>
 </p>
 <div className="flex items-center text-gray-500 text-sm">
 <FaClock className="mr-2" /> 5 min read
 <FaCalendarAlt className="ml-4 mr-2" /> Mar 20, 2024
 </div>
 </div>
 </div>
 </section>

 {/* New Instagram Section */}
 <section className="py-16 bg-gray-200 bg-cover bg-center" style={{ backgroundImage: "url('/images/backgroundimage.jpeg')" }}> 
 <div className="text-center mb-8">
 <h2 className="text-4xl font-bold text-gray-800">Follow Our Store on Instagram</h2>
 <p className="text-lg text-gray-600 mt-4">
 Stay connected and get a closer look at our latest products and offers.
 </p>
 </div>

 <div className="text-center">
 <button className="px-6 py-3 bg-white border-2 border-black text-black font-semibold hover:bg-black hover:text-white transition">
 Follow Us
 </button>
 </div>
 </section>
 </>
 );
};

export default HomeSection;