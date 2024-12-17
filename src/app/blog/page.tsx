import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Blog() {
 return (
 <div className="max-w-screen-lg mx-auto p-8">
 {/* Header Section */}
 <header className="text-center mb-8">
 <h1 className="text-4xl font-bold">Blog</h1>
 <nav className="mt-4 text-gray-600 text-sm">
 <Link href="/" className="hover:underline">
 Home
 </Link>
 <span className="mx-2">/</span>
 <span>Blog</span>
 </nav>
 </header>

 {/* Blog Posts Section */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 <div className="bg-white p-4 rounded shadow">
 <Image
 src="/images/image29.jpeg"
 alt="Image 1"
 height={300}
 width={400}
 className="rounded-md"
 />
 <h2 className="text-xl font-medium mt-4">Blog Post Title 1</h2>
 <p className="mt-2 text-gray-700">
 Placeholder text for a brief description of the blog post. Content goes here.
 </p>
 </div>

 <div className="bg-white p-4 rounded shadow">
 <Image
 src="/images/image30.png"
 alt="Image 2"
 height={300}
 width={400}
 className="rounded-md"
 />
 <h2 className="text-xl font-medium mt-4">Blog Post Title 2</h2>
 <p className="mt-2 text-gray-700">
 Placeholder text for a brief description of the blog post. Content goes here.
 </p>
 </div>

 <div className="bg-white p-4 rounded shadow">
 <Image
 src="/images/image31.png"
 alt="Image 3"
 height={300}
 width={400}
 className="rounded-md"
 />
 <h2 className="text-xl font-medium mt-4">Blog Post Title 3</h2>
 <p className="mt-2 text-gray-700">
 Placeholder text for a brief description of the blog post. Content goes here.
 </p>
 </div>
 </div>

 {/* Sidebar Section */}
 <aside className="mt-8">
 <h3 className="text-2xl font-bold mb-4">Categories</h3>
 <ul className="space-y-2">
 <li className="text-gray-700">Category 1</li>
 <li className="text-gray-700">Category 2</li>
 <li className="text-gray-700">Category 3</li>
 </ul>
 </aside>
 </div>
 );
}

export default Blog;