import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MapPin, Calendar, Clock, CheckCircle2, ChevronRight, Truck, Package, RotateCw } from 'lucide-react';

type Step = 'validation' | 'service_type' | 'timeslot' | 'success';

interface BookingFlowProps {
    isOpen: boolean;
    onClose: () => void;
    initialPostcode?: string;
}

export default function BookingFlow({ isOpen, onClose, initialPostcode = '' }: BookingFlowProps) {
    const [step, setStep] = useState<Step>('validation');
    const [postcode, setPostcode] = useState(initialPostcode);
    const [isValidating, setIsValidating] = useState(false);
    const [serviceType, setServiceType] = useState<'onetime' | 'regular' | null>(null);

    // Reset state when opened
    useEffect(() => {
        if (isOpen) {
            setPostcode(initialPostcode);
            setStep('validation');
            setServiceType(null);
            // If postcode provided, auto-validate
            if (initialPostcode && initialPostcode.trim().length > 0) {
                handleValidate(initialPostcode);
            }
        }
    }, [isOpen, initialPostcode]);

    const handleValidate = (code = postcode) => {
        if (!code) return;
        setIsValidating(true);
        // Simulate API validation
        setTimeout(() => {
            setIsValidating(false);
            setStep('service_type');
        }, 1200);
    };

    const commonClasses = "w-full bg-[#2563EB] hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed";

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                onClick={onClose}
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden relative z-10"
            >
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div className="font-bold text-slate-800 flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-[#0044FF]">
                            <Truck className="w-4 h-4" />
                        </div>
                        <span>Book Collection</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">

                        {/* Step 1: Validation */}
                        {step === 'validation' && (
                            <motion.div
                                key="validation"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-6"
                            >
                                <div className="text-center mb-8">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#0044FF]">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Check your area</h3>
                                    <p className="text-slate-500">Enter your postcode to see if we collect from your neighborhood.</p>
                                </div>

                                <div className="space-y-4">
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="e.g. SW1A 1AA"
                                            className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-[#0044FF]/20 focus:border-[#0044FF] font-medium uppercase transition-all"
                                            value={postcode}
                                            onChange={(e) => setPostcode(e.target.value)}
                                            onKeyDown={(e) => e.key === 'Enter' && handleValidate()}
                                        />
                                    </div>
                                    <button
                                        onClick={() => handleValidate()}
                                        disabled={!postcode || isValidating}
                                        className={commonClasses}
                                    >
                                        {isValidating ? (
                                            <span className="flex items-center">
                                                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="mr-2">
                                                    <RotateCw className="w-5 h-5" />
                                                </motion.div>
                                                Checking Eligibility...
                                            </span>
                                        ) : 'Continue'}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 2: Service Type */}
                        {step === 'service_type' && (
                            <motion.div
                                key="service_type"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Great! We're in your area.</h3>
                                    <p className="text-slate-500">How often would you like us to collect?</p>
                                </div>

                                <div className="space-y-4">
                                    <button
                                        onClick={() => { setServiceType('onetime'); setStep('timeslot'); }}
                                        className="w-full text-left p-4 rounded-2xl border-2 border-slate-100 hover:border-[#0044FF] transition-all flex items-center group bg-white shadow-sm hover:shadow-md"
                                    >
                                        <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-50 transition-colors shrink-0">
                                            <Package className="w-6 h-6 text-slate-500 group-hover:text-[#0044FF]" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-900 text-lg">One-time pickup</h4>
                                            <p className="text-sm text-slate-500">Perfect for trying us out or a big clean</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0044FF]" />
                                    </button>

                                    <button
                                        onClick={() => { setServiceType('regular'); setStep('timeslot'); }}
                                        className="w-full text-left p-4 rounded-2xl border-2 border-[#0044FF]/20 hover:border-[#0044FF] transition-all flex items-center group bg-blue-50/30 shadow-sm hover:shadow-md relative overflow-hidden"
                                    >
                                        <div className="absolute top-0 right-0 bg-[#0044FF] text-white text-[10px] font-bold px-2 py-1 rounded-bl-lg">
                                            POPULAR
                                        </div>
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm group-hover:bg-blue-100 transition-colors shrink-0">
                                            <RotateCw className="w-6 h-6 text-[#0044FF]" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-slate-900 text-lg">Regular service</h4>
                                            <p className="text-sm text-slate-500">Set and forget. Weekly or bi-weekly.</p>
                                        </div>
                                        <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-[#0044FF]" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 3: Timeslot */}
                        {step === 'timeslot' && (
                            <motion.div
                                key="timeslot"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                                className="flex flex-col h-full"
                            >
                                <div className="text-center mb-6">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">When should we arrive?</h3>
                                    <p className="text-slate-500">Just pop your items in a bag. We'll inventory them later.</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Collection Slot</label>
                                        <div className="relative">
                                            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#0044FF] pointer-events-none" />
                                            <select className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-10 pr-4 outline-none font-medium text-slate-800 appearance-none cursor-pointer focus:ring-2 focus:ring-[#0044FF]/20">
                                                <option>Today, 6:00 PM - 7:00 PM</option>
                                                <option>Tomorrow, 8:00 AM - 9:00 AM</option>
                                                <option>Tomorrow, 6:00 PM - 7:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 opacity-80">
                                        <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">Delivery Slot</label>
                                        <div className="flex items-center text-sm font-medium text-slate-600 bg-white border border-slate-200/50 rounded-xl p-3">
                                            <Clock className="w-5 h-5 text-slate-400 mr-3 shrink-0" />
                                            Usually delivered 24 - 48 hours after collection.
                                        </div>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setStep('success')}
                                    className={commonClasses}
                                >
                                    Confirm Booking under 60s
                                </button>
                            </motion.div>
                        )}

                        {/* Step 4: Success */}
                        {step === 'success' && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center flex flex-col items-center justify-center py-8"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                                    className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-500"
                                >
                                    <CheckCircle2 className="w-10 h-10" />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">You're all set!</h3>
                                <p className="text-slate-600 mb-8 max-w-sm">
                                    We'll collect your laundry at the scheduled time. <strong className="text-slate-900 font-bold bg-yellow-100 px-1 rounded">No counting needed!</strong> Just place your bag outside your door for No-Contact pickup.
                                </p>
                                <button
                                    onClick={onClose}
                                    className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 px-8 rounded-full transition-colors w-full"
                                >
                                    Done
                                </button>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
