import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { extractTextFromFile } from "../../hooks/useOCR";

export function UploadStep1() {
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [provider, setProvider] = useState<"aws-textract" | "mistral">("mistral");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAnalyze() {
    if (!file) {
      setError("Please choose a file to analyze.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const text = await extractTextFromFile(file, provider);
      sessionStorage.setItem("pharmawise_ocr_text", text);
      navigate("/prescription/analyzing");
    } catch (err) {
      setError((err as Error).message || "OCR failed");
    } finally {
      setLoading(false);
    }
  }

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
            <div className="absolute left-0 top-1/2 h-1 w-[8%] -translate-y-1/2 rounded-full bg-primary" />
            {[
              { step: 1, label: "Upload", active: true },
              { step: 2, label: "Analyzing" },
              { step: 3, label: "Verify" },
              { step: 4, label: "Confirm" }
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold ring-4 ${item.active ? "bg-primary text-white ring-primary/20" : "bg-slate-200 text-slate-400 ring-white dark:bg-slate-700"}`}
                >
                  {item.step}
                </div>
                <span className={`text-xs ${item.active ? "font-bold text-primary" : "text-slate-400"}`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-2xl space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Upload Prescription</h1>
            <p className="text-slate-500 dark:text-slate-400">Securely upload your prescription to get started with your order.</p>
          </div>

          <label className="group flex cursor-pointer flex-col items-center rounded-2xl border-2 border-dashed border-slate-300 bg-white p-12 text-center shadow-sm transition-colors hover:border-primary dark:border-slate-700 dark:bg-slate-900">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-50 transition-transform duration-300 group-hover:scale-110 dark:bg-blue-900/20">
              <span className="material-icons text-4xl text-primary">cloud_upload</span>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-slate-900 dark:text-white">Upload your prescription</h3>
            <p className="mb-8 max-w-sm text-slate-500 dark:text-slate-400">
              Drag and drop your file here, or click to browse from your computer.
            </p>
            <input
              className="hidden"
              type="file"
              accept="image/*,.pdf"
              onChange={(event) => setFile(event.target.files?.[0] || null)}
            />
            <div className="flex flex-col items-center gap-4">
              <span className="rounded-lg border border-slate-300 bg-white px-6 py-2.5 font-medium text-slate-700 shadow-sm transition-all hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200">
                Select File
              </span>
              <p className="mt-2 text-xs font-medium uppercase tracking-wide text-slate-400">JPEG, PNG or PDF up to 10MB</p>
            </div>
          </label>

          <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-slate-700 dark:border-blue-800/30 dark:bg-blue-900/10 dark:text-slate-300">
            <span className="mb-0.5 block font-semibold text-slate-900 dark:text-white">Tips for best results:</span>
            <ul className="ml-2 list-disc space-y-1 text-slate-600 dark:text-slate-400">
              <li>Ensure good lighting and avoid glare on the paper.</li>
              <li>Keep the camera steady and parallel to the document.</li>
              <li>Make sure all text, especially handwriting, is clearly visible.</li>
            </ul>
          </div>

          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            OCR provider
            <select
              className="mt-2 w-full rounded-lg border-slate-300 bg-white p-2.5 text-slate-900 focus:ring-2 focus:ring-primary dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              value={provider}
              onChange={(event) => setProvider(event.target.value as "aws-textract" | "mistral")}
            >
              <option value="mistral">Mistral (handwritten)</option>
              <option value="aws-textract">AWS Textract (multi-page PDF)</option>
            </select>
          </label>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <div className="flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
            <button className="flex items-center gap-2 font-medium text-slate-500 transition-colors hover:text-slate-800 dark:text-slate-400 dark:hover:text-white">
              <span className="material-icons text-sm">arrow_back</span>
              Cancel
            </button>
            <button
              className={`flex items-center gap-2 rounded-lg px-8 py-2.5 font-medium ${file ? "bg-primary text-white shadow-md shadow-blue-500/20 hover:bg-blue-600" : "cursor-not-allowed bg-slate-200 text-slate-400 dark:bg-slate-800 dark:text-slate-600"}`}
              disabled={!file || isLoading}
              onClick={handleAnalyze}
            >
              {isLoading ? "Extracting" : "Next Step"}
              <span className="material-icons text-sm">arrow_forward</span>
            </button>
          </div>
        </div>
      </main>

      <div className="pointer-events-none fixed inset-0 -z-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-40 [background-size:16px_16px] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] dark:opacity-10" />
    </div>
  );
}
