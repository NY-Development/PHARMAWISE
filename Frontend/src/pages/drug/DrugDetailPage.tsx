import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { searchDrugs, fetchAdverseEvents } from "../../services/drug.service";
import type { DrugInfo, AdverseEvent } from "../../types/drug";

export function DrugDetailPage() {
  const { id } = useParams();
  const drugName = id || "";

  const [drug, setDrug] = useState<DrugInfo | null>(null);
  const [adverseEvents, setAdverseEvents] = useState<AdverseEvent[]>([]);
  const [disclaimer, setDisclaimer] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!drugName) return;

    async function load() {
      try {
        setLoading(true);
        setError(null);

        const [drugResult, adverseResult] = await Promise.allSettled([
          searchDrugs(drugName),
          fetchAdverseEvents(drugName),
        ]);

        if (drugResult.status === "fulfilled") {
          setDrug(drugResult.value.data);
          setDisclaimer(drugResult.value.disclaimer);
        } else {
          setError("Drug information not found.");
        }

        if (adverseResult.status === "fulfilled") {
          setAdverseEvents(adverseResult.value.events);
        }
      } catch {
        setError("Unable to load drug information.");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [drugName]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-sm text-slate-500">Loading drug information...</p>
        </div>
      </div>
    );
  }

  if (error || !drug) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background-light dark:bg-background-dark">
        <span className="material-icons text-5xl text-slate-300">search_off</span>
        <p className="text-lg font-semibold text-slate-600 dark:text-slate-300">{error || "Drug not found"}</p>
        <Link to="/drug-search" className="rounded-lg bg-primary px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-primary-dark">
          Back to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background-light font-display text-text-main antialiased transition-colors duration-200 dark:bg-background-dark dark:text-gray-100">
      <nav className="sticky top-0 z-50 h-16 border-b border-gray-200 bg-card-light dark:border-gray-800 dark:bg-card-dark">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <Link className="flex items-center gap-2" to="/">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xl font-bold text-white">P</div>
              <span className="text-xl font-bold tracking-tight text-primary">PHARMAWISE</span>
            </Link>
            <div className="hidden items-center gap-6 text-sm font-medium text-text-muted dark:text-gray-400 md:flex">
              <Link className="transition-colors hover:text-primary" to="/dashboard">Dashboard</Link>
              <Link className="font-semibold text-primary" to="/drug-search">Drugs Database</Link>
              <Link className="transition-colors hover:text-primary" to="/ai/education">AI Education</Link>
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
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 text-sm text-text-muted dark:text-gray-400">
            <Link className="hover:underline" to="/drug-search">Database</Link>
            <span className="material-icons text-xs">chevron_right</span>
            <span className="font-medium text-primary">{drug.name}</span>
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
                { id: "adverse", label: "Adverse Events", icon: "monitor_heart" },
                { id: "pregnancy", label: "Pregnancy & Kids", icon: "child_care" },
                { id: "ingredients", label: "Ingredients", icon: "science" },
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
            {/* Overview */}
            <section id="overview" className="rounded-xl border border-gray-100 bg-card-light p-6 shadow-sm dark:border-gray-800 dark:bg-card-dark">
              <div className="flex flex-col gap-6 sm:flex-row">
                <div className="flex h-32 w-32 flex-shrink-0 items-center justify-center rounded-lg bg-background-light p-4 dark:bg-gray-800">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <span className="material-icons text-3xl text-primary">medication</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-3">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{drug.name}</h1>
                    <span className="rounded border border-blue-200 bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-900">
                      {drug.genericName !== "Not available" ? "Brand Name" : "Generic"}
                    </span>
                  </div>
                  {drug.genericName !== "Not available" && (
                    <p className="mb-4 text-lg font-light text-text-muted dark:text-gray-300">
                      Generic: {drug.genericName}
                    </p>
                  )}
                  <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Purpose:</span> {drug.purpose}
                  </p>
                </div>
              </div>
            </section>

            {/* Warnings */}
            {drug.warnings.length > 0 && (
              <section id="safety" className="flex items-start gap-4 rounded-xl border border-danger-border bg-danger-light p-5 dark:border-red-800/50 dark:bg-red-900/20">
                <div className="flex-shrink-0 rounded-full bg-white/50 p-2 dark:bg-red-900/40">
                  <span className="material-icons text-danger-text dark:text-red-400">warning_amber</span>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-danger-text dark:text-red-400">Important Safety Information</h3>
                  <div className="space-y-2 text-sm leading-relaxed text-red-800 dark:text-red-200">
                    {drug.warnings.slice(0, 3).map((warning, index) => (
                      <p key={index} className="line-clamp-4">{typeof warning === "string" ? warning : JSON.stringify(warning)}</p>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Dosage */}
            <section id="dosage" className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-gray-100 bg-card-light p-6 shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <span className="material-icons text-primary text-xl">schedule</span>
                  Dosage & Administration
                </h2>
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700 line-clamp-[12] dark:text-gray-300">
                  {drug.dosage}
                </p>
              </div>
              <div className="rounded-xl border border-gray-100 bg-card-light p-6 shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
                  <span className="material-icons text-primary text-xl">local_drink</span>
                  How to Take
                </h2>
                <ul className="space-y-3">
                  {[
                    "Follow FDA label instructions",
                    "Take at consistent times",
                    "Consult a professional for clarification",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-gray-700 dark:text-gray-300">
                      <span className="material-icons text-base text-green-500">check_circle</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Adverse Events */}
            {adverseEvents.length > 0 && (
              <section id="adverse" className="overflow-hidden rounded-xl border border-gray-100 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <div className="flex items-center justify-between border-b border-gray-100 p-6 dark:border-gray-800">
                  <h2 className="text-xl font-semibold">Reported Adverse Events</h2>
                  <span className="rounded bg-orange-100 px-2 py-1 text-xs font-medium text-orange-700 dark:bg-orange-900/20 dark:text-orange-300">
                    From FDA Reports
                  </span>
                </div>
                <div className="divide-y divide-gray-100 dark:divide-gray-800">
                  {adverseEvents.map((event) => {
                    const severity =
                      event.count > 1000 ? "high" : event.count > 200 ? "moderate" : "low";
                    return (
                      <div key={event.term} className="flex items-center justify-between p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-8 w-8 items-center justify-center rounded-full ${
                              severity === "high"
                                ? "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
                                : severity === "moderate"
                                  ? "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400"
                                  : "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400"
                            }`}
                          >
                            <span className="material-icons text-sm">
                              {severity === "high" ? "priority_high" : severity === "moderate" ? "warning" : "info"}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{event.term}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{event.count.toLocaleString()}</span>
                          <span className="ml-1 text-xs text-gray-400">reports</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Pregnancy & Ingredients */}
            <section className="space-y-4">
              <div id="pregnancy" className="group rounded-xl border border-gray-100 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark" tabIndex={0}>
                <div className="flex cursor-pointer items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-primary dark:bg-blue-900/20">
                      <span className="material-icons">pregnant_woman</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Pregnancy & Lactation</h3>
                      <p className="text-sm text-text-muted">{drug.pregnancy || "Refer to FDA label guidance"}</p>
                    </div>
                  </div>
                  <span className="material-icons text-gray-400 transition-transform group-focus-within:rotate-180">expand_more</span>
                </div>
                {drug.pregnancy && (
                  <div className="hidden border-t border-gray-100 px-6 pb-6 pt-4 text-sm text-gray-600 group-focus-within:block dark:border-gray-800 dark:text-gray-300">
                    {drug.pregnancy}
                  </div>
                )}
              </div>

              <div id="ingredients" className="group rounded-xl border border-gray-100 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark" tabIndex={0}>
                <div className="flex cursor-pointer items-center justify-between p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400">
                      <span className="material-icons">science</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Ingredients</h3>
                      <p className="text-sm text-text-muted">
                        {drug.ingredients.active.length} active, {drug.ingredients.inactive.length} inactive
                      </p>
                    </div>
                  </div>
                  <span className="material-icons text-gray-400 transition-transform group-focus-within:rotate-180">expand_more</span>
                </div>
                <div className="hidden border-t border-gray-100 px-6 pb-6 pt-4 dark:border-gray-800 group-focus-within:block">
                  <div className="grid gap-8 text-sm md:grid-cols-2">
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Active Ingredients</h4>
                      {drug.ingredients.active.length > 0 ? (
                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                          {drug.ingredients.active.map((ing, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                              {typeof ing === "string" ? ing : JSON.stringify(ing)}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400">Refer to FDA label</p>
                      )}
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">Inactive Ingredients</h4>
                      {drug.ingredients.inactive.length > 0 ? (
                        <ul className="space-y-1 text-gray-600 dark:text-gray-400">
                          {drug.ingredients.inactive.map((ing, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                              {typeof ing === "string" ? ing : JSON.stringify(ing)}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-400">Refer to FDA label</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Disclaimer Footer */}
            <div className="flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-xs text-text-muted dark:border-gray-800 dark:text-gray-500 md:flex-row">
              <p>{disclaimer || "Source: FDA Drug Label Information."}</p>
              <div className="flex items-center gap-4">
                <a className="hover:text-primary" href="#">Disclaimer</a>
                <a className="hover:text-primary" href="#">Privacy Policy</a>
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
