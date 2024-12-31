import React from 'react';
import { Heart } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">HealthCare Plus</span>
          </div>
          <div className="flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-blue-600">Home</a>
            <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
            <a href="#doctors" className="text-gray-600 hover:text-blue-600">Doctors</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600">Contact</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}