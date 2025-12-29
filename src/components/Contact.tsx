import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Github, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1️⃣ SEND MESSAGE TO YOU
      await emailjs.send(
        'service_z258bbu',
        'template_xetow8q',
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          title: 'New Portfolio Enquiry',
        },
        '1FjQbtJm02sDirXpT'
      );

      // 2️⃣ AUTO-REPLY TO USER
      await emailjs.send(
        'service_z258bbu',
        'template_ekxn04o',
        {
          name: formData.name,
          email: formData.email,
        },
        '1FjQbtJm02sDirXpT'
      );

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-[#0b0f19] text-gray-200">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-14 text-center">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT INFO */}
          <div>
            <p className="mb-8 text-gray-400 leading-relaxed">
              Feel free to reach out for collaborations, freelance work,
              or just to say hello. I’ll get back to you as soon as possible.
            </p>

            <a
              href="mailto:sindramani07@gmail.com"
              className="flex items-center gap-3 mb-8 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={20} />
              sindramani07@gmail.com
            </a>

            <div className="flex gap-5">
              <a
                href="https://github.com/indramani538"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Github />
              </a>
              <a
                href="https://instagram.com/indramani538"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Instagram />
              </a>
              <a
                href="https://www.linkedin.com/in/indramani-singh-625080359/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="
              bg-[#020617]
              p-10 rounded-2xl
              border border-white/10
              space-y-8
              animate-slideUp
            "
          >
            {/* NAME */}
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="
                  peer w-full bg-transparent
                  border border-white/15
                  px-4 py-3 rounded-lg
                  focus:outline-none focus:border-blue-500
                  transition
                "
              />
              <label
                className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  text-gray-400 text-sm
                  peer-focus:-top-2 peer-focus:text-xs
                  peer-focus:text-blue-400
                  peer-valid:-top-2 peer-valid:text-xs
                  bg-[#020617] px-1
                  transition-all
                "
              >
                Your Name
              </label>
            </div>

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="
                  peer w-full bg-transparent
                  border border-white/15
                  px-4 py-3 rounded-lg
                  focus:outline-none focus:border-blue-500
                  transition
                "
              />
              <label
                className="
                  absolute left-4 top-1/2 -translate-y-1/2
                  text-gray-400 text-sm
                  peer-focus:-top-2 peer-focus:text-xs
                  peer-focus:text-blue-400
                  peer-valid:-top-2 peer-valid:text-xs
                  bg-[#020617] px-1
                  transition-all
                "
              >
                Your Email
              </label>
            </div>

            {/* MESSAGE */}
            <div className="relative">
              <textarea
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="
                  peer w-full bg-transparent
                  border border-white/15
                  px-4 py-3 rounded-lg
                  focus:outline-none focus:border-blue-500
                  transition resize-none
                "
              />
              <label
                className="
                  absolute left-4 top-3
                  text-gray-400 text-sm
                  peer-focus:-top-2 peer-focus:text-xs
                  peer-focus:text-blue-400
                  peer-valid:-top-2 peer-valid:text-xs
                  bg-[#020617] px-1
                  transition-all
                "
              >
                Your Message
              </label>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="
                w-full py-3 rounded-full
                bg-blue-500 hover:bg-blue-600
                transition-transform duration-200
                font-medium
                disabled:opacity-60
                hover:scale-[1.02]
              "
            >
              {loading ? 'Sending…' : 'Send Message'}
            </button>

            {success && (
              <p className="text-green-400 text-sm text-center animate-slideUp">
                ✅ Message sent! I’ll get back to you soon.
              </p>
            )}
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
