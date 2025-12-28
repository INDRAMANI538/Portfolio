import React, { useState } from 'react';

const certificates = [
  {
    title: 'Power BI 101 - Microsoft Power BI DUAL Certification Course',
    issuer: 'Udemy',
    logo: '/logos/Udemy.png',
    link: 'https://www.udemy.com/certificate/UC-167e93bc-ef73-409d-8616-02cf1e400189/',
    learning: `
📊 Data modeling & relationships
📈 Interactive dashboards & reports
🧮 DAX basics & calculated measures
🔍 Business insights using Power BI
    `,
  },
  {
    title: 'Google Play Academy - Store Listing Certificate',
    issuer: 'Google Play Academy',
    logo: '/logos/google.png',
    link: 'https://www.credential.net/273bc559-03fb-4964-81f5-e11305997414',
    learning: `
🚀 App Store Optimization (ASO)
🎯 Conversion-focused store listings
🖼 Feature graphics & screenshots
📱 Google Play best practices
    `,
  },
  {
    title: 'UI/UX Design With Figma : 5+ Real World Projects',
    issuer: 'Udemy',
    logo: '/logos/Udemy.png',
    link: 'https://ude.my/UC-c14b0eda-7fcb-441d-81f6-9186f3df4e2e',
    learning: `
🎨 UI principles & color systems
🧠 UX thinking & wireframing
📐 Auto layout & components
🧪 Real-world design projects
    `,
  },
  {
    title: 'Modern CSS Techniques without JavaScript',
    issuer: 'LinkedIn Learning',
    logo: '/logos/linkedin.png',
    link: 'https://www.linkedin.com/learning/certificates/3c41c5fcbbec0193eb5431cfd8e612444207ad22b0381a5b0d7bc58448fb9af5',
    learning: `
✨ CSS animations & transitions
📦 Grid & Flexbox mastery
🎭 Modern layout techniques
⚡ Performance-friendly UI
    `,
  },
  {
    title: 'Electronic Arts - Software Engineering Job Simulation',
    issuer: 'Forage (EA)',
    logo: '/logos/forage.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/j43dGscQHtJJ57N54/a77WE3de8qrxWferQ_j43dGscQHtJJ57N54_dcPsrRpuDXeLDYDEN_1751200032216_completion_certificate.pdf',
    learning: `
🧠 Problem solving mindset
🧩 Feature design & debugging
📄 Software documentation
🎮 Real-world engineering workflow
    `,
  },
  {
    title: 'Accenture Nordics - Software Engineering Job Simulation',
    issuer: 'Forage (Accenture)',
    logo: '/logos/forage.png',
    link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_dcPsrRpuDXeLDYDEN_1750906466551_completion_certificate.pdf',
    learning: `
🏗 Enterprise software practices
🤝 Client-focused development
📊 Agile & SDLC exposure
🛠 Technical decision making
    `,
  },
  {
    title: 'AWS - Solutions Architecture Job Simulation',
    issuer: 'Forage (AWS)',
    logo: '/logos/forage.png',
    link: 'https://www.theforage.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_dcPsrRpuDXeLDYDEN_1766919044261_completion_certificate.pdf',
    learning: `
☁ Cloud architecture basics
🔐 Security & scalability concepts
📡 AWS services overview
🏗 Designing reliable systems
    `,
  },
];

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeLearning, setActiveLearning] = useState(null);

  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  return (
    <section id="certificates" className="bg-[#0b0f19] text-gray-200">
      <div className="container mx-auto px-4 py-20">

        <h2 className="text-3xl font-semibold text-center mb-12">
          Certificates & Achievements
        </h2>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-[#020617] p-6 rounded-2xl border border-white/10
                         hover:scale-[1.03] transition-transform duration-300 flex flex-col"
            >
              <img src={cert.logo} alt={cert.issuer} className="h-12 mb-4 object-contain" />

              <h3 className="text-lg font-medium mb-2">{cert.title}</h3>

              <p className="text-sm text-gray-400 mb-6">
                Issued by {cert.issuer}
              </p>

              <div className="mt-auto flex gap-3">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline flex-1 text-center px-4 py-2 text-sm
                             rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                >
                  View Certificate
                </a>

                <button
                  onClick={() => setActiveLearning(cert)}
                  className="flex-1 px-4 py-2 text-sm rounded-full
                             bg-white/10 hover:bg-white/20 transition"
                >
                  Learnings ✨
                </button>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              View All Certificates
            </button>
          </div>
        )}

        {/* LEARNING MODAL */}
        {activeLearning && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm
                          flex items-center justify-center px-4">
            <div className="bg-[#020617] max-w-xl w-full rounded-2xl p-8
                            animate-slideUp border border-white/10">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">
                  What I Learned 🚀
                </h3>
                <button
                  onClick={() => setActiveLearning(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <pre className="whitespace-pre-wrap text-sm leading-relaxed
                              font-mono text-blue-300">
                {activeLearning.learning}
              </pre>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Certificates;
