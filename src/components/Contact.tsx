import React, { useState, useContext } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageCircle } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { LangueContext } from '../context/langueContext';

export default function Contact() {
  const themeContext = useContext(ThemeContext);
  const theme = themeContext?.theme ?? "light";

  const langueContext = useContext(LangueContext);
  const langue = langueContext?.langue ?? "fr";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    alert(langue === 'fr' ? 'Message envoyé avec succès !' : 'Message sent successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: 'https://linkedin.com/in/alexandre-dev',
      color: 'hover:text-blue-600'
    },
    {
      name: 'GitHub',
      icon: <Github size={24} />,
      url: 'https://github.com/alexandre-dev',
      color: 'hover:text-gray-800'
    },
    {
      name: 'Email',
      icon: <Mail size={24} />,
      url: 'mailto:gameurbamba68@gmail.com',
      color: 'hover:text-red-600'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle size={24} />,
      url: 'https://wa.me/221778257162',
      color: 'hover:text-green-600'
    }
  ];

  return (
    <section id="contact" className={`section-padding ${theme === "light" ? "bg-gray-50 text-gray-900" : "bg-gray-900 text-gray-50"}`}>
      <div className="container-max">
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
          {/* Contact Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8">
              {langue === 'fr' ? 'Informations de contact' : 'Contact Information'}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{langue === 'fr' ? 'Email' : 'Email'}</h4>
                  <p>gameurbamba68@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{langue === 'fr' ? 'Téléphone' : 'Phone'}</h4>
                  <p>+221 77 825 71 62</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary text-white rounded-full p-3">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold">{langue === 'fr' ? 'Localisation' : 'Location'}</h4>
                  <p>Sénégal, Saint-Louis</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="font-semibold mb-4">{langue === 'fr' ? 'Suivez-moi' : 'Follow Me'}</h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`transition-colors duration-300 ${link.color}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                {langue === 'fr' ? 'Envoyez-moi un message' : 'Send me a message'}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-primary">
                    {langue === 'fr' ? 'Nom complet' : 'Full Name'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder={langue === 'fr' ? 'Votre nom' : 'Your name'}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
                    {langue === 'fr' ? 'Email' : 'Email'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition-all duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
                    {langue === 'fr' ? 'Message' : 'Message'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                    placeholder={langue === 'fr' ? 'Décrivez votre projet ou votre demande...' : 'Describe your project or request...'}
                  />
                </div>
                
                <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                  <Send size={20} />
                  {langue === 'fr' ? 'Envoyer le message' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
