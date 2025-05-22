import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const programs = [
  {
    id: 1,
    title: 'Bachelor of Business Administration',
    description: 'Develop essential business skills and knowledge to succeed in today\'s competitive business environment.',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    duration: '4 years',
    link: '/academics/programs/bba',
  },
  {
    id: 2,
    title: 'Bachelor of Computer Science',
    description: 'Learn cutting-edge technology and programming skills to build the digital future.',
    imageUrl: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg',
    duration: '4 years',
    link: '/academics/programs/bcs',
  },
  {
    id: 3,
    title: 'Master of Business Administration',
    description: 'Advance your career with specialized business knowledge and leadership skills.',
    imageUrl: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg',
    duration: '2 years',
    link: '/academics/programs/mba',
  },
  {
    id: 4,
    title: 'Bachelor of Education',
    description: 'Prepare for a rewarding career in education with practical teaching experience.',
    imageUrl: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg',
    duration: '4 years',
    link: '/academics/programs/bed',
  },
];

export function Programs() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Our Academic Programs
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
              Discover our diverse range of undergraduate and graduate programs designed to prepare you for success in your chosen field.
            </p>
          </div>
          <Link href="/academics/programs" className="mt-4 md:mt-0">
            <Button variant="link" className="text-[#990000] dark:text-[#ff9999] p-0 flex items-center gap-2">
              View all programs <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <Card key={program.id} className="group overflow-hidden border border-slate-200 dark:border-slate-700 h-full transition-all hover:shadow-md">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={program.imageUrl}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <CardHeader className="p-4">
                <div className="text-xs font-medium text-[#990000] dark:text-[#ff9999] mb-1">
                  {program.duration}
                </div>
                <CardTitle className="text-lg">{program.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <CardDescription>{program.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={program.link}>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}