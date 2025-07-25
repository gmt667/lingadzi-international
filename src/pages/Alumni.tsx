import React from 'react';
import { GraduationCap, ExternalLink, Award, BookOpen, Users, TrendingUp } from 'lucide-react';

const Alumni = () => {
  const universityStudents = [
    {
      name: 'George Mustafa Taumbe',
      course: 'Computer Engineering',
      university: 'University of Livingstonia (UNILIA)',
      year: '2023',
      achievement: 'MSCE Distinction',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Pursuing his passion for technology and innovation in computer engineering.'
    },
    {
      name: 'Ivy C Phiri',
      course: 'Journalism',
      university: 'Malawi University of Business and Applied Sciences (MUBAS)',
      year: '2023',
      achievement: 'MSCE Top Student',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Developing skills in media and communication to tell impactful stories.'
    },
    {
      name: 'Wonderful Rodric',
      course: 'Business Communication',
      university: 'Malawi University of Business and Applied Sciences (MUBAS)',
      year: '2023',
      achievement: '13 Points - Top MSCE Student 2023',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Excelling in business studies with a focus on effective communication strategies.'
    },
    {
      name: 'Lucas Mhango',
      course: 'Business Administration',
      university: 'ABC University',
      year: '2023',
      achievement: 'MSCE Excellence',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Building expertise in business management and entrepreneurship.'
    },
    {
      name: 'Evance John',
      course: 'Science Education (Pure Science)',
      university: 'Domasi Teaching College',
      year: '2023',
      achievement: 'MSCE Top Performer',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      description: 'Preparing to become an educator and inspire the next generation of scientists.'
    }
  ];

  const stats = [
    { number: '50+', label: 'University Students', icon: Users },
    { number: '5', label: 'Different Universities', icon: BookOpen },
    { number: '97%', label: 'University Acceptance Rate', icon: TrendingUp },
    { number: '100%', label: 'Alumni Success Rate', icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Alumni & University Students</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Celebrating the achievements of our graduates who continue to excel in higher education 
              and embody our mission of creating future leaders of Malawi.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* University Students Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Current University Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates are making their mark in universities across Malawi, pursuing diverse fields 
              of study and continuing their journey of excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {universityStudents.map((student, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={student.image} 
                    alt={student.name}
                    className="w-full h-56 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-blue-900">{student.name}</h3>
                    <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">
                      Class of {student.year}
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-blue-600 font-semibold">{student.course}</p>
                    <p className="text-gray-600 text-sm">{student.university}</p>
                    <div className="flex items-center space-x-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <p className="text-sm text-gray-700">{student.achievement}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">{student.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our alumni about their journey from Lingadzi Leadership Academy to university success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Wonderful Rodric"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">Wonderful Rodric</h3>
                  <p className="text-blue-600 text-sm mb-3">Business Communication, MUBAS</p>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Lingadzi Leadership Academy gave me the foundation I needed to excel. The teachers 
                    believed in me and pushed me to achieve my best. Scoring 13 points in MSCE was just 
                    the beginning of my journey."
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-sky-50 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="George Mustafa Taumbe"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">George Mustafa Taumbe</h3>
                  <p className="text-blue-600 text-sm mb-3">Computer Engineering, UNILIA</p>
                  <p className="text-gray-700 italic leading-relaxed">
                    "The leadership skills and academic excellence I developed at Lingadzi prepared me 
                    well for university life. I'm now pursuing my passion for technology and innovation."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Network */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Join Our Alumni Network</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected with your fellow graduates and continue to be part of the Lingadzi family.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Benefits of Joining</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Stay updated with school news and achievements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Network with fellow alumni across different fields</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Mentorship opportunities for current students</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Exclusive alumni events and reunions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="bg-blue-600 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">Career development and job opportunities</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-blue-600 to-sky-600 rounded-xl p-8 text-white text-center">
                <GraduationCap className="w-16 h-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">Ready to Connect?</h3>
                <p className="mb-6">
                  Join our growing network of successful alumni and help shape the future of 
                  Lingadzi Leadership Academy.
                </p>
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center space-x-2">
                  <span>Register as Alumni</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action for Current Students */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Inspired by Our Alumni Success?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join Lingadzi Leadership Academy and become part of our legacy of excellence. 
            Your success story could be featured here next!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Apply for Admission</span>
              <ExternalLink className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Learn More</span>
              <BookOpen className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;