import { content } from "@/data/content";

export function AdmissionProcess() {
  const { admissionProcess } = content;

  return (
    <section id="admissions" className="py-16 md:py-24 px-4 bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Admission Process</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Simple steps to begin your journey towards a successful career.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {admissionProcess.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-orange-500 rounded-full flex items-center justify-center text-2xl font-bold text-orange-500 mb-6 shadow-sm">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
