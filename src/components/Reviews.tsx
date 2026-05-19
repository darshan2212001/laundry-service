import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    id: 1,
    text: "Fantastic experience with Laundry Happy. Fast and friendly service backed up by great technology which makes placing orders hassle free.",
    name: "M. Gambold",
    platform: "Facebook",
  },
  {
    id: 2,
    text: "Excellent service. Pick-up and drop off services were very helpful as I had heavy curtains to dry clean. Polite, friendly and helpful staff. Will be my go-to provider from now on.",
    name: "A. Patel",
    platform: "Google",
  },
  {
    id: 3,
    text: "Used them for the first time this week and the service was excellent. Great communication around collection etc and the clothes were returned perfectly.",
    name: "R. Tudge",
    platform: "Google",
  },
  {
    id: 4,
    text: "Absolutely brilliant! They managed to get a stubborn red wine stain out of my favorite dress. The delivery driver was also super polite.",
    name: "S. Jenkins",
    platform: "Trustpilot",
  },
  {
    id: 5,
    text: "Very convenient and reasonably priced. I love that I don't have to sort my clothes beforehand. Just bag it and they handle the rest.",
    name: "L. Chen",
    platform: "Google",
  }
];

export default function Reviews() {
  // Duplicate the reviews array multiple times to ensure a seamless infinite loop
  const duplicatedReviews = [...reviews, ...reviews, ...reviews, ...reviews];

  return (
    <section className="py-24 bg-[#F2F7FC] overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
          What our customers say
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
          Our customers are at the heart of everything we do. We listen to your needs and tailor our services to meet them.
        </p>
      </div>

      {/* Marquee Container with fade edges */}
      <div className="relative w-full max-w-[100vw] mx-auto">
        {/* Fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-48 bg-gradient-to-r from-[#F2F7FC] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-48 bg-gradient-to-l from-[#F2F7FC] to-transparent z-10 pointer-events-none"></div>

        <div className="flex overflow-hidden">
          {/* The scrolling track */}
          <div className="flex animate-marquee hover:[animation-play-state:paused] w-max items-stretch py-4">
            {duplicatedReviews.map((review, index) => (
              <div 
                key={`${review.id}-${index}`} 
                className="w-[320px] md:w-[400px] flex-shrink-0 mx-4 bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 flex flex-col"
              >
                <div className="flex text-amber-400 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-500 flex-grow mb-8 leading-relaxed text-[15px]">
                  {review.text}
                </p>
                
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center overflow-hidden shrink-0">
                    <svg className="w-8 h-8 text-slate-400 mt-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-slate-900 text-sm">{review.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Review on {review.platform}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
