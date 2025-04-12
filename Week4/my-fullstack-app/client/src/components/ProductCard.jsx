import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <div
      className="border rounded p-4 shadow hover:shadow-lg cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded"/>
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
}
