import React from 'react';

const Footer: React.FC = () => {
 return (
 <footer className="bg-gray-300 py-16">
 <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
 {/* Left Section: Paragraph */}
 <div className="w-full md:w-1/3 mb-8 md:mb-0">
 <p className="text-gray-700 text-md">
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
 </p>
 </div>

 {/* Middle Section: Links */}
 <div className="w-full md:w-1/3 flex justify-around mb-8 md:mb-0">
 <div>
 <h4 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h4>
 <ul className="text-gray-600">
 <li><a href="hashtag#home" className="block mb-2">Home</a></li>
 <li><a href="hashtag#about" className="block mb-2">About</a></li>
 <li><a href="hashtag#services" className="block mb-2">Services</a></li>
 <li><a href="hashtag#contact" className="block mb-2">Contact</a></li>
 </ul>
 </div>

 <div>
 <h4 className="text-xl font-semibold text-gray-800 mb-4">Help</h4>
 <ul className="text-gray-600">
 <li><a href="hashtag#faq" className="block mb-2">FAQ</a></li>
 <li><a href="hashtag#support" className="block mb-2">Support</a></li>
 <li><a href="hashtag#privacy" className="block mb-2">Privacy Policy</a></li>
 <li><a href="hashtag#terms" className="block mb-2">Terms & Conditions</a></li>
 </ul>
 </div>
 </div>

 {/* Right Section: Newsletter */}
 <div className="w-full md:w-1/3">
 <h4 className="text-xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h4>
 <p className="text-gray-600 mb-4">Stay updated with the latest news and offers from our store.</p>
 <div className="flex">
 <input
 type="email"
 placeholder="Enter your email"
 className="w-full p-3 border-2 border-gray-300 rounded-l-lg"
 />
 <button className="py-3 px-6 bg-black text-white font-semibold rounded-r-lg hover:bg-gray-800">
 Subscribe
 </button>
 </div>
 </div>
 </div>

 {/* Bottom: Right Reserved Section */}
 <div className="text-center py-4 mt-8 text-gray-600">
 <p>&copy; 2024 All rights reserved.</p>
 </div>
 </footer>
 );
};

export default Footer;