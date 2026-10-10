"use client";
import { content } from "@/data/content";
import { CheckCircle2 } from "lucide-react";

export function Hero() {
  const { hero } = content;

  return (
    <section className="bg-slate-50 py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
            {hero.h1}
          </h1>
          <p className="text-lg text-slate-600">
            {hero.sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-sm">
              {hero.ctas.bookCounselling}
            </button>
            <button className="px-6 py-3 border-2 border-blue-900 text-blue-900 font-medium rounded-lg hover:bg-blue-50 transition-colors">
              {hero.ctas.downloadBrochure}
            </button>
          </div>
          <div className="pt-4 flex flex-wrap gap-4 items-center text-sm font-medium text-slate-600">
            {hero.trustLine.split(' | ').map((trust, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>{trust}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 max-w-md mx-auto w-full">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Request a callback</h2>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              console.log(Object.fromEntries(formData));
              alert("Form submitted to console!");
            }} 
            className="space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Student Name</label>
              <input required type="text" name="name" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Parent Mobile</label>
              <input required type="tel" pattern="[0-9]{10}" name="mobile" placeholder="10-digit number" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Class</label>
              <select required name="class" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition-all bg-white">
                <option value="">Select Class</option>
                <option value="11">Class 11</option>
                <option value="12">Class 12</option>
                <option value="dropper">Dropper</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Target Exam</label>
              <select required name="target" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none transition-all bg-white">
                <option value="">Select Target</option>
                <option value="jee">JEE</option>
                <option value="neet">NEET</option>
                <option value="foundation">Foundation</option>
              </select>
            </div>
            <button type="submit" className="w-full mt-2 px-4 py-3 bg-blue-900 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-md">
              Get a call back
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
