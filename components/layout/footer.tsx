import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Trinity Education</h3>
            <p className="text-slate-300 mb-4">
              Providing quality education and fostering academic excellence since 1995. Committed to
              developing future leaders with integrity and innovation.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-[#990000] hover:bg-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-[#990000] hover:bg-white">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-[#990000] hover:bg-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full text-white hover:text-[#990000] hover:bg-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics/programs" className="text-slate-300 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/admissions/apply" className="text-slate-300 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/academics/calendar" className="text-slate-300 hover:text-white transition-colors">
                  Academic Calendar
                </Link>
              </li>
              <li>
                <Link href="/campus-life/events" className="text-slate-300 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-300 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#990000] mt-0.5" />
                <span className="text-slate-300">
                  123 Education Lane, Kathmandu, Nepal
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#990000]" />
                <span className="text-slate-300">+977-1-234-5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#990000]" />
                <span className="text-slate-300">info@trinity.edu.np</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-slate-300 mb-4">
              Subscribe to our newsletter for updates on events, admissions, and campus news.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-slate-800 border-slate-700 text-white"
              />
              <Button className="w-full bg-[#990000] hover:bg-[#7a0000] text-white">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>© {currentYear} Trinity Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}