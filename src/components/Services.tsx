import React from 'react';
import { Heart, Brain, Eye, Stethoscope, Zap, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="h-12 w-12 text-red-500" />,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced diagnostic tools and treatments.',
      features: ['ECG Testing', 'Heart Surgery', 'Preventive Care']
    },
    {
      icon: <Brain className="h-12 w-12 text-purple-500" />,
      title: 'Neurology',
      description: 'Expert neurological care for brain and nervous system disorders.',
      features: ['Brain MRI', 'Stroke Treatment', 'Seizure Management']
    },
    {
      icon: <Eye className="h-12 w-12 text-blue-500" />,
      title: 'Ophthalmology',
      description: 'Complete eye care services from routine exams to complex surgeries.',
      features: ['Eye Exams', 'Cataract Surgery', 'Retinal Treatment']
    },
    {
      icon: <Stethoscope className="h-12 w-12 text-green-500" />,
      title: 'General Medicine',
      description: 'Primary healthcare services for all ages and medical conditions.',
      features: ['Health Checkups', 'Chronic Disease Management', 'Preventive Care']
    },
    {
      icon: <Zap className="h-12 w-12 text-yellow-500" />,
      title: 'Emergency Care',
      description: '24/7 emergency services with rapid response and critical care.',
      features: ['Trauma Care', 'Urgent Care', 'Ambulance Service']
    },
    {
      icon: <Users className="h-12 w-12 text-indigo-500" />,
      title: 'Pediatrics',
      description: 'Specialized healthcare for infants, children, and adolescents.',
      features: ['Child Health', 'Vaccinations', 'Growth Monitoring']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive healthcare services with cutting-edge technology and compassionate care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow group">
              <div className="mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;