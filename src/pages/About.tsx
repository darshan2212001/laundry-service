import React from 'react';
import { motion } from 'motion/react';
import TrustBar from '../components/TrustBar';
import WhyUs from '../components/WhyUs';
import TrustData from '../components/TrustData';

export default function About() {
    return (
        <>
            <div className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden -mt-24 md:-mt-32 pt-24 md:pt-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=2070&auto=format&fit=crop"
                        alt="Clean Laundry"
                        className="w-full h-full object-cover"
                    />
                    {/* Light overlay to ensure text readability */}
                    <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tight drop-shadow-sm">
                        About Laundry<span className="text-[#0044FF]">Service</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-semibold drop-shadow-sm">
                        We're on a mission to completely eliminate laundry day from your life, giving you back your time with zero hassle.
                    </p>
                </motion.div>
            </div>
            <TrustBar />
            <WhyUs />
            <TrustData />
        </>
    );
}
