import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, User, MessageSquare, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        category: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: ['Mtandire, Chilimampunga Ground', 'Lilongwe, Malawi'],
      color: 'bg-blue-600'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      details: ['+265 995 07 51 01'],
      color: 'bg-green-600'
    },
    {
      icon: Mail,
      title: 'Email Address',
      details: ['info@lingadziacademy.edu.mw', 'admissions@lingadziacademy.edu.mw'],
      color: 'bg-purple-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 8:00 AM - 5:00 PM', 'Saturday: 9:00 AM - 1:00 PM'],
      color: 'bg-yellow-600'
    }
  ];

  const departments = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'admissions', label: 'Admissions' },
    { value: 'academic', label: 'Academic Affairs' },
    { value: 'finance', label: 'Finance & Fees' },
    { value: 'alumni', label: 'Alumni Relations' },
    { value: 'facilities', label: 'Facilities & Infrastructure' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Get in touch with us for admissions, inquiries, or to learn more about 
              Lingadzi Leadership Academy. We're here to help you on your educational journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`${info.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">{info.title}</h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Send us a Message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your email address"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {departments.map((dept) => (
                          <option key={dept.value} value={dept.value}>
                            {dept.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter the subject of your inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Please provide details about your inquiry..."
                      />
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
            
            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-100 to-sky-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-blue-900 mb-2">Find Us Here</h3>
                    <p className="text-gray-600">Mtandire, Chilimampunga Ground</p>
                    <p className="text-gray-600">Lilongwe, Malawi</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">Directions</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Located in the heart of Mtandire, our campus is easily accessible by public transport. 
                    Look for the Chilimampunga Ground landmark - we're right there!
                  </p>
                </div>
              </div>
              
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-blue-600 to-sky-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Need Immediate Assistance?</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-200" />
                    <div>
                      <p className="font-semibold">Call Us Directly</p>
                      <p className="text-blue-100">+265 995 07 51 01</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-200" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-blue-100">info@lingadziacademy.edu.mw</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-200 mt-0.5" />
                    <div>
                      <p className="font-semibold">Office Hours</p>
                      <p className="text-blue-100 text-sm">Mon-Fri: 8:00 AM - 5:00 PM</p>
                      <p className="text-blue-100 text-sm">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-blue-400">
                  <p className="text-blue-100 text-sm">
                    For urgent matters outside office hours, please send an email and we'll respond 
                    as soon as possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about Lingadzi Leadership Academy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">What are your admission requirements?</h3>
              <p className="text-gray-700">
                For JCE: Completed PSLCE with minimum 6 credits. For MSCE: Completed JCE with minimum 6 credits 
                including English and Mathematics. Visit our Admissions page for complete details.
              </p>
            </div>
            
            <div className="bg-sky-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">When does the academic year start?</h3>
              <p className="text-gray-700">
                The academic year typically begins in September. Applications for 2025 are currently open 
                with a deadline of March 31, 2025.
              </p>
            </div>
            
            <div className="bg-green-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">Do you offer boarding facilities?</h3>
              <p className="text-gray-700">
                Yes, we offer optional boarding facilities for students who need accommodation. 
                Boarding fees are separate from tuition fees.
              </p>
            </div>
            
            <div className="bg-yellow-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-3">What subjects do you offer?</h3>
              <p className="text-gray-700">
                We offer a comprehensive curriculum including Sciences, Mathematics, Languages (English, French, 
                Chichewa, Chinese), Humanities, and Business Studies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;