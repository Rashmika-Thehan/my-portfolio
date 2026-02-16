import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope, FaDownload, FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const mailtoLink = `mailto:rashmikathethan4@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      window.location.href = mailtoLink;
      
      setStatus('success');
      setTimeout(() => setStatus(''), 3000);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (_error) {
      setStatus('error');
      setTimeout(() => setStatus(''), 3000);
    }
  };

  const contactInfo = {
    email: 'rashmikathethan4@gmail.com',
    phone: '+94 78 675 5125',
    whatsapp: '+94750769447',
    github: 'https://github.com/Rashmika-Thehan',
    linkedin: 'https://www.linkedin.com/in/rashmika-thehan-76a02027b',
    cv: '/Rashmika_Thehan_CV-FS.pdf'
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3">
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="space-y-3">
              {/* Email */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-blue-400 text-lg" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white text-sm font-semibold hover:text-blue-400 transition-colors truncate block">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-teal-500/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-teal-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white text-sm font-semibold hover:text-teal-400 transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700 hover:border-green-500/50 transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-green-400 text-lg" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">WhatsApp</p>
                    <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white text-sm font-semibold hover:text-green-400 transition-colors">
                      +94 75 076 9447
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links & CV */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white">Connect With Me</h3>
              
              {/* Social Links */}
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href={contactInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700 hover:border-gray-400 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaGithub className="text-gray-300 text-xl" />
                  <span className="text-gray-300 text-sm font-semibold">GitHub</span>
                </a>

                <a 
                  href={contactInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 border border-slate-700 hover:border-blue-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaLinkedin className="text-blue-400 text-xl" />
                  <span className="text-gray-300 text-sm font-semibold">LinkedIn</span>
                </a>
              </div>

              {/* Download CV Button */}
              <a 
                href={contactInfo.cv} 
                download
                className="w-full bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30"
              >
                <FaDownload className="text-lg" />
                <span className="text-sm">Download My CV</span>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-4">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-gray-400 text-xs font-medium mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-gray-400 text-xs font-medium mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-gray-400 text-xs font-medium mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-gray-400 text-xs font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/30 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? (
                  <>
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="text-sm">Sending...</span>
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-sm" />
                    <span className="text-sm">Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === 'success' && (
                <div className="bg-green-500/10 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm text-center">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}