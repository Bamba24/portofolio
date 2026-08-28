import React, { useState, useContext } from 'react';
import { Mail, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion } from "framer-motion";

export default function Contact() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const isEn = langue === 'en';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendWhatsAppMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const phoneNumber = "221778257162";
    const text = isEn
      ? `Hello Bamba 👋,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      : `Bonjour Bamba 👋,\n\nNom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-slate-50/50 dark:bg-slate-950/40 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* GAUCHE : TEXTE & INFOS DE CONTACT (Aligné à gauche) */}
          <div className="lg:col-span-5 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-2">
                  {isEn ? "Get In Touch" : "Me contacter"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {isEn ? "Let's Talk About Your Project" : "Discutons de votre projet"}
                </h2>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                {isEn
                  ? "Have a project idea or a specific need? Fill out this form to message me directly on WhatsApp."
                  : "Vous avez une idée de projet ou un besoin spécifique ? Remplissez ce formulaire pour m'envoyer un message directement sur WhatsApp."}
              </p>

              <div className="space-y-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
                {[ 
                  { icon: <Mail size={18} />, label: "Email", value: "gameurbamba68@gmail.com", href: "mailto:gameurbamba68@gmail.com" },
                  { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+221 77 825 71 62", href: "https://wa.me/221778257162" },
                  { icon: <MapPin size={18} />, label: "Localisation", value: "Saint-Louis / Remote, Sénégal", href: "#" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-10 h-10 rounded-md bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center text-blue-900 dark:text-blue-400 shadow-2xs group-hover:bg-blue-900 group-hover:text-white dark:group-hover:bg-blue-600 transition-all shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                      <a href={item.href} className="text-sm font-bold text-slate-800 dark:text-slate-200 hover:text-blue-900 dark:hover:text-blue-400 transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* DROITE : FORMULAIRE WHATSAPP */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-900 p-8 sm:p-10 rounded-md border border-slate-200/80 dark:border-slate-800 shadow-xs"
            >
              <form onSubmit={sendWhatsAppMessage} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {isEn ? 'Full Name' : 'Nom complet'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900/20 dark:focus:ring-blue-400/20 transition-all outline-none"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900/20 dark:focus:ring-blue-400/20 transition-all outline-none"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900/20 dark:focus:ring-blue-400/20 transition-all outline-none resize-none"
                    placeholder={isEn ? "Tell me about your project..." : "Parlez-moi de votre projet..."}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-sm transition-all flex items-center justify-center gap-3 shadow-xs group cursor-pointer active:scale-98"
                >
                  <MessageCircle size={18} />
                  <span>{isEn ? "Send via WhatsApp" : "Envoyer via WhatsApp"}</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}