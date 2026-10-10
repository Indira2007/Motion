import { content } from "@/data/content";

export function Stats() {
  const { stats } = content;

  return (
    <section className="bg-orange-500 py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center justify-center p-4">
            <span className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</span>
            <span className="text-sm md:text-base font-medium text-orange-50 uppercase tracking-wide">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
