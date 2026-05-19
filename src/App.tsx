import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BookingFlow from './components/BookingFlow';

import AnimatedRoutes from './components/AnimatedRoutes';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingPostcode, setBookingPostcode] = useState('');

  const openBooking = (postcode = '') => {
    setBookingPostcode(postcode);
    setIsBookingOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900 flex flex-col">
        <Header onBook={() => openBooking()} />

        <main className="flex-grow pt-24 md:pt-32">
          <AnimatedRoutes openBooking={openBooking} />
        </main>

        <Footer />
        <FloatingWhatsApp />

        <AnimatePresence>
          {isBookingOpen && (
            <BookingFlow
              isOpen={isBookingOpen}
              onClose={() => setIsBookingOpen(false)}
              initialPostcode={bookingPostcode}
            />
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
