import React, { useState, useContext } from 'react';
import { Mail, MapPin, ArrowRight, CheckCircle2, MessageSquare, HelpCircle } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Contact() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const faqs = [
    {
      qFr: "Quelles sont vos disponibilités actuelles ?",
      qEn: "What is your current availability?",
      aFr: "Je suis disponible pour des opportunités en CDI / CDD, des missions freelance ou des collaborations d'ingénierie logicielle.",
      aEn: "I am available for full-time engineering roles, freelance contracts, and software engineering collaborations."
    },
    {
      qFr: "Quels types de projets développez-vous ?",
      qEn: "What kind of projects do you build?",
      aFr: "Des applications web fullstack complètes (Next.js, React, Node.js, NestJS), des systèmes de gestion commerciale (POS, stocks), des applications mobiles cross-platform (React Native & Expo) et des APIs sécurisées.",
      aEn: "Full-scale web applications (Next.js, React, Node.js, NestJS), business management systems (POS, inventory), cross-platform mobile apps (React Native & Expo), and secure APIs."
    },
    {
      qFr: "Travaillez-vous à distance (remote) ?",
      qEn: "Do you work remotely?",
      aFr: "Oui, j'effectue l'essentiel de mes collaborations en remote avec un suivi agile rigoureux (Slack, Discord, Google Meet) et des livraisons continues via Git/GitLab.",
      aEn: "Yes, I work predominantly remote with structured agile sprints (Slack, Discord, Google Meet) and continuous delivery pipelines via Git/GitLab."
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
      className="py-24 border-t border-zinc-200 dark:border-white/10 transition-colors"
    >
      <div className="portfolio-container">
        
        {/* CARTE CONTACT BENTO */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bento-card p-8 sm:p-12 mb-16 text-left"
        >
          <span className="section-tag">
            <MessageSquare size={12} />
            {isEn ? "Let's Build Together" : "Démarrer une collaboration"}
          </span>
          <h2 className="section-heading">
            {isEn ? "Get In Touch" : "Discutons de votre projet"}
          </h2>
          
          <p className="section-desc mb-8">
            {isEn
              ? "Share your project goals, technical scope, or job opportunity. I'll get back to you promptly."
              : "Partagez vos besoins, objectifs techniques ou propositions d'opportunité. Je vous réponds sous 24h."}
          </p>

          <form onSubmit={handleSend} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-2">
                  {isEn ? "Full Name" : "Nom & Prénom"} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isEn ? "John Doe" : "Mouhamadou Bamba"}
                  required
                  minLength={2}
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:border-zinc-900 dark:focus:border-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-2">
                  {isEn ? "Email Address" : "Adresse Email"} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre-email@domaine.com"
                  required
                  className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-lg px-4 py-2.5 text-sm focus:border-zinc-900 dark:focus:border-white outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-zinc-600 dark:text-zinc-400 block mb-2">
                {isEn ? "Project Description & Goals" : "Description du projet & Objectifs"} *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  isEn
                    ? "Tell me about your product, key features, target timeline..."
                    : "Présentez vos besoins, vos fonctionnalités clés, vos échéances..."
                }
                required
                minLength={10}
                rows={4}
                className="w-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-white/10 text-zinc-900 dark:text-white rounded-lg p-4 text-sm focus:border-zinc-900 dark:focus:border-white outline-none transition-colors leading-relaxed"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="btn-primary self-start"
              >
                <span>{isEn ? "Send via WhatsApp" : "Envoyer directement sur WhatsApp"}</span>
                <ArrowRight size={14} />
              </button>

              <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
                <a 
                  href="mailto:gameurbamba68@gmail.com" 
                  className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail size={13} />
                  <span>gameurbamba68@gmail.com</span>
                </a>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} />
                  <span>Sénégal / Remote</span>
                </span>
              </div>
            </div>

            {submitted && (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-lg flex items-center gap-2">
                <CheckCircle2 size={16} />
                <span>
                  {isEn 
                    ? "Redirecting to WhatsApp to send your message..." 
                    : "Redirection vers WhatsApp pour envoyer votre message..."}
                </span>
              </div>
            )}
          </form>
        </motion.div>

        {/* SECTION FAQ BENTO */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
          
          <div className="lg:col-span-4">
            <span className="section-tag">
              <HelpCircle size={12} />
              FAQ
            </span>
            <h3 className="section-heading !text-2xl">
              {isEn ? "Common Questions" : "Questions fréquentes"}
            </h3>
            <p className="section-desc text-sm">
              {isEn
                ? "Answers to the most common queries regarding availability, remote workflows, and tech stack."
                : "Réponses aux interrogations les plus fréquentes concernant mes disponibilités et modes de collaboration."}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-4">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="bento-card p-6"
              >
                <h4 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                  {isEn ? faq.qEn : faq.qFr}
                </h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {isEn ? faq.aEn : faq.aFr}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
