import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function TrustData() {
  const [itemsCleaned, setItemsCleaned] = useState(14250);

  useEffect(() => {
    const interval = setInterval(() => {
      setItemsCleaned(prev => prev + Math.floor(Math.random() * 3));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#F4F9FF] text-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
              The numbers <br className="hidden md:block" />
              <span className="text-[#0044FF]">speak for themselves.</span>
            </h2>
            <p className="text-xl text-slate-500 font-medium max-w-md mx-auto md:mx-0">
              We've built a reputation on reliability, speed, and uncompromising quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm text-center"
            >
              <div className="text-5xl font-bold text-slate-900 mb-2 tabular-nums">
                {itemsCleaned.toLocaleString()}
              </div>
              <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">
                Items Cleaned Today
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm text-center"
            >
              <div className="text-5xl font-bold text-[#0044FF] mb-2">
                99.9%
              </div>
              <div className="text-slate-500 font-medium uppercase tracking-wider text-sm">
                Perfect Delivery Rate
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
