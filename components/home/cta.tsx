import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function CTA() {
  return (
    <section className="py-20 bg-[#003366] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
            Take the first step towards a bright future with Trinity Education. 
            Apply now for our upcoming academic sessions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/admissions/apply">
              <Button className="bg-[#990000] hover:bg-[#7a0000] text-white min-w-[160px]">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-[#003366] min-w-[160px]">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-0 left-0 w-20 h-20 md:w-40 md:h-40 rounded-full bg-[#990000] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 md:w-64 md:h-64 rounded-full bg-[#990000] translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 md:w-24 md:h-24 rounded-full bg-[#D4AF37]"></div>
      </div>
    </section>
  );
}