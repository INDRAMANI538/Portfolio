import React from 'react';
import { Mail, Github, Instagram, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Get In Touch
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left section: contact info */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              I'm currently available for freelance work or full-time positions.
              Feel free to reach out if you have any questions or would like to work together.
            </p>

            <div className="flex flex-col gap-4 mb-8">
              <a
                href="mailto:indramanisingh538@gmail.com"
                className="flex items-center gap-3 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail size={20} />
                <span>indramanisingh538@gmail.com</span>
              </a>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Connect With Me</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/indramani538"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com/indramani538"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/indramani-singh-625080359/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Right section: Google Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="relative">
  {/* Glowing Background Effect */}
  <div className="absolute inset-0 rounded-lg blur-xl opacity-60 z-0 animate-pulse bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

  {/* Iframe Wrapper */}
  <div className="relative z-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-xl">
    <iframe
      src="https://docs.google.com/forms/d/e/1FAIpQLScHriMMgqB-R8DDz0jrTmqDtn2J8nM5SiHx5MrWWQUW2ojulw/viewform?embedded=true"
      width="10%"
      height="500"
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Google Contact Form"
      className="w-full rounded-lg"
    >
      Loading…
    </iframe>
  </div>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
