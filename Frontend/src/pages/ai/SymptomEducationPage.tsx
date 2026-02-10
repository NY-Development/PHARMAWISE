import { useState } from "react";
import { explainEducationalText } from "../../services/ai.service";

export function SymptomEducationPage() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState<null | {
    explanation: string;
    keyTerms: string[];
    confidence: number;
    requiresManualReview: boolean;
    disclaimer: string;
  }>(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      setLoading(true);
      setError(null);
      const data = await explainEducationalText(input);
      setResponse(data);
    } catch (err) {
      setError((err as Error).message || "Unable to analyze text");
    } finally {
      setLoading(false);
    }
  }

  const confidencePercent = response ? Math.round(response.confidence * 100) : 0;

  return (
    <div className="min-h-screen bg-background-light font-display text-slate-800 dark:bg-background-dark dark:text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-[#15202b]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xl font-bold text-white">P</div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">PHARMAWISE</span>
              </div>
              <div className="hidden space-x-6 text-sm font-medium md:flex">
                <a className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#">Dashboard</a>
                <a className="border-b-2 border-primary pb-5 text-primary dark:text-primary" href="#">Symptom Checker</a>
                <a className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#">Consultations</a>
                <a className="text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#">Pharmacy</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="rounded-full p-2 text-slate-400 hover:text-slate-500 dark:hover:text-slate-300">
                <span className="material-icons text-[20px]">notifications_none</span>
              </button>
              <div className="flex items-center gap-2 border-l border-slate-200 pl-4 dark:border-slate-700">
                <img
                  alt="Profile"
                  className="h-8 w-8 rounded-full border border-slate-200 dark:border-slate-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKai-kASTqU-iUY78XbSNUfGPu2cT70BfAvOUHEHvF9qbgqRkCT5m0U3Pxj-T6eKjXcTgc9fTTmBDK2x_70dZccqLIZlXG_axg6rYx9g8WQaDZ73y8K6GwJsf-eylSrTvRI5hHSkkjsYn0E01fN6FI_XHsMTwtifm1wZqPR3eA4heHAajuMqYDxNXehKrjFCrNiVu935-X9VUOxlkpatp8c0raLIQOGfUmtyPTSPnOTad7jkkt2dksgXtFNq8bAZNYmRwOPqTWDVM"
                />
                <span className="hidden text-sm font-medium text-slate-700 dark:text-slate-200 sm:block">Alex M.</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 py-8 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">AI Symptom Analysis</h1>
            <p className="leading-relaxed text-slate-500 dark:text-slate-400">
              Powered by PHARMAWISE Intelligence. Describe your condition below for educational insights and potential medication matches.
            </p>
          </div>
          <form className="flex flex-col gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15202b]" onSubmit={handleSubmit}>
            <div className="flex items-center justify-between">
              <label className="text-sm font-semibold text-slate-700 dark:text-slate-200" htmlFor="symptoms">
                Describe Symptoms
              </label>
              <span className="rounded bg-primary/10 px-2 py-1 text-xs font-medium text-primary">AI V2.0 Active</span>
            </div>
            <div className="relative">
              <textarea
                id="symptoms"
                className="block w-full resize-none rounded-lg border-slate-200 bg-slate-50 p-4 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-primary focus:ring-primary dark:border-slate-700 dark:bg-[#1a2632] dark:text-white"
                rows={6}
                placeholder="e.g., I have been experiencing a sharp throbbing pain in my right temple since this morning, accompanied by sensitivity to light..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
              />
              <div className="absolute bottom-3 right-3 text-xs text-slate-400">
                {Math.min(input.length, 500)}/500
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Fever", "Nausea", "Fatigue", "Rash"].map((tag) => (
                <button key={tag} type="button" className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700">
                  <span className="material-icons mr-1 text-[14px]">add</span>
                  {tag}
                </button>
              ))}
            </div>
            <button
              className="mt-2 flex w-full items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-600"
              type="submit"
              disabled={isLoading}
            >
              <span className="material-icons mr-2 text-[18px]">auto_awesome</span>
              {isLoading ? "Analyzing" : "Analyze Symptoms"}
            </button>
          </form>
          <div className="flex items-start gap-3 rounded-lg border border-primary/10 bg-primary/5 p-4">
            <span className="material-icons text-xl text-primary">verified_user</span>
            <div>
              <h4 className="text-sm font-semibold text-slate-900 dark:text-white">Secure & Private</h4>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                Your health data is encrypted and anonymized. We do not share your personal inputs with third parties.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15202b]">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/50 px-6 py-4 dark:border-slate-800 dark:bg-slate-800/30">
              <h2 className="flex items-center gap-2 text-lg font-bold text-slate-900 dark:text-white">
                <span className="block h-6 w-2 rounded-full bg-primary" />
                AI Assessment
              </h2>
              <span className="rounded px-2.5 py-0.5 text-xs font-medium text-green-800 dark:text-green-300" style={{ backgroundColor: "rgba(34,197,94,0.15)" }}>
                Confidence: {response ? (response.confidence >= 0.85 ? "High" : response.confidence >= 0.65 ? "Medium" : "Low") : "-"}
              </span>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <div className="mb-2 flex justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
                  <span>Low Urgency</span>
                  <span className="text-orange-500">Moderate Attention</span>
                  <span>Critical</span>
                </div>
                <div className="relative h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-orange-400 to-red-500 opacity-20" />
                  <div className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-green-500 to-orange-400" style={{ width: `${Math.min(100, Math.max(10, confidencePercent))}%` }} />
                </div>
              </div>
              <h3 className="mb-2 text-base font-semibold text-slate-900 dark:text-white">Educational Summary</h3>
              <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {response?.explanation || "Provide symptom details to receive an educational summary based on existing medical text and FDA sources."}
              </p>
              <div className="rounded border border-primary/10 bg-primary/5 p-3">
                <p className="flex items-start gap-2 text-xs text-primary dark:text-blue-300">
                  <span className="material-icons mt-0.5 text-[16px]">info</span>
                  <span>{response?.disclaimer || "This is an educational assessment. Consult a licensed professional for medical decisions."}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15202b]">
            <div className="border-b border-slate-100 px-6 py-4 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Matched Medications</h2>
              <p className="mt-1 text-xs text-slate-500">Ranked by relevance to your symptom profile</p>
            </div>
            {(response?.keyTerms || ["Educational", "FDA", "Summary"]).slice(0, 3).map((term, index) => (
              <div key={term} className="group border-b border-slate-100 p-4 transition-colors last:border-b-0 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800/50 sm:p-6">
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400">
                      <span className="material-icons">medication</span>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-slate-900 transition-colors group-hover:text-primary dark:text-white">
                        {term}
                      </h4>
                      <div className="mt-1 flex flex-wrap gap-2">
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">Educational</span>
                        <span className="rounded bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-600 dark:bg-slate-700 dark:text-slate-300">Reference</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:justify-end">
                    <div className="text-right">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Match Score</div>
                      <div className="text-lg font-bold text-primary">{Math.max(60, 90 - index * 8)}%</div>
                    </div>
                    <button className="rounded-lg border border-primary/20 px-4 py-2 text-sm font-medium text-primary transition-all hover:border-primary hover:text-blue-700 dark:hover:text-blue-300">
                      View Info
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center rounded-b-xl border-t border-slate-100 bg-slate-50 px-6 py-3 dark:border-slate-800 dark:bg-slate-900/50">
              <a className="flex items-center text-xs font-medium text-primary hover:text-blue-700" href="#">
                View all matches <span className="material-icons ml-1 text-[14px]">arrow_forward</span>
              </a>
            </div>
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
        </div>
      </main>

      <footer className="mt-auto border-t border-slate-800 bg-slate-900 py-8 text-slate-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-3 flex items-center gap-2 text-red-400">
              <span className="material-icons">warning</span>
              <h5 className="text-sm font-bold uppercase tracking-wide">Medical Disclaimer</h5>
            </div>
            <p className="text-xs leading-relaxed">
              The content provided by this AI tool is for informational and educational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <div className="mt-4 flex gap-4 text-xs font-medium">
              <a className="transition-colors hover:text-white" href="#">Terms of Service</a>
              <a className="transition-colors hover:text-white" href="#">Privacy Policy</a>
              <a className="transition-colors hover:text-white" href="#">Emergency Contacts</a>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 lg:items-end">
            <div className="text-xs text-slate-500">PHARMAWISE v2.4.1</div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-xs">Systems Operational</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
