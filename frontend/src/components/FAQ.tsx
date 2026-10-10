"use client";
import { useState } from "react";
import { content } from "@/data/content";
import { ChevronDown } from "lucide-react";

export function FAQ() {
  const { faq } = content;
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-16 md:py-24 px-4 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {faq.map((item, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center font-bold text-slate-900 hover:text-blue-900 transition-colors"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span>{item.question}</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${openIdx === idx ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIdx === idx ? "max-h-48 py-4 border-t border-gray-100" : "max-h-0 py-0"}`}>
                <p className="text-slate-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
