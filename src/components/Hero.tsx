import React, { useState, useEffect } from 'react';
import { MapPin, Clock, ArrowRight, Search } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
  onCheck?: (postcode: string) => void;
}

export default function Hero({ onCheck }: Props) {
  const [postcode, setPostcode] = useState('');
  const [location, setLocation] = useState('London');
  const [time, setTime] = useState(42);

  useEffect(() => {
    // Simulate dynamic time countdown
    const timer = setInterval(() => {
      setTime((prev) => (prev > 15 ? prev - 1 : 45));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[90vh] min-h-[600px] w-full overflow-hidden bg-slate-50">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute z-0 w-full h-full object-contain left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.85]"
      >
        {/* Using local white.mp4 background video */}
        <source
          src="/video/white.mp4"
          type="video/mp4"
        />
      </video>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.2 }}
          className="w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 tracking-tight leading-tight drop-shadow-sm"
          >
            Laundry day is now a <br className="hidden md:block" />
            <span className="text-[#0044FF]">60-second task.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-700 mb-10 max-w-2xl mx-auto font-medium drop-shadow-sm"
          >
            Premium wash, fold, and dry cleaning delivered to your door.
          </motion.p>

          {/* Search Bar Component */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/60 backdrop-blur-md p-2 rounded-2xl md:rounded-full flex flex-col md:flex-row items-center max-w-2xl mx-auto border border-slate-200 shadow-xl"
          >
            <div className="flex items-center w-full px-4 py-3 md:py-0">
              <MapPin className="text-[#0044FF] w-6 h-6 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Enter Postcode to check availability"
                className="w-full bg-transparent text-slate-800 placeholder-slate-500 focus:outline-none text-lg font-medium"
                value={postcode}
                onChange={(e) => setPostcode(e.target.value)}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onCheck && onCheck(postcode)}
              className="w-full md:w-auto mt-2 md:mt-0 bg-[#2563EB] hover:bg-blue-700 text-white px-8 py-4 rounded-xl md:rounded-full font-semibold text-lg transition-all flex items-center justify-center shrink-0 group shadow-md"
            >
              Check Availability
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Dynamic Tag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 inline-flex items-center bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-5 py-2.5 shadow-sm"
          >
            <span className="flex h-2.5 w-2.5 relative mr-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <p className="text-slate-700 text-sm md:text-base font-medium">
              Live Status: Next collection available in <span className="text-emerald-600 font-bold">{time} mins</span> in <span className="text-slate-800 font-semibold">{location}</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
