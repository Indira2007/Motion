"use client";
import { useState } from "react";
import { content } from "@/data/content";
import { Clock, Users, IndianRupee } from "lucide-react";

export function Programmes() {
  const { programmes } = content;
  const [activeTab, setActiveTab] = useState(programmes.tabs[0]);

  return (
    <section id="courses" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Programmes</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Comprehensive coaching programs designed for all stages of preparation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programmes.cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full group">
              <div className="h-40 bg-gray-200 flex items-center justify-center text-gray-500 font-medium overflow-hidden">
                <div className="w-full h-full bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  {card.imageLabel} [Placeholder]
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{card.title}</h3>
                <p className="text-sm text-slate-600 mb-6 flex-grow">{card.desc}</p>

                <div className="space-y-3 mb-6 text-sm text-slate-700">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-orange-500" />
                    <span>{card.duration}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IndianRupee className="w-4 h-4 text-orange-500" />
                    <span>{card.feesFrom}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-4 h-4 text-orange-500" />
                    <span>{card.batchSize}</span>
                  </div>
                </div>

                <button className="w-full py-2.5 border border-blue-900 text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors mt-auto">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
