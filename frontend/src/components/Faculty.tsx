import { content } from "@/data/content";
import { BookOpen } from "lucide-react";

export function Faculty() {
  const { faculty } = content;

  return (
    // <section id="faculty" className="py-16 md:py-24 px-4 bg-slate-50">
    //   <div className="max-w-7xl mx-auto">
    //     <div className="text-center mb-12">
    //       <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Learn from the Best</h2>
    //       <p className="text-slate-600 max-w-2xl mx-auto">Our experienced faculty members are dedicated to your success and bring years of expertise.</p>
    //     </div>

    //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    //       {faculty.map((member, idx) => (
    //         <div key={idx} className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
    //           <div className="h-64 bg-gray-200 flex items-center justify-center text-sm text-gray-400 overflow-hidden">
    //             <div className="w-full h-full bg-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
    //               Photo [Placeholder]
    //             </div>
    //           </div>
    //           <div className="p-5 text-center">
    //             <h3 className="text-lg font-bold text-slate-900 mb-1">{member.name}</h3>
    //             <p className="text-blue-900 font-medium text-sm mb-2">{member.subject}</p>
    //             <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-semibold">
    //               <BookOpen className="w-3 h-3" />
    //               {member.experience}
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <></>
  );
}
