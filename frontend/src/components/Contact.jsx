import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { ArrowUpRight, EnvelopeSimple, GithubLogo, LinkedinLogo, PaperPlaneTilt } from "@phosphor-icons/react";
import SectionLabel from "./SectionLabel";
import MagneticButton from "./MagneticButton";
import { PROFILE } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill name, email and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      toast.success("Message received. I'll get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const msg = err?.response?.data?.detail || "Failed to send. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Failed to send.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-36 border-b border-white/10 overflow-hidden"
      data-testid="contact-section"
    >
      <div className="absolute inset-0 grid-bg opacity-30 -z-10" />
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16">
        <SectionLabel
          id="06"
          label="Contact"
          title={
            <>
              Have a project?
              <br />
              <span className="text-acid">Let's build it.</span>
            </>
          }
          kicker="I'm currently open to senior frontend roles, contract work, and ambitious product collaborations."
          dataTestId="contact-header"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left contact card */}
          <motion.aside
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            <a
              href={`mailto:${PROFILE.email}`}
              className="block border border-white/15 p-6 sm:p-8 brutalist-shadow"
              data-testid="contact-email-card"
            >
              <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-4">
                <span className="flex items-center gap-2">
                  <EnvelopeSimple size={14} weight="bold" /> Email
                </span>
                <ArrowUpRight size={14} weight="bold" />
              </div>
              <p className="font-display text-2xl sm:text-3xl uppercase tracking-tight break-all">
                {PROFILE.email}
              </p>
            </a>

            <div className="grid grid-cols-2 gap-px bg-white/10 border border-white/10">
              <SocialCard
                href={PROFILE.github}
                label="GitHub"
                value={`@${PROFILE.githubHandle}`}
                icon={<GithubLogo size={20} weight="duotone" />}
                testid="contact-github"
              />
              <SocialCard
                href={PROFILE.linkedin}
                label="LinkedIn"
                value={PROFILE.linkedinHandle}
                icon={<LinkedinLogo size={20} weight="duotone" />}
                testid="contact-linkedin"
              />
            </div>

            <div className="border border-white/15 p-6 bg-surface/40">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-acid mb-3">
                ⟶ Currently
              </div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                Based {PROFILE.location} · Working with global teams across EU & US time zones.
              </p>
            </div>
          </motion.aside>

          {/* Right form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 border border-white/15 bg-surface/40 p-6 sm:p-10 flex flex-col gap-5"
            data-testid="contact-form"
          >
            <Field
              label="Name"
              name="name"
              value={form.name}
              onChange={onChange}
              placeholder="Jane Doe"
              required
              testid="contact-input-name"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              placeholder="jane@company.com"
              required
              testid="contact-input-email"
            />
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={onChange}
              placeholder="A new project, role, or idea"
              testid="contact-input-subject"
            />
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell me a bit about what you're building…"
                rows={6}
                required
                className="w-full bg-transparent border-b border-white/20 focus:border-acid focus:outline-none py-3 text-neutral-100 placeholder:text-neutral-600 resize-none font-body"
                data-testid="contact-input-message"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">
                Avg. response time · 24h
              </p>
              <MagneticButton
                as="button"
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 bg-acid text-black font-mono text-xs uppercase tracking-[0.2em] px-7 py-4 disabled:opacity-60 hover:bg-white transition-colors"
                data-testid="contact-submit"
              >
                <PaperPlaneTilt size={16} weight="bold" />
                {loading ? "Sending…" : "Send message"}
              </MagneticButton>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, placeholder, required, testid }) {
  return (
    <div>
      <label className="block font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 mb-2">
        {label} {required && "*"}
      </label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full bg-transparent border-b border-white/20 focus:border-acid focus:outline-none py-3 text-neutral-100 placeholder:text-neutral-600 font-body"
        data-testid={testid}
      />
    </div>
  );
}

function SocialCard({ href, label, value, icon, testid }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="bg-obsidian p-5 sm:p-6 hover:bg-acid hover:text-black group transition-colors flex flex-col gap-3"
      data-testid={testid}
    >
      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500 group-hover:text-black">
        <span className="flex items-center gap-2">
          {icon} {label}
        </span>
        <ArrowUpRight size={14} weight="bold" />
      </div>
      <p className="font-display text-base sm:text-lg uppercase tracking-tight">{value}</p>
    </a>
  );
}
