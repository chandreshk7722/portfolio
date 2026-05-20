import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";
import { PROJECTS } from "../lib/data";

const accentMap = {
  acid: "text-acid",
  white: "text-white",
  red: "text-redalert",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-24 sm:py-36 border-b border-white/10"
      data-testid="projects-section"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel
          id="03"
          label="Selected Work"
          title={
            <>
              Projects with
              <br />
              <span className="text-acid">real impact</span>.
            </>
          }
          dataTestId="projects-header"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {PROJECTS.map((p, idx) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.83, 0, 0.17, 1] }}
              className={`group relative bg-obsidian flex flex-col ${
                idx === 0 ? "lg:row-span-2" : ""
              }`}
              data-testid={`project-${p.name.toLowerCase().replace(/\./g, "-")}`}
            >
              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:flex-1 border-b border-white/10">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
                <div className="absolute top-3 left-3 font-mono text-[10px] uppercase tracking-[0.25em] bg-black/70 border border-white/20 px-2 py-1 text-neutral-300">
                  /{p.tag}
                </div>
                <div className="absolute top-3 right-3 font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-300">
                  {p.year}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <h3
                    className={`font-display font-black uppercase tracking-tighter text-3xl sm:text-4xl ${
                      accentMap[p.accent] || "text-white"
                    }`}
                  >
                    {p.name}
                  </h3>
                  <span className="text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight size={28} weight="bold" />
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex flex-col gap-4">
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider border border-white/15 px-2.5 py-1 text-neutral-400"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
