import React from 'react';
import { motion } from 'motion/react';
import PricingGrid from '../components/PricingGrid';
import FAQ from '../components/FAQ';

interface Props {
    openBooking?: () => void;
}

export default function Prices({ openBooking }: Props) {
    return (
        <>
            <div className="bg-slate-50 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Simple, Transparent Pricing
                    </h1>
                    <p className="text-lg text-slate-600 font-medium">
                        Pay only for what we clean. No hidden fees.
                    </p>
                </motion.div>
            </div>
            <PricingGrid onBook={openBooking} />
            <FAQ />
        </>
    );
}
