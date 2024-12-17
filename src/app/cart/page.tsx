'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiDeleteBin6Line } from 'react-icons/ri';

interface CartItem {
 id: number;
 name: string;
 price: number;
 quantity: number;
 imageSrc: string;
}

const initialCartItems: CartItem[] = [
 {
 id: 1,
 name: 'Asgaard Sofa',
 price: 250000,
 quantity: 1,
 imageSrc: '/shop14.jpeg',
 },
];

const ViewCart: React.FC = () => {
 const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

 const handleQuantityChange = (id: number, newQuantity: number) => {
 if (newQuantity < 1) return;
 setCartItems(prevItems =>
 prevItems.map(item =>
 item.id === id ? { ...item, quantity: newQuantity } : item
 )
 );
 };

 const handleRemoveItem = (id: number) => {
 setCartItems(prevItems => prevItems.filter(item => item.id !== id));
 };

 const calculateSubtotal = () => {
 return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
 };

 return (
 <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
 {/* Banner Section */}
 <div className="relative text-black">
 <Image
 src="/images/shop1.jpeg"
 alt="Shop Banner"
 height={400}
 width={1600}
 className="w-full h-[200px] md:h-auto object-cover"
 />
 <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl md:text-5xl font-semibold">
 Cart
 </h1>
 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-14">
 <p className="text-gray-700 text-xs md:text-xl flex items-center">
 <Link href="/" className="font-bold hover:underline">Home</Link>
 <span className="font-bold mx-2">{'>'}</span>
 <Link href="/shop" className="hover:underline">Cart</Link>
 </p>
 </div>
 </div>

 {/* Cart Table Section */}
 <div className="mt-8 flex flex-col lg:flex-row justify-between md:gap-8">
 {/* Cart Items */}
 <div className="w-full lg:w-3/4 bg-white rounded-lg p-4 sm:p-6">
 {cartItems.length > 0 ? (
 <table className="w-full text-xs md:text-lg table-auto border-collapse">
 <thead className="bg-[hashtag#FFF9E5] text-gray-800">
 <tr>
 <th className="py-3 text-left">Product</th>
 <th className="py-3 text-left hidden lg:table-cell">Price</th>
 <th className="py-3 text-left">Quantity</th>
 <th className="py-3 text-left">Subtotal</th>
 <th className="py-3 text-left"></th>
 </tr>
 </thead>
 <tbody>
 {cartItems.map(item => (
 <tr key={item.id} className="border-t">
 <td className="flex flex-col md:flex-row items-center py-4">
 <Image
 src={item.imageSrc}
 height={120}
 width={120}
 alt={item.name}
 />
 <p className="ml-4 text-gray-700 text-sm sm:text-base">{item.name} <br /> x {item.quantity}</p>
 </td>
 <td className="py-4 text-xs md:text-lg text-gray-500 hidden lg:table-cell">Rs: {item.price.toLocaleString()}</td>
 <td className="py-4 text-xs md:text-lg text-gray-500">
 <input
 type="number"
 value={item.quantity}
 onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
 className="w-12 text-xs md:text-lg text-center border md:p-2 rounded-md"
 min="1"
 aria-label={`Quantity for ${item.name}`}
 />
 </td>
 <td className="py-4 text-right text-gray-700 text-xs md:text-sm sm:text-base">Rs: {(item.price * item.quantity).toLocaleString()}</td>
 <td className="py-4 text-center">
 <RiDeleteBin6Line
 className="text-red-600 ml-4 cursor-pointer hover:text-red-800"
 size={20}
 aria-label={`Remove ${item.name}`}
 onClick={() => handleRemoveItem(item.id)}
 />
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 ) : (
 <p className="text-center text-xl">Your cart is empty.</p>
 )}
 </div>

 {/* Cart Totals Section */}
 <div className="w-full lg:w-2/6 bg-[hashtag#FFF9E5] rounded-md p-10 mt-8 lg:mt-0">
 <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
 <table className="w-full table-auto border-collapse">
 <thead>
 <tr>
 <th className="py-3 text-left">Subtotal</th>
 <th className="py-3 text-right text-gray-400">Rs: {calculateSubtotal().toLocaleString()}</th>
 </tr>
 </thead>
 <tbody>
 <tr>
 <td className="py-3 text-left font-bold">Total</td>
 <td className="py-3 text-right text-lg font-bold text-yellow-700">Rs: {calculateSubtotal().toLocaleString()}</td>
 </tr>
 <tr>
 <td colSpan={2} className="py-4">
 <button className="w-full px-6 py-3 border border-black rounded-xl">
 Checkout
 </button>
 </td>
 </tr>
 </tbody>
 </table>
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
 );
};

export default ViewCart;

