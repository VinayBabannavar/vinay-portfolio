import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle, Copy } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [copiedText, setCopiedText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate sending mail
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-[#18181b] relative overflow-hidden border-t border-white/5">
      {/* Decorative Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Have a project in mind, an internship opportunity, or just want to connect? Reach out using the details or form below!
          </p>
          <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Contact Details (Left - 5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 space-y-6 h-full flex flex-col justify-center">
              <h3 className="font-display font-semibold text-xl text-white mb-6">
                Connect Directly
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Email</span>
                      <a href="mailto:vinaybabannavar@gmail.com" className="text-sm sm:text-base font-medium text-slate-300 hover:text-indigo-400 transition-colors">
                        vinaybabannavar@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('vinaybabannavar@gmail.com', 'email')}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    title="Copy Email"
                  >
                    {copiedText === 'email' ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone */}
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 text-purple-400 rounded-lg">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Phone</span>
                      <a href="tel:+918971093279" className="text-sm sm:text-base font-medium text-slate-300 hover:text-purple-400 transition-colors">
                        +91 8971093279
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard('+918971093279', 'phone')}
                    className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                    title="Copy Phone Number"
                  >
                    {copiedText === 'phone' ? <CheckCircle className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg mr-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider">Location</span>
                    <span className="text-sm sm:text-base font-medium text-slate-300">
                      Bengaluru, India
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-white/5 flex items-center justify-center gap-6">
                <a
                  href="https://linkedin.com/in/vinay-b-0057b6339"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-indigo-400 hover:border-indigo-500/20 hover:bg-indigo-500/5 transition-all duration-300 w-1/2 justify-center"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/vinaybabannavar-create"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/5 border border-white/5 text-slate-300 hover:text-white hover:border-white/10 hover:bg-white/10 transition-all duration-300 w-1/2 justify-center"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form (Right - 7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-2xl border border-white/5 h-full">
              <h3 className="font-display font-semibold text-xl text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Your Name
                    </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full bg-[#09090b]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                        placeholder="John Doe"
                      />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Your Email
                    </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-[#09090b]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm"
                        placeholder="john@example.com"
                      />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Message
                  </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-[#09090b]/50 border border-white/10 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all text-sm resize-none"
                      placeholder="Hello Vinay, I'd like to talk to you about..."
                    ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed group shine-effect"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : isSent ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-300" />
                      Message Sent!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
