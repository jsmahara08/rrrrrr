import { Check, Users, BookOpen, Trophy, Globe } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-10 w-10 text-[#990000]" />,
    title: 'Excellence in Teaching',
    description:
      'Our experienced faculty delivers innovative and engaging education tailored to modern industry demands.',
  },
  {
    icon: <Users className="h-10 w-10 text-[#990000]" />,
    title: 'Vibrant Community',
    description:
      'Join a diverse community of learners and build lifelong connections with peers and faculty.',
  },
  {
    icon: <Trophy className="h-10 w-10 text-[#990000]" />,
    title: 'Student Success',
    description:
      'We provide comprehensive support services to ensure every student reaches their full potential.',
  },
  {
    icon: <Globe className="h-10 w-10 text-[#990000]" />,
    title: 'Global Perspective',
    description:
      'Our international connections offer students opportunities for global exposure and experiences.',
  },
];

export function Features() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Why Choose Trinity Education
          </h2>
          <p className="text-slate-600 dark:text-slate-300">
            We are dedicated to providing exceptional educational experiences that prepare students for success in their chosen fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}