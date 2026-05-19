import React from 'react';
import { Building2, Umbrella, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Props {
    openBooking?: () => void;
}

export default function Commercial({ openBooking }: Props) {
    return (
        <>
            <div className="bg-slate-900 text-white pt-40 pb-24 relative overflow-hidden -mt-24 md:-mt-32">
                {/* Video Background */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover scale-[1.0] mix-blend-overlay opacity-40"
                    >
                        <source src="/video/black.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full mb-8 border border-white/20"
                    >
                        <Building2 className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-semibold tracking-wider uppercase text-blue-50">B2B Services</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
                    >
                        Commercial Laundry for <br className="hidden md:block" />
                        <span className="text-blue-400">London's Best Businesses</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-10"
                    >
                        Dedicated service for Airbnbs, boutique hotels, spas, and clinics. Volume pricing with zero headaches.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button
                            onClick={openBooking}
                            className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center group"
                        >
                            Get a Custom Quote
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <a
                            href="mailto:commercial@laundryservice.com"
                            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center"
                        >
                            Email Our Team
                        </a>
                    </motion.div>
                </div>
            </div>

            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Services that scale with you</h2>
                        <p className="text-lg text-slate-600">Premium commercial cleaning designed to keep your business running smoothly without lifting a finger.</p>
                    </div>

                    <div className="space-y-24">
                        {/* Airbnb & Hotels */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center gap-12"
                        >
                            <div className="w-full md:w-1/2 order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img src="/commercial_hotel.png" alt="Premium Hotel Room" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Umbrella className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Airbnb & Short Lets</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Fast turnarounds between guests. We supply fresh linens and towels so you never miss a booking. Impress your guests with crisp, brilliant whites every single stay.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Next-day turnaround
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Hotel-quality linen rental
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Flexible scheduling
                                    </li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Spas & Clinics */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center gap-12"
                        >
                            <div className="w-full md:w-1/2">
                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <ShieldCheck className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Spas & Clinics</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Hygiene-certified cleaning processes prioritizing sterilization and premium softness for your clients. Ensure your towels always feel plush and completely sanitary.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Thermal disinfection wash
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Stain treatment
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Specially folded for display
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img src="/commercial_spa.png" alt="Luxury Spa Towels" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
                            </div>
                        </motion.div>

                        {/* Corporate Offices */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6 }}
                            className="flex flex-col md:flex-row items-center gap-12"
                        >
                            <div className="w-full md:w-1/2 order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img src="/commercial_office.png" alt="Corporate Office Desk" className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent pointer-events-none"></div>
                            </div>
                            <div className="w-full md:w-1/2 order-1 md:order-2">
                                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                                    <Building2 className="w-7 h-7" />
                                </div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">Corporate Offices</h3>
                                <p className="text-lg text-slate-600 leading-relaxed mb-6">
                                    Perk programs for your employees. We pick up directly from your reception desk. A perfect benefit to encourage returning to the office.
                                </p>
                                <ul className="space-y-3 mb-8">
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Dedicated account manager
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Employee portal
                                    </li>
                                    <li className="flex items-center text-slate-700 font-medium">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div> Monthly consolidated billing
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </section>
        </>
    );
}
