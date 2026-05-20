import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const steps = [
  {
    id: 1,
    title: 'Schedule',
    description: 'Pick a 1-hour window that fits your life.',
    image: '/schedule_app.png',
  },
  {
    id: 2,
    title: 'The Bag-it Rule',
    description: "No counting needed. Just put your clothes in a bag; we'll do the rest.",
    image: '/bag_it_rule.png',
  },
  {
    id: 3,
    title: 'Fresh Return',
    description: 'Delivered to your door, perfectly folded, within 24 hours.',
    image: '/fresh_return.png',
  },
];

export default function ProcessSteps() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Laundry day is now a <span className="text-[#0044FF]">60-second task.</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            Zero effort. Zero friction. Just clean clothes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative overflow-hidden bg-[#F8FAFC] border border-slate-100 rounded-[2.5rem] flex flex-col md:flex-row group hover:shadow-2xl hover:shadow-[#0044FF]/10 transition-shadow"
            >
              {/* Content Overlay */}
              <div className="relative z-10 flex flex-col justify-center w-full md:w-full p-8 md:p-10 order-2 md:order-1 min-h-[220px] md:min-h-[380px]">
                {/* Top Section: Arrow & Headline */}
                <div className="flex items-start gap-4 mb-3 w-[85%] md:w-[45%]">
                  <ArrowRight className="w-6 h-6 text-[#0044FF] group-hover:translate-x-2 transition-transform duration-300 mt-1 flex-shrink-0" />
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight leading-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] relative z-10">
                    {step.title}
                  </h3>
                </div>

                {/* Bottom Section: Description */}
                <div className="mt-2 w-[85%] md:w-[40%]">
                  <p className="text-slate-700 font-medium leading-relaxed text-sm relative z-10">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Image Container */}
              <div className="w-full h-[250px] md:h-auto md:w-[60%] md:absolute md:top-0 md:right-0 md:bottom-0 z-0 overflow-hidden order-1 md:order-2">
                <img
                  src={step.image}
                  alt={step.title}
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
