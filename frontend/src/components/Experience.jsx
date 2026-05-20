import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";
import { EXPERIENCE } from "../lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-36 border-b border-white/10"
      data-testid="experience-section"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel
          id="02"
          label="Work · Log"
          title={
            <>
              Where I've
              <br />
              <span className="text-acid">shipped value</span>.
            </>
          }
          dataTestId="experience-header"
        />

        {/* Terminal/log style */}
        <div className="border border-white/15 bg-surface/40 brutalist-shadow">
          {/* terminal header */}
          <div className="flex items-center justify-between border-b border-white/15 px-4 sm:px-6 py-3 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-redalert" />
              <span className="w-2 h-2 bg-yellow-400" />
              <span className="w-2 h-2 bg-acid" />
              <span className="ml-3 hidden sm:inline">~/career — work_history.log</span>
            </div>
            <span>{EXPERIENCE.length} entries</span>
          </div>

          <ol className="divide-y divide-white/10">
            {EXPERIENCE.map((job, idx) => (
              <motion.li
                key={job.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: idx * 0.08 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 px-4 sm:px-6 lg:px-10 py-8 sm:py-12 hover:bg-acid/[0.03] transition-colors group"
                data-testid={`experience-${job.company.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="lg:col-span-3 font-mono">
                  <div className="text-acid text-[11px] uppercase tracking-[0.2em] mb-2">
                    {String(idx + 1).padStart(2, "0")} /{" "}
                    {String(EXPERIENCE.length).padStart(2, "0")}
                  </div>
                  <div className="text-neutral-300 text-sm">{job.period}</div>
                  <div className="text-neutral-500 text-xs mt-1">{job.location}</div>
                </div>

                <div className="lg:col-span-9">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
                    <h3 className="font-display font-black uppercase tracking-tight text-3xl sm:text-4xl lg:text-5xl leading-[0.95]">
                      {job.company}
                    </h3>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-400">
                      {job.role}
                    </span>
                  </div>

                  <ul className="space-y-2.5 text-neutral-300 text-sm sm:text-base mb-5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 leading-relaxed">
                        <span className="text-acid mt-2 shrink-0">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.stack.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-wider border border-white/15 px-2.5 py-1 text-neutral-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          {/* terminal footer */}
          <div className="flex items-center gap-2 border-t border-white/15 px-4 sm:px-6 py-3 font-mono text-[11px] text-neutral-500">
            <span className="text-acid">$</span>
            <span>cat next_chapter.md</span>
            <span className="ml-1 w-2 h-3.5 bg-acid animate-blink inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
}
