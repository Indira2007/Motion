import { content } from "@/data/content";
import { Trophy } from "lucide-react";

export function Toppers() {
  const { toppers } = content;

  return (
    <section id="results" className="py-16 md:py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 text-center md:text-left">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Star Achievers</h2>
            <p className="text-slate-600">Consistent outstanding results year after year in JEE and NEET.</p>
          </div>
          <button className="px-6 py-2.5 bg-white border border-gray-300 text-slate-700 font-medium rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
            Year-wise results
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {toppers.map((topper, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center">
              <div className="w-24 h-24 mx-auto bg-gray-200 rounded-full flex items-center justify-center text-xs text-gray-400 mb-4">
                Photo
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{topper.name}</h3>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold mb-2">
                <Trophy className="w-4 h-4" />
                {topper.rank}
              </div>
              <p className="text-sm text-slate-500 font-medium">{topper.exam}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
