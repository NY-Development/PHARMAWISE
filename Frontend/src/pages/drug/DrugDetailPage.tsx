import { useParams } from "react-router-dom";

export function DrugDetailPage() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background-light font-display text-text-main antialiased transition-colors duration-200 dark:bg-background-dark dark:text-gray-100">
      <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-card-light dark:border-gray-800 dark:bg-card-dark">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <a className="flex items-center gap-2" href="#">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xl font-bold text-white">P</div>
              <span className="text-xl font-bold tracking-tight text-primary">PHARMAWISE</span>
            </a>
            <div className="hidden items-center gap-6 text-sm font-medium text-text-muted dark:text-gray-400 md:flex">
              <a className="transition-colors hover:text-primary" href="#">Dashboard</a>
              <a className="font-semibold text-primary" href="#">Drugs Database</a>
              <a className="transition-colors hover:text-primary" href="#">Interactions</a>
              <a className="transition-colors hover:text-primary" href="#">Community</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">search</span>
              <input
                className="w-64 rounded-lg border-none bg-background-light py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800"
                placeholder="Search drugs, symptoms..."
                type="text"
              />
            </div>
            <button className="p-2 text-gray-400 transition-colors hover:text-primary">
              <span className="material-icons-outlined">notifications</span>
            </button>
            <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-primary/20 text-sm font-bold text-primary">
              DR
            </div>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-text-muted dark:text-gray-400">
            <a className="hover:underline" href="#">Database</a>
            <span className="material-icons text-xs">chevron_right</span>
            <a className="hover:underline" href="#">Antibiotics</a>
            <span className="material-icons text-xs">chevron_right</span>
            <span className="font-medium text-primary">{id || "Drug"}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <span className="material-icons-outlined text-lg">share</span>
              Share
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <span className="material-icons-outlined text-lg">print</span>
              Print PDF
            </button>
            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white shadow-sm shadow-primary/30 transition-colors hover:bg-primary-dark">
              <span className="material-icons-outlined text-lg">bookmark_border</span>
              Save to My Meds
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="sticky top-24 hidden lg:col-span-3 lg:block">
            <nav className="space-y-1">
              {[
                { id: "overview", label: "Overview", icon: "info" },
                { id: "dosage", label: "Dosage & Admin", icon: "medication" },
                { id: "safety", label: "Safety & Warnings", icon: "warning" },
                { id: "interactions", label: "Interactions", icon: "compare_arrows" },
                { id: "pregnancy", label: "Pregnancy & Kids", icon: "child_care" },
                { id: "ingredients", label: "Ingredients", icon: "science" }
              ].map((item, index) => (
                <a
                  key={item.id}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${index === 0 ? "bg-primary/10 text-primary" : "text-text-muted hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"}`}
                  href={`#${item.id}`}
                >
                  <span className="material-icons-outlined text-lg">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-8 rounded-xl border border-primary/10 bg-gradient-to-br from-primary/10 to-transparent p-4">
              <h4 className="mb-2 text-sm font-semibold text-primary">Need professional help?</h4>
              <p className="mb-3 text-xs text-text-muted dark:text-gray-400">Connect with a pharmacist instantly for personalized advice.</p>
              <button className="w-full rounded-lg border border-primary/30 py-2 text-xs font-semibold text-primary transition-colors hover:bg-primary hover:text-white">
                Chat with Pharmacist
              </button>
            </div>
          </aside>

          <main className="space-y-8 lg:col-span-9">
            <section id="overview" className="rounded-xl border border-gray-100 bg-card-light p-6 shadow-sm dark:border-gray-800 dark:bg-card-dark">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-lg bg-background-light p-4 dark:bg-gray-800">
                  <div className="h-8 w-16 -rotate-45 rounded-full border border-white/20 bg-gradient-to-r from-red-400 to-yellow-100 shadow-lg" />
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{id || "Amoxicillin"}</h1>
                    <span className="rounded border border-blue-200 bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-900">
                      Generic Name
                    </span>
                    <span className="rounded border border-gray-200 bg-gray-100 px-2.5 py-0.5 text-xs font-semibold text-gray-800 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      RX Only
                    </span>
                  </div>
                  <p className="mb-4 text-lg font-light text-text-muted dark:text-gray-300">Brand names: Example, Sample</p>
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    This section summarizes FDA label information in educational form. It should be populated from the backend and presented without medical advice.
                  </p>
                </div>
              </div>
            </section>

            <section className="flex items-start gap-4 rounded-xl border border-danger-border bg-danger-light p-5 dark:border-red-800/50 dark:bg-red-900/20">
              <div className="flex-shrink-0 rounded-full bg-white/50 p-2 dark:bg-red-900/40">
                <span className="material-icons text-danger-text dark:text-red-400">warning_amber</span>
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-danger-text dark:text-red-400">Important Safety Information</h3>
                <p className="text-sm leading-relaxed text-red-800 dark:text-red-200">
                  Educational-only safety summary. Consult a licensed professional for guidance and decisions.
                </p>
              </div>
            </section>

            <section id="dosage" className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-card-light p-6 shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-xl font-semibold">
                    <span className="material-icons text-primary text-xl">schedule</span>
                    Standard Dosage
                  </h2>
                  <span className="rounded bg-gray-100 px-2 py-1 text-xs text-text-muted dark:bg-gray-800">Adults</span>
                </div>
                <div className="space-y-4">
                  {[
                    ["Mild/Moderate Infection", "Refer to FDA label"],
                    ["Severe Infection", "Refer to FDA label"],
                    ["High Dose (Specific)", "Refer to FDA label"]
                  ].map(([label, value]) => (
                    <div key={label} className="flex items-center justify-between border-b border-gray-100 pb-3 last:border-b-0 dark:border-gray-800">
                      <span className="text-gray-600 dark:text-gray-400">{label}</span>
                      <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl border border-gray-100 bg-card-light p-6 shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="flex items-center gap-2 text-xl font-semibold">
                    <span className="material-icons text-primary text-xl">local_drink</span>
                    How to Take
                  </h2>
                </div>
                <ul className="space-y-3">
                  {[
                    "Follow FDA label instructions",
                    "Take at consistent times",
                    "Consult a professional for clarification"
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="material-icons text-base text-green-500">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section id="interactions" className="overflow-hidden rounded-xl border border-gray-100 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark">
              <div className="flex items-center justify-between border-b border-gray-100 p-6 dark:border-gray-800">
                <h2 className="text-xl font-semibold">Interactions</h2>
                <div className="relative">
                  <input className="rounded-lg border border-gray-200 bg-gray-50 py-1.5 pl-3 pr-8 text-sm focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800" placeholder="Check interaction..." type="text" />
                  <span className="material-icons absolute right-2 top-1.5 text-sm text-gray-400">search</span>
                </div>
              </div>
              <div className="divide-y divide-gray-100 dark:divide-gray-800">
                {[
                  { name: "Example Interaction", tone: "red", severity: "Major" },
                  { name: "Example Interaction", tone: "orange", severity: "Moderate" }
                ].map((item) => (
                  <div key={item.severity} className="flex items-start gap-4 p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <div className={`mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full ${item.tone === "red" ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400" : "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"}`}>
                      <span className="material-icons text-sm">{item.tone === "red" ? "priority_high" : "warning"}</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white">{item.name}</h4>
                      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Risk Severity: <span className={`font-medium ${item.tone === "red" ? "text-red-600" : "text-orange-600"}`}>{item.severity}</span></p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 p-4 text-center dark:bg-gray-800/30">
                <button className="text-sm font-medium text-primary hover:underline">View all interactions</button>
              </div>
            </section>

            <section className="space-y-4">
              <div id="pregnancy" className="group rounded-xl border border-gray-100 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark" tabIndex={0}>
                <div className="flex cursor-pointer items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/20">
                      <span className="material-icons">pregnant_woman</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Pregnancy & Lactation</h3>
                      <p className="text-sm text-text-muted">Refer to FDA label guidance</p>
                    </div>
                  </div>
                  <span className="material-icons text-gray-400 transition-transform group-focus-within:rotate-180">expand_more</span>
                </div>
                <div className="hidden border-t border-gray-100 px-6 pb-6 pt-4 text-sm text-gray-600 group-focus-within:block dark:border-gray-800 dark:text-gray-300">
                  Educational summary of pregnancy and lactation considerations from the FDA label.
                </div>
              </div>

              <div id="ingredients" className="group rounded-xl border border-gray-100 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark" tabIndex={0}>
                <div className="flex cursor-pointer items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                      <span className="material-icons">science</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Ingredients</h3>
                      <p className="text-sm text-text-muted">Active and inactive components</p>
                    </div>
                  </div>
                  <span className="material-icons text-gray-400 transition-transform group-focus-within:rotate-180">expand_more</span>
                </div>
                <div className="hidden border-t border-gray-100 px-6 pb-6 pt-4 dark:border-gray-800">
                  <div className="grid gap-8 text-sm md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Active Ingredient</h4>
                      <p className="text-gray-600 dark:text-gray-400">Refer to FDA label</p>
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Inactive Ingredients</h4>
                      <p className="text-gray-600 dark:text-gray-400">Refer to FDA label</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-xs text-text-muted dark:border-gray-800 dark:text-gray-500 md:flex-row">
              <p>Source: FDA Drug Label Information. Last updated: October 24, 2023.</p>
              <div className="flex items-center gap-4">
                <a className="hover:text-primary" href="#">Disclaimer</a>
                <a className="hover:text-primary" href="#">Privacy Policy</a>
                <span className="flex items-center gap-1">
                  <span className="material-icons text-xs">qr_code</span>
                  ID: 99482-12
                </span>
              </div>
            </div>
          </main>
        </div>
      </div>

      <button className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-lg shadow-primary/40 transition-colors hover:bg-primary-dark lg:hidden">
        <span className="material-icons text-2xl">download</span>
      </button>
    </div>
  );
}
