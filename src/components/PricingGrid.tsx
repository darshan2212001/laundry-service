import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Info } from 'lucide-react';

const washItems = [
  { id: 'w1', name: 'Mixed Wash & Fold', price: 15, unit: 'per 6kg', desc: 'Everyday clothes, t-shirts, jeans' },
  { id: 'w2', name: 'Bedding Set', price: 20, unit: 'per set', desc: 'Duvet cover, sheets, pillowcases' },
  { id: 'w3', name: 'Towels Bundle', price: 12, unit: 'per 5 items', desc: 'Bath towels, hand towels' },
];

const dryCleanItems = [
  { id: 'd1', name: 'Shirt', price: 2.50, unit: 'per item', desc: 'Pressed and hung' },
  { id: 'd2', name: 'Two-Piece Suit', price: 12.00, unit: 'per suit', desc: 'Jacket and trousers' },
  { id: 'd3', name: 'Dress', price: 14.50, unit: 'per item', desc: 'Standard dress' },
  { id: 'd4', name: 'Winter Coat', price: 18.00, unit: 'per item', desc: 'Heavy coats, wool' },
];

interface Props {
  onBook?: () => void;
}

export default function PricingGrid({ onBook }: Props) {
  const [activeTab, setActiveTab] = useState<'wash' | 'dry'>('wash');

  const items = activeTab === 'wash' ? washItems : dryCleanItems;

  return (
    <section id="prices" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            No hidden fees. We inventory and invoice at the facility.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Selection */}
          <div className="flex-1">
            {/* Tabs */}
            <div className="flex p-1 bg-slate-200/50 rounded-2xl mb-8 w-full max-w-md mx-auto lg:mx-0">
              <button
                onClick={() => setActiveTab('wash')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all ${activeTab === 'wash' ? 'bg-white text-[#0044FF] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                Wash & Fold
              </button>
              <button
                onClick={() => setActiveTab('dry')}
                className={`flex-1 py-3 px-6 rounded-xl font-semibold text-sm transition-all ${activeTab === 'dry' ? 'bg-white text-[#0044FF] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                Dry Cleaning
              </button>
            </div>

            {/* Items Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AnimatePresence mode="wait">
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white p-5 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-md transition-shadow group flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900">{item.name}</h4>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-bold text-lg text-[#0044FF]">£{item.price.toFixed(2)}</span>
                      <p className="text-xs text-slate-400">{item.unit}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: Info Panel */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-white border border-slate-100 rounded-[32px] p-8 text-slate-900 sticky top-32 shadow-xl">
              <div className="w-12 h-12 bg-blue-50 text-[#0044FF] rounded-2xl flex items-center justify-center mb-6">
                <Info className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Zero Itemization Needed</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Don't waste time counting your shirts or weighing your laundry. Just pop everything in a bag, and we'll handle the rest.
              </p>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 mr-3">1</div>
                  <span className="text-slate-700 text-sm">You book a collection slot.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 mr-3">2</div>
                  <span className="text-slate-700 text-sm">We collect your uncounted bags.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-sm font-bold shrink-0 mt-0.5 mr-3">3</div>
                  <span className="text-slate-700 text-sm">Our facility sorts, counts, cleans, and invoices you.</span>
                </li>
              </ul>

              <button
                onClick={onBook}
                className="w-full bg-[#2563EB] hover:bg-blue-700 text-white py-4 rounded-[20px] font-bold text-lg transition-colors flex items-center justify-center mt-4"
              >
                Book Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
