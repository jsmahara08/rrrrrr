'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const slides = [
  {
    id: 1,
    imageUrl: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg',
    title: 'Welcome to Trinity Education',
    subtitle: 'Excellence in Education Since 1995',
    description: 'Providing quality education and fostering academic excellence for the leaders of tomorrow.',
  },
  {
    id: 2,
    imageUrl: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg',
    title: 'Discover Your Potential',
    subtitle: 'World-Class Faculty and Facilities',
    description: 'Our dedicated faculty and state-of-the-art facilities ensure the best learning experience.',
  },
  {
    id: 3,
    imageUrl: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
    title: 'Join Our Community',
    subtitle: 'A Vibrant Campus Life',
    description: 'Experience a diverse and inclusive community with numerous opportunities for growth.',
  },
];

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            'absolute inset-0 transition-opacity duration-1000',
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          )}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.imageUrl}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="relative z-20 h-full container mx-auto flex flex-col justify-center px-4 md:px-6">
            <div className="max-w-3xl">
              <h2 className="text-sm md:text-base text-[#D4AF37] font-medium mb-2 animate-fadeIn opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                {slide.subtitle}
              </h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                {slide.title}
              </h1>
              <p className="text-base md:text-lg text-slate-200 mb-6 max-w-xl animate-fadeIn opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                <Button className="bg-[#990000] hover:bg-[#7a0000] text-white">
                  Learn More
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-slate-900">
                  Apply Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 rounded-full bg-black/30 text-white hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={cn(
              'w-2.5 h-2.5 rounded-full transition-all',
              index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
            )}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}