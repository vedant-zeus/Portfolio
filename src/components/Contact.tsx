import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github,Instagram, Send, Loader2, CheckCircle, XCircle } from 'lucide-react';
// Assuming 'useTheme' and 'React.FC' are available in your environment
// import { useTheme } from '../contexts/ThemeContext'; 

const Contact: React.FC = () => {
  // Mocking useTheme for completeness, assume isDark is available
  const isDark = true; // Replace with actual useTheme() hook call if available

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  // State for form submission status
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'submitting'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    
    // --- Formspree Endpoint (Updated with your specific ID: mgvnonqe) ---
    // Messages submitted via this form will be sent to the email configured in your Formspree account.
    const formspreeEndpoint = 'mgvnonqe'; 
    // -------------------------------------------------------------------

    if (formspreeEndpoint === 'mgvnonqe') {
        // This is a safety check for future edits
        console.error("Please update the formspreeEndpoint variable with your actual Formspree ID.");
        setSubmitStatus('error');
        return;
    }

    try {
        // Sends the form data to the Formspree API
        const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' }); // Clear form on success
        } else {
            // Handle HTTP errors or Formspree specific errors
            const data = await response.json();
            console.error('Formspree Error:', data);
            setSubmitStatus('error');
        }
    } catch (error) {
        console.error("Network or Fetch Error:", error);
        setSubmitStatus('error');
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vedant.amrutkar@email.com',
      href: 'mailto:vedant8405@gmail.com' // Direct mailto link 
    },
    {
      icon: Mail,
      label: 'Work Mail',
      value: 'va5726@srmist.edu.in',
      href: 'mailto:va5726@srmist.edu.in'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Pune, Maharashtra, India',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/vedant-amrutkar-87b266288',
      color: 'hover:text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/vedant-zeus',
      color: isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'
    },
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/vedant_a18',
      color: isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'
    },
    {
      icon: Mail,
      label: 'Mail',
      href: 'vedant8405@gmail.com',
      color: isDark ? 'hover:text-gray-300' : 'hover:text-gray-700'
    }
  ];

  return (
    <section id="contact" className={`py-20 ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-100'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-8"></div>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Get in Touch
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Whether you have a project in mind, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together. Feel free to reach out via the form or through my social channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:scale-105 ${
                      isDark 
                        ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                        : 'bg-white hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    <div className={`p-3 rounded-lg ${
                      isDark ? 'bg-blue-600/20' : 'bg-blue-100'
                    }`}>
                      <Icon className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`} size={20} />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {info.label}
                      </p>
                      <p className={`font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4 className={`text-lg font-semibold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl transition-all duration-200 hover:scale-110 ${
                        isDark 
                          ? 'bg-gray-800 text-gray-400 hover:bg-gray-700' 
                          : 'bg-white text-gray-600 hover:bg-gray-50'
                      } ${social.color} shadow-lg hover:shadow-xl`}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl shadow-lg ${
            isDark ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100'
          }`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label 
                  htmlFor="name" 
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  }`}
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  }`}
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400' 
                      : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500'
                  }`}
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 disabled:opacity-75 disabled:cursor-not-allowed transform transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {submitStatus === 'submitting' ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Submission Status Message */}
            {submitStatus === 'success' && (
              <div className="mt-4 p-4 rounded-xl bg-green-100 border border-green-300 text-green-700 flex items-center gap-2">
                <CheckCircle size={20} />
                <p className="font-medium">Message sent successfully! Thank you for reaching out.</p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="mt-4 p-4 rounded-xl bg-red-100 border border-red-300 text-red-700 flex items-center gap-2">
                <XCircle size={20} />
                <p className="font-medium">
                  Error: Message failed to send. Please ensure the Formspree ID is correct or email me directly at{' '}
                  <a href={contactInfo[0].href} className="underline font-semibold">{contactInfo[0].value}</a>.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
