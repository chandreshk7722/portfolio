import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { PROFILE, STATS } from "../lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 sm:py-36 border-b border-white/10"
      data-testid="about-section"
    >
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel
          id="01"
          label="About"
          title={
            <>
              A frontend craftsman
              <br />
              shipping for <span className="text-acid">5+ years</span>.
            </>
          }
          dataTestId="about-header"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-neutral-300 text-base sm:text-lg leading-relaxed"
          >
            <p>{PROFILE.longBio}</p>
            <p>
              I'm currently shipping a B2B procurement platform at{" "}
              <span className="text-acid">Mercanis</span>, previously led frontend
              quality improvements at <span className="text-acid">Dechea</span> in
              healthcare, and built reusable libraries powering Cult.fit's
              health-tracking experience.
            </p>
            <div className="grid grid-cols-2 gap-px bg-white/10 mt-10 border border-white/10">
              {STATS.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="bg-obsidian p-5 sm:p-7"
                  data-testid={`about-stat-${i}`}
                >
                  <div className="font-display text-4xl sm:text-5xl font-black text-white">
                    {s.value}
                  </div>
                  <div className="mt-2 font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-neutral-500">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9 }}
            className="lg:col-span-5"
          >
            <div className="border border-white/15 p-6 sm:p-8 bg-surface/40 brutalist-shadow">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-5">
                ⟶ Profile
              </div>
              <dl className="space-y-4 font-mono text-sm">
                <Row k="Name" v={PROFILE.name} />
                <Row k="Role" v={PROFILE.title} />
                <Row k="Years" v={PROFILE.yearsExperience} />
                <Row k="Location" v={PROFILE.location} />
                <Row k="Email" v={PROFILE.email} link={`mailto:${PROFILE.email}`} />
                <Row k="GitHub" v={`@${PROFILE.githubHandle}`} link={PROFILE.github} />
                <Row k="LinkedIn" v={PROFILE.linkedinHandle} link={PROFILE.linkedin} />
                <Row k="Status" v={<span className="text-acid">Available</span>} />
              </dl>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Row({ k, v, link }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-white/5 pb-3">
      <dt className="text-neutral-500 text-[11px] uppercase tracking-[0.2em] w-20 shrink-0">
        {k}
      </dt>
      <dd className="text-neutral-100 break-all">
        {link ? (
          <a href={link} target="_blank" rel="noreferrer" className="link-underline hover:text-acid">
            {v}
          </a>
        ) : (
          v
        )}
      </dd>
    </div>
  );
}
