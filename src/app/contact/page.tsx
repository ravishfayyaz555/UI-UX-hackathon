'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IoLocationSharp } from 'react-icons/io5'
import { FaPhoneAlt } from 'react-icons/fa'
import { BsFillClockFill } from 'react-icons/bs'

const Contact = () => {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [subject, setSubject] = useState('')
 const [message, setMessage] = useState('')

 const handleFormSubmit = (e: React.FormEvent) => {
 e.preventDefault()
 alert(`Form submitted!\nName: ${name}\nEmail: ${email}\nMessage: ${message}`)
 }

 return (
 <div className="max-w-screen-xl container mx-auto pb-8 px-4">
 <div className="bg-[#faf4f4]"></div>
 
 {/* Banner Section */}
 <div className="relative text-black">
 <Image
 src="/images/shop1.jpeg"
 alt="Contact Banner"
 height={800}
 width={1600}
 className="w-full h-full md:h-[400px] object-cover"
 />
 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold text-white">
 Contact Us
 </h1>
 {/* Breadcrumb Section */}
 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
 <p className="text-white text-xs md:text-xl flex items-center">
 <Link href="/" className="font-bold hover:underline">Home</Link>
 <span className="font-bold mx-2">{'>'}</span>
 <Link href="/contact" className=" hover:underline">Contact</Link>
 </p>
 </div>
 </div>

 {/* Contact Info Section */}
 <section className="mt-16 text-center px-4 md:px-32">
 <h2 className="text-3xl font-bold text-black">Get in Touch with Us</h2>
 <p className="mt-4 text-md text-gray-500">
 for more information about our product & services please feel free to drop to<br/>
 an email our staff always be there to help your out. Do not Hestiate
 </p>
 </section>

 <div className="flex flex-col md:flex-row justify-between mt-12 gap-12 md:gap-16">
 {/* Contact Details */}
 <div className="flex flex-col gap-8">
 <div className="flex items-center space-x-4 my-6">
 <div>
 <span className="flex items-center">
 <IoLocationSharp size={25} className="text-4xl text-black" />
 <h3 className="font-semibold text-xl ml-4">Our Location</h3>
 </span>
 <p className="ml-10 text-gray-600">
 123 Main St, Suite 100, New York, NY 10001, USA
 </p>
 </div>
 </div>
 <div className="flex items-center space-x-4 my-6">
 <div>
 <span className="flex items-center">
 <FaPhoneAlt size={25} className="text-4xl text-black" />
 <h3 className="font-semibold ml-4 text-lg">Phone Numbers</h3>
 </span>
 <p className="ml-10 text-gray-600">Mobile: +1 (555) 123-4567</p>
 <p className="ml-10 text-gray-600">Hotline: +1 (800) 987-6543</p>
 </div>
 </div>
 <div className="flex items-center space-x-4 my-6">
 <div>
 <span className="flex items-center">
 <BsFillClockFill size={25} className="text-4xl text-black" />
 <h3 className="ml-4 font-semibold text-lg">Working Time</h3>
 </span>
 <p className="ml-10 text-gray-600">Mon - Fri: 9:00 AM - 6:00 PM</p>
 <p className="ml-10 text-gray-600">Sat - Sun: Closed</p>
 </div>
 </div>
 </div>

 {/* Contact Form Section */}
 <div className="mt-16 bg-white rounded-lg p-8 md:w-1/2 shadow-lg">
 <form onSubmit={handleFormSubmit} className="space-y-6">
 <div>
 <label htmlFor="name" className="block text-sm font-bold text-black">Your Name</label>
 <input
 type="text"
 id="name"
 value={name}
 onChange={(e) => setName(e.target.value)}
 placeholder="Your Name"
 className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 <div>
 <label htmlFor="email" className="block text-sm font-bold text-black">Email Address</label>
 <input
 type="email"
 id="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 placeholder="you@example.com"
 className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 <div>
 <label htmlFor="subject" className="block text-sm font-bold text-black">Subject</label>
 <input
 type="text"
 id="subject"
 value={subject}
 onChange={(e) => setSubject(e.target.value)}
 placeholder="Subject"
 className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
 />
 </div>
 <div>
 <label htmlFor="message" className="block text-sm font-bold text-black">Message</label>
 <textarea
 id="message"
 value={message}
 onChange={(e) => setMessage(e.target.value)}
 placeholder="Your Message"
 rows={4}
 className="w-full px-6 py-3 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
 ></textarea>
 </div>
 <button
 type="submit"
 className="py-3 px-10 border border-black rounded-lg bg-white text-black hover:bg-black hover:text-white"
 style={{ marginLeft: '0', width: 'auto' }}
 >
 Submit
 </button>
 </form>
 </div>
 </div>

 {/* Features Section */}
 <div className="features-section p-11 mt-16">
 <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
 <div>
 <h3 className="text-2xl font-bold mb-2">Free Delivery</h3>
 <p className="text-gray-600">Enjoy free delivery on all orders above Rs: 5,000.</p>
 </div>
 <div>
 <h3 className="text-2xl font-bold mb-2">90 Days Return</h3>
 <p className="text-gray-600">Not satisfied? Return within 90 days for a full refund.</p>
 </div>
 <div>
 <h3 className="text-2xl font-bold mb-2">Secure Payment</h3>
 <p className="text-gray-600">Your payments are safe with industry-standard encryption.</p>
 </div>
 </div>
 </div>
 </div>
 )
}

export default Contact

