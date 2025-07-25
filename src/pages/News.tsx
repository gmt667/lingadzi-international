import React from 'react';
import { Calendar, Trophy, Users, BookOpen, Award, TrendingUp, ExternalLink } from 'lucide-react';

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: 'Outstanding 2024 MSCE Results Announced',
      excerpt: 'Lingadzi Leadership Academy achieves remarkable 97% pass rate with Anthony Chimalilo leading with 12 points.',
      content: 'We are thrilled to announce the exceptional performance of our 2024 MSCE students. With a 97% pass rate, our students have once again demonstrated the quality of education at Lingadzi Leadership Academy. Anthony Chimalilo emerged as our top performer with an outstanding 12 points, showcasing the dedication and hard work that defines our academic culture.',
      date: 'December 15, 2024',
      category: 'Academic Achievement',
      image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: '2025 Admissions Now Open - Limited Spaces Available',
      excerpt: 'Applications for the 2025 academic year are now being accepted. Join our community of future leaders.',
      content: 'We are excited to announce that applications for the 2025 academic year are now open. With limited spaces available for both JCE and MSCE programs, we encourage prospective students and parents to apply early. Our admissions process is designed to identify students who will thrive in our leadership-focused educational environment.',
      date: 'December 10, 2024',
      category: 'Admissions',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'New State-of-the-Art Science Laboratory Opened',
      excerpt: 'Our new science laboratory enhances STEM education capabilities with modern equipment and facilities.',
      content: 'Lingadzi Leadership Academy has officially opened its new state-of-the-art science laboratory, significantly enhancing our STEM education capabilities. The laboratory is equipped with modern instruments for Physics, Chemistry, and Biology experiments, providing students with hands-on learning experiences that prepare them for advanced scientific studies.',
      date: 'December 5, 2024',
      category: 'Infrastructure',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Alumni Success: George Taumbe Excels at UNILIA',
      excerpt: 'Former student George Mustafa Taumbe continues to excel in Computer Engineering at University of Livingstonia.',
      content: 'We are proud to share the continued success of our alumnus George Mustafa Taumbe, who is excelling in his Computer Engineering studies at the University of Livingstonia (UNILIA). George, who graduated from our MSCE program in 2023, exemplifies the leadership and academic excellence that Lingadzi Leadership Academy instills in its students.',
      date: 'November 28, 2024',
      category: 'Alumni Success',
      image: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Annual Sports Day Celebrates Student Achievement',
      excerpt: 'Students showcase their athletic talents and team spirit during our annual sports day celebration.',
      content: 'Our annual sports day was a tremendous success, bringing together students, teachers, and parents for a day of athletic competition and celebration. The event highlighted not only our students\' physical abilities but also their teamwork, leadership, and sportsmanship - values that are central to our educational philosophy.',
      date: 'November 20, 2024',
      category: 'School Events',
      image: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Teacher Professional Development Workshop Completed',
      excerpt: 'Our dedicated faculty completed advanced training in modern teaching methodologies and student assessment.',
      content: 'Our teaching staff recently completed a comprehensive professional development workshop focused on modern pedagogical approaches and innovative assessment methods. This investment in our educators ensures that we continue to provide the highest quality education and maintain our position as a leading academic institution in Malawi.',
      date: 'November 15, 2024',
      category: 'Faculty Development',
      image: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const categories = ['All', 'Academic Achievement', 'Admissions', 'Infrastructure', 'Alumni Success', 'School Events', 'Faculty Development'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredNews = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic Achievement': return Trophy;
      case 'Admissions': return Users;
      case 'Infrastructure': return BookOpen;
      case 'Alumni Success': return Award;
      case 'School Events': return Calendar;
      case 'Faculty Development': return TrendingUp;
      default: return BookOpen;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic Achievement': return 'bg-yellow-100 text-yellow-800';
      case 'Admissions': return 'bg-blue-100 text-blue-800';
      case 'Infrastructure': return 'bg-green-100 text-green-800';
      case 'Alumni Success': return 'bg-purple-100 text-purple-800';
      case 'School Events': return 'bg-red-100 text-red-800';
      case 'Faculty Development': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Stay informed about the latest developments, achievements, and events at Lingadzi Leadership Academy.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 rounded-2xl overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="aspect-w-16 aspect-h-12 lg:aspect-h-full">
                  <img 
                    src={featuredArticle.image} 
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(featuredArticle.category)}`}>
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    {featuredArticle.content}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredArticle.date}</span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center space-x-2">
                      <span>Read More</span>
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.filter(article => !article.featured).map((article) => {
              const IconComponent = getCategoryIcon(article.category);
              return (
                <div key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="aspect-w-16 aspect-h-12">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                      <IconComponent className="w-5 h-5 text-gray-400" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-900 mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-500 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm inline-flex items-center space-x-1">
                        <span>Read More</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Subscribe to our newsletter to receive the latest news, updates, and announcements 
              directly in your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                  Subscribe
                </button>
              </div>
              <p className="text-blue-200 text-sm mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-blue-900 mb-6">Follow Us for Real-Time Updates</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/p/Lingadzi-Leadership-Academy-100086575447432/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white p-4 rounded-full hover:bg-blue-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                className="bg-sky-500 text-white p-4 rounded-full hover:bg-sky-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="#"
                className="bg-pink-600 text-white p-4 rounded-full hover:bg-pink-700 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;