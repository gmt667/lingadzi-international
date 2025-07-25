import React from 'react';
import { FileText, Download, CreditCard, CheckCircle, Users, Calendar, Phone, Mail } from 'lucide-react';

const Admissions = () => {
  const admissionRequirements = {
    jce: [
      'Completed Primary School Certificate (PSLCE)',
      'Minimum of 6 credits in PSLCE',
      'Birth certificate or equivalent age verification',
      'Medical certificate of fitness',
      'Two passport-size photographs',
      'School transfer certificate (if applicable)'
    ],
    msce: [
      'Completed Junior Certificate of Education (JCE)',
      'Minimum of 6 credits in JCE including English and Mathematics',
      'Birth certificate or equivalent age verification',
      'Medical certificate of fitness',
      'Two passport-size photographs',
      'School transfer certificate (if applicable)'
    ]
  };

  const feeStructure = [
    {
      level: 'JCE (Forms 1-2)',
      tuition: 'MWK 450,000',
      boarding: 'MWK 200,000',
      total: 'MWK 650,000',
      period: 'Per Academic Year'
    },
    {
      level: 'MSCE (Forms 3-4)',
      tuition: 'MWK 500,000',
      boarding: 'MWK 250,000',
      total: 'MWK 750,000',
      period: 'Per Academic Year'
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: 'Obtain Application Form',
      description: 'Download the application form or collect it from our admissions office.',
      icon: FileText
    },
    {
      step: 2,
      title: 'Complete Application',
      description: 'Fill out all required information and gather necessary documents.',
      icon: CheckCircle
    },
    {
      step: 3,
      title: 'Submit Documents',
      description: 'Submit completed application with all required supporting documents.',
      icon: Users
    },
    {
      step: 4,
      title: 'Pay Application Fee',
      description: 'Pay the non-refundable application processing fee.',
      icon: CreditCard
    },
    {
      step: 5,
      title: 'Interview & Assessment',
      description: 'Attend the scheduled interview and academic assessment.',
      icon: Calendar
    },
    {
      step: 6,
      title: 'Admission Decision',
      description: 'Receive admission decision and enrollment instructions.',
      icon: CheckCircle
    }
  ];

  const importantDates = [
    { event: 'Application Opens', date: 'January 15, 2025' },
    { event: 'Application Deadline', date: 'March 31, 2025' },
    { event: 'Interviews & Assessments', date: 'April 1-15, 2025' },
    { event: 'Admission Results', date: 'April 30, 2025' },
    { event: 'Fee Payment Deadline', date: 'May 31, 2025' },
    { event: 'Academic Year Begins', date: 'September 2, 2025' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Join our community of future leaders. Applications for the 2025 academic year are now open.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Application Deadline</h3>
              <p className="text-2xl font-bold text-blue-600">March 31, 2025</p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-8 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Available Spaces</h3>
              <p className="text-2xl font-bold text-green-600">Limited</p>
            </div>
            
            <div className="bg-yellow-50 rounded-2xl p-8 text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">Application Fee</h3>
              <p className="text-2xl font-bold text-yellow-600">MWK 5,000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Follow these simple steps to apply for admission to Lingadzi Leadership Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applicationProcess.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-3">
                      {step.step}
                    </div>
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Admission Requirements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ensure you meet all requirements before submitting your application.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">JCE Program (Forms 1-2)</h3>
              <ul className="space-y-3">
                {admissionRequirements.jce.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-sky-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">MSCE Program (Forms 3-4)</h3>
              <ul className="space-y-3">
                {admissionRequirements.msce.map((requirement, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Fee Structure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent and competitive fees for quality education.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {feeStructure.map((fee, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">{fee.level}</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Tuition Fee</span>
                    <span className="font-semibold text-blue-900">{fee.tuition}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700">Boarding Fee (Optional)</span>
                    <span className="font-semibold text-blue-900">{fee.boarding}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-blue-50 px-4 rounded-lg">
                    <span className="font-bold text-blue-900">Total (with boarding)</span>
                    <span className="font-bold text-blue-900 text-xl">{fee.total}</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 text-center">{fee.period}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Payment Options</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CreditCard className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900">Bank Transfer</h4>
                <p className="text-sm text-gray-600">Direct bank deposit</p>
              </div>
              <div className="text-center">
                <Phone className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900">Mobile Money</h4>
                <p className="text-sm text-gray-600">Airtel Money, TNM Mpamba</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-900">Installments</h4>
                <p className="text-sm text-gray-600">Flexible payment plans</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Important Dates</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar with these key admission dates for 2025.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {importantDates.map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{item.event}</h3>
                  <p className="text-blue-600 font-semibold">{item.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download Forms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Download Application Forms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get started with your application by downloading the required forms.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">JCE Application Form</h3>
              <p className="text-gray-600 mb-6">For students applying to Forms 1-2</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Form</span>
              </button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">MSCE Application Form</h3>
              <p className="text-gray-600 mb-6">For students applying to Forms 3-4</p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Form</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Admissions */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Need Help with Your Application?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Our admissions team is here to assist you throughout the application process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Contact Admissions Office</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-blue-200" />
                  <span>+265 995 07 51 01</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-blue-200" />
                  <span>admissions@lingadziacademy.edu.mw</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-blue-200 mt-0.5" />
                  <span>Visit our campus at Mtandire, Chilimampunga Ground, Lilongwe</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-6">Office Hours</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;