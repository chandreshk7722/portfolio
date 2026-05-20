import { PROFILE, NAV } from "../lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-obsidian" data-testid="site-footer">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <h3 className="font-display font-black uppercase tracking-tighter text-5xl sm:text-7xl lg:text-8xl leading-[0.85]">
              Built with <span className="text-acid">care</span>.
              <br />
              Shipped with <span className="text-stroke">intent</span>.
            </h3>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-6">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
                Navigate
              </div>
              <ul className="space-y-2">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      className="text-neutral-300 hover:text-acid font-mono text-sm uppercase tracking-wider"
                      data-testid={`footer-nav-${n.label.toLowerCase()}`}
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-3">
                Elsewhere
              </div>
              <ul className="space-y-2">
                <li>
                  <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-acid font-mono text-sm uppercase tracking-wider">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-acid font-mono text-sm uppercase tracking-wider">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`mailto:${PROFILE.email}`} className="text-neutral-300 hover:text-acid font-mono text-sm uppercase tracking-wider">
                    Email
                  </a>
                </li>
                <li>
                  <a href={PROFILE.cvUrl} download className="text-neutral-300 hover:text-acid font-mono text-sm uppercase tracking-wider" data-testid="footer-download-cv">
                    Resume / CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
          <span>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-acid rounded-full animate-pulse" />
            Designed & coded by hand · Last updated Dec 2025
          </span>
        </div>
      </div>
    </footer>
  );
}
