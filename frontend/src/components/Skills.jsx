import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import SectionLabel from "./SectionLabel";
import { SKILLS, SKILLS_MARQUEE } from "../lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 sm:py-36 border-b border-white/10 overflow-hidden"
      data-testid="skills-section"
    >
      {/* Kinetic background marquee */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 -z-10 marquee-mask">
        <Marquee gradient={false} speed={70} className="opacity-[0.06]">
          <span className="font-display font-black uppercase text-[14vw] tracking-tighter leading-none mr-12 whitespace-nowrap">
            STACK · SHIP · ITERATE ·
          </span>
        </Marquee>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel
          id="04"
          label="Stack"
          title={
            <>
              The toolkit
              <br />I <span className="text-acid">ship with</span>.
            </>
          }
          dataTestId="skills-header"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {Object.entries(SKILLS).map(([cat, items], idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className="bg-obsidian p-6 sm:p-8 hover:bg-surface/60 transition-colors"
              data-testid={`skill-category-${cat.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-display font-bold uppercase text-lg sm:text-xl tracking-tight">
                  {cat}
                </h3>
                <span className="font-mono text-[10px] text-neutral-500">
                  0{idx + 1}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => (
                  <li
                    key={s}
                    className="font-mono text-[11px] uppercase tracking-wider border border-white/15 px-3 py-1.5 text-neutral-300 hover:border-acid hover:text-acid transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Foreground marquee */}
        <div className="mt-16 sm:mt-20 -mx-6 sm:-mx-10 lg:-mx-16 border-y border-white/10 py-6">
          <Marquee gradient={false} speed={45}>
            {SKILLS_MARQUEE.concat(SKILLS_MARQUEE).map((s, i) => (
              <span
                key={i}
                className="font-display font-black uppercase text-3xl sm:text-5xl tracking-tighter mx-8 flex items-center gap-8"
              >
                <span className={i % 3 === 0 ? "text-acid" : i % 3 === 1 ? "text-white" : "text-stroke"}>
                  {s}
                </span>
                <span className="text-acid/60">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
