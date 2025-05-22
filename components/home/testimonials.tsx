'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'BBA Graduate, 2024',
    quote: 'My time at Trinity Education was transformative. The faculty's dedication and the practical approach to learning prepared me exceptionally well for my career in marketing.',
    imageUrl: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg',
  },
  {
    id: 2,
    name: 'Raj Patel',
    role: 'Computer Science Student',
    quote: 'The computer science program offers cutting-edge curriculum and hands-on experience. The supportive environment and mentorship have helped me grow both personally and professionally.',
    imageUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
  },
  {
    id: 3,
    name: 'Aisha Sharma',
    role: 'MBA Graduate, 2023',
    quote: 'The MBA program at Trinity provided me with valuable insights and skills that I use daily in my leadership role. The networking opportunities were invaluable for my career advancement.',
    imageUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            What Our Students Say
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            Hear from our students and alumni about their experiences at Trinity Education.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-slate-900 rounded-lg shadow-md p-8 flex flex-col md:flex-row items-center gap-6">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                      <div className="absolute -top-2 -left-2 w-10 h-10 bg-[#990000] rounded-full flex items-center justify-center">
                        <Quote className="h-5 w-5 text-white" />
                      </div>
                      <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-[#990000] dark:text-[#ff9999]">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700"
            onClick={prevTestimonial}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full bg-white dark:bg-slate-800 shadow-md hover:bg-slate-100 dark:hover:bg-slate-700"
            onClick={nextTestimonial}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={cn(
                  'w-2.5 h-2.5 rounded-full transition-all',
                  index === activeIndex ? 'bg-[#990000] w-8' : 'bg-slate-300 dark:bg-slate-600'
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}