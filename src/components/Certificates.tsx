import React from 'react';

const Certificates = () => {
  return (
    <section
      id="certificates"
      className="bg-gray-100 dark:bg-[#111827] transition-colors duration-300"
    >
      <div className="container mx-auto px-4 py-20">

        {/* HEADING */}
        <h2 className="text-3xl font-semibold text-center mb-12">
          Certificates & Achievements
        </h2>

        {/* CERTIFICATE GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* CERTIFICATE CARD */}
          <div className="bg-white dark:bg-[#020617] p-6 rounded-2xl border border-black/5 dark:border-white/10 transition-transform hover:scale-[1.03]">
            
            {/* LOGO */}
            <img
              src="/logos/Udemy.png"
              alt="Udemy"
              className="h-12 mb-4"
            />

            {/* COURSE NAME */}
            <h3 className="text-lg font-medium mb-2">
              Web Development Bootcamp
            </h3>

            {/* ISSUER */}
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Issued by Udemy
            </p>

            {/* BUTTON */}
            <a
              href="https://your-certificate-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 text-sm font-medium rounded-full
                         bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              View Certificate
            </a>
          </div>

          {/* CERTIFICATE CARD */}
          <div className="bg-white dark:bg-[#020617] p-6 rounded-2xl border border-black/5 dark:border-white/10 transition-transform hover:scale-[1.03]">
            
            <img
              src="/logos/coursera.png"
              alt="Coursera"
              className="h-12 mb-4"
            />

            <h3 className="text-lg font-medium mb-2">
              Java Programming
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Issued by Coursera
            </p>

            <a
              href="https://your-certificate-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium rounded-full
                         bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              View Certificate
            </a>
          </div>

          {/* CERTIFICATE CARD */}
          <div className="bg-white dark:bg-[#020617] p-6 rounded-2xl border border-black/5 dark:border-white/10 transition-transform hover:scale-[1.03]">
            
            <img
              src="/logos/google.png"
              alt="Google"
              className="h-12 mb-4"
            />

            <h3 className="text-lg font-medium mb-2">
              React Fundamentals
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Issued by Google
            </p>

            <a
              href="https://your-certificate-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-sm font-medium rounded-full
                         bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              View Certificate
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Certificates;
