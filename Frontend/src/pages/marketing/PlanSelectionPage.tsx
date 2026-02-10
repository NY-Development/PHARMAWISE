import { Link } from "react-router-dom";

export function PlanSelectionPage() {
  return (
    <div className="min-h-screen bg-background-light font-display text-slate-800 dark:bg-background-dark dark:text-slate-100">
      <nav className="w-full border-b border-slate-200 bg-white py-4 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <span className="material-icons">local_pharmacy</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">PHARMAWISE</span>
          </div>
          <div className="hidden space-x-8 text-sm font-medium text-slate-600 dark:text-slate-400 md:flex">
            <a className="transition-colors hover:text-primary" href="#">Drug Interaction</a>
            <a className="transition-colors hover:text-primary" href="#">Safety Alerts</a>
            <a className="text-primary" href="#">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400">
              Log in
            </button>
            <Link className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm shadow-primary/30 transition-colors hover:bg-blue-600" to="/register">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex flex-grow flex-col items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Transparent Pricing
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-white md:text-5xl">
            Choose the Plan That Fits Your Needs
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            Accessible pharmaceutical insights for patients and professionals alike.
            Simple, transparent, and secure.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Monthly</span>
            <label className="relative inline-flex cursor-pointer items-center">
              <input className="peer sr-only" type="checkbox" />
              <div className="h-8 w-14 rounded-full bg-slate-200 after:absolute after:left-[4px] after:top-[4px] after:h-6 after:w-6 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full dark:bg-slate-700" />
            </label>
            <span className="flex items-center gap-2 text-sm font-medium text-slate-900 dark:text-white">
              Yearly <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-bold text-primary">-20%</span>
            </span>
          </div>
        </div>

        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Basic Access</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Essential drug interaction checks for personal use.</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">$0</span>
              <span className="text-slate-500 dark:text-slate-400">/ forever</span>
            </div>
            <ul className="mb-8 flex-1 space-y-4">
              {[
                "Basic drug interaction checker",
                "FDA recall alerts (Email)",
                "Limit 5 medication profiles"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="material-icons text-lg text-slate-400">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full rounded-lg border border-transparent bg-slate-100 px-4 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-200 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">
              Start for Free
            </button>
          </div>

          <div className="relative z-10 flex h-full flex-col rounded-xl border-2 border-primary bg-white p-8 shadow-xl shadow-primary/10 md:-translate-y-4 dark:bg-slate-800">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-white shadow-sm">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-primary">Enhanced Understanding</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Deep dive analytics &amp; alerts for active health management.</p>
            </div>
            <div className="mb-6">
              <span className="text-5xl font-bold text-slate-900 dark:text-white">$12</span>
              <span className="text-slate-500 dark:text-slate-400">/ month</span>
            </div>
            <ul className="mb-8 flex-1 space-y-4">
              {[
                "Unlimited medication profiles",
                "Detailed side-effect analysis",
                "Alternative medication suggestions",
                "Printable reports for your doctor"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <span className="material-icons text-lg text-primary">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full rounded-lg bg-primary px-4 py-3 font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-blue-600 hover:shadow-primary/40">
              Get Enhanced Plan
            </button>
          </div>

          <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-8 transition-shadow duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-800">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Clinical Support</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Professional tools for clinics and research institutions.</p>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-slate-900 dark:text-white">Custom</span>
            </div>
            <ul className="mb-8 flex-1 space-y-4">
              {[
                "Full API access",
                "EMR/EHR System Integration",
                "Advanced population analytics",
                "Dedicated support manager"
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="material-icons text-lg text-slate-400">check_circle</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 font-medium text-slate-900 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:bg-transparent dark:text-white dark:hover:bg-slate-800">
              Contact Sales
            </button>
          </div>
        </div>

        <div className="mt-16 w-full max-w-4xl text-center">
          <Link className="mb-12 inline-flex items-center border-b border-primary/30 pb-0.5 font-medium text-primary transition-colors hover:border-primary hover:text-blue-700" to="/features">
            Compare all features in detailed table
            <span className="material-icons ml-1 text-sm">arrow_forward</span>
          </Link>
          <div className="flex flex-col items-center justify-center gap-8 border-t border-slate-200 pt-8 text-sm text-slate-400 dark:border-slate-700 md:flex-row md:gap-16">
            {[
              { icon: "verified_user", title: "Security", text: "HIPAA Compliant & Encrypted" },
              { icon: "storage", title: "Data Source", text: "Direct FDA Database Access" },
              { icon: "medical_services", title: "Validation", text: "Clinically Reviewed Content" }
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-3">
                <span className="material-icons text-3xl text-slate-400">{item.icon}</span>
                <div className="text-left">
                  <p className="text-xs font-semibold uppercase text-slate-500">{item.title}</p>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-400 dark:border-slate-800 dark:bg-slate-900">
        © 2023 PharmaWise Healthcare Platform. All rights reserved.
      </footer>
    </div>
  );
}
