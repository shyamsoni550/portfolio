'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';
      
      // Validate that we have all required credentials
      if (serviceId === 'your_service_id' || templateId === 'your_template_id' || publicKey === 'your_public_key') {
        throw new Error('EmailJS credentials not configured. Please check your environment variables.');
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Vaya Shyam',
        },
        publicKey
      );
      
      setNotification({
        type: 'success',
        message: "Message sent successfully! I'll get back to you soon."
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error: unknown) {
      let errorMessage = 'Failed to send message. ';
      if (error instanceof Error && error.message) {
        errorMessage += error.message;
      } else if (typeof error === 'object' && error !== null && 'text' in error) {
        errorMessage += (error as { text: string }).text;
      } else {
        errorMessage += 'Please try again or contact me directly.';
      }
      
      setNotification({
        type: 'error',
        message: errorMessage
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setNotification(null), 5000);
    }
  };

 

  return (
    <section id="contact" className="bg-slate-950 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-black text-white">Let&apos;s build something useful</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Available for remote-first and high-growth full-stack roles, SaaS product work, REST API development, and production web projects.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm font-semibold">
            <a className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100" href="mailto:vayashyam550@gmail.com">
              vayashyam550@gmail.com
            </a>
            <a className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-cyan-100" href="tel:+917016445196">
              +91 7016445196
            </a>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
          <div className="bg-slate-900/80 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
              <span className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </span>
              Send Message
            </h3>

            {/* Notification */}
            {notification && (
              <div className={`mb-6 p-4 rounded-lg border ${
                notification.type === 'success' 
                  ? 'bg-green-900/50 border-green-500/50 text-green-300' 
                  : 'bg-red-900/50 border-red-500/50 text-red-300'
              }`}>
                {notification.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-slate-300 text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-slate-300 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-950/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-slate-300 text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-950/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300"
                  placeholder="Project Collaboration"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-slate-300 text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-950/70 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-cyan-400 hover:bg-cyan-300 disabled:bg-cyan-800 text-slate-950 font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 disabled:shadow-none flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                    </svg>
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
