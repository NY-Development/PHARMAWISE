export default function DoctorDashboard() {
  return (
    <div className="flex min-h-screen overflow-hidden bg-background-light font-display text-slate-800 dark:bg-background-dark dark:text-slate-100">
      <aside className="flex h-screen w-64 flex-shrink-0 flex-col justify-between border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-[#15202b]">
        <div>
          <div className="flex h-16 items-center border-b border-slate-100 px-6 dark:border-slate-800">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary">
              <i className="ri-pulse-line text-2xl" />
              PHARMAWISE
            </div>
          </div>
          <nav className="flex flex-col gap-1 p-4">
            <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-2.5 font-medium text-primary" href="#">
              <i className="ri-dashboard-line text-lg" />
              Dashboard
            </a>
            {[
              { icon: "ri-user-heart-line", label: "Patients" },
              { icon: "ri-capsule-line", label: "Prescriptions" },
              { icon: "ri-bar-chart-box-line", label: "Analytics" },
              { icon: "ri-file-list-3-line", label: "Templates" }
            ].map((item) => (
              <a
                key={item.label}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-slate-500 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50"
                href="#"
              >
                <i className={`${item.icon} text-lg`} />
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-slate-100 p-4 dark:border-slate-800">
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 font-medium text-slate-500 transition-colors hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800/50" href="#">
            <i className="ri-settings-4-line text-lg" />
            Settings
          </a>
          <div className="mt-4 flex items-center gap-3 px-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-primary/20">
              <img
                alt="Doctor profile portrait"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFHPo6Sw2k73z8wCI3tqVvJKxrRRtDnwwjAgyumkQcXVLWfKOZl_-bMqN4p7z1EEbKxM5ukJ-JnDJHBV3yGzrkt_8HdHouRzTcdaJH4LpKbbs1FtqaTcugLXJ6GpqWjNuJPtN3rYyNe0iOuasPBlWAZUPBn7vx_A3U9hFFR3UOr64j0OBZmTey_6Cqo9Jn_2kjc-S180OSVYSQM86U4XRs68wkzK6BmkyRtqslPxU0IqdiVUMYuAN0nILcFTj_o3FPvlAViMQVzHU"
              />
              <div className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-slate-800 dark:text-slate-200">Dr. Sarah Chen</p>
              <p className="truncate text-xs text-slate-500">Cardiology</p>
            </div>
          </div>
        </div>
      </aside>

      <main className="flex h-screen flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-[#15202b]">
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">Welcome back, Dr. Chen</h1>
            <p className="text-xs text-slate-500">Today is October 24, 2023 - 09:41 AM</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative w-96">
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                className="w-full rounded-lg border-none bg-background-light py-2 pl-10 pr-4 text-sm text-slate-700 placeholder-slate-400 focus:ring-2 focus:ring-primary/50 dark:bg-slate-800 dark:text-slate-200"
                placeholder="Search drugs, ICD-10 codes, or patients..."
                type="text"
              />
            </div>
            <button className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-background-light text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700" aria-label="Notifications">
              <i className="ri-notification-3-line text-lg" />
              <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full border border-white bg-red-500 dark:border-slate-800" />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6">
          <div className="grid h-full grid-cols-12 gap-6">
            <div className="col-span-12 flex flex-col gap-6 lg:col-span-8">
              <div className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#15202b]">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <i className="ri-magic-line text-xl" />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-800 dark:text-white">Patient Summary Generator</h2>
                      <p className="text-xs text-slate-500">Transform clinical notes into patient-friendly language</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600 transition-colors hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300">
                      <i className="ri-history-line mr-1" /> History
                    </button>
                    <button className="rounded bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary/20">Load Template</button>
                  </div>
                </div>
                <div className="grid min-h-[300px] flex-1 grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Clinical Input</label>
                    <textarea
                      className="w-full flex-1 resize-none rounded-lg border border-slate-200 bg-background-light p-4 font-mono text-sm leading-relaxed text-slate-700 placeholder-slate-400 focus:border-primary focus:ring-1 focus:ring-primary dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300"
                      placeholder="e.g. Pt prescribed Amoxicillin 500mg TID x7d. Diagnosis: Acute Sinusitis. Advise: take with food, finish course. Side effects: GI upset, rash."
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="flex justify-between text-xs font-semibold uppercase tracking-wider text-primary">
                      <span>Patient-Friendly Output</span>
                      <span className="rounded bg-green-100 px-1.5 py-0.5 text-[10px] text-green-700">AI Ready</span>
                    </label>
                    <div className="group relative w-full flex-1 rounded-lg border border-primary/20 bg-primary/5 p-4">
                      <div className="prose prose-sm max-w-none text-slate-700 dark:text-slate-300">
                        <h4 className="mb-2 font-bold text-primary">Medication Guide: Amoxicillin</h4>
                        <p className="mb-2"><strong>Why you are taking it:</strong> To treat your sinus infection.</p>
                        <p className="mb-2"><strong>How to take it:</strong> Take one pill (500mg) three times a day for 7 days. Try to take it at the same times each day.</p>
                        <ul className="mb-3 list-disc space-y-1 pl-4 text-xs">
                          <li>Take with food to avoid stomach upset.</li>
                          <li>Complete the full 7 days, even if you feel better.</li>
                        </ul>
                      </div>
                      <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
                        <button className="rounded border border-slate-200 bg-white p-2 text-slate-500 shadow-sm hover:text-primary dark:border-slate-700 dark:bg-slate-800" title="Copy Text">
                          <i className="ri-file-copy-line" />
                        </button>
                        <button className="flex items-center gap-2 rounded bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-blue-600" title="Share via QR">
                          <i className="ri-qr-code-line" /> Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex justify-end border-t border-slate-100 pt-4 dark:border-slate-800">
                  <button className="flex items-center gap-2 rounded-lg bg-primary px-6 py-2.5 font-medium text-white shadow-sm shadow-blue-200 transition-all hover:bg-blue-600 dark:shadow-none">
                    <i className="ri-sparkling-fill" />
                    Generate Summary
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: "Metformin Protocol", desc: "Standard T2D initiation instructions with diet notes.", icon: "ri-capsule-fill", color: "text-orange-600", bg: "bg-orange-100", time: "Used 2h ago" },
                  { title: "Asthma Action Plan", desc: "Green/Yellow/Red zone definitions for pediatric patients.", icon: "ri-lungs-line", color: "text-purple-600", bg: "bg-purple-100", time: "Used 1d ago" },
                  { title: "Post-Op Wound Care", desc: "General incision care, warning signs of infection.", icon: "ri-heart-pulse-line", color: "text-teal-600", bg: "bg-teal-100", time: "Used 3d ago" }
                ].map((item) => (
                  <div key={item.title} className="group cursor-pointer rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-colors hover:border-primary/50 dark:border-slate-800 dark:bg-[#15202b]">
                    <div className="mb-3 flex items-start justify-between">
                      <div className={`flex h-8 w-8 items-center justify-center rounded ${item.bg} ${item.color}`}>
                        <i className={item.icon} />
                      </div>
                      <i className="ri-more-line text-slate-400" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 group-hover:text-primary dark:text-white">{item.title}</h3>
                    <p className="mt-1 line-clamp-2 text-xs text-slate-500">{item.desc}</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                      <i className="ri-time-line" /> {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-span-12 flex flex-col gap-6 lg:col-span-4">
              <div className="relative overflow-hidden rounded-xl bg-primary p-6 text-white shadow-lg shadow-blue-200 dark:shadow-none">
                <div className="relative z-10">
                  <h3 className="mb-1 text-lg font-bold">Active Session</h3>
                  <p className="mb-4 text-sm text-blue-100">Patient: John Doe (#4922)</p>
                  <div className="flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                    <div className="rounded bg-white p-1">
                      <div className="flex h-12 w-12 flex-wrap content-center justify-center bg-white">
                        <div className="grid h-full w-full grid-cols-4 grid-rows-4 gap-0.5 p-0.5">
                          <div className="col-span-2 row-span-2 bg-black" />
                          <div className="col-start-4 bg-black" />
                          <div className="col-start-4 row-start-2 bg-black" />
                          <div className="col-start-3 row-start-3 bg-black" />
                          <div className="col-start-1 row-start-4 bg-black" />
                          <div className="col-start-2 row-start-4 bg-black" />
                          <div className="col-start-4 row-start-4 bg-black" />
                        </div>
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs text-blue-100">pharmawise.com/s/x8k92m</p>
                      <button className="mt-0.5 text-xs font-semibold hover:text-blue-200">Copy Link</button>
                    </div>
                    <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary hover:bg-blue-50">
                      <i className="ri-share-forward-fill" />
                    </button>
                  </div>
                </div>
                <i className="ri-qr-code-line absolute -bottom-4 -right-4 rotate-12 text-9xl opacity-10" />
              </div>

              <div className="flex flex-1 flex-col rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-[#15202b]">
                <div className="flex items-center justify-between border-b border-slate-100 p-4 dark:border-slate-800">
                  <h3 className="font-bold text-slate-800 dark:text-white">Medical References</h3>
                  <button className="text-primary hover:text-blue-600" aria-label="Add reference">
                    <i className="ri-add-circle-line text-xl" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto p-2">
                  {[
                    { title: "FDA Alerts", desc: "2 new recalls today", icon: "ri-alert-line", color: "text-red-500", bg: "bg-red-50", border: "border-red-100" },
                    { title: "Dosage Calculator", desc: "Pediatric and Geriatric", icon: "ri-calculator-line", color: "text-blue-500", bg: "bg-blue-50", border: "border-blue-100" },
                    { title: "Interaction Checker", desc: "Multi-drug analysis", icon: "ri-links-line", color: "text-emerald-500", bg: "bg-emerald-50", border: "border-emerald-100" },
                    { title: "ICD-10 Search", desc: "Coding reference", icon: "ri-book-read-line", color: "text-slate-500", bg: "bg-slate-100", border: "border-slate-200" }
                  ].map((item) => (
                    <a key={item.title} className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800" href="#">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-lg border ${item.bg} ${item.border} ${item.color} dark:border-slate-700 dark:bg-slate-800`}>
                        <i className={`${item.icon} text-lg`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-semibold text-slate-700 group-hover:text-primary dark:text-slate-200">{item.title}</h4>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                      <i className="ri-arrow-right-s-line text-slate-300 group-hover:text-primary" />
                    </a>
                  ))}
                </div>
                <div className="border-t border-slate-100 p-4 dark:border-slate-800">
                  <div className="rounded-lg border border-yellow-100 bg-yellow-50 p-3 dark:border-yellow-900/30 dark:bg-yellow-900/10">
                    <div className="flex gap-2">
                      <i className="ri-information-fill mt-0.5 text-yellow-600 dark:text-yellow-500" />
                      <div>
                        <p className="text-xs font-bold text-yellow-800 dark:text-yellow-500">System Maintenance</p>
                        <p className="mt-1 text-xs text-yellow-700 dark:text-yellow-600">Scheduled for tonight at 02:00 AM EST. Duration: 30 mins.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
