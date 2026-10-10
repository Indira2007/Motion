import { content } from "@/data/content";
import { Quote, MapPin } from "lucide-react";

export function Trust() {
  const { trust } = content;

  return (
    <section id="campuses" className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Hear from Parents</h2>
              <p className="text-slate-600">Trust built on consistent results and care.</p>
            </div>

            <div className="bg-orange-50 p-8 rounded-2xl relative">
              <Quote className="w-12 h-12 text-orange-200 absolute top-4 left-4" />
              <div className="relative z-10">
                <p className="text-lg text-slate-800 italic mb-6">"{trust.testimonial}"</p>
                <div className="font-bold text-blue-900">{trust.parentName}</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-2">Our Campus</h2>
              <p className="text-slate-600">State-of-the-art infrastructure for optimal learning.</p>
            </div>

            <div className="bg-slate-50 border border-gray-200 rounded-2xl overflow-hidden group">
              <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
                <div className="w-full h-full bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  Campus Map [Placeholder]
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
