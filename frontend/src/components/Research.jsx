import React from 'react';

const Research = () => {
  return (
    <section id="research" className="section-padding bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="section-tag">🔬 Research</span>
          <h2 className="heading-font text-4xl md:text-5xl font-black text-slate-900 mt-2">
            Publications
          </h2>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100 max-w-4xl mx-auto flex flex-col items-center">

          <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2 text-center">
            Factors Associated with the Usage of Mobile Security Techniques Among State University Students in Sri Lanka
          </h3>
          <p className="text-emerald-600 font-medium mb-6 text-center">Undergraduate Research</p>

          {/* Link to view on Google Drive */}
          <a
            href="https://drive.google.com/file/d/1CA5H6bnSRUr6U60hVXHECVhts3bw_h--/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-3 px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-semibold rounded-2xl transition-all hover:shadow-lg hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="w-7 h-7">
              <path fill="#FFC107" d="M17 14.5L11 24H3l6-9.5z" />
              <path fill="#1976D2" d="M11 24l-6-9.5L11 5l6 9.5z" opacity=".8" />
              <path fill="#4CAF50" d="M17 14.5L11 5h8l6 9.5z" />
            </svg>
            View on Google Drive
          </a>

          <p className="text-slate-500 mt-6 text-sm text-center max-w-2xl bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="font-semibold text-slate-700">Note:</span> Viewing restricted to protect original research content. Copying and downloading features are disabled.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Research;
