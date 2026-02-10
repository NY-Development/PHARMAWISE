import { useNavigate } from "react-router-dom";

export function UploadStep3Verify() {
  const navigate = useNavigate();
  const raw = sessionStorage.getItem("pharmawise_ocr_result") || "{}";
  const result = JSON.parse(raw) as {
    drugs?: string[];
    confidence?: number;
    disclaimer?: string;
  };

  const confidence = result.confidence || 0;
  const confidencePercent = Math.round(confidence * 100);

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
                <span className="font-medium text-primary">Upload</span>
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

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 p-6">
        <div className="mb-4 w-full max-w-3xl">
          <div className="relative flex w-full items-center justify-between">
            <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="absolute left-0 top-1/2 h-1 w-2/3 -translate-y-1/2 rounded-full bg-primary" />
            {[
              { label: "Upload", done: true },
              { label: "Analyzing", done: true },
              { label: "Verify", active: true },
              { label: "Confirm" }
            ].map((item, index) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ring-4 ${item.active ? "bg-primary text-white ring-primary/20" : item.done ? "bg-primary text-white ring-white dark:ring-background-dark" : "bg-slate-200 text-slate-400 ring-white dark:bg-slate-700"}`}
                >
                  {item.done ? <span className="material-icons text-sm">check</span> : index + 1}
                </div>
                <span className={`text-xs ${item.active ? "font-bold text-primary" : item.done ? "text-primary" : "text-slate-400"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-24">
            <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-800/50">
              <h2 className="flex items-center gap-2 font-semibold text-slate-800 dark:text-slate-200">
                <span className="material-icons text-lg text-slate-500">description</span>
                Original Document
              </h2>
              <div className="flex gap-2 text-slate-500">
                {[
                  { icon: "remove", label: "Zoom Out" },
                  { icon: "add", label: "Zoom In" },
                  { icon: "rotate_right", label: "Rotate" }
                ].map((item) => (
                  <button key={item.icon} className="rounded p-1.5 transition-colors hover:bg-slate-200 dark:hover:bg-slate-700" aria-label={item.label}>
                    <span className="material-icons">{item.icon}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="relative flex flex-1 items-center justify-center bg-slate-100 dark:bg-slate-950">
              <div className="relative max-h-[90%] max-w-[90%] overflow-hidden bg-white shadow-lg">
                <img
                  alt="Scanned prescription document"
                  className="h-full w-full object-contain opacity-90"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO0JWGuFE4YPCyk1v1dwEekIiTG0F3KTIMJL_jKt3KKXdN-MFlenOP3jnUi2UUzZKR4UpDy5G_oC_demE-kUxgs54dJU1OSNTgmDbR7ii2U-oqqU0nKpverX08y7SNBvrGKam3LaXDFVmox17g0fM9AM5uYikjGdKMjzEHxAzFsRDGhFaUkCbx8msMJukW-WNIxV0X0tfpGt5o5_9nBRzO51RC_JaerrP-MI7qfyeCR6LTKXqLbuTbWqgw0Q5m0hbJUewAgEqxuaM"
                />
                <div className="absolute left-[15%] top-[28%] h-[6%] w-[40%] rounded-sm border-2 border-green-500/50 bg-green-500/10" />
                <div className="absolute left-[15%] top-[36%] h-[5%] w-[25%] rounded-sm border-2 border-yellow-500/50 bg-yellow-500/10" />
                <div className="absolute left-[50%] top-[36%] h-[5%] w-[30%] rounded-sm border-2 border-green-500/50 bg-green-500/10" />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800/30 dark:bg-orange-900/10">
              <span className="material-icons mt-0.5 text-orange-500">warning_amber</span>
              <div>
                <h3 className="text-sm font-semibold text-orange-800 dark:text-orange-200">Review Needed</h3>
                <p className="mt-1 text-sm text-orange-700 dark:text-orange-300">
                  The OCR confidence for extracted text is {confidencePercent}%. Please verify against the original document.
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                <h2 className="text-lg font-bold text-slate-800 dark:text-white">Extracted Details</h2>
                <span className="rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-500 dark:bg-slate-800">Auto-filled via OCR</span>
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">Detected Drug Names</label>
                  <div className="rounded-lg border border-slate-300 bg-white p-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                    {(result.drugs || []).length > 0 ? (result.drugs || []).join(", ") : "No drugs detected"}
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 flex justify-between text-sm font-medium text-slate-700 dark:text-slate-300">
                    Confidence
                    <span className="text-xs text-orange-500">Check Original</span>
                  </label>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div className={`h-full rounded-full ${confidence < 0.65 ? "bg-orange-500" : "bg-primary"}`} style={{ width: `${confidencePercent}%` }} />
                  </div>
                  <p className="mt-1 text-xs text-slate-500">Confidence: {confidencePercent}%</p>
                </div>
              </div>
            </div>

            <div className="sticky bottom-6 z-10 flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 md:flex-row">
              <p className="max-w-sm text-center text-xs text-slate-500 dark:text-slate-400 md:text-left">
                <span className="material-icons mr-1 align-middle text-[14px]">info</span>
                AI extraction may contain errors. By confirming, you verify these details match the original document.
              </p>
              <div className="flex w-full gap-3 md:w-auto">
                <button
                  className="flex-1 rounded-lg border border-slate-300 px-6 py-2.5 font-medium text-slate-700 transition-colors hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800 md:flex-none"
                  onClick={() => navigate("/prescription/upload")}
                >
                  Rescan
                </button>
                <button
                  className="flex-1 rounded-lg bg-primary px-8 py-2.5 font-medium text-white shadow-md shadow-blue-500/20 transition-all hover:bg-blue-600 md:flex-none"
                  onClick={() => navigate("/prescription/confirm")}
                >
                  Confirm Prescription
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <div className="pointer-events-none fixed inset-0 -z-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-40 [background-size:16px_16px] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] dark:opacity-10" />
    </div>
  );
}
