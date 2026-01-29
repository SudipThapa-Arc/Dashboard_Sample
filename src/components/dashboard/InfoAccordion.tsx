'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Laptop, MoreVertical } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const SECTIONS = [
    { title: 'Pension contributions', content: null },
    {
        title: 'Devices',
        content: (
            <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center p-2 shadow-sm">
                    <Laptop className="w-6 h-6 text-gray-800" />
                </div>
                <div className="flex-1">
                    <h4 className="text-sm font-semibold text-gray-900">MacBook Air</h4>
                    <p className="text-xs text-gray-500">Version M1</p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreVertical className="w-4 h-4" />
                </button>
            </div>
        )
    },
    { title: 'Compensation Summary', content: null },
    { title: 'Employee Benefits', content: null },
];

export function InfoAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(1); // Devices open by default

    return (
        <div className="bg-surface p-6 rounded-[32px] shadow-sm border border-gray-100 h-full flex flex-col justify-center gap-4">
            {SECTIONS.map((section, index) => (
                <div key={index} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="w-full flex items-center justify-between text-left group"
                    >
                        <span className="text-gray-600 font-medium text-sm group-hover:text-gray-900 transition-colors">
                            {section.title}
                        </span>
                        {openIndex === index ? (
                            <ChevronUp className="w-4 h-4 text-gray-400" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-gray-400" />
                        )}
                    </button>

                    <AnimatePresence>
                        {openIndex === index && section.content && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4">
                                    {section.content}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}
