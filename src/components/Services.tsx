import React from 'react';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Eye, 
  Syringe, // Replacing Tooth with Syringe
  Activity 
} from 'lucide-react';

const services = [
  {
    icon: Stethoscope,
    title: 'General Medicine',
    description: 'Comprehensive medical care for all ages'
  },
  {
    icon: Heart,
    title: 'Cardiology',
    description: 'Expert heart care and treatments'
  },
  {
    icon: Brain,
    title: 'Neurology',
    description: 'Specialized neurological treatments'
  },
  {
    icon: Eye,
    title: 'Ophthalmology',
    description: 'Complete eye care services'
  },
  {
    icon: Syringe, // Updated icon
    title: 'Dental Care',
    description: 'Professional dental treatments'
  },
  {
    icon: Activity,
    title: 'Emergency Care',
    description: '24/7 emergency medical services'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a wide range of medical services to meet all your healthcare needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <service.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}