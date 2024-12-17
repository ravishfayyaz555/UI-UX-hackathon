'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

function MyAccount() {
 const [loginData, setLoginData] = useState({
 username: '',
 password: '',
 rememberMe: false,
 })

 const [registerData, setRegisterData] = useState({
 email: '',
 })

 const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 const { name, value, type, checked } = e.target
 setLoginData((prevData) => ({
 ...prevData,
 [name]: type === 'checkbox' ? checked : value,
 }))
 }

 const handleRegisterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 const { name, value } = e.target
 setRegisterData((prevData) => ({
 ...prevData,
 [name]: value,
 }))
 }

 const handleLoginSubmit = (e: React.FormEvent) => {
 e.preventDefault()
 alert(`Login data submitted!\nUsername: ${loginData.username}\nPassword: ${loginData.password}`)
 }

 const handleRegisterSubmit = (e: React.FormEvent) => {
 e.preventDefault()
 alert(`Registration submitted!\nEmail: ${registerData.email}`)
 }

 return (
 <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
 {/* Banner Section */}
 <div className="relative text-black">
 <Image
 src="/image/shop.jpeg" // Replace with your image path
 alt="Shop Banner"
 height={400}
 width={1600}
 className="w-full h-[300px] md:h-[400px] object-cover"
 />
 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-semibold text-white">
 My Account
 </h1>
 <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2">
 <p className="text-white text-sm md:text-lg flex items-center">
 <Link href="/" className="font-bold hover:underline">Home</Link>
 <span className="font-bold mx-2">{'>'}</span>
 <Link href="/myaccount" className="hover:underline">My Account</Link>
 </p>
 </div>
 </div>

 {/* Content Section */}
 <div className="mt-12 grid gap-8 mx-4 lg:mx-32 lg:grid-cols-2">
 {/* Login Section */}
 <div className="p-6 rounded bg-white shadow-lg">
 <h2 className="text-2xl md:text-3xl font-bold mb-6">Log In</h2>
 <form onSubmit={handleLoginSubmit} className="flex flex-col space-y-6">
 <div>
 <label className="text-gray-700 block mb-2" htmlFor="username">Username or Email Address</label>
 <input
 type="text"
 id="username"
 name="username"
 value={loginData.username}
 onChange={handleLoginChange}
 className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
 required
 />
 </div>
 <div>
 <label className="text-gray-700 block mb-2" htmlFor="password">Password</label>
 <input
 type="password"
 id="password"
 name="password"
 value={loginData.password}
 onChange={handleLoginChange}
 className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
 required
 />
 </div>
 <div className="flex items-center">
 <input
 type="checkbox"
 id="remember"
 name="rememberMe"
 checked={loginData.rememberMe}
 onChange={handleLoginChange}
 className="mr-2 h-4 w-4 text-gray-700 border-gray-300 rounded focus:ring-2 focus:ring-gray-500"
 />
 <label htmlFor="remember" className="text-gray-800">Remember me</label>
 </div>
 <div className="flex justify-between items-center space-x-4 mt-4">
 <button
 type="submit"
 className="px-10 py-3 border border-black rounded-xl text-black hover:bg-gray-800 hover:text-white"
 >
 Log In
 </button>
 <p className="text-sm text-gray-500 cursor-pointer hover:underline">
 Forgot Password?
 </p>
 </div>
 </form>
 </div>

 {/* Register Section */}
 <div className="p-6 rounded bg-white shadow-lg">
 <h2 className="text-2xl md:text-3xl font-bold mb-6">Register</h2>
 <form onSubmit={handleRegisterSubmit} className="flex flex-col space-y-6">
 <div>
 <label className="text-gray-700 block mb-2" htmlFor="register-email">Email Address</label>
 <input
 type="email"
 id="register-email"
 name="email"
 value={registerData.email}
 onChange={handleRegisterChange}
 className="w-full p-3 border border-gray-400 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
 required
 />
 </div>
 <p className="text-gray-500 text-sm mt-2">
 A link to set a new password will be sent to your email address.
 </p>
 <p className="text-gray-500 text-sm mt-4">
 Your personal data will be used to support your experience throughout this
 website, manage access to your account, and for other purposes described in our <span className="font-bold text-gray-700">privacy policy</span>.
 </p>
 <button type="submit" className="px-2 py-3 w-full rounded-lg bg-gray-700 text-white hover:bg-gray-800">
 Register
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

export default MyAccount