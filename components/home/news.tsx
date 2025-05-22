import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const newsItems = [
  {
    id: 1,
    title: 'Trinity Hosts International Academic Conference',
    excerpt: 'The annual conference brought together scholars from over 20 countries to discuss innovations in education.',
    date: 'June 15, 2025',
    imageUrl: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg',
    slug: '/news/international-academic-conference',
  },
  {
    id: 2,
    title: 'Students Win National Business Competition',
    excerpt: 'Our BBA students secured first place in the prestigious national business case competition.',
    date: 'May 28, 2025',
    imageUrl: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    slug: '/news/business-competition-winners',
  },
  {
    id: 3,
    title: 'New Science Building Inauguration Next Month',
    excerpt: 'The state-of-the-art science building will feature advanced laboratories and research facilities.',
    date: 'May 10, 2025',
    imageUrl: 'https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg',
    slug: '/news/science-building-inauguration',
  },
];

export function News() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Latest News & Events
            </h2>
            <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
              Stay updated with the latest happenings, events, and achievements at Trinity Education.
            </p>
          </div>
          <Link href="/news" className="mt-4 md:mt-0">
            <Button variant="link" className="text-[#990000] dark:text-[#ff9999] p-0 flex items-center gap-2">
              View all news <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden border border-slate-200 dark:border-slate-700 h-full hover:shadow-md transition-all">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.date}
                </div>
                <CardTitle className="text-lg">
                  <Link href={item.slug} className="hover:text-[#990000] dark:hover:text-[#ff9999] transition-colors">
                    {item.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <CardDescription>{item.excerpt}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link href={item.slug}>
                  <Button variant="link" className="text-[#990000] dark:text-[#ff9999] p-0">
                    Read more <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}