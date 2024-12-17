// pages/shop.tsx
import React from 'react';

const Shop = () => {
 const carData = [
 { id: 1, name: 'Card 1', price: '25,000', image: '/images/image13.jpeg' },
 { id: 2, name: 'Card 2', price: '30,000', image: '/images/image14.jpeg' },
 { id: 3, name: 'Card 3', price: '35,000', image: '/images/image15.jpeg' },
 { id: 4, name: 'Card 4', price: '40,000', image: '/images/image16.jpeg' },
 { id: 5, name: 'Card 5', price: '45,000', image: '/images/image17.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image18.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image19.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image20.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image21.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image22.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image23.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image24.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image25.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image26.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image27.png' },
 { id: 6, name: 'Card 6', price: '50,000', image: '/images/image28.png' },


 ];

 return (
 <section className="shop-section">
 {/* Banner Section */}
 <div className="bg-[url('/images/shop1.jpeg')] bg-cover bg-center text-center py-44">
 <p className="text-lg text-white">
 <span className="font-bold text-black">Home</span> &gt;{' '}
 <span className="font-bold text-zinc-700">Shop</span>
 </p>
 </div>

 {/* Filter & Sort Section */}
 <div className="flex justify-between items-center p-4 bg-gray-100">
 <div className="flex items-center space-x-2">
 <span className="text-xl">🔲</span> <span>Filter</span>
 </div>
 <div className="flex items-center space-x-2">
 <span>Sort By:</span>
 <select className="p-2 text-sm border rounded-md">
 <option value="default">Default</option>
 <option value="price-low-high">Price: Low to High</option>
 <option value="price-high-low">Price: High to Low</option>
 </select>
 </div>
 </div>

 {/* Car Cards Section */}
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
 {carData.map((car) => (
 <div key={car.id} className="card bg-white border p-4 shadow-md text-center">
 <img src={car.image} alt={car.name} className="w-full h-auto rounded-lg" />
 <p className="text-lg mt-3">{car.name}</p>
 <p className="text-green-600 text-xl mt-2">Rs: {car.price}</p>
 </div>
 ))}
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
 </section>
 );
};

export default Shop;