import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Github,
  Instagram,
  Send,
  Loader2,
  CheckCircle,
  XCircle,
} from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Contact: React.FC = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "submitting"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus("submitting");

    const formspreeEndpoint = "mgvnonqe";

    if (formspreeEndpoint === "mgvnonqe") {
      console.error(
        "Please update the formspreeEndpoint variable with your actual Formspree ID."
      );
      setSubmitStatus("error");
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeEndpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        console.error("Formspree Error:", data);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network or Fetch Error:", error);
      setSubmitStatus("error");
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vedant.amrutkar@email.com",
      href: "mailto:vedant8405@gmail.com",
    },
    {
      icon: Mail,
      label: "Work Mail",
      value: "va5726@srmist.edu.in",
      href: "mailto:va5726@srmist.edu.in",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vedant-amrutkar-87b266288",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/vedant-zeus",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://instagram.com/vedant_a18",
    },
    {
      icon: Mail,
      label: "Mail",
      href: "mailto:vedant8405@gmail.com",
    },
  ];

  return (
    <section
      id="contact"
      className={`py-20 transition-colors duration-500 ${
        isDark
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
          : "bg-gradient-to-br from-gray-50 via-pink-100 to-yellow-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p
            className={`text-lg max-w-2xl mx-auto ${
              isDark ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Always open to discussing new opportunities and interesting projects
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <div className="space-y-10">
            {/* Contact Info */}
            <div>
              <h3
                className={`text-2xl font-bold mb-6 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Get in Touch
              </h3>
              <p
                className={`text-lg leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Whether you have a project in mind, or just want to say hello, I’d
                love to hear from you. Let’s create something amazing together.  
                You can reach me via the form or through my social channels.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <a
                    key={idx}
                    href={info.href}
                    className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                      isDark
                        ? "bg-gray-800 hover:bg-gray-700 border border-gray-700"
                        : "bg-white hover:bg-gray-50 border border-gray-200"
                    }`}
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        isDark ? "bg-blue-600/20" : "bg-blue-100"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={isDark ? "text-blue-400" : "text-blue-600"}
                      />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {info.label}
                      </p>
                      <p
                        className={`font-semibold ${
                          isDark ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {info.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Links */}
            <div>
              <h4
                className={`text-lg font-semibold mb-4 ${
                  isDark ? "text-white" : "text-gray-900"
                }`}
              >
                Follow Me
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg ${
                        isDark
                          ? "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"
                          : "bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <Icon size={22} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div
            className={`p-8 rounded-2xl shadow-lg transition-colors duration-500 ${
              isDark
                ? "bg-gray-800 border border-gray-700"
                : "bg-white border border-gray-200"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email"
                  className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  }`}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className={`block text-sm font-medium mb-2 ${
                    isDark ? "text-gray-300" : "text-gray-700"
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
                  rows={5}
                  placeholder="Tell me about your project or just say hello..."
                  className={`w-full px-4 py-3 rounded-xl border-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all duration-300 ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-400"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500"
                  }`}
                ></textarea>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={submitStatus === "submitting"}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {submitStatus === "submitting" ? (
                  <>
                    <Loader2 className="animate-spin" size={20} /> Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} /> Send Message
                  </>
                )}
              </button>
            </form>

            {/* Status Message */}
            {submitStatus === "success" && (
              <div className="mt-4 p-4 rounded-xl bg-green-100 border border-green-300 text-green-700 flex items-center gap-2">
                <CheckCircle size={20} /> Message sent successfully!
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mt-4 p-4 rounded-xl bg-red-100 border border-red-300 text-red-700 flex items-center gap-2">
                <XCircle size={20} /> Error sending message. Please check your
                Formspree ID or email me directly.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
