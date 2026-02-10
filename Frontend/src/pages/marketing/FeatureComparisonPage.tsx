export function FeatureComparisonPage() {
  return (
    <div className="min-h-screen bg-background-light font-display text-slate-800 transition-colors duration-200 dark:bg-background-dark dark:text-slate-100">
      <nav className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xl font-bold text-white">P</div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            PHARMA<span className="text-primary">WISE</span>
          </span>
        </div>
        <div className="hidden gap-6 text-sm font-medium text-slate-600 dark:text-slate-400 md:flex">
          <a className="transition-colors hover:text-primary" href="#">Platform</a>
          <a className="transition-colors hover:text-primary" href="#">Solutions</a>
          <a className="text-primary" href="#">Pricing</a>
          <a className="transition-colors hover:text-primary" href="#">Resources</a>
        </div>
        <div className="flex gap-3">
          <button className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300">Log in</button>
          <button className="rounded bg-primary px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600">Get Started</button>
        </div>
      </nav>

      <header className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-white md:text-5xl">
          Choose the right plan for your practice
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-400">
          Compare our plans to find the perfect fit for your clinical needs, from
          basic drug interactions to advanced AI-powered diagnostics.
        </p>
        <div className="flex items-center justify-center gap-4">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Monthly</span>
          <label className="relative inline-flex cursor-pointer items-center">
            <input className="peer sr-only" type="checkbox" />
            <div className="h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full dark:bg-slate-700" />
          </label>
          <span className="text-sm font-medium text-slate-900 dark:text-white">
            Annual <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Save 20%</span>
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="sticky top-16 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/95">
            <div className="grid min-w-[800px] grid-cols-4">
              <div className="border-r border-slate-100 p-6 dark:border-slate-800">
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-400">Features</span>
              </div>
              <div className="border-r border-slate-100 p-6 text-center dark:border-slate-800">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Basic Access</h3>
                <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">Free</div>
                <p className="mb-4 text-xs text-slate-500">Essential tools for individual practitioners.</p>
                <button className="w-full rounded border border-slate-300 bg-transparent py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-primary hover:text-primary dark:border-slate-600 dark:text-slate-300">
                  Get Started
                </button>
              </div>
              <div className="border-r border-slate-100 bg-primary/5 p-6 text-center dark:border-slate-800 dark:bg-primary/10">
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 rounded-b bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                  Most Popular
                </div>
                <h3 className="mb-2 mt-2 text-lg font-bold text-primary">Enhanced Understanding</h3>
                <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">$49<span className="text-base font-normal text-slate-500">/mo</span></div>
                <p className="mb-4 text-xs text-slate-500">Advanced analysis for small clinics.</p>
                <button className="w-full rounded bg-primary py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-blue-600">
                  Start Free Trial
                </button>
              </div>
              <div className="p-6 text-center">
                <h3 className="mb-2 text-lg font-bold text-slate-900 dark:text-white">Clinical Support</h3>
                <div className="mb-1 text-3xl font-bold text-slate-900 dark:text-white">$129<span className="text-base font-normal text-slate-500">/mo</span></div>
                <p className="mb-4 text-xs text-slate-500">Full suite for hospitals &amp; large teams.</p>
                <button className="w-full rounded border border-slate-300 bg-transparent py-2.5 text-sm font-semibold text-slate-700 transition-colors hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[800px]">
              {[
                { label: "Core Search Capabilities", icon: "search" },
                { label: "OCR & Visual Analysis", icon: "document_scanner" },
                { label: "AI & Clinical Intelligence", icon: "psychology" },
                { label: "Professional & Team Tools", icon: "business_center" }
              ].map((section, index) => (
                <div key={section.label} className={index === 0 ? "" : "mt-2"}>
                  <div className="flex items-center gap-2 border-y border-slate-200 bg-slate-50 px-6 py-3 text-sm font-bold uppercase tracking-wide text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-200">
                    <span className="material-icons-round text-lg text-primary">{section.icon}</span>
                    {section.label}
                  </div>
                  {section.label === "Core Search Capabilities" && (
                    <>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center gap-2 border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          Comprehensive Drug Database
                          <span className="material-icons-round text-base text-slate-400">info</span>
                        </div>
                        {["basic", "enhanced", "clinical"].map((tier) => (
                          <div key={tier} className={`flex items-center justify-center border-r border-slate-100 px-4 py-4 ${tier === "enhanced" ? "bg-primary/5 dark:bg-primary/10" : "bg-white dark:bg-slate-900"} dark:border-slate-800`}>
                            <span className="material-icons-round text-2xl text-primary">check_circle</span>
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          Interaction Checker
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
                          Basic (2 drugs max)
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 text-sm font-semibold text-slate-900 dark:border-slate-800 dark:bg-primary/10 dark:text-white">
                          Advanced (Unlimited)
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 text-sm font-semibold text-slate-900 dark:bg-slate-900 dark:text-white">
                          Advanced + Allergy
                        </div>
                      </div>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          Pediatric Dosage Calculator
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-slate-300">remove</span>
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 dark:border-slate-800 dark:bg-primary/10">
                          <span className="material-icons-round text-2xl text-primary">check_circle</span>
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-primary">check_circle</span>
                        </div>
                      </div>
                    </>
                  )}
                  {section.label === "OCR & Visual Analysis" && (
                    <>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center gap-2 border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          Rx Label Scanning
                          <span className="material-icons-round text-base text-slate-400">info</span>
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
                          5 scans / month
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 text-sm font-semibold text-slate-900 dark:border-slate-800 dark:bg-primary/10 dark:text-white">
                          50 scans / month
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 text-sm font-semibold text-slate-900 dark:bg-slate-900 dark:text-white">
                          Unlimited
                        </div>
                      </div>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          Handwriting Recognition
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-slate-300">remove</span>
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 dark:border-slate-800 dark:bg-primary/10">
                          <span className="material-icons-round text-2xl text-primary">check_circle</span>
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-primary">check_circle</span>
                        </div>
                      </div>
                    </>
                  )}
                  {section.label === "AI & Clinical Intelligence" && (
                    <>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          AI Symptom Triaging
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-slate-300">remove</span>
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 dark:border-slate-800 dark:bg-primary/10">
                          <span className="material-icons-round text-2xl text-primary">check_circle</span>
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-primary">check_circle</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          Patient Plain-Language Converter
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-slate-300">remove</span>
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 dark:border-slate-800 dark:bg-primary/10">
                          <span className="rounded bg-primary/20 px-2 py-1 text-xs font-semibold text-primary">Beta</span>
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-primary">check_circle</span>
                        </div>
                      </div>
                    </>
                  )}
                  {section.label === "Professional & Team Tools" && (
                    <>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          EHR/EMR API Integration
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 dark:border-slate-800 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-slate-300">remove</span>
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 dark:border-slate-800 dark:bg-primary/10">
                          <span className="material-icons-round text-2xl text-slate-300">remove</span>
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 dark:bg-slate-900">
                          <span className="material-icons-round text-2xl text-primary">check_circle</span>
                        </div>
                      </div>
                      <div className="grid grid-cols-4 border-b border-slate-100 transition-colors hover:bg-slate-50 dark:border-slate-800/50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          Team Management & Roles
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
                          Single User
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 text-sm font-semibold text-slate-900 dark:border-slate-800 dark:bg-primary/10 dark:text-white">
                          Up to 5 Users
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 text-sm font-semibold text-slate-900 dark:bg-slate-900 dark:text-white">
                          Unlimited
                        </div>
                      </div>
                      <div className="grid grid-cols-4 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800/30">
                        <div className="flex items-center border-r border-slate-100 px-6 py-4 text-sm font-medium text-slate-700 dark:border-slate-800 dark:text-slate-300">
                          Customer Support
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-white px-4 py-4 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900">
                          Email Only
                        </div>
                        <div className="flex items-center justify-center border-r border-slate-100 bg-primary/5 px-4 py-4 text-sm text-slate-900 dark:border-slate-800 dark:bg-primary/10 dark:text-white">
                          Priority Email
                        </div>
                        <div className="flex items-center justify-center bg-white px-4 py-4 text-sm font-bold text-slate-900 dark:bg-slate-900 dark:text-white">
                          24/7 Dedicated Agent
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="mt-16 text-center">
        <h5 className="mb-6 text-sm font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
          Trusted by medical teams at
        </h5>
        <div className="flex flex-wrap items-center justify-center gap-8 opacity-50 grayscale md:gap-16">
          {[
            { icon: "local_hospital", name: "MEDLIFE" },
            { icon: "health_and_safety", name: "CarePlus" },
            { icon: "science", name: "PharmaLab" },
            { icon: "medical_services", name: "NextHealth" }
          ].map((item) => (
            <div key={item.name} className="flex items-center gap-2 text-xl font-bold text-slate-600 dark:text-slate-400">
              <span className="material-icons-round">{item.icon}</span>
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <footer className="mt-16 border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-sm text-slate-500 dark:text-slate-400 md:flex-row">
          <div>© 2023 PHARMAWISE. All rights reserved.</div>
          <div className="flex gap-6">
            <a className="hover:text-primary" href="#">Privacy Policy</a>
            <a className="hover:text-primary" href="#">Terms of Service</a>
            <a className="hover:text-primary" href="#">HIPAA Compliance</a>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-slate-200 bg-white p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] dark:border-slate-800 dark:bg-slate-900 lg:hidden">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-xs uppercase text-slate-500">Recommended</span>
            <span className="text-sm font-bold text-slate-900 dark:text-white">Enhanced Plan</span>
          </div>
          <button className="rounded bg-primary px-6 py-2 font-medium text-white transition-colors hover:bg-blue-600">
            Select Plan
          </button>
        </div>
      </div>
    </div>
  );
}
