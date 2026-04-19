import { useState } from "react";
import { Link } from "react-router-dom";
import { useDrugSearch } from "../../hooks/useDrugSearch";

export function DrugSearchPage() {
  const [query, setQuery] = useState("");
  const { data, isLoading, error } = useDrugSearch(query);

  return (
    <div className="min-h-screen bg-background-light font-display text-slate-800 dark:bg-background-dark dark:text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-[#15202b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white">
                  <span className="material-icons text-xl">local_pharmacy</span>
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">PHARMAWISE</span>
              </Link>
            </div>
            <div className="hidden items-center space-x-8 md:flex">
              <span className="flex h-full items-center border-b-2 border-primary px-1 pt-1 font-medium text-primary">Drug Search</span>
              <Link className="flex h-full items-center px-1 pt-1 font-medium text-slate-500 transition-colors hover:text-primary dark:text-slate-400" to="/prescription/upload">Prescription OCR</Link>
              <Link className="flex h-full items-center px-1 pt-1 font-medium text-slate-500 transition-colors hover:text-primary dark:text-slate-400" to="/ai/education">AI Education</Link>
            </div>
            <div className="flex items-center gap-4">
              <Link className="text-sm font-medium text-slate-500 hover:text-primary dark:text-slate-400" to="/dashboard">Dashboard</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="relative flex flex-grow flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 top-0 h-96 w-full bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-20 left-10 h-48 w-48 rounded-full bg-blue-400/5 blur-2xl" />

        <div className="z-10 flex w-full max-w-4xl flex-col items-center text-center space-y-8">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Medical Grade Database
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Find detailed <span className="text-primary">drug information</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Access verified information on dosage, side effects, and interactions from the world's most trusted medical sources.
            </p>
          </div>

          <div className="group relative w-full max-w-2xl">
            <div className="relative z-20 flex h-16 w-full items-center overflow-hidden rounded-xl bg-white shadow-lg shadow-primary/5 ring-1 ring-slate-200 transition-all focus-within:ring-2 focus-within:ring-primary dark:bg-[#1e2936] dark:ring-slate-700">
              <div className="grid h-full w-14 place-items-center text-slate-400">
                <span className="material-icons text-2xl">search</span>
              </div>
              <input
                id="search"
                className="h-full w-full bg-transparent pr-2 text-lg text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200"
                placeholder="Search by drug name, brand, or generic..."
                type="text"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
              <div className="hidden pr-4 sm:flex">
                <Link
                  className="rounded-lg bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-md shadow-primary/20 transition-colors hover:bg-primary/90"
                  to={query ? `/drug/${encodeURIComponent(query)}` : "/drug-search"}
                >
                  Search
                </Link>
              </div>
            </div>

            {data ? (
              <div className="mt-3 rounded-xl border border-slate-100 bg-white p-4 text-left shadow-xl dark:border-slate-800 dark:bg-[#1e2936]">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Top Match</p>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-base font-semibold text-slate-800 dark:text-slate-200">{data.data.name}</p>
                    <p className="text-xs text-slate-500">
                      {data.data.genericName !== "Not available" ? `Generic: ${data.data.genericName} — ` : ""}
                      {data.data.purpose}
                    </p>
                  </div>
                  <Link className="text-xs font-medium text-primary hover:underline" to={`/drug/${encodeURIComponent(data.data.name)}`}>
                    View details →
                  </Link>
                </div>
                {data.disclaimer && (
                  <p className="mt-3 border-t border-slate-100 pt-2 text-[10px] text-slate-400 dark:border-slate-700">{data.disclaimer}</p>
                )}
              </div>
            ) : null}

            {isLoading ? <p className="mt-2 text-xs text-slate-500">Searching FDA data...</p> : null}
            {error ? <p className="mt-2 text-xs text-red-600">{error}</p> : null}
          </div>

          <div className="w-full max-w-2xl pt-4">
            <div className="mb-3 flex items-center gap-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Quick Search</span>
              <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            </div>
            <div className="flex flex-wrap gap-3">
              {["Aspirin", "Metformin", "Lisinopril", "Ibuprofen", "Amoxicillin"].map((item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-primary/50 hover:bg-primary/5 dark:border-slate-700 dark:bg-[#1e2936] dark:text-slate-300 dark:hover:bg-slate-800"
                >
                  <span className="material-icons text-sm text-slate-400 transition-colors group-hover:text-primary">search</span>
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full max-w-4xl pt-12">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { label: "Antibiotics", icon: "coronavirus", search: "amoxicillin" },
                { label: "Cardiovascular", icon: "favorite", search: "lisinopril" },
                { label: "Pain Relief", icon: "sick", search: "ibuprofen" },
                { label: "Supplements", icon: "spa", search: "vitamin" },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => setQuery(item.search)}
                  className="group flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 dark:border-slate-700 dark:bg-[#1e2936]"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-primary transition-transform group-hover:scale-110 dark:bg-slate-800">
                    <span className="material-icons">{item.icon}</span>
                  </div>
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-primary dark:text-slate-200">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="border-t border-primary/20 bg-neutral-soft dark:bg-slate-900">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-4 py-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <span className="material-icons text-primary">info</span>
          <div className="flex-1 text-sm text-slate-600 dark:text-slate-400">
            <span className="font-bold text-slate-800 dark:text-slate-200">Medical Disclaimer:</span> Content on PHARMAWISE is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
          </div>
          <Link className="text-sm font-semibold text-primary hover:text-primary/80" to="/features">Read Full Disclaimer →</Link>
        </div>
      </div>

      <footer className="border-t border-slate-200 bg-white py-8 dark:border-slate-800 dark:bg-[#15202b]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:px-8">
          <p className="text-sm text-slate-500">© 2024 PHARMAWISE Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="text-sm text-slate-500 hover:text-primary" href="#">Privacy Policy</a>
            <a className="text-sm text-slate-500 hover:text-primary" href="#">Terms of Service</a>
            <a className="text-sm text-slate-500 hover:text-primary" href="#">Help Center</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
