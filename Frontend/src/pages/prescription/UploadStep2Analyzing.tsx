import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { parseOcrText } from "../../services/prescription.service";

export function UploadStep2Analyzing() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const text = sessionStorage.getItem("pharmawise_ocr_text") || "";
    if (!text) {
      navigate("/prescription/upload");
      return;
    }

    async function run() {
      try {
        const response = await parseOcrText(text);
        sessionStorage.setItem("pharmawise_ocr_result", JSON.stringify(response));
        navigate("/prescription/verify");
      } catch (err) {
        setError((err as Error).message || "Unable to analyze OCR text");
      }
    }

    run();
  }, [navigate]);

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

      <main className="mx-auto flex w-full max-w-7xl flex-col items-center gap-8 p-6">
        <div className="mb-4 w-full max-w-3xl">
          <div className="relative flex w-full items-center justify-between">
            <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-slate-200 dark:bg-slate-800" />
            <div className="absolute left-0 top-1/2 h-1 w-1/3 -translate-y-1/2 rounded-full bg-primary" />
            {[
              { step: "check", label: "Upload", active: true },
              { step: "sync", label: "Analyzing", active: true },
              { step: 3, label: "Verify" },
              { step: 4, label: "Confirm" }
            ].map((item, index) => (
              <div key={index} className="flex flex-col items-center gap-2">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ring-4 ${item.active ? "bg-primary text-white ring-primary/20" : "bg-slate-200 text-slate-400 ring-white dark:bg-slate-700"}`}>
                  {typeof item.step === "string" ? <span className={`material-icons text-sm ${item.step === "sync" ? "animate-spin" : ""}`}>{item.step}</span> : item.step}
                </div>
                <span className={`text-xs ${item.active ? "font-bold text-primary" : "text-slate-400"}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-800 dark:bg-slate-900">
          <div className="relative flex h-[400px] items-center justify-center overflow-hidden bg-slate-900">
            <img
              alt="Scanned prescription document being analyzed"
              className="h-full w-full object-contain opacity-40 blur-[1px]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO0JWGuFE4YPCyk1v1dwEekIiTG0F3KTIMJL_jKt3KKXdN-MFlenOP3jnUi2UUzZKR4UpDy5G_oC_demE-kUxgs54dJU1OSNTgmDbR7ii2U-oqqU0nKpverX08y7SNBvrGKam3LaXDFVmox17g0fM9AM5uYikjGdKMjzEHxAzFsRDGhFaUkCbx8msMJukW-WNIxV0X0tfpGt5o5_9nBRzO51RC_JaerrP-MI7qfyeCR6LTKXqLbuTbWqgw0Q5m0hbJUewAgEqxuaM"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-ping rounded-full border-2 border-primary" />
                <div className="rounded-full border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                  <span className="material-icons animate-spin text-4xl text-white">smart_toy</span>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-1/2 h-1 w-full bg-primary shadow-[0_0_15px_rgba(19,127,236,0.8)]" />
          </div>

          <div className="flex flex-col gap-6 p-8 text-center">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-slate-800 dark:text-white">Analyzing Document</h2>
              <p className="text-slate-500 dark:text-slate-400">Our AI is extracting prescription details...</p>
            </div>
            <div className="space-y-4">
              <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
              <div className="flex items-center justify-between text-sm font-medium">
                <span className="flex items-center gap-2 text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  Reading medications...
                </span>
                <span className="text-slate-400">45%</span>
              </div>
              <div className="grid grid-cols-1 gap-3 text-left sm:grid-cols-2">
                {[
                  { label: "Image enhancement", done: true },
                  { label: "Text recognition (OCR)", done: true },
                  { label: "Identifying drug names", done: false },
                  { label: "Dosage validation", done: false }
                ].map((step) => (
                  <div key={step.label} className={`flex items-center gap-2 text-sm ${step.done ? "text-green-600 dark:text-green-500" : "text-slate-400"}`}>
                    <span className="material-icons text-base">{step.done ? "check_circle" : "radio_button_unchecked"}</span>
                    {step.label}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-center border-t border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-800/50">
            <p className="flex items-center gap-1 text-xs text-slate-500">
              <span className="material-icons text-sm">lock</span>
              Your data is encrypted and processed securely.
            </p>
          </div>
        </div>
        {error ? <p className="text-sm text-red-600">{error}</p> : null}
      </main>

      <div className="pointer-events-none fixed inset-0 -z-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-40 [background-size:16px_16px] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] dark:opacity-10" />
    </div>
  );
}
