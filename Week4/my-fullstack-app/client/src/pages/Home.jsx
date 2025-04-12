import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import UserList from '../components/UserList';

<UserList />


const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/img1.jpg' },
  { id: 2, name: 'Product 2', price: 49.99, image: '/img2.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/img3.jpg' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Footer />
    </>
  );
}
