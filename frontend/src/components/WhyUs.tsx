import { content } from "@/data/content";
import { CheckCircle } from "lucide-react";

export function WhyUs() {
  const { whyUs } = content;

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose Motion Academy, Siddipet ?</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Our unique methodology ensures students excel in both board exams and competitive tests without stress.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((feature, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-900">
                <CheckCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
