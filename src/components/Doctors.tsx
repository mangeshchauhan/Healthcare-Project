import React from 'react';
import { Star, Award, Clock } from 'lucide-react';

const Doctors = () => {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiologist',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      experience: '15 years',
      rating: 4.9,
      education: 'MD, Harvard Medical School',
      availability: 'Mon-Fri 9AM-5PM'
    },
    {
      name: 'Dr. Michael Chen',
      specialty: 'Neurologist',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      experience: '12 years',
      rating: 4.8,
      education: 'MD, Johns Hopkins University',
      availability: 'Tue-Sat 10AM-6PM'
    },
    {
      name: 'Dr. Emily Rodriguez',
      specialty: 'Pediatrician',
      image: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      experience: '10 years',
      rating: 4.9,
      education: 'MD, Stanford Medical School',
      availability: 'Mon-Fri 8AM-4PM'
    },
    {
      name: 'Dr. David Kim',
      specialty: 'Orthopedic Surgeon',
      image: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      experience: '18 years',
      rating: 4.7,
      education: 'MD, Mayo Clinic',
      availability: 'Mon-Thu 7AM-3PM'
    }
  ];

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Expert Doctors</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our team of highly qualified and experienced doctors are dedicated to providing you with the best possible care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img 
                src={doctor.image} 
                alt={doctor.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{doctor.specialty}</p>
                
                <div className="flex items-center mb-3">
                  <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  <span className="ml-2 text-gray-700">{doctor.rating} rating</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 text-blue-500" />
                  <span className="ml-2 text-gray-700 text-sm">{doctor.experience} experience</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Clock className="h-5 w-5 text-green-500" />
                  <span className="ml-2 text-gray-700 text-sm">{doctor.availability}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{doctor.education}</p>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;