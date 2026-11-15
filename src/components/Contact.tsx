import React, { useState, useContext } from 'react';
import {
  Mail,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
  Github,
  Linkedin,
  MessageCircle,
  BookOpen,
  ArrowUpRight,
  ChevronDown,
  Copy,
  Check
} from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = "221778257162";
    const text = isEn
      ? `Hello Bamba 👋,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nProject Details:\n${formData.message}`
      : `Bonjour Bamba 👋,\n\nNom & Prénom: ${formData.name}\nEmail: ${formData.email}\n\nDescription du projet:\n${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("gameurbamba68@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      handle: "@Bamba24",
      url: "https://github.com/Bamba24",
      icon: <Github size={18} />
    },
    {
      name: "LinkedIn",
      handle: "Bamba Diagne",
      url: "https://www.linkedin.com/in/mouhamadou-bamba-diagne-59063a247/",
      icon: <Linkedin size={18} />
    },
    {
      name: "WhatsApp",
      handle: "+221 77 825 71 62",
      url: "https://wa.me/221778257162",
      icon: <MessageCircle size={18} />
    },
    {
      name: "bamba.dev",
      handle: "Tech Blog",
      url: "https://bamba-dev.vercel.app/",
      icon: <BookOpen size={18} />
    }
  ];

  const faqs = [
    {
      qFr: "Quelles sont vos disponibilités actuelles ?",
      qEn: "What is your current availability?",
      aFr: "Je suis disponible pour des opportunités en CDI / CDD, des missions freelance ou des collaborations d'ingénierie logicielle (Dakar ou Remote).",
      aEn: "I am available for full-time engineering roles, freelance contracts, and software engineering collaborations (Dakar or Remote)."
    },
    {
      qFr: "Quels types de projets développez-vous ?",
      qEn: "What kind of projects do you build?",
      aFr: "Des applications web fullstack (Next.js, React, Node.js, NestJS), des systèmes de gestion commerciale (POS, stocks), des applications mobiles (React Native & Expo) et des APIs sécurisées.",
      aEn: "Full-scale web applications (Next.js, React, Node.js, NestJS), business management systems (POS, inventory), mobile apps (React Native & Expo), and secure APIs."
    },
    {
      qFr: "Quel est votre délai moyen de réponse ?",
      qEn: "What is your average response time?",
      aFr: "Je réponds généralement en moins de 24 heures par email ou directement via WhatsApp.",
      aEn: "I typically reply within 24 hours via email or directly via WhatsApp."
    }
  ];

  return (
    <section
      id="contact"
      className="py-20 border-t border-zinc-200 dark:border-white/10 transition-colors"
    >
      <div className="portfolio-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left">
          
          {/* COLONNE GAUCHE (7 COLS) : FORMULAIRE DIRECT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bento-card p-6 sm:p-9"
          >
            <span className="section-tag">
              <MessageSquare size={12} />
              {isEn ? "Direct Contact" : "Contact Direct"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white tracking-tight mb-2">
              {isEn ? "Let's Build Together" : "Discutons de votre projet"}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
              {isEn
                ? "Have a full-time role, freelance project, or technical question? Send a direct message or copy my email."
                : "Une opportunité d'équipe, un projet freelance ou un besoin technique ? Écrivez-moi directement ci-dessous."}
            </p>

            <form onSubmit={handleSend} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                    {isEn ? "Your Name" : "Nom & Prénom"} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={isEn ? "John Doe" : "Mouhamadou Bamba"}
                    required
                    minLength={2}
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:border-amber-500 dark:focus:border-amber-400 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                    {isEn ? "Email Address" : "Adresse Email"} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@entreprise.com"
                    required
                    className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-lg px-3.5 py-2.5 text-xs sm:text-sm focus:border-amber-500 dark:focus:border-amber-400 outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block mb-1.5">
                  {isEn ? "Message / Project Scope" : "Message / Détails du besoin"} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={
                    isEn
                      ? "Tell me about your product, tech stack, or timeline..."
                      : "Présentez brièvement votre projet, votre stack ou votre opportunité..."
                  }
                  required
                  minLength={10}
                  rows={4}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-lg p-3.5 text-xs sm:text-sm focus:border-amber-500 dark:focus:border-amber-400 outline-none transition-colors leading-relaxed"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="btn-primary !py-2.5 !px-5 !text-xs"
                >
                  <span>{isEn ? "Send via WhatsApp" : "Envoyer sur WhatsApp"}</span>
                  <ArrowRight size={14} />
                </button>

                <button
                  type="button"
                  onClick={copyEmail}
                  className="btn-secondary !py-2 !px-3.5 !text-xs font-mono"
                >
                  {copied ? (
                    <>
                      <Check size={13} className="text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">
                        {isEn ? "Copied!" : "Copié !"}
                      </span>
                    </>
                  ) : (
                    <>
                      <Mail size={13} />
                      <span>gameurbamba68@gmail.com</span>
                      <Copy size={11} className="opacity-60" />
                    </>
                  )}
                </button>
              </div>

              {submitted && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-lg flex items-center gap-2">
                  <CheckCircle2 size={15} />
                  <span>
                    {isEn
                      ? "Redirecting to WhatsApp..."
                      : "Ouverture de WhatsApp avec votre message..."}
                  </span>
                </div>
              )}
            </form>
          </motion.div>

          {/* COLONNE DROITE (5 COLS) : RÉSEAUX BENTO 2x2 + ACCORDÉON FAQ */}
          <div id="social" className="lg:col-span-5 space-y-5">
            
            {/* Grille 2x2 des réseaux */}
            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-card p-4 flex flex-col justify-between group cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-white/10">
                      {item.icon}
                    </div>
                    <ArrowUpRight size={15} className="text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div>
                    <strong className="text-sm font-bold text-zinc-900 dark:text-white block">
                      {item.name}
                    </strong>
                    <span className="text-[11px] font-mono text-zinc-500 dark:text-zinc-400 truncate block">
                      {item.handle}
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Accordéon FAQ Compact */}
            <div className="bento-card divide-y divide-zinc-200/80 dark:divide-white/10 overflow-hidden">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="p-4">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-2 text-left cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-white">
                        {isEn ? faq.qEn : faq.qFr}
                      </span>
                      <ChevronDown
                        size={15}
                        className={`text-zinc-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-amber-500" : ""
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-2.5 overflow-hidden"
                        >
                          {isEn ? faq.aEn : faq.aFr}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
