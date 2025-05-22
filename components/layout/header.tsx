'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ThemeToggle } from '@/components/theme-toggle';

const navItems = [
  {
    title: 'Home',
    href: '/',
    children: [],
  },
  {
    title: 'About',
    href: '/about',
    children: [
      { title: 'Overview', href: '/about' },
      { title: 'Our History', href: '/about/history' },
      { title: 'Mission & Vision', href: '/about/mission' },
      { title: 'Leadership', href: '/about/leadership' },
    ],
  },
  {
    title: 'Academics',
    href: '/academics',
    children: [
      { title: 'Programs', href: '/academics/programs' },
      { title: 'Faculties', href: '/academics/faculties' },
      { title: 'Calendar', href: '/academics/calendar' },
      { title: 'Research', href: '/academics/research' },
    ],
  },
  {
    title: 'Admissions',
    href: '/admissions',
    children: [
      { title: 'Apply Now', href: '/admissions/apply' },
      { title: 'Requirements', href: '/admissions/requirements' },
      { title: 'Scholarships', href: '/admissions/scholarships' },
      { title: 'Fees', href: '/admissions/fees' },
    ],
  },
  {
    title: 'Campus Life',
    href: '/campus-life',
    children: [
      { title: 'Events', href: '/campus-life/events' },
      { title: 'Clubs', href: '/campus-life/clubs' },
      { title: 'Housing', href: '/campus-life/housing' },
      { title: 'Facilities', href: '/campus-life/facilities' },
    ],
  },
  {
    title: 'News',
    href: '/news',
    children: [],
  },
  {
    title: 'Contact',
    href: '/contact',
    children: [],
  },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-white dark:bg-slate-900 shadow-md py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative h-10 w-10 md:h-12 md:w-12">
            <div className="absolute inset-0 flex items-center justify-center rounded-full bg-[#990000] text-white font-bold text-xl">
              T
            </div>
          </div>
          <div className={cn(
            'font-bold text-lg md:text-xl transition-colors',
            scrolled ? 'text-slate-900 dark:text-white' : 'text-white'
          )}>
            Trinity Education
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              {item.children.length > 0 ? (
                <div className="flex items-center space-x-1 cursor-pointer">
                  <span className={cn(
                    'font-medium transition-colors',
                    scrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'
                  )}>
                    {item.title}
                  </span>
                  <ChevronDown className={cn(
                    'h-4 w-4 transition-colors',
                    scrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'
                  )} />
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'font-medium transition-colors',
                    scrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'
                  )}
                >
                  {item.title}
                </Link>
              )}

              {item.children.length > 0 && (
                <div className="absolute left-0 mt-2 w-48 origin-top-left bg-white dark:bg-slate-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.title}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700"
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            className={cn(
              'rounded-full',
              scrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'
            )}
          >
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="default" className="bg-[#990000] hover:bg-[#7a0000] text-white">
            Apply Now
          </Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'rounded-full',
              scrolled ? 'text-slate-800 dark:text-slate-200' : 'text-white'
            )}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 shadow-xl">
          <div className="container py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <div key={item.title} className="py-2">
                  {item.children.length > 0 ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between">
                          {item.title}
                          <ChevronDown className="h-4 w-4 ml-2" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        {item.children.map((child) => (
                          <DropdownMenuItem key={child.title} asChild>
                            <Link href={child.href}>
                              {child.title}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-slate-800 dark:text-slate-200 hover:text-[#990000] dark:hover:text-[#ff9999]"
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 flex items-center justify-between">
                <Button variant="default" className="bg-[#990000] hover:bg-[#7a0000] text-white">
                  Apply Now
                </Button>
                <ThemeToggle />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}