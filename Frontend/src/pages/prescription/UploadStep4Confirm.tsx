import { Link } from "react-router-dom";

export function UploadStep4Confirm() {
  const raw = sessionStorage.getItem("pharmawise_ocr_result") || "{}";
  const result = JSON.parse(raw) as { drugs?: string[] };
  const drugs = result.drugs || [];

  return (
    <div className="min-h-screen bg-background-light font-display text-slate-900 dark:bg-background-dark dark:text-slate-100">
      <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 justify-between">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2">
                <span className="material-icons text-primary">medication</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">PHARMAWISE</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="hidden items-center text-sm text-slate-500 dark:text-slate-400 md:flex">
                <span className="cursor-pointer hover:text-primary">Home</span>
                <span className="material-icons mx-1 text-base">chevron_right</span>
                <span className="cursor-pointer hover:text-primary">Prescriptions</span>
                <span className="material-icons mx-1 text-base">chevron_right</span>
                <span className="font-medium text-primary">Confirmation</span>
              </div>
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-slate-300 bg-slate-200 dark:border-slate-600 dark:bg-slate-700">
                <img
                  alt="Profile"
                  className="h-full w-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfNm8eRw2QREFI-qwrBxH04Del68ggSGexuM-aFndLf0v5q-kxSWJi0_5Kfmsx88MkVq83MgM2FOBgHE83TyYegZvY6vBDt2o6Jgsi-CXidiBP5x6JbOIYWYeT-pRGjG3H609IJT4LiAT_2zOMtzdQ1kA2njqqRFDyRbfy6QSAdBDiPH-sPLGdcOuJ97vNp0X7Pv4gx-5WQS1ZHDOqec4W3ThIS1VsqKtIkGCF3zvgwekl9X6hyC2l4MxKzwHLOg1Ct5y1XkWlX1c"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto flex w-full max-w-7xl flex-col items-center justify-start gap-8 p-6">
        <div className="mb-4 w-full max-w-3xl">
          <div className="relative flex w-full items-center justify-between">
            <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-primary" />
            {[
              { label: "Upload", done: true },
              { label: "Analyzing", done: true },
              { label: "Verify", done: true },
              { label: "Confirm", active: true }
            ].map((item, index) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ring-4 ${item.active ? "bg-primary text-white ring-primary/20 ring-offset-2 ring-offset-white dark:ring-offset-background-dark animate-pulse" : "bg-primary text-white ring-white dark:ring-background-dark"}`}
                >
                  {item.active ? index + 1 : <span className="material-icons text-sm">check</span>}
                </div>
                <span className={`text-xs ${item.active ? "font-bold text-primary" : "font-medium text-primary"}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full max-w-2xl flex-col items-center gap-6">
          <div className="relative w-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-800 dark:bg-slate-900">
            <div className="border-b border-green-100 bg-green-50 p-8 text-center dark:border-green-800/20 dark:bg-green-900/10">
              <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                <span className="material-icons text-5xl text-green-600 dark:text-green-400">check_circle</span>
              </div>
              <h1 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">Prescription Verified Successfully</h1>
              <p className="text-slate-600 dark:text-slate-400">Your prescription has been digitized and added to your records.</p>
            </div>
            <div className="space-y-8 p-6 md:p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {[
                  { label: "Patient Name", value: "Sarah Jenkins", icon: "person" },
                  { label: "Prescribing Doctor", value: "Dr. Emily Chen", sub: "Lic. #MD-55421", icon: "medical_services" }
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4 rounded-lg border border-slate-100 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
                    <div className="rounded-md bg-white p-2 text-primary shadow-sm dark:bg-slate-700">
                      <span className="material-icons">{item.icon}</span>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-medium uppercase tracking-wider text-slate-500">{item.label}</p>
                      <p className="text-lg font-semibold text-slate-900 dark:text-white">{item.value}</p>
                      {item.sub ? <p className="text-xs text-slate-400">{item.sub}</p> : null}
                    </div>
                  </div>
                ))}
              </div>

              <div className="my-2 border-t border-slate-100 dark:border-slate-800" />

              <div>
                <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Confirmed Medications</h3>
                <div className="divide-y divide-slate-100 rounded-lg border border-slate-200 bg-white dark:divide-slate-700 dark:border-slate-700 dark:bg-slate-800">
                  {(drugs.length ? drugs : ["Amoxicillin", "Ibuprofen"]).map((drug) => (
                    <div key={drug} className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded bg-blue-50 p-2 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400">
                          <span className="material-icons">pill</span>
                        </div>
                        <div>
                          <p className="font-bold text-slate-900 dark:text-white">{drug}</p>
                          <p className="text-sm text-slate-500">Dosage details on file</p>
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="mb-1 rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-300">
                          Verified
                        </span>
                        <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Follow instructions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button className="group flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-primary">
                  <span className="material-icons text-lg transition-transform group-hover:scale-110">picture_as_pdf</span>
                  Download Summary PDF
                </button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-800/50 sm:flex-row">
              <button className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-300 px-6 py-2.5 font-medium text-slate-700 transition-colors hover:bg-white dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-700 sm:w-auto">
                <span className="material-icons text-sm">history</span>
                Add to History
              </button>
              <Link
                className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-8 py-2.5 font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-600 sm:w-auto"
                to="/dashboard"
              >
                Go to My Dashboard
                <span className="material-icons text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
          <p className="max-w-md text-center text-xs text-slate-400 dark:text-slate-500">
            This prescription has been processed securely. If you notice any discrepancies later, please contact support or consult your pharmacist.
          </p>
        </div>
      </main>

      <div className="pointer-events-none fixed inset-0 -z-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-40 [background-size:16px_16px] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] dark:opacity-10" />
    </div>
  );
}
