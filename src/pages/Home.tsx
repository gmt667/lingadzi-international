import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp, 
  Star, 
  ArrowRight,
  Trophy,
  Target,
  Heart,
  Globe
} from 'lucide-react';

const Home = () => {
  const achievements = [
    { year: '2023', rate: '92%', description: 'MSCE Pass Rate', highlight: 'First graduating class' },
    { year: '2024', rate: '97%', description: 'MSCE Pass Rate', highlight: 'Continued excellence' },
    { year: 'Every Year', rate: '100%', description: 'JCE Pass Rate', highlight: 'Consistent performance' },
  ];

  const topStudents = [
    { name: 'Anthony Chimalilo', year: '2024', points: '12 points', achievement: 'Top MSCE Student' },
    { name: 'Wonderful Rodric', year: '2023', points: '13 points', achievement: 'Top MSCE Student' },
    { name: 'Evance John', year: '2023', points: 'Distinction', achievement: 'MSCE Excellence' },
    { name: 'George Taumbe', year: '2023', points: 'Distinction', achievement: 'MSCE Excellence' },
  ];

  const featuredAlumni = [
    {
      name: 'George Mustafa Taumbe',
      course: 'Computer Engineering',
      university: 'University of Livingstonia (UNILIA)',
      year: '2023',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Ivy C Phiri',
      course: 'Journalism',
      university: 'MUBAS',
      year: '2023',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Wonderful Rodric',
      course: 'Business Communication',
      university: 'MUBAS',
      year: '2023',
      image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Create Future
                  <span className="block text-yellow-400">Leaders of Malawi</span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Excellence in education, character building, and leadership development at 
                  Lingadzi Leadership Academy.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/admissions"
                  className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <BookOpen className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6 text-center">Academic Excellence</h3>
                <div className="grid grid-cols-1 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-yellow-400 mb-2">{achievement.rate}</div>
                      <div className="text-lg font-semibold">{achievement.description}</div>
                      <div className="text-sm text-blue-200">{achievement.year} - {achievement.highlight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">97%</div>
              <div className="text-gray-600">2024 MSCE Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-sky-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
              <div className="text-gray-600">JCE Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-900 mb-2">50+</div>
              <div className="text-gray-600">University Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Students Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Our Top Performing Students
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Celebrating academic excellence and the bright minds that represent our commitment to quality education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topStudents.map((student, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="text-center">
                  <div className="bg-yellow-400 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{student.name}</h3>
                  <p className="text-2xl font-bold text-yellow-600 mb-1">{student.points}</p>
                  <p className="text-sm text-gray-600 mb-1">{student.achievement}</p>
                  <p className="text-sm text-blue-600 font-semibold">Class of {student.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Alumni Making a Difference
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates continue to excel in higher education and beyond, embodying our mission to create future leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredAlumni.map((alumni, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-900 mb-2">{alumni.name}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{alumni.course}</p>
                  <p className="text-gray-600 mb-2">{alumni.university}</p>
                  <p className="text-sm text-gray-500">Class of {alumni.year}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/alumni"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <span>View All Alumni</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Lingadzi Leadership Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                Developing confident, ethical leaders who can make positive changes in their communities and beyond.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                Striving for the highest standards in academics, character, and all aspects of school life.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Fostering continuous learning, personal development, and intellectual curiosity in every student.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Building strong relationships and contributing positively to our local and global communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Facebook Feed */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Latest News */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Latest News & Updates</h2>
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 p-2 rounded-lg">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        Outstanding 2024 MSCE Results Announced
                      </h3>
                      <p className="text-gray-600 mb-3">
                        We're proud to announce a 97% pass rate for our 2024 MSCE students, with Anthony Chimalilo leading with 12 points.
                      </p>
                      <p className="text-sm text-blue-600">December 15, 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-600 p-2 rounded-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        2025 Admissions Now Open
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Applications for the 2025 academic year are now being accepted. Join our community of future leaders.
                      </p>
                      <p className="text-sm text-blue-600">December 10, 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="bg-yellow-600 p-2 rounded-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-blue-900 mb-2">
                        New Science Laboratory Opened
                      </h3>
                      <p className="text-gray-600 mb-3">
                        Our state-of-the-art science laboratory is now operational, enhancing our STEM education capabilities.
                      </p>
                      <p className="text-sm text-blue-600">December 5, 2024</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Link
                  to="/news"
                  className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-2"
                >
                  <span>View All News</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Facebook Feed Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Follow Us on Facebook</h2>
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="text-center py-12">
                  <Globe className="w-16 h-16 text-blue-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">Stay Connected</h3>
                  <p className="text-gray-600 mb-6">
                    Follow our official Facebook page for the latest updates, photos, and announcements.
                  </p>
                  <a
                    href="https://www.facebook.com/p/Lingadzi-Leadership-Academy-100086575447432/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
                  >
                    <span>Visit Our Facebook Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Take the first step towards becoming a future leader of Malawi. 
            Apply now and be part of our legacy of excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/admissions"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center space-x-2"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 inline-flex items-center justify-center space-x-2"
            >
              <span>Contact Us</span>
              <BookOpen className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;