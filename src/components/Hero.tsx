import React from 'react';
import { ArrowRight, Shield, Award, Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Your Health is Our 
              <span className="text-blue-200"> Priority</span>
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Experience world-class healthcare with our team of expert doctors and state-of-the-art facilities. We're committed to providing compassionate care for you and your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
                <span>Book Appointment</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Emergency Care
              </button>
            </div>
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-blue-200" />
                <span className="text-sm">Certified Care</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-blue-200" />
                <span className="text-sm">Award Winning</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-blue-200" />
                <span className="text-sm">Compassionate</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <img 
                src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" 
                alt="Healthcare Professional" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;