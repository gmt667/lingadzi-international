import React from 'react';
import { Award, Users, BookOpen, Target, Heart, TrendingUp, User } from 'lucide-react';

const About = () => {
  const leadership = [
    {
      name: 'Mr. Kapolo',
      position: 'Director',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Visionary leader with over 15 years of experience in educational administration and a passion for developing future leaders of Malawi.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About Lingadzi Leadership Academy</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Committed to excellence in education and developing the next generation of leaders who will shape Malawi's future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide quality education that develops academic excellence, strong character, and leadership skills 
                in our students, preparing them to become responsible citizens and future leaders of Malawi.
              </p>
            </div>
            
            <div className="bg-sky-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <div className="bg-sky-600 p-3 rounded-lg mr-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading educational institution in Malawi, recognized for producing well-rounded graduates 
                who excel academically and contribute meaningfully to society through ethical leadership and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our History</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A journey of educational excellence and community impact.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Lingadzi Leadership Academy was founded with a clear vision: to create future leaders of Malawi 
                through quality education and character development. Located in the heart of Mtandire at 
                Chilimampunga Ground in Lilongwe, our school has become a beacon of educational excellence 
                in the community.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                Since our establishment, we have been committed to providing comprehensive education that 
                goes beyond academic achievement. Our holistic approach focuses on developing critical thinking, 
                leadership skills, and moral values that prepare our students for success in higher education 
                and their future careers.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Milestone Achievement</h3>
                <p className="text-gray-700">
                  In 2023, we celebrated our first MSCE graduating class with an outstanding 92% pass rate, 
                  with top student Wonderful Rodric achieving 13 points. This remarkable achievement set the 
                  foundation for our continued excellence, which we surpassed in 2024 with a 97% pass rate.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Today, Lingadzi Leadership Academy stands as a testament to what can be achieved when 
                dedication, quality teaching, and student commitment come together. Our graduates continue 
                to excel in universities across Malawi and beyond, carrying forward our motto of creating 
                future leaders of Malawi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental principles that guide our educational philosophy and daily operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Leadership</h3>
              <p className="text-gray-600 leading-relaxed">
                We cultivate leadership qualities in every student, empowering them to take initiative, 
                make ethical decisions, and inspire positive change in their communities.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards in academics, teaching, and character development, 
                striving for excellence in everything we do.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-green-500 to-green-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster continuous learning and personal development, encouraging students to reach 
                their full potential and embrace lifelong learning.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We build strong relationships within our school community and encourage active 
                participation in the broader community through service and engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated leaders who guide our mission of educational excellence.
            </p>
          </div>
          
          <div className="flex justify-center">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-md">
                <div className="aspect-w-16 aspect-h-12">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">{leader.name}</h3>
                  <p className="text-blue-600 font-semibold text-lg mb-4">{leader.position}</p>
                  <p className="text-gray-600 leading-relaxed">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Academic Excellence</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality education is reflected in our outstanding academic results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">97%</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">2024 MSCE Pass Rate</h3>
              <p className="text-gray-600">
                Our latest MSCE results demonstrate continued improvement and excellence in education delivery.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-yellow-600 mb-4">100%</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">JCE Pass Rate</h3>
              <p className="text-gray-600">
                Consistent 100% pass rate every year, showcasing our strong foundation in junior secondary education.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">50+</div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">University Students</h3>
              <p className="text-gray-600">
                Our graduates continue their education at top universities, pursuing diverse fields of study.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Why Choose Lingadzi Leadership Academy?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover what makes us the preferred choice for quality education in Lilongwe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Comprehensive Curriculum</h3>
              <p className="text-gray-600">
                Well-rounded education covering sciences, humanities, languages, and technology to prepare students for diverse career paths.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Experienced Faculty</h3>
              <p className="text-gray-600">
                Dedicated and qualified teachers committed to student success and academic excellence.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-yellow-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Consistent high pass rates and top-performing students who excel in national examinations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Leadership Development</h3>
              <p className="text-gray-600">
                Focus on developing leadership skills and character building alongside academic achievement.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Supportive Environment</h3>
              <p className="text-gray-600">
                Nurturing and inclusive school community that supports every student's growth and development.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">University Preparation</h3>
              <p className="text-gray-600">
                Strong preparation for higher education with many graduates succeeding at top universities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;