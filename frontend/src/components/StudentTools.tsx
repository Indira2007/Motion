import { content } from "@/data/content";
import { Laptop, PlayCircle } from "lucide-react";

export function StudentTools() {
  const { studentTools } = content;

  return (
    <section id="test-series" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Student Tools & Resources</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Everything you need to practice, analyze, and improve your performance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-slate-50 rounded-2xl border border-gray-200 overflow-hidden group">
            <div className="p-8">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6 text-orange-600">
                <Laptop className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{studentTools.testSeries.title}</h3>
              <p className="text-slate-600 mb-6">{studentTools.testSeries.desc}</p>
              <button className="text-orange-600 font-bold hover:text-orange-700 flex items-center gap-2">
                Explore Test Series &rarr;
              </button>
            </div>
            <div className="bg-gray-200 h-48 sm:h-64 mt-4 mx-8 rounded-t-xl border-t border-l border-r border-gray-300 flex items-center justify-center text-gray-500 shadow-inner overflow-hidden">
               <div className="w-full h-full bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  Sample UI Box [Placeholder]
               </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white rounded-2xl border border-blue-800 overflow-hidden group">
            <div className="p-8">
              <div className="w-12 h-12 bg-blue-800 rounded-xl flex items-center justify-center mb-6">
                <PlayCircle className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{studentTools.studyMaterial.title}</h3>
              <p className="text-blue-200 mb-6">{studentTools.studyMaterial.desc}</p>
              <button className="text-orange-400 font-bold hover:text-orange-300 flex items-center gap-2">
                Access Material &rarr;
              </button>
            </div>
            <div className="bg-gray-800 h-48 sm:h-64 mt-4 mx-8 rounded-t-xl border-t border-l border-r border-gray-700 flex items-center justify-center text-gray-400 relative overflow-hidden">
                <div className="w-full h-full bg-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                   Video Thumbnail Box [Placeholder]
                   <div className="absolute inset-0 flex items-center justify-center">
                     <PlayCircle className="w-12 h-12 text-white/50 group-hover:text-white transition-colors" />
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
