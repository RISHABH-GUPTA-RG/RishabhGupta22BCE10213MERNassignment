import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center mt-10">
      <p>Follow us:</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="#" className="hover:text-gray-400">Twitter</a>
        <a href="#" className="hover:text-gray-400">Instagram</a>
        <a href="#" className="hover:text-gray-400">Facebook</a>
      </div>
    </footer>
  );
}
