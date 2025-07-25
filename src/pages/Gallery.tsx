import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, Users, Trophy, BookOpen, Heart } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'New Student Orientation 2024',
      category: 'Academic',
      description: 'Welcome ceremony for new students joining our academic community.'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Science Laboratory',
      category: 'Facilities',
      description: 'Our state-of-the-art science laboratory equipped with modern instruments.'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1263348/pexels-photo-1263348.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Annual Sports Day 2024',
      category: 'Sports',
      description: 'Students competing in various athletic events during our annual sports day.'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Parent-Teacher Meeting',
      category: 'Community',
      description: 'Productive discussions between parents and teachers about student progress.'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'MSCE Results Celebration',
      category: 'Academic',
      description: 'Celebrating our outstanding 2024 MSCE results with 97% pass rate.'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181472/pexels-photo-1181472.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Cultural Day Celebration',
      category: 'Cultural',
      description: 'Students showcasing traditional Malawian culture through dance and music.'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Alumni Networking Event',
      category: 'Alumni',
      description: 'Former students sharing experiences and mentoring current students.'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Student Leadership Workshop',
      category: 'Academic',
      description: 'Developing leadership skills through interactive workshops and activities.'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Computer Studies Class',
      category: 'Academic',
      description: 'Students learning modern technology and computer skills.'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Mathematics Competition',
      category: 'Academic',
      description: 'Students participating in inter-school mathematics competition.'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'School Assembly',
      category: 'Community',
      description: 'Weekly school assembly with announcements and student presentations.'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      title: 'Science Fair Project',
      category: 'Academic',
      description: 'Student presenting innovative science project at the annual science fair.'
    }
  ];

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Community', 'Alumni', 'Facilities'];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Academic': return BookOpen;
      case 'Sports': return Trophy;
      case 'Cultural': return Heart;
      case 'Community': return Users;
      case 'Alumni': return Users;
      case 'Facilities': return Camera;
      default: return Camera;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-blue-100 text-blue-800';
      case 'Sports': return 'bg-green-100 text-green-800';
      case 'Cultural': return 'bg-purple-100 text-purple-800';
      case 'Community': return 'bg-yellow-100 text-yellow-800';
      case 'Alumni': return 'bg-red-100 text-red-800';
      case 'Facilities': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Photo Gallery</h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Explore moments of excellence, achievement, and community spirit at Lingadzi Leadership Academy 
              through our visual journey.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const IconComponent = getCategoryIcon(category);
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => openLightbox(image.id)}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(image.category)}`}>
                        {image.category}
                      </span>
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">{image.title}</h3>
                    <p className="text-white/80 text-xs line-clamp-2">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <Camera className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try selecting a different category to view more photos.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Navigation Buttons */}
            <button
              onClick={() => navigateImage('prev')}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button
              onClick={() => navigateImage('next')}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Image */}
            <img
              src={selectedImageData.src}
              alt={selectedImageData.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="flex items-center justify-between mb-2">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(selectedImageData.category)}`}>
                  {selectedImageData.category}
                </span>
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{selectedImageData.title}</h3>
              <p className="text-white/80">{selectedImageData.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Be Part of Our Story</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join our vibrant community and create your own memorable moments at Lingadzi Leadership Academy. 
            Your journey to excellence starts here.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admissions"
              className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-300 transition-colors"
            >
              Apply for Admission
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Visit Our Campus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;