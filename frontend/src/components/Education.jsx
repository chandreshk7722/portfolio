import { motion } from "framer-motion";
import { GraduationCap, Certificate, Trophy } from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";
import { EDUCATION, CERTS, AWARDS } from "../lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-24 sm:py-36 border-b border-white/10"
      data-testid="education-section"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel
          id="05"
          label="Credentials"
          title={
            <>
              Education,
              <br />
              <span className="text-acid">certs & wins</span>.
            </>
          }
          dataTestId="education-header"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          <Block
            icon={<GraduationCap size={22} weight="duotone" />}
            label="Education"
            testid="block-education"
          >
            <h3 className="font-display font-bold uppercase text-xl leading-tight">
              {EDUCATION.degree}
            </h3>
            <p className="text-neutral-400 mt-2">{EDUCATION.school}</p>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-acid mt-3">
              {EDUCATION.period}
            </p>
          </Block>

          <Block
            icon={<Certificate size={22} weight="duotone" />}
            label="Certifications"
            testid="block-certifications"
          >
            <ul className="space-y-3">
              {CERTS.map((c, i) => (
                <li key={c} className="flex gap-3 text-neutral-300 text-sm">
                  <span className="font-mono text-acid text-xs mt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block
            icon={<Trophy size={22} weight="duotone" />}
            label="Awards"
            testid="block-awards"
          >
            <ul className="space-y-3">
              {AWARDS.map((a, i) => (
                <li key={a} className="flex gap-3 text-neutral-300 text-sm">
                  <span className="text-acid">★</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({ icon, label, testid, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="bg-obsidian p-6 sm:p-8 hover:bg-surface/60 transition-colors"
      data-testid={testid}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3 text-acid">
          {icon}
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-400">
            {label}
          </span>
        </div>
      </div>
      {children}
    </motion.div>
  );
}
