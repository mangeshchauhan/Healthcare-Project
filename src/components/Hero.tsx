import React from 'react';
import { Calendar, Phone, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Health Is Our Top Priority
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Providing exceptional healthcare services with compassion and expertise.
              Our team of dedicated professionals is here to take care of your health needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 flex items-center justify-center">
                <Calendar className="mr-2 h-5 w-5" />
                Book Appointment
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Emergency Call
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2091"
              alt="Healthcare professionals"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Clock className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
            <p className="text-gray-600">Round-the-clock medical care for your needs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Calendar className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy Scheduling</h3>
            <p className="text-gray-600">Book appointments online anytime</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Emergency Care</h3>
            <p className="text-gray-600">Immediate response for urgent cases</p>
          </div>
        </div>
      </div>
    </section>
  );
}