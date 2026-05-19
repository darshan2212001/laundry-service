import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
    return (
        <div className="min-h-[70vh] bg-slate-50 py-24 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-slate-600 font-medium">
                        We're here to help. Reach out to our London-based team.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center transition-shadow hover:shadow-md">
                        <div className="w-12 h-12 bg-blue-50 text-[#0044FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Phone className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Phone</h3>
                        <p className="text-slate-600 mb-4">Mon-Fri from 8am to 8pm.</p>
                        <a href="tel:+442012345678" className="font-semibold text-[#0044FF] hover:underline">
                            +44 20 1234 5678
                        </a>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center transition-shadow hover:shadow-md">
                        <div className="w-12 h-12 bg-blue-50 text-[#0044FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Mail className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Email</h3>
                        <p className="text-slate-600 mb-4">We'll respond within 2 hours.</p>
                        <a href="mailto:hello@laundryservice.com" className="font-semibold text-[#0044FF] hover:underline">
                            hello@laundryservice.com
                        </a>
                    </motion.div>

                    <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center transition-shadow hover:shadow-md">
                        <div className="w-12 h-12 bg-blue-50 text-[#0044FF] rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <MapPin className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">Office</h3>
                        <p className="text-slate-600 mb-4">Come say hello at our HQ.</p>
                        <span className="font-semibold text-slate-900">
                            123 Startup Lane, London
                        </span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}
