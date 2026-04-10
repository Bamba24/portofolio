import React, { useState, useContext, useRef } from 'react';
import emailjs from "emailjs-com";
import { Mail, MapPin, MessageCircle, Loader2, CheckCircle, ArrowRight } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";
  const form = useRef(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_service_id,
        import.meta.env.VITE_template_id,
        form.current!,
        import.meta.env.VITE_public_key
      );
      setStatus("success");
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/50">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* --- GAUCHE : TEXTE & INFOS --- */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {langue === 'fr' ? "Discutons de votre projet" : "Let's talk about your project"}
              </h2>
              <p className="text-gray-500 mb-12 leading-relaxed">
                {langue === 'fr'
                  ? "Vous avez une idée ou un besoin spécifique ? Je suis disponible pour transformer vos concepts en réalité digitale."
                  : "Have an idea or a specific need? I'm available to turn your concepts into digital reality."}
              </p>

              <div className="space-y-8">
                {[ 
                  { icon: <Mail size={18} />, label: "Email", value: "gameurbamba68@gmail.com", href: "mailto:gameurbamba68@gmail.com" },
                  { icon: <MessageCircle size={18} />, label: "WhatsApp", value: "+221 77 825 71 62", href: "https://wa.me/221778257162" },
                  { icon: <MapPin size={18} />, label: "Sénégal", value: "Saint-Louis / Remote", href: "#" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-center group">
                    <div className="w-10 h-10 rounded-full bg-white border border-slate-100 flex items-center justify-center text-blue-900 shadow-sm group-hover:bg-blue-900 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.label}</p>
                      <a href={item.href} className="text-sm font-bold text-slate-700 hover:text-blue-900 transition-colors">
                        {item.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* --- DROITE : FORMULAIRE --- */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-sm border border-slate-100 shadow-xl shadow-slate-200/50"
            >
              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      {langue === 'fr' ? 'Nom complet' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-50 border-none rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900/10 transition-all outline-none"
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
                      className="w-full bg-slate-50 border-none rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900/10 transition-all outline-none"
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
                    className="w-full bg-slate-50 border-none rounded-sm px-4 py-3 text-sm focus:ring-2 focus:ring-blue-900/10 transition-all outline-none resize-none"
                    placeholder={langue === 'fr' ? "Parlez-moi de votre projet..." : "Tell me about your project..."}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-900 text-white font-bold uppercase tracking-widest text-xs py-4 rounded-sm hover:bg-slate-800 transition-all flex items-center justify-center gap-3 group"
                >
                  {loading ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <>
                      {langue === 'fr' ? "Envoyer" : "Send"}
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 text-emerald-600 text-xs font-bold justify-center pt-2"
                    >
                      <CheckCircle size={14} />
                      {langue === "fr" ? "Message envoyé !" : "Message sent!"}
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}