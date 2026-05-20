import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const features = [
  {
    title: 'Eco-Friendly',
    description: 'We use biodegradable detergents and plastic-free hangers.',
    image: '/eco_friendly.png',
  },
  {
    title: 'Real Humans',
    description: 'Need help? Chat with our team in London, not a bot.',
    image: '/real_humans.png',
  },
  {
    title: 'Quality Guarantee',
    description: 'Not happy? We re-clean it for free. No questions asked.',
    image: '/quality_guarantee.png',
  },
  {
    title: 'Vetted Professionals',
    description: 'All collections by our checked drivers in branded vehicles.',
    image: '/vetted_professionals.png',
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            The Personal Touch
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Because your clothes deserve better than average.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative overflow-hidden bg-[#F8FAFC] border border-slate-100 rounded-[2.5rem] flex flex-col md:flex-row group hover:shadow-2xl hover:shadow-[#0044FF]/10 transition-shadow"
            >
              {/* Text / Overlay Container */}
              <div className="relative z-10 flex flex-col justify-center w-full md:w-[55%] p-8 md:p-10 order-2 md:order-1 min-h-[200px] md:min-h-[300px]">
                <div className="flex items-start gap-3 mb-3">
                  <ArrowRight className="w-6 h-6 text-[#0044FF] group-hover:translate-x-2 transition-transform duration-300 mt-1 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                    {feature.title}
                  </h3>
                </div>

                <div className="mt-2">
                  <p className="text-slate-700 font-medium leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>

              {/* Image Container */}
              <div className="w-full h-[250px] md:h-auto md:w-[45%] md:absolute md:top-0 md:right-0 md:bottom-0 z-0 overflow-hidden order-1 md:order-2">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover object-center opacity-100 group-hover:scale-105 transition-all duration-700"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
