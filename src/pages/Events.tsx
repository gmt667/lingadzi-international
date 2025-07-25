import React from 'react';
import { Calendar, Clock, MapPin, Users, Trophy, BookOpen, Heart, Star } from 'lucide-react';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'New Student Orientation',
      date: '2025-01-15',
      time: '9:00 AM - 3:00 PM',
      location: 'Main Assembly Hall',
      category: 'Academic',
      description: 'Welcome ceremony and orientation program for new students joining the 2025 academic year.',
      attendees: 'New Students & Parents',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Parent-Teacher Association Meeting',
      date: '2025-01-25',
      time: '2:00 PM - 5:00 PM',
      location: 'Conference Room',
      category: 'Community',
      description: 'Monthly PTA meeting to discuss student progress, school policies, and upcoming initiatives.',
      attendees: 'Parents & Teachers',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Science Fair 2025',
      date: '2025-02-14',
      time: '8:00 AM - 4:00 PM',
      location: 'Science Laboratory & Grounds',
      category: 'Academic',
      description: 'Annual science fair showcasing student research projects and innovations in STEM fields.',
      attendees: 'All Students & Community',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Inter-House Sports Competition',
      date: '2025-02-28',
      time: '7:00 AM - 6:00 PM',
      location: 'School Sports Grounds',
      category: 'Sports',
      description: 'Annual inter-house sports competition featuring athletics, football, netball, and other sporting events.',
      attendees: 'All Students',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Cultural Day Celebration',
      date: '2025-03-21',
      time: '10:00 AM - 4:00 PM',
      location: 'Main Assembly Hall & Grounds',
      category: 'Cultural',
      description: 'Celebration of Malawian culture featuring traditional dances, music, food, and cultural exhibitions.',
      attendees: 'School Community',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Alumni Networking Event',
      date: '2025-04-10',
      time: '6:00 PM - 9:00 PM',
      location: 'Main Assembly Hall',
      category: 'Alumni',
      description: 'Annual alumni gathering for networking, sharing experiences, and mentoring current students.',
      attendees: 'Alumni & Current Students',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ];

  const pastEvents = [
    {
      id: 7,
      title: 'MSCE Results Celebration',
      date: '2024-12-15',
      category: 'Academic',
      description: 'Celebration of outstanding 2024 MSCE results with 97% pass rate.',
      highlights: ['97% pass rate achieved', 'Anthony Chimalilo scored 12 points', 'Community celebration']
    },
    {
      id: 8,
      title: 'Annual Sports Day 2024',
      date: '2024-11-20',
      category: 'Sports',
      description: 'Successful annual sports day with participation from all students.',
      highlights: ['100% student participation', 'New school records set', 'Community support']
    },
    {
      id: 9,
      title: 'Science Laboratory Opening',
      date: '2024-12-05',
      category: 'Infrastructure',
      description: 'Official opening of the new state-of-the-art science laboratory.',
      highlights: ['Modern equipment installed', 'Enhanced STEM capabilities', 'Community leaders attended']
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic': return BookOpen;
      case 'Sports': return Trophy;
      case 'Cultural': return Heart;
      case 'Community': return Users;
      case 'Alumni': return Star;
      case 'Infrastructure': return MapPin;
      default: return Calendar;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-blue-100 text-blue-800';
      case 'Sports': return 'bg-green-100 text-green-800';
      case 'Cultural': return 'bg-purple-100 text-purple-800';
      case 'Community': return 'bg-yellow-100 text-yellow-800';
      case 'Alumni': return 'bg-red-100 text-red-800';
      case 'Infrastructure': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Events Calendar</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay connected with our vibrant school community through academic events, 
              cultural celebrations, and sporting competitions.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mark your calendar for these exciting upcoming events and activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => {
              const IconComponent = getCategoryIcon(event.category);
              return (
                <div key={event.id} className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="aspect-w-16 aspect-h-8">
                    <img 
                      src={event.image} 
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                      <IconComponent className="w-5 h-5 text-gray-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-900 mb-3">{event.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{formatDate(event.date)}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{event.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">{event.attendees}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 text-sm leading-relaxed">{event.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Event Categories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse range of events caters to all aspects of student development and community engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Academic Events</h3>
              <p className="text-gray-600">
                Science fairs, academic competitions, orientation programs, and educational workshops.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Sports Events</h3>
              <p className="text-gray-600">
                Inter-house competitions, athletics meets, football tournaments, and sports days.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Cultural Events</h3>
              <p className="text-gray-600">
                Cultural days, traditional celebrations, music festivals, and art exhibitions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Community Events</h3>
              <p className="text-gray-600">
                PTA meetings, community service projects, parent engagement activities, and open days.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Alumni Events</h3>
              <p className="text-gray-600">
                Alumni reunions, networking events, mentorship programs, and career guidance sessions.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">Special Events</h3>
              <p className="text-gray-600">
                Graduation ceremonies, award nights, facility openings, and milestone celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Recent Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Highlights from our recent successful events and celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event) => {
              const IconComponent = getCategoryIcon(event.category);
              return (
                <div key={event.id} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-md">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    <IconComponent className="w-5 h-5 text-gray-400" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{event.title}</h3>
                  
                  <div className="flex items-center space-x-2 text-gray-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{formatDate(event.date)}</span>
                  </div>
                  
                  <p className="text-gray-700 text-sm mb-4">{event.description}</p>
                  
                  <div>
                    <h4 className="text-sm font-semibold text-blue-900 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Event Registration CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-sky-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Connected</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Don't miss out on our exciting events! Follow us on social media and subscribe to our newsletter 
            for the latest updates and event announcements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors">
              Subscribe to Newsletter
            </button>
            <a
              href="https://www.facebook.com/p/Lingadzi-Leadership-Academy-100086575447432/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Follow on Facebook
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;