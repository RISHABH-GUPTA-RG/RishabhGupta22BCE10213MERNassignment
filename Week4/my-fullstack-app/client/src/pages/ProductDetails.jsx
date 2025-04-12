import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const allProducts = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/img1.jpg', description: 'High-quality item 1.' },
  { id: 2, name: 'Product 2', price: 49.99, image: '/img2.jpg', description: 'Top-notch item 2.' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/img3.jpg', description: 'Budget-friendly item 3.' },
];

export default function ProductDetails() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) return <div>Product not found</div>;

  return (
    <>
      <Navbar />
      <div className="p-6 flex flex-col md:flex-row gap-6">
        <img src={product.image} alt={product.name} className="w-full md:w-1/3 rounded"/>
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-xl text-blue-600 mt-2">${product.price}</p>
          <p className="mt-4">{product.description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
