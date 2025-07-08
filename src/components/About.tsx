import React from 'react';
import { Users, Award, Heart, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-blue-500" />, number: '50,000+', label: 'Patients Served' },
    { icon: <Award className="h-8 w-8 text-green-500" />, number: '25+', label: 'Awards Won' },
    { icon: <Heart className="h-8 w-8 text-red-500" />, number: '15+', label: 'Years of Care' },
    { icon: <Shield className="h-8 w-8 text-purple-500" />, number: '100%', label: 'Patient Safety' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About MediCare+</h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, MediCare+ has been at the forefront of healthcare innovation, 
              providing exceptional medical services to our community. We combine cutting-edge 
              technology with compassionate care to deliver the best possible outcomes for our patients.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our state-of-the-art facility houses the latest medical equipment and is staffed by 
              a team of highly skilled healthcare professionals who are dedicated to excellence in 
              patient care. We believe that every patient deserves personalized attention and the 
              highest quality of medical treatment.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Modern Hospital"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;