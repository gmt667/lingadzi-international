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
// Final Correct Imports for images (matching your filenames & extensions)
import george from "../assets/alumni/george.JPG";
import ivy from "../assets/alumni/ivy.jpg";
import wonderful from "../assets/alumni/wonderful.JPG";
import evance from "../assets/alumni/evance.JPG";

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
      university: 'University of Livingstonia (UNILIA, LAWS CAMPUS)',
      year: '2023',
      image: george,
    },
    {
      name: 'Ivy C Phiri',
      course: 'Journalism',
      university: 'MUBAS',
      year: '2023',
      image: ivy,
    },
    {
       name: 'Wonderful Rodric',
      course: 'Business Communication',
      university: 'MUBAS',
      year: '2023',
      image: wonderful,
    },
      {
      name: 'Evance John',
      course: 'Unknown',          // Update as needed
      university: 'Unknown',      // Update as needed
      year: '2023',
      image: evance,
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden text-white bg-gradient-to-br from-blue-900 via-blue-800 to-sky-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-transparent"></div>
        
        <div className="relative px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-32">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold leading-tight lg:text-6xl">
                  Create Future
                  <span className="block text-yellow-400">Leaders of Malawi</span>
                </h1>
                <p className="text-xl leading-relaxed text-blue-100 lg:text-2xl">
                  Excellence in education, character building, and leadership development at 
                  Lingadzi Leadership Academy.
                </p>
              </div>
              
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/admissions"
                  className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-blue-900 transition-all duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-300 hover:scale-105"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 border-2 border-white rounded-lg hover:bg-white hover:text-blue-900"
                >
                  <span>Learn More</span>
                  <BookOpen className="w-5 h-5" />
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="p-8 border bg-white/10 backdrop-blur-sm rounded-2xl border-white/20">
                <h3 className="mb-6 text-2xl font-bold text-center">Academic Excellence</h3>
                <div className="grid grid-cols-1 gap-6">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="mb-2 text-4xl font-bold text-yellow-400">{achievement.rate}</div>
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
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div className="mb-2 text-3xl font-bold text-blue-900">97%</div>
              <div className="text-gray-600">2024 MSCE Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-sky-500">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="mb-2 text-3xl font-bold text-blue-900">500+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-500 rounded-full">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="mb-2 text-3xl font-bold text-blue-900">100%</div>
              <div className="text-gray-600">JCE Pass Rate</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-green-500 rounded-full">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="mb-2 text-3xl font-bold text-blue-900">50+</div>
              <div className="text-gray-600">University Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Students Showcase */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900 lg:text-4xl">
              Our Top Performing Students
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Celebrating academic excellence and the bright minds that represent our commitment to quality education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {topStudents.map((student, index) => (
              <div key={index} className="p-6 transition-all duration-300 border border-blue-100 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl hover:shadow-lg">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-yellow-400 rounded-full">
                    <Award className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-blue-900">{student.name}</h3>
                  <p className="mb-1 text-2xl font-bold text-yellow-600">{student.points}</p>
                  <p className="mb-1 text-sm text-gray-600">{student.achievement}</p>
                  <p className="text-sm font-semibold text-blue-600">Class of {student.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Alumni */}
      <section className="py-16 bg-blue-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900 lg:text-4xl">
              Alumni Making a Difference
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our graduates continue to excel in higher education and beyond, embodying our mission to create future leaders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {featuredAlumni.map((alumni, index) => (
              <div key={index} className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={alumni.image} 
                    alt={alumni.name}
                    className="object-cover w-full h-48"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-blue-900">{alumni.name}</h3>
                  <p className="mb-1 font-semibold text-blue-600">{alumni.course}</p>
                  <p className="mb-2 text-gray-600">{alumni.university}</p>
                  <p className="text-sm text-gray-500">Class of {alumni.year}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link
              to="/alumni"
              className="inline-flex items-center px-8 py-3 space-x-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
            >
              <span>View All Alumni</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900 lg:text-4xl">
              Our Core Values
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              The principles that guide everything we do at Lingadzi Leadership Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 group-hover:scale-110">
                <Target className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-blue-900">Leadership</h3>
              <p className="leading-relaxed text-gray-600">
                Developing confident, ethical leaders who can make positive changes in their communities and beyond.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 group-hover:scale-110">
                <Award className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-blue-900">Excellence</h3>
              <p className="leading-relaxed text-gray-600">
                Striving for the highest standards in academics, character, and all aspects of school life.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 rounded-full bg-gradient-to-br from-green-500 to-green-600 group-hover:scale-110">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-blue-900">Growth</h3>
              <p className="leading-relaxed text-gray-600">
                Fostering continuous learning, personal development, and intellectual curiosity in every student.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 transition-transform duration-300 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 group-hover:scale-110">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-blue-900">Community</h3>
              <p className="leading-relaxed text-gray-600">
                Building strong relationships and contributing positively to our local and global communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News & Facebook Feed */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Latest News */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-blue-900">Latest News & Updates</h2>
              <div className="space-y-6">
                <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-blue-600 rounded-lg">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-blue-900">
                        Outstanding 2024 MSCE Results Announced
                      </h3>
                      <p className="mb-3 text-gray-600">
                        We're proud to announce a 97% pass rate for our 2024 MSCE students, with Anthony Chimalilo leading with 12 points.
                      </p>
                      <p className="text-sm text-blue-600">December 15, 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-green-600 rounded-lg">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-blue-900">
                        2025 Admissions Now Open
                      </h3>
                      <p className="mb-3 text-gray-600">
                        Applications for the 2025 academic year are now being accepted. Join our community of future leaders.
                      </p>
                      <p className="text-sm text-blue-600">December 10, 2024</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="p-2 bg-yellow-600 rounded-lg">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg font-semibold text-blue-900">
                        New Science Laboratory Opened
                      </h3>
                      <p className="mb-3 text-gray-600">
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
                  className="inline-flex items-center space-x-2 font-semibold text-blue-600 hover:text-blue-700"
                >
                  <span>View All News</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            
            {/* Facebook Feed Placeholder */}
            <div>
              <h2 className="mb-8 text-3xl font-bold text-blue-900">Follow Us on Facebook</h2>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="py-12 text-center">
                  <Globe className="w-16 h-16 mx-auto mb-4 text-blue-300" />
                  <h3 className="mb-2 text-lg font-semibold text-gray-700">Stay Connected</h3>
                  <p className="mb-6 text-gray-600">
                    Follow our official Facebook page for the latest updates, photos, and announcements.
                  </p>
                  <a
                    href="https://www.facebook.com/p/Lingadzi-Leadership-Academy-100086575447432/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 space-x-2 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700"
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
      <section className="py-16 text-white bg-gradient-to-r from-blue-600 to-sky-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Ready to Join Our Community?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl">
            Take the first step towards becoming a future leader of Malawi. 
            Apply now and be part of our legacy of excellence.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/admissions"
              className="inline-flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-blue-900 transition-all duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-300 hover:scale-105"
            >
              <span>Apply for Admission</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 border-2 border-white rounded-lg hover:bg-white hover:text-blue-600"
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