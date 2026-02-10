export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-background-light font-display text-neutral-800 dark:bg-background-dark dark:text-neutral-100">
      <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-neutral-200 bg-surface-light px-6 dark:border-neutral-700 dark:bg-surface-dark">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tight text-primary">
            <span className="material-icons text-3xl">medical_services</span>
            <span>PHARMAWISE</span>
          </div>
          <div className="mx-2 h-6 w-px bg-neutral-200 dark:bg-neutral-700" />
          <h1 className="hidden text-sm font-medium text-neutral-500 dark:text-neutral-400 md:block">Administrator Console</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden w-64 md:block">
            <span className="material-icons absolute left-3 top-2.5 text-sm text-neutral-400">search</span>
            <input
              className="w-full rounded-lg border-none bg-neutral-100 py-2 pl-9 pr-4 text-sm text-neutral-700 placeholder-neutral-400 focus:ring-2 focus:ring-primary/50 dark:bg-neutral-800 dark:text-neutral-200"
              placeholder="Search patients, doctors..."
              type="text"
            />
          </div>
          <button className="relative text-neutral-500 transition-colors hover:text-primary" aria-label="Notifications">
            <span className="material-icons">notifications</span>
            <span className="absolute right-0 top-0 h-2 w-2 rounded-full border border-surface-light bg-red-500 dark:border-surface-dark" />
          </button>
          <div className="flex items-center gap-3 border-l border-neutral-200 pl-6 dark:border-neutral-700">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Dr. Sarah Connor</p>
              <p className="text-xs text-neutral-500">Super Admin</p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border-2 border-primary/20 bg-primary/10">
              <img
                alt="Doctor profile picture"
                className="h-full w-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSf_OSw6EWI8TO2CV7ekG-DdgFzxJrDW49m9O4S5EV3wLb-ZZO46ZgpWfIO-sNdMrR61_U_QCFlkB8oM6tkR7fZDixBpozauXOYy8rLlfqg_SoTekTZVb5si9trwOt8NNsLS-7_lgWqm6Kd6rrsEmzwD2vBkEhFog0Z4TPPzVmviAgOIm7xDXeiaZMJ7bXjgTaUpZ7Fa-Kt27gTsTOlg2JNbkKo0zS7J9I2_b52FlFq4IeWYx4hluGY9w6HgcDtsLFBXZsX6Au-tA"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="flex w-20 flex-shrink-0 flex-col border-r border-neutral-200 bg-surface-light transition-all duration-300 dark:border-neutral-700 dark:bg-surface-dark lg:w-64">
          <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
            <a className="group flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-3 font-medium text-primary transition-colors" href="#">
              <span className="material-icons text-2xl transition-transform group-hover:scale-110">dashboard</span>
              <span className="hidden lg:block">Dashboard</span>
            </a>
            <div className="pb-2 pt-4">
              <p className="hidden px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400 lg:block">Management</p>
              <div className="my-2 h-px bg-neutral-200 dark:bg-neutral-700 lg:hidden" />
            </div>
            {[
              { icon: "people", label: "Patients" },
              { icon: "medical_services", label: "Doctors" },
              { icon: "local_pharmacy", label: "Pharmacy", badge: "12" }
            ].map((item) => (
              <a
                key={item.label}
                className="group flex items-center gap-3 rounded-lg px-3 py-3 text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-primary dark:text-neutral-400 dark:hover:bg-neutral-800"
                href="#"
              >
                <span className="material-icons text-2xl transition-colors group-hover:text-primary">{item.icon}</span>
                <span className="hidden lg:block">{item.label}</span>
                {item.badge ? <span className="ml-auto hidden rounded-full bg-primary px-1.5 py-0.5 text-[10px] font-bold text-white lg:block">{item.badge}</span> : null}
              </a>
            ))}
            <div className="pb-2 pt-4">
              <p className="hidden px-3 text-xs font-semibold uppercase tracking-wider text-neutral-400 lg:block">System</p>
              <div className="my-2 h-px bg-neutral-200 dark:bg-neutral-700 lg:hidden" />
            </div>
            {[
              { icon: "language", label: "Localization" },
              { icon: "settings", label: "Settings" }
            ].map((item) => (
              <a
                key={item.label}
                className="group flex items-center gap-3 rounded-lg px-3 py-3 text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-primary dark:text-neutral-400 dark:hover:bg-neutral-800"
                href="#"
              >
                <span className="material-icons text-2xl transition-colors group-hover:text-primary">{item.icon}</span>
                <span className="hidden lg:block">{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="border-t border-neutral-200 p-4 dark:border-neutral-700">
            <div className="hidden rounded-lg bg-neutral-100 p-3 lg:block dark:bg-neutral-800">
              <div className="mb-2 flex items-center gap-2">
                <span className="material-icons text-sm text-primary">support_agent</span>
                <span className="text-xs font-semibold">Support Status</span>
              </div>
              <div className="mb-1 h-1.5 w-full rounded-full bg-neutral-200 dark:bg-neutral-700">
                <div className="h-1.5 rounded-full bg-green-500" style={{ width: "98%" }} />
              </div>
              <p className="text-[10px] text-neutral-500">Systems Operational</p>
            </div>
          </div>
        </aside>

        <main className="relative flex-1 overflow-y-auto bg-background-light dark:bg-background-dark">
          <div className="flex h-10 items-center overflow-hidden border-b border-red-100 bg-red-50 dark:border-red-900/30 dark:bg-red-900/20">
            <div className="flex h-full items-center bg-red-100 px-4 text-xs font-bold uppercase tracking-wide text-red-700 shadow-sm dark:bg-red-900/50 dark:text-red-300">
              <span className="material-icons mr-2 animate-pulse text-sm">warning</span>
              Critical Alerts
            </div>
            <div className="w-full overflow-hidden whitespace-nowrap text-sm font-medium text-red-600 dark:text-red-300">
              <span className="px-6">FDA RECALL: Batch #9921 Aspirin 81mg - Improper Seal Integrity - Action Required</span>
              <span className="px-6">SYSTEM ALERT: Maintenance scheduled for US-East Data Center at 02:00 AM UTC</span>
              <span className="px-6">PHARMACY NOTICE: Supply chain disruption for Amoxicillin in EU Region</span>
            </div>
          </div>

          <div className="mx-auto max-w-7xl space-y-6 p-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { label: "Active Patients", value: "12,450", icon: "people_outline", tone: "text-primary", bg: "bg-blue-50", trend: "5.2%", trendUp: true, note: "vs last month" },
                { label: "Verified Doctors", value: "842", icon: "badge", tone: "text-purple-600", bg: "bg-purple-50", trend: "1.8%", trendUp: true, note: "vs last month" },
                { label: "Pharmacy Orders", value: "3,205", icon: "medication", tone: "text-orange-600", bg: "bg-orange-50", trend: "0.4%", trendUp: false, note: "vs last week" },
                { label: "System Health", value: "99.9%", icon: "monitor_heart", tone: "text-teal-600", bg: "bg-teal-50", status: "All systems operational" }
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-neutral-200 bg-surface-light p-5 shadow-sm transition-shadow hover:shadow-md dark:border-neutral-700 dark:bg-surface-dark">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">{item.label}</p>
                      <h3 className="mt-1 text-2xl font-bold text-neutral-800 dark:text-neutral-100">{item.value}</h3>
                    </div>
                    <div className={`rounded-lg p-2 ${item.bg} ${item.tone}`}>
                      <span className="material-icons">{item.icon}</span>
                    </div>
                  </div>
                  {item.status ? (
                    <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                      {item.status}
                    </div>
                  ) : (
                    <div className="flex items-center text-xs">
                      <span
                        className={`flex items-center gap-1 rounded px-1.5 py-0.5 font-medium ${
                          item.trendUp ? "bg-green-50 text-green-600 dark:bg-green-900/20" : "bg-red-50 text-red-600 dark:bg-red-900/20"
                        }`}
                      >
                        <span className="material-icons text-[10px]">{item.trendUp ? "arrow_upward" : "arrow_downward"}</span>
                        {item.trend}
                      </span>
                      <span className="ml-2 text-neutral-400">{item.note}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <div className="rounded-xl border border-neutral-200 bg-surface-light p-5 shadow-sm dark:border-neutral-700 dark:bg-surface-dark">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">Platform Growth</h2>
                      <p className="mt-1 text-xs text-neutral-500">User acquisition trends (Last 30 days)</p>
                    </div>
                    <div className="flex rounded-lg bg-neutral-100 p-1 dark:bg-neutral-800">
                      <button className="rounded-md bg-white px-3 py-1 text-xs font-medium text-primary shadow dark:bg-neutral-700">30 Days</button>
                      <button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">90 Days</button>
                      <button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">1 Year</button>
                    </div>
                  </div>
                  <div className="relative flex h-64 w-full items-end justify-between gap-2 px-2 text-xs text-neutral-400">
                    <div className="absolute bottom-6 left-0 top-0 flex w-8 flex-col justify-between pr-2 text-right">
                      {['2k','1.5k','1k','500','0'].map((label) => (
                        <span key={label}>{label}</span>
                      ))}
                    </div>
                    <div className="relative ml-8 h-full w-full border-b border-l border-neutral-200 dark:border-neutral-700">
                      {[0, 1, 2, 3].map((index) => (
                        <div key={index} className="absolute top-0 w-full border-t border-dashed border-neutral-200 opacity-50 dark:border-neutral-700" style={{ top: `${index * 25}%` }} />
                      ))}
                      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                        <path d="M0,200 C30,190 60,150 90,140 C120,130 150,160 180,120 C210,80 240,100 270,90 C300,80 330,60 360,50 C390,40 420,50 450,30 C480,10 510,20 540,5" fill="none" stroke="#137fec" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        <path d="M0,200 C30,190 60,150 90,140 C120,130 150,160 180,120 C210,80 240,100 270,90 C300,80 330,60 360,50 C390,40 420,50 450,30 C480,10 510,20 540,5 V256 H0 Z" fill="url(#gradientPrimary)" opacity="0.1" />
                        <defs>
                          <linearGradient id="gradientPrimary" x1="0%" x2="0%" y1="0%" y2="100%">
                            <stop offset="0%" stopColor="#137fec" stopOpacity="1" />
                            <stop offset="100%" stopColor="#137fec" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg className="pointer-events-none absolute inset-0 h-full w-full" preserveAspectRatio="none">
                        <path d="M0,240 C30,235 60,230 90,220 C120,210 150,215 180,200 C210,185 240,190 270,180 C300,170 330,175 360,160 C390,145 420,150 450,140 C480,130 510,135 540,120" fill="none" stroke="#94a3b8" strokeDasharray="4 2" strokeLinecap="round" strokeWidth="2" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between pl-8 text-xs text-neutral-400">
                    {['1 Nov','5 Nov','10 Nov','15 Nov','20 Nov','25 Nov','30 Nov'].map((label) => (
                      <span key={label}>{label}</span>
                    ))}
                  </div>
                  <div className="mt-4 flex justify-center gap-6">
                    <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <div className="h-3 w-3 rounded-full bg-primary" /> Patients
                    </div>
                    <div className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400">
                      <div className="h-3 w-3 rounded-full bg-neutral-400" /> Doctors
                    </div>
                  </div>
                </div>

                <div className="overflow-hidden rounded-xl border border-neutral-200 bg-surface-light shadow-sm dark:border-neutral-700 dark:bg-surface-dark">
                  <div className="flex items-center justify-between border-b border-neutral-200 p-5 dark:border-neutral-700">
                    <div>
                      <h2 className="text-lg font-bold text-neutral-800 dark:text-neutral-100">Localization Management</h2>
                      <p className="mt-1 text-xs text-neutral-500">Translation progress by region</p>
                    </div>
                    <button className="rounded-lg px-3 py-1.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10">Manage All</button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="flex items-center justify-center border-r border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800/50">
                      <div className="relative h-48 w-full overflow-hidden rounded-lg border border-primary/10 bg-primary/5">
                        <img
                          alt="World map with markers"
                          className="h-full w-full object-cover opacity-80 dark:mix-blend-luminosity"
                          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBS9lceSr03FzLgkuWoWqsr05NhnzTBzCcAv86aj8OBmIEm0KIjMgkMKo0ObgydJS0YL6S3k6hDidNSEjE1bs0UkJIhrRCsIBhydi6zTB_ixmM6fBFiGLIR__mymc_CvMfxLihQyDElYuWbPZm9yQeW6RrhDn_RCAYrFhjvQfVmPZkfI3uUTVHW0nzn6la2Cg7VXcSBA6wgu8h4txMIawqXlNR_clRFnIwSDg-xRXzRQus-9NZj0ILP6Zquwgomu0jriAmrUuL4UsU"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="rounded-lg border border-neutral-200 bg-white/90 px-4 py-2 text-xs font-medium shadow-sm backdrop-blur-sm dark:border-neutral-700 dark:bg-black/70">
                            Active Regions: <span className="font-bold text-primary">14</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-sm">
                        <thead className="bg-neutral-50 text-xs font-medium uppercase text-neutral-500 dark:bg-neutral-800">
                          <tr>
                            <th className="px-5 py-3">Region</th>
                            <th className="px-5 py-3">Status</th>
                            <th className="px-5 py-3 text-right">Completion</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                          {[
                            { region: "Spanish", code: "ES", status: "Live", progress: 100, tone: "bg-green-100 text-green-800", bar: "bg-green-500" },
                            { region: "French", code: "FR", status: "Live", progress: 98, tone: "bg-green-100 text-green-800", bar: "bg-primary" },
                            { region: "German", code: "DE", status: "Pending", progress: 45, tone: "bg-yellow-100 text-yellow-800", bar: "bg-yellow-500" },
                            { region: "Japanese", code: "JP", status: "Pending", progress: 12, tone: "bg-yellow-100 text-yellow-800", bar: "bg-yellow-500" }
                          ].map((item) => (
                            <tr key={item.region} className="transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-800/50">
                              <td className="px-5 py-3 font-medium">
                                <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-neutral-200 text-[10px] font-bold text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                                  {item.code}
                                </span>
                                {item.region}
                              </td>
                              <td className="px-5 py-3">
                                <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${item.tone} dark:bg-green-900/30 dark:text-green-300`}>
                                  {item.status}
                                </span>
                              </td>
                              <td className="px-5 py-3 text-right">
                                <div className="flex items-center justify-end gap-2">
                                  <span className="text-xs text-neutral-500">{item.progress}%</span>
                                  <div className="h-1.5 w-16 rounded-full bg-neutral-200 dark:bg-neutral-700">
                                    <div className={`h-1.5 rounded-full ${item.bar}`} style={{ width: `${item.progress}%` }} />
                                  </div>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex max-h-[500px] flex-col rounded-xl border border-neutral-200 bg-surface-light shadow-sm dark:border-neutral-700 dark:bg-surface-dark">
                  <div className="flex items-center justify-between rounded-t-xl border-b border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-700 dark:bg-neutral-800/30">
                    <h2 className="text-sm font-bold uppercase tracking-wide text-neutral-700 dark:text-neutral-200">System Logs</h2>
                    <button className="text-xs font-medium text-primary hover:underline">View All</button>
                  </div>
                  <div className="flex-1 overflow-y-auto">
                    <div className="ml-6 space-y-6 border-l border-neutral-200 py-4 pl-6 dark:border-neutral-700">
                      {[
                        { time: "Today, 10:42 AM", title: "System backup completed successfully.", desc: "Backup size: 4.2TB. No errors reported.", tone: "bg-blue-500" },
                        { time: "Today, 09:15 AM", title: "High latency detected in AP-South region.", desc: "Auto-scaling triggered. Load balanced.", tone: "bg-yellow-500" },
                        { time: "Yesterday, 11:30 PM", title: "New localization string added.", desc: "Added pharmacy_onboarding_v2 keys.", tone: "bg-neutral-300" },
                        { time: "Yesterday, 08:00 PM", title: "Failed login attempts spiked.", desc: "IP Blocked: 192.168.x.x after 15 attempts.", tone: "bg-red-500" }
                      ].map((item) => (
                        <div key={item.title} className="relative">
                          <div className={`absolute -left-[31px] h-2.5 w-2.5 rounded-full border-2 border-white dark:border-surface-dark ${item.tone}`} />
                          <div>
                            <p className="mb-1 text-xs text-neutral-400">{item.time}</p>
                            <p className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{item.title}</p>
                            <p className="mt-1 text-xs text-neutral-500">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-dark p-6 text-white shadow-lg">
                  <div className="absolute right-0 top-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-white opacity-10" />
                  <div className="absolute bottom-0 left-0 -mb-8 -ml-8 h-24 w-24 rounded-full bg-white opacity-10" />
                  <h3 className="relative z-10 mb-4 text-lg font-bold">Quick Actions</h3>
                  <div className="relative z-10 grid grid-cols-2 gap-3">
                    {[
                      { icon: "person_add", label: "Add User" },
                      { icon: "campaign", label: "Broadcast" },
                      { icon: "cloud_upload", label: "Import Data" },
                      { icon: "settings_applications", label: "Config" }
                    ].map((item) => (
                      <button key={item.label} className="flex flex-col items-start gap-2 rounded-lg border border-white/20 bg-white/20 p-3 text-left transition-colors hover:bg-white/30">
                        <span className="material-icons text-xl">{item.icon}</span>
                        <span className="text-xs font-medium">{item.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-auto border-t border-neutral-200 bg-surface-light px-6 py-6 text-xs text-neutral-500 dark:border-neutral-700 dark:bg-surface-dark">
            <div className="flex items-center justify-between">
              <p>Copyright 2023 PHARMAWISE Healthcare Platform. All rights reserved.</p>
              <div className="flex gap-4">
                <a className="hover:text-primary" href="#">Privacy Policy</a>
                <a className="hover:text-primary" href="#">Terms of Service</a>
                <a className="hover:text-primary" href="#">Help Center</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
