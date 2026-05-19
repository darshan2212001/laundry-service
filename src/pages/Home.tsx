import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ProcessSteps from '../components/ProcessSteps';
import PricingGrid from '../components/PricingGrid';
import WhyUs from '../components/WhyUs';
import TrustData from '../components/TrustData';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';

interface Props {
    openBooking?: (postcode?: string) => void;
}

export default function Home({ openBooking }: Props) {
    return (
        <>
            <Hero onCheck={(postcode) => openBooking && openBooking(postcode)} />
            <TrustBar />
            <ProcessSteps />
            <PricingGrid onBook={() => openBooking && openBooking()} />
            <WhyUs />
            <Reviews />
            <TrustData />
            <FAQ />
        </>
    );
}
