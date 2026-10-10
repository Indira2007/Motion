import { content } from "@/data/content";

export function TopBar() {
  const { topBar } = content;
  
  return (
    <div className="bg-blue-900 text-white text-sm py-2 px-4 flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="flex items-center gap-4">
        <span>Helpline: {topBar.helpline}</span>
      </div>
      <div className="text-center font-medium">
        {topBar.scholarshipText}
      </div>
      <div className="flex gap-2">
        {topBar.languages.map((lang, idx) => (
          <button key={idx} className="hover:text-orange-400 transition-colors">
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
