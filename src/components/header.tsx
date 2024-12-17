
'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUser, FaSearch, FaHeart, FaShoppingCart, FaBars } from 'react-icons/fa';

function Header() {
 const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 const toggleMobileMenu = () => {
 setIsMobileMenuOpen(!isMobileMenuOpen);
 };

 return (
 <header>
 <div className="flex justify-between items-center px-6 py-4 bg-gray-50">
 {/* Placeholder for Logo */}
 <div className="text-xl font-bold">Logo</div>

 {/* Navigation Links */}
 <nav className="hidden md:flex space-x-8 font-medium">
 <Link href="/" className="hover:underline">Home</Link>
 <Link href="/shop" className="hover:underline">Shop</Link>
 <Link href="/blog" className="hover:underline">Blog</Link>
 <Link href="/contact" className="hover:underline">Contact</Link>
 </nav>

 {/* Icons Section */}
 <div className="hidden md:flex space-x-6">
 <Link href="/user" className="cursor-pointer">
 <FaUser size={20} />
 </Link>
 <Link href="/search" className="cursor-pointer">
 <FaSearch size={20} />
 </Link>
 <Link href="/checkout" className="cursor-pointer">
 <FaHeart size={20} />
 </Link>
 <Link href="/cart" className="cursor-pointer">
 <FaShoppingCart size={20} />
 </Link>
 </div>

 {/* Mobile Menu Button */}
 <div className="md:hidden cursor-pointer" onClick={toggleMobileMenu}>
 <FaBars size={25} />
 </div>
 </div>

 {/* Mobile Menu - Show when mobile menu is open */}
 {isMobileMenuOpen && (
 <div className="md:hidden bg-gray-50 p-4">
 <nav className="flex flex-col space-y-4 font-medium">
 <Link href="/" className="hover:underline">Home</Link>
 <Link href="/shop" className="hover:underline">Shop</Link>
 <Link href="/blog" className="hover:underline">Blog</Link>
 <Link href="/contact" className="hover:underline">Contact</Link>
 </nav>
 </div>
 )}
 </header>
 );
}

export default Header;