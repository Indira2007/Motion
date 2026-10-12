import { content } from "@/data/content";
import { connection } from "next/server";
import { Suspense } from "react";

async function CopyrightYear() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export function Footer() {
  const { footer } = content;

  return (
    <footer className="bg-blue-950 text-slate-300">
      {/* Final CTA Band */}
      <div className="bg-blue-900 border-b border-blue-800">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Start your JEE / NEET journey this year</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors shadow-md">
              Apply now
            </button>
            <button className="px-8 py-3 border border-white text-white font-medium rounded-lg hover:bg-blue-800 transition-colors">
              Talk to counsellor
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-2xl font-bold text-white mb-4">Motion Academy, Siddipet </div>
            <p className="text-sm leading-relaxed">{footer.info}</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Programmes</h3>
            <ul className="space-y-2">
              {footer.programmes.map((prog, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{prog}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 uppercase tracking-wide text-sm">Connect With Us</h3>
            <ul className="flex flex-wrap gap-4">
              {footer.social.map((social, idx) => (
                <li key={idx}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{social}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div className="flex flex-wrap gap-4">
            <a href="#" className="hover:text-white transition-colors">{footer.bottom.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{footer.bottom.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{footer.bottom.refund}</a>
          </div>
          <div>
            {footer.bottom.affiliation} &copy; <Suspense fallback={null}><CopyrightYear /></Suspense>
          </div>
        </div>
      </div>
    </footer>
  );
}
