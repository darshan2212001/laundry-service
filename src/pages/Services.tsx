import React from 'react';
import { motion } from 'motion/react';
import ProcessSteps from '../components/ProcessSteps';
import Reviews from '../components/Reviews';
import PricingGrid from '../components/PricingGrid';

interface Props {
    openBooking?: () => void;
}

export default function Services({ openBooking }: Props) {
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
                        Our Services
                    </h1>
                    <p className="text-lg text-slate-600 font-medium">
                        Premium wash, fold, and dry cleaning. Delivered to your door.
                    </p>
                </motion.div>
            </div>
            <ProcessSteps />
            <PricingGrid onBook={openBooking} />
            <Reviews />
        </>
    );
}
