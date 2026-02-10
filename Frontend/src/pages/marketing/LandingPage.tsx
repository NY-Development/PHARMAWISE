import { Link } from "react-router-dom";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f6f9ff] font-display text-slate-800 transition-colors duration-300 dark:bg-background-dark dark:text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-surface-dark">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-[#1f6bff] text-white">
              <span className="material-icons text-xl">medical_services</span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-[#1f6bff]">PHARMAWISE</span>
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            <a className="font-medium text-slate-600 transition-colors hover:text-[#1f6bff] dark:text-slate-300" href="#">
              Patients
            </a>
            <a className="font-medium text-slate-600 transition-colors hover:text-[#1f6bff] dark:text-slate-300" href="#">
              Doctors
            </a>
            <a className="font-medium text-slate-600 transition-colors hover:text-[#1f6bff] dark:text-slate-300" href="#">
              Pharmacists
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <button className="flex items-center space-x-1 text-slate-500 transition-colors hover:text-[#1f6bff] dark:text-slate-400">
                <span className="material-icons text-xl">language</span>
                <span className="text-sm">EN</span>
                <span className="material-icons text-sm">expand_more</span>
              </button>
            </div>
            <div className="hidden h-6 w-px bg-slate-200 dark:bg-slate-700 sm:block" />
            <Link className="hidden text-sm font-semibold text-[#1f6bff] transition-colors hover:text-[#1758d6] sm:block" to="/login">
              Log In
            </Link>
            <Link className="rounded-lg bg-[#1f6bff] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#1758d6] hover:shadow-md" to="/register">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <section className="relative overflow-hidden pb-20 pt-12 lg:pb-32 lg:pt-24">
          <div className="pointer-events-none absolute -right-20 -top-20 h-[600px] w-[600px] rounded-full bg-[#1f6bff]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-[#1f6bff]/15 blur-3xl" />
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1f6bff]/20 bg-[#1f6bff]/10 px-3 py-1 text-sm font-medium text-[#1f6bff]">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#1f6bff]" />
                Now integrated with National Health Systems
              </span>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
                Understand Your Medicine <br className="hidden md:block" />
                <span className="relative inline-block text-[#1f6bff]">
                  Clearly
                  <svg className="absolute -bottom-1 left-0 h-3 w-full text-[#1f6bff]/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="8" />
                  </svg>
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-400 md:text-xl">
                Connecting patients with verified doctors and pharmacists for safer
                healthcare outcomes. Access drug information, prescriptions, and
                expert advice instantly.
              </p>
            </div>

            <div className="mx-auto max-w-4xl rounded-2xl border border-slate-100 bg-white p-2 shadow-2xl transition-all hover:shadow-[0_20px_60px_rgba(31,107,255,0.15)] dark:border-slate-700 dark:bg-surface-dark">
              <div className="flex flex-col gap-2 md:flex-row">
                <div className="flex flex-1 flex-col items-start justify-center rounded-xl border border-slate-100 bg-[#f5f7fb] p-6 md:p-8 dark:border-slate-800 dark:bg-background-dark">
                  <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300" htmlFor="drug-search">
                    <span className="material-icons text-base text-[#1f6bff]">search</span>
                    Search Drug Database
                  </label>
                  <div className="group relative w-full">
                    <input
                      id="drug-search"
                      className="w-full rounded-lg border-2 border-slate-200 bg-white py-4 pl-4 pr-12 text-lg text-slate-900 shadow-sm transition-colors placeholder:text-slate-400 focus:border-[#1f6bff] focus:ring-0 dark:border-slate-700 dark:bg-surface-dark dark:text-white"
                      placeholder="Enter drug name (e.g. Amoxicillin)"
                      type="text"
                    />
                    <Link className="absolute bottom-2 right-2 top-2 flex items-center justify-center rounded bg-[#1f6bff] px-4 font-medium text-white shadow-sm transition-colors hover:bg-[#1758d6]" to="/drug-search">
                      Search
                    </Link>
                  </div>
                  <p className="mt-3 flex items-center gap-1 text-xs text-slate-500">
                    <span className="material-icons text-[14px]">verified</span>
                    Verified against FDA &amp; EMA databases
                  </p>
                </div>
                <Link
                  className="relative flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-[#1f6bff]/30 bg-[#1f6bff]/5 p-6 text-center transition-colors hover:bg-[#1f6bff]/10 dark:bg-[#1f6bff]/10 dark:hover:bg-[#1f6bff]/20 md:w-1/3"
                  to="/prescription/upload"
                >
                  <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#1f6bff] shadow-md transition-transform duration-300 group-hover:scale-110 dark:bg-surface-dark">
                    <span className="material-icons text-3xl">upload_file</span>
                  </div>
                  <h3 className="relative z-10 mb-1 text-lg font-bold text-slate-800 dark:text-white">
                    Upload Prescription
                  </h3>
                  <p className="relative z-10 text-sm text-slate-600 dark:text-slate-400">Scan or upload PDF/JPG</p>
                </Link>
              </div>
            </div>

            <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800">
              <p className="mb-6 text-center text-sm font-medium uppercase tracking-widest text-slate-400">
                Trusted Healthcare Data Sources
              </p>
              <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale transition-all duration-500 hover:grayscale-0 md:gap-16">
                <div className="flex items-center gap-2">
                  <span className="material-icons text-3xl">health_and_safety</span>
                  <span className="text-lg font-bold">FDA <span className="text-xs font-normal">Data</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-3xl">security</span>
                  <span className="text-lg font-bold">HIPAA <span className="text-xs font-normal">Compliant</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-3xl">account_balance</span>
                  <span className="text-lg font-bold">Gov <span className="text-xs font-normal">Health Ready</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-icons text-3xl">verified_user</span>
                  <span className="text-lg font-bold">ISO <span className="text-xs font-normal">27001</span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 dark:bg-surface-dark">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            { [
              {
                icon: "medication_liquid",
                title: "Drug Interactions",
                text: "Instantly check how your medications interact with each other. Our AI-driven engine alerts you to potential risks before they happen.",
                tone: "text-[#1f6bff]"
              },
              {
                icon: "storefront",
                title: "Pharmacy Network",
                text: "Connect directly with licensed pharmacists in your area. Check stock availability and reserve your prescription for pickup.",
                tone: "text-teal-500"
              },
              {
                icon: "folder_shared",
                title: "Digital Health Records",
                text: "Keep your prescription history and medical notes in one secure place, accessible by you and your authorized doctors anytime.",
                tone: "text-purple-600"
              }
            ].map((card) => (
              <div key={card.title} className="rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1 dark:border-slate-800 dark:bg-background-dark">
                <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#e9f0ff] ${card.tone} dark:bg-blue-900/30`}>
                  <span className="material-icons text-2xl">{card.icon}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">{card.title}</h3>
                <p className="leading-relaxed text-slate-600 dark:text-slate-400">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#f6f9ff] py-20 dark:bg-background-dark">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1f6bff] to-[#0b4fd9] shadow-2xl">
              <div className="absolute right-0 top-0 h-full w-1/2 origin-bottom-left skew-x-12 bg-white/10" />
              <div className="relative z-10 flex flex-col items-center md:flex-row">
                <div className="p-10 text-white md:w-1/2 md:p-16">
                  <h2 className="mb-6 text-3xl font-bold md:text-4xl">Join the Medical Professional Network</h2>
                  <p className="mb-8 text-lg text-blue-100">
                    Are you a doctor or pharmacist? Join PHARMAWISE to streamline your
                    practice, verify prescriptions digitally, and connect with patients securely.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link className="rounded-lg bg-white px-6 py-3 font-bold text-[#1f6bff] shadow transition-colors hover:bg-slate-100" to="/register">
                      Register as Doctor
                    </Link>
                    <Link className="rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/20" to="/register">
                      Pharmacist Portal
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 self-stretch bg-slate-800 md:h-auto md:w-1/2">
                  <img
                    alt="Medical professionals analyzing digital data on a tablet in a modern clinic"
                    className="h-full w-full object-cover opacity-90 mix-blend-overlay"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYumWhqLpoRlWIZD9y_SkL9G1fysl9Mdo7BDUSFlxzH_ofZ9c1NHjN3uzHjz9ViN32h2_XpkxfLlstAb-jtCgjnXm3NOn2Eb2gJV5Xid7lEBWOyWXLpW8RGz7t_DZWTQ5SBNCB5snAw-MA2U04g07X9BlKkZnVEvsr4ssEiuA7U5uI7UnVl5FBHKjLXUESLNXh_BaZm3pd3QFwoyUki0Cj9q2undrIEZgveP-2gHzuxMVfQgrRc8dFbibR_prlmtE8h3pw1i66Im8"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1f6bff] to-transparent opacity-90" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white pt-16 pb-8 dark:border-slate-800 dark:bg-surface-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="col-span-2 md:col-span-1">
              <div className="mb-4 flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded bg-[#1f6bff] text-white">
                  <span className="material-icons text-sm">medical_services</span>
                </div>
                <span className="text-xl font-bold text-[#1f6bff]">PHARMAWISE</span>
              </div>
              <p className="mb-4 text-sm text-slate-500 dark:text-slate-400">
                Making healthcare transparent and accessible for everyone.
              </p>
              <div className="flex gap-4 text-slate-400">
                <a className="transition-colors hover:text-[#1f6bff]" href="#"><span className="material-icons">facebook</span></a>
                <a className="transition-colors hover:text-[#1f6bff]" href="#"><span className="material-icons">share</span></a>
                <a className="transition-colors hover:text-[#1f6bff]" href="#"><span className="material-icons">email</span></a>
              </div>
            </div>
            { [
              { title: "Platform", links: ["For Patients", "For Doctors", "For Pharmacists", "Drug Database"] },
              { title: "Company", links: ["About Us", "Careers", "Press", "Contact"] },
              { title: "Legal", links: ["Privacy Policy", "Terms of Service", "Accessibility", "Cookie Settings"] }
            ].map((col) => (
              <div key={col.title}>
                <h4 className="mb-4 font-bold text-slate-900 dark:text-white">{col.title}</h4>
                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a className="transition-colors hover:text-[#1f6bff]" href="#">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-8 text-xs text-slate-400 dark:border-slate-800 md:flex-row">
            <p>© 2023 PHARMAWISE Healthcare Platform. All rights reserved.</p>
            <div className="flex items-center gap-2">
              <span className="material-icons text-base">lock</span>
              Secure SSL Connection
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
