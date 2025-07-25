import React from 'react';
import { BookOpen, Microscope, Globe, Calculator, Palette, Users, Award, Target } from 'lucide-react';

const Academics = () => {
  const departments = [
    {
      name: 'Science & Technology',
      icon: Microscope,
      color: 'from-blue-500 to-blue-600',
      subjects: ['Physics', 'Chemistry', 'Biology', 'ICT', 'Computer Studies'],
      description: 'Comprehensive science education preparing students for STEM careers and higher education.',
      facilities: ['Modern Science Laboratory', 'Computer Lab', 'ICT Equipment']
    },
    {
      name: 'Humanities',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      subjects: ['History', 'Geography', 'Social Studies'],
      description: 'Understanding human society, culture, and our world through critical analysis and research.',
      facilities: ['Library Resources', 'Research Materials', 'Interactive Maps']
    },
    {
      name: 'Languages',
      icon: BookOpen,
      color: 'from-purple-500 to-purple-600',
      subjects: ['English', 'French', 'Chichewa', 'Chinese'],
      description: 'Developing communication skills and cultural understanding through multilingual education.',
      facilities: ['Language Lab', 'Audio-Visual Equipment', 'Cultural Resources']
    },
    {
      name: 'Mathematics',
      icon: Calculator,
      color: 'from-yellow-500 to-yellow-600',
      subjects: ['Pure Mathematics', 'Applied Mathematics', 'Statistics'],
      description: 'Building strong mathematical foundations for problem-solving and analytical thinking.',
      facilities: ['Mathematics Resources', 'Graphing Tools', 'Problem-Solving Materials']
    },
    {
      name: 'Commerce & Business',
      icon: Users,
      color: 'from-red-500 to-red-600',
      subjects: ['Business Studies', 'Economics', 'Accounting'],
      description: 'Preparing students for the business world with practical skills and theoretical knowledge.',
      facilities: ['Business Simulation Tools', 'Case Study Materials', 'Market Research Resources']
    }
  ];

  const academicPrograms = [
    {
      level: 'Junior Certificate of Education (JCE)',
      duration: '2 Years',
      description: 'Foundation program covering core subjects to prepare students for senior secondary education.',
      passRate: '100%',
      subjects: 8
    },
    {
      level: 'Malawi School Certificate of Education (MSCE)',
      duration: '2 Years',
      description: 'Advanced secondary education program preparing students for university and professional careers.',
      passRate: '97%',
      subjects: 6
    }
  ];

  const achievements = [
    { year: '2024', achievement: '97% MSCE Pass Rate', highlight: 'Anthony Chimalilo - 12 points' },
    { year: '2023', achievement: '92% MSCE Pass Rate', highlight: 'Wonderful Rodric - 13 points' },
    { year: 'Every Year', achievement: '100% JCE Pass Rate', highlight: 'Consistent Excellence' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Comprehensive education programs designed to develop critical thinking, leadership skills, 
              and academic excellence in every student.
            </p>
          </div>
        </div>
      </section>

      {/* Academic Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Academic Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured programs provide a solid foundation for academic success and future leadership.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {academicPrograms.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 border border-blue-100">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-blue-900 mb-2">{program.level}</h3>
                    <p className="text-blue-600 font-semibold">{program.duration}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-600">{program.passRate}</div>
                    <div className="text-sm text-gray-600">Pass Rate</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{program.description}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">{program.subjects} Core Subjects</span>
                  </div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                    Excellent Results
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Academic Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive curriculum across multiple disciplines to provide well-rounded education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {departments.map((dept, index) => {
              const IconComponent = dept.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`bg-gradient-to-r ${dept.color} p-6`}>
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 p-3 rounded-lg">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{dept.name}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-700 mb-6 leading-relaxed">{dept.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Subjects Offered:</h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.subjects.map((subject, subIndex) => (
                          <span key={subIndex} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">Facilities:</h4>
                      <ul className="space-y-2">
                        {dept.facilities.map((facility, facIndex) => (
                          <li key={facIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-700">{facility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Academic Achievements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Academic Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence is reflected in our outstanding academic results year after year.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8 text-center border border-yellow-200">
                <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{achievement.year}</h3>
                <p className="text-lg font-semibold text-yellow-700 mb-2">{achievement.achievement}</p>
                <p className="text-gray-600">{achievement.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Academic Calendar</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Important dates and schedules for the academic year.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Term 1</h3>
                <p className="text-gray-600">January - April</p>
                <p className="text-sm text-blue-600 mt-2">Foundation & Core Subjects</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Term 2</h3>
                <p className="text-gray-600">May - August</p>
                <p className="text-sm text-blue-600 mt-2">Advanced Topics & Projects</p>
              </div>
              
              <div className="text-center">
                <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-blue-900 mb-2">Term 3</h3>
                <p className="text-gray-600">September - December</p>
                <p className="text-sm text-blue-600 mt-2">Examinations & Assessment</p>
              </div>
            </div>
            
            <div className="mt-12 bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Important Examination Dates</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">JCE Examinations</h4>
                  <p className="text-gray-700">October - November</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">MSCE Examinations</h4>
                  <p className="text-gray-700">October - December</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Our Learning Approach</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We employ modern teaching methods that engage students and promote deep understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Interactive Learning</h3>
              <p className="text-gray-600">
                Engaging classroom discussions and hands-on activities that make learning enjoyable and effective.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Collaborative Projects</h3>
              <p className="text-gray-600">
                Group work and team projects that develop communication skills and prepare students for real-world collaboration.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Personalized Support</h3>
              <p className="text-gray-600">
                Individual attention and customized learning plans to help every student reach their full potential.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-yellow-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Excellence Focus</h3>
              <p className="text-gray-600">
                High expectations and continuous assessment to ensure students achieve their academic goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;