import React, { useState, useContext, useRef } from 'react';
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle, Loader2, CheckCircle, XCircle } from 'lucide-react';
import { LangueContext } from '../context/langueContext';
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";

  const form = useRef<HTMLFormElement | null>(null);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_service_id as string,
        import.meta.env.VITE_template_id as string,
        form.current as HTMLFormElement,
        import.meta.env.VITE_public_key as string
      );

      setStatus("success");
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin size={24} />, url: 'https://linkedin.com/in/alexandre-dev', color: 'hover:text-blue-600' },
    { name: 'GitHub', icon: <Github size={24} />, url: 'https://github.com/alexandre-dev', color: 'hover:text-gray-800' },
    { name: 'Email', icon: <Mail size={24} />, url: 'mailto:gameurbamba68@gmail.com', color: 'hover:text-red-600' },
    { name: 'WhatsApp', icon: <MessageCircle size={24} />, url: 'https://wa.me/221778257162', color: 'hover:text-green-600' }
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 text-primary overflow-hidden">
      <div className="container-max">

        {/* --- TITLE --- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {langue === 'fr' ? 'Contactez-moi' : 'Contact Me'}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {langue === 'fr'
              ? "Prêt à collaborer sur votre prochain projet ? N'hésitez pas à me contacter !"
              : "Ready to collaborate on your next project? Feel free to reach out!"}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* --- LEFT --- */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">
              {langue === 'fr' ? 'Informations de contact' : 'Contact Information'}
            </h3>

            <div className="space-y-6">
              {[ 
                { icon: <Mail size={20} />, title: "Email", text: "gameurbamba68@gmail.com" },
                { icon: <Phone size={20} />, title: langue === 'fr' ? "Téléphone" : "Phone", text: "+221 77 825 71 62" },
                { icon: <MapPin size={20} />, title: langue === 'fr' ? "Localisation" : "Location", text: "Sénégal, Saint-Louis" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <div className="bg-primary text-white rounded-full p-3">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold">{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">
                {langue === 'fr' ? 'Suivez-moi' : 'Follow Me'}
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.url}
                    target="_blank"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`transition-colors duration-300 ${link.color}`}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* --- RIGHT (FORM) --- */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white text-primary rounded-2xl p-8 shadow-lg">
              <h3 className=" text-2xl font-bold mb-6 text-primary">
                {langue === 'fr' ? 'Envoyez-moi un message' : 'Send me a message'}
              </h3>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">

                {["name", "email", "message"].map((field, i) => (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                  >
                    <label className="block text-sm font-medium mb-2 text-primary">
                      {field === "name"
                        ? langue === "fr" ? "Nom complet" : "Full Name"
                        : field === "email"
                          ? "Email"
                          : "Message"}
                    </label>

                    {field !== "message" ? (
                      <input
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        value={(formData as any)[field]}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition-all duration-300"
                      />
                    ) : (
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                      />
                    )}
                  </motion.div>
                ))}

                {/* --- Button --- */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={!loading ? { scale: 1.04 } : {}}
                  whileTap={!loading ? { scale: 0.95 } : {}}
                  className={`w-full btn-primary flex items-center justify-center gap-2 py-3 rounded-lg transition-all ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? (
                    <Loader2 size={20} className="animate-spin" />
                  ) : (
                    <Send size={20} />
                  )}
                  {loading
                    ? (langue === "fr" ? "Envoi..." : "Sending...")
                    : (langue === "fr" ? "Envoyer le message" : "Send Message")}
                </motion.button>

                {/* --- Success / Error message --- */}
                <AnimatePresence>
                  {status && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`mt-4 p-3 rounded-lg flex items-center gap-3 ${
                        status === "success"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {status === "success" ? (
                        <CheckCircle size={22} />
                      ) : (
                        <XCircle size={22} />
                      )}

                      <p className="text-sm">
                        {status === "success"
                          ? (langue === "fr" ? "Message envoyé avec succès !" : "Message sent successfully!")
                          : (langue === "fr" ? "Erreur lors de l'envoi." : "Error sending message.")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
