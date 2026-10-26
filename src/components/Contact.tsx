import React, { useState, useContext } from 'react';
import { Mail, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';
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
      aFr: "Je suis actuellement disponible pour de nouvelles missions en freelance ou des opportunités d'ingénierie logicielle.",
      aEn: "I am currently available for new freelance missions, consulting, and software engineering opportunities."
    },
    {
      qFr: "Quels types de projets développez-vous ?",
      qEn: "What kind of projects do you build?",
      aFr: "Des applications web complètes (Next.js, React, Node.js, Spring Boot), des applications mobiles cross-platform (React Native & Expo), des refontes d'interfaces et des APIs REST sécurisées.",
      aEn: "Full-scale web applications (Next.js, React, Node.js, Spring Boot), cross-platform mobile apps (React Native & Expo), modern frontend redesigns, and secure REST APIs."
    },
    {
      qFr: "Effectuez-vous des missions à distance (remote) ?",
      qEn: "Do you work remotely?",
      aFr: "Oui, j'effectue l'essentiel de mes missions à distance avec des points synchrones réguliers (Google Meet, Slack, Discord) et un suivi de tickets agile.",
      aEn: "Yes, I work predominantly remote with regular video syncs (Google Meet, Slack, Discord) and structured agile project tracking."
    },
    {
      qFr: "Quel est votre délai moyen de réponse ?",
      qEn: "What is your average response time?",
      aFr: "Je réponds généralement en moins de 24 heures par email ou directement sur WhatsApp.",
      aEn: "I typically respond in under 24 hours via email or directly via WhatsApp."
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 bg-slate-100/70 dark:bg-[#313552] text-slate-900 dark:text-white border-t border-slate-200 dark:border-[#ffc576]/15 relative transition-colors duration-300"
    >
      <div className="boyer-container">
        
        {/* CARTE CONTACT EXACT STYLE JONATHAN BOYER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-14 bg-white dark:bg-[#1f2235] border border-slate-200 dark:border-[#ffc576]/30 rounded-sm mb-20 text-left shadow-xl"
        >
          <span className="section__top-title">
            {isEn ? "Request a Quote" : "Obtenir un devis"}
          </span>
          <h2 className="section__title !mb-4">
            {isEn ? "Get In Touch" : "Me contacter"}
          </h2>
          
          <p className="text-slate-600 dark:text-[#9899a8] text-base sm:text-lg max-w-2xl leading-relaxed mb-10">
            {isEn
              ? "Please provide as much detail as possible about your project so I can accurately assess scope, timelines, and technical requirements."
              : "Merci de donner un maximum de détails sur le projet afin que je puisse évaluer correctement la charge de travail et vos besoins techniques."}
          </p>

          <form onSubmit={handleSend} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-[#cbd5e1] block mb-2">
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
                  className="w-full bg-slate-50 dark:bg-[#2c304a] border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white rounded-xs px-4 py-3 text-sm focus:border-[#d97706] dark:focus:border-[#ffc576] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-[#cbd5e1] block mb-2">
                  {isEn ? "Email Address" : "Adresse Email"} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="votre-email@domaine.com"
                  required
                  className="w-full bg-slate-50 dark:bg-[#2c304a] border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white rounded-xs px-4 py-3 text-sm focus:border-[#d97706] dark:focus:border-[#ffc576] outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-[#cbd5e1] block mb-2">
                {isEn ? "Project Description" : "Description du projet & Objectifs"} *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={
                  isEn
                    ? "Tell me about your application, key features, target timeline..."
                    : "Présentez brièvement vos besoins, vos fonctionnalités clés, vos échéances..."
                }
                required
                minLength={10}
                rows={5}
                className="w-full bg-slate-50 dark:bg-[#2c304a] border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white rounded-xs p-4 text-sm focus:border-[#d97706] dark:focus:border-[#ffc576] outline-none transition-colors leading-relaxed"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                className="btn-boyer !py-3.5 !px-8 text-xs self-start"
              >
                <span>{isEn ? "Send Message via WhatsApp" : "Obtenir un devis via WhatsApp"}</span>
                <ArrowRight size={14} className="icon-arrow" />
              </button>

              <div className="flex items-center gap-6 text-xs text-slate-500 dark:text-[#9899a8]">
                <a 
                  href="mailto:gameurbamba68@gmail.com" 
                  className="hover:text-[#d97706] dark:hover:text-[#ffc576] transition-colors flex items-center gap-1.5"
                >
                  <Mail size={14} />
                  <span>gameurbamba68@gmail.com</span>
                </a>
                <span className="hidden sm:inline text-slate-300 dark:text-white/20">•</span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} />
                  <span>Sénégal / Remote</span>
                </span>
              </div>
            </div>

            {submitted && (
              <div className="p-4 bg-emerald-500/10 border border-emerald-500 text-emerald-600 dark:text-emerald-400 text-xs font-semibold rounded-xs flex items-center gap-2">
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

        {/* SECTION FAQ STYLE JONATHAN BOYER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          <div className="lg:col-span-4">
            <span className="section__top-title">FAQ</span>
            <h3 className="section__title !text-3xl">
              {isEn ? "Frequently Asked Questions" : "Les questions fréquentes"}
            </h3>
            <p className="text-slate-600 dark:text-[#9899a8] text-sm leading-relaxed">
              {isEn
                ? "Here are the most common questions clients and collaborators ask before starting a project."
                : "Voici les réponses aux questions les plus courantes avant de lancer une collaboration."}
            </p>
          </div>

          <div className="lg:col-span-8 space-y-6">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="p-6 bg-white dark:bg-[#1f2235]/70 border border-slate-200 dark:border-[#ffc576]/20 rounded-sm hover:border-[#d97706] dark:hover:border-[#ffc576]/60 transition-colors shadow-xs"
              >
                <h4 className="font-serif text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {isEn ? faq.qEn : faq.qFr}
                </h4>
                <p className="text-sm text-slate-600 dark:text-[#9899a8] leading-relaxed">
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
