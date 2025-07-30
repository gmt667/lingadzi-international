import React from 'react';
import { GraduationCap, Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import { universityStudents } from '../data/universityStudents';

const Alumni = () => {
  const stats = [
    { number: '50+', label: 'University Students', icon: Users },
    { number: '5', label: 'Different Universities', icon: BookOpen },
    { number: '97%', label: 'University Acceptance Rate', icon: TrendingUp },
    { number: '100%', label: 'Alumni Success Rate', icon: Award }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-br from-blue-900 to-sky-600">
        <div className="px-4 mx-auto text-center max-w-7xl">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl">Our Alumni & University Students</h1>
          <p className="max-w-4xl mx-auto text-xl text-blue-100 lg:text-2xl">
            Celebrating the achievements of our graduates who continue to excel in higher education.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-blue-900">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* University Students Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-blue-900 lg:text-4xl">
              Current University Students
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Our graduates are making their mark in universities across Malawi.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {universityStudents.map((student, index) => (
              <div
                key={index}
                className="overflow-hidden transition-all duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-xl hover:-translate-y-2"
              >
                <img
                  src={student.image}
                  alt={student.name}
                  className="object-cover w-full h-56"
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-blue-900">{student.name}</h3>
                    <div className="px-2 py-1 text-xs text-yellow-800 bg-yellow-100 rounded-full">
                      {student.year}
                    </div>
                  </div>
                  <p className="font-semibold text-blue-600">{student.program}</p>
                  <p className="text-sm text-gray-600">{student.university}</p>

                  {student.contact?.phone && (
                    <p className="mt-3 text-sm text-gray-700">📞 {student.contact.phone}</p>
                  )}
                  {student.contact?.email && (
                    <p className="text-sm text-gray-700">📧 {student.contact.email}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Alumni;
