import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  return (
    <div className="w-full bg-white border-b border-slate-100 py-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 text-sm font-medium text-slate-500">

          {/* Rating */}
          <div className="flex items-center space-x-2 shrink-0">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-slate-800 font-semibold tracking-tight">Rated 4.9/5 on Google</span>
          </div>

          {/* Featured In */}
          <div className="flex items-center justify-center flex-1 space-x-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="hidden sm:inline-block font-semibold text-slate-400 uppercase tracking-wider text-xs">Featured in:</span>
            <span className="font-bold text-lg tracking-tighter text-slate-800">TechCrunch</span>
            <span className="font-bold text-lg tracking-tighter text-slate-800">BBC</span>
            <span className="font-bold text-lg tracking-tighter text-slate-800">Forbes</span>
          </div>

          {/* Insurance */}
          <div className="flex items-center shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-500 mr-2" />
            <span className="text-slate-800 font-semibold tracking-tight">Fully Insured up to £500</span>
          </div>

          {/* Success Rate */}
          <div className="hidden lg:flex items-center shrink-0">
            <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></div>
            <span className="text-slate-800 font-semibold tracking-tight">99.8% Perfect Delivery</span>
          </div>

        </div>
      </div>
    </div>
  );
}
