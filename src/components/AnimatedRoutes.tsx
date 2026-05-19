import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';

// Pages
import Home from '../pages/Home';
import About from '../pages/About';
import Prices from '../pages/Prices';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Commercial from '../pages/Commercial';
import PageTransition from './PageTransition';

interface Props {
    openBooking: (postcode?: string) => void;
}

export default function AnimatedRoutes({ openBooking }: Props) {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><Home openBooking={openBooking} /></PageTransition>} />
                <Route path="/about" element={<PageTransition><About /></PageTransition>} />
                <Route path="/prices" element={<PageTransition><Prices openBooking={openBooking} /></PageTransition>} />
                <Route path="/services" element={<PageTransition><Services openBooking={openBooking} /></PageTransition>} />
                <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
                <Route path="/commercial" element={<PageTransition><Commercial openBooking={openBooking} /></PageTransition>} />
            </Routes>
        </AnimatePresence>
    );
}
