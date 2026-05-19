import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Do I need to separate my colors and whites?",
        answer: "No, you don't! Our expert team will carefully sort your clothes by color, fabric type, and washing requirements to ensure they get the best possible care.",
    },
    {
        question: "Do you provide the bags?",
        answer: "Yes. For your first order, simply put your clothes in any disposable bag (like a bin liner). When we return your clean clothes, we'll provide you with complimentary VIP laundry bags for future orders.",
    },
    {
        question: "How do you handle delicate items?",
        answer: "Delicates are separated and washed according to their specific care labels. We use specialized gentle cycles and premium detergents designed for sensitive fabrics.",
    },
    {
        question: "What if I'm not home for delivery?",
        answer: "You can leave specific delivery instructions (like 'leave with concierge' or 'leave in porch') when booking. Alternatively, you can easily reschedule your delivery slot through our support team.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <HelpCircle className="w-8 h-8 text-[#0044FF]" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
                        Common Questions
                    </h2>
                    <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
                        Everything you need to know about our laundry and dry cleaning services.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`border rounded-2xl overflow-hidden transition-colors ${openIndex === index ? 'border-[#0044FF] bg-blue-50/50' : 'border-slate-200 bg-white hover:border-slate-300'
                                }`}
                        >
                            <button
                                className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className={`font-semibold text-lg ${openIndex === index ? 'text-[#0044FF]' : 'text-slate-900'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? 'text-[#0044FF] rotate-180' : 'text-slate-400'
                                        }`}
                                />
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
