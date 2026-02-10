export default function UserDashboard() {
  return (
    <div className="flex h-screen overflow-hidden bg-background-light font-display text-text-main dark:bg-background-dark">
      <aside className="hidden w-64 flex-shrink-0 flex-col border-r border-gray-200 bg-card-light dark:border-gray-800 dark:bg-card-dark md:flex">
        <div className="flex h-16 items-center border-b border-gray-100 px-6 dark:border-gray-800">
          <div className="flex items-center gap-2 text-xl font-bold text-primary">
            <span className="material-symbols-rounded text-3xl">local_pharmacy</span>
            <span>PHARMAWISE</span>
          </div>
        </div>
        <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-6">
          <a className="flex items-center gap-3 rounded-lg bg-primary/10 px-3 py-3 text-sm font-medium text-primary" href="#">
            <span className="material-symbols-rounded">dashboard</span>
            Dashboard
          </a>
          {[
            { icon: "calendar_month", label: "Appointments" },
            { icon: "prescriptions", label: "Prescriptions" },
            { icon: "chat_bubble", label: "Messages", badge: "2" },
            { icon: "folder_shared", label: "Documents" }
          ].map((item) => (
            <a
              key={item.label}
              className="group flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
              href="#"
            >
              <span className="material-symbols-rounded transition-colors group-hover:text-primary">{item.icon}</span>
              {item.label}
              {item.badge ? <span className="ml-auto rounded-full bg-primary px-2 py-0.5 text-xs text-white">{item.badge}</span> : null}
            </a>
          ))}
        </nav>
        <div className="border-t border-gray-100 p-4 dark:border-gray-800">
          <a className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800" href="#">
            <img
              alt="Profile photo of Sarah Jenkins"
              className="h-8 w-8 rounded-full border border-gray-200 object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDi4QcDHr1KZ8Fo3_bT5iSE7sHNkLUA-oLPcsyjeUBYfWVfSS_gLIN_xyB6De8RXsT2R02znL1RirFvzbpQGeHC7L1vpONFF0Ep4-6Kf5AyeUwkUc0zcXtx1_-rb-PJzBD4OY2CK-NZzUbbf00Nz5-E0ye-VcSapdtOWQBn9pJmibn3PWe1DbzRckuZOMxGgIXcGQuxSSevLeQKqlbtV4xGsVmvlF_jw9sS-j6FWtjYfr-1GzeFZR1CO4HyHHpQpaIKMMKxpyFJ5TU"
            />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Sarah Jenkins</p>
              <p className="truncate text-xs text-gray-500">Patient ID: #8832</p>
            </div>
          </a>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center justify-between border-b border-gray-200 bg-card-light px-4 dark:border-gray-800 dark:bg-card-dark sm:px-6 lg:px-8">
          <button className="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 md:hidden" aria-label="Open navigation">
            <span className="material-symbols-rounded">menu</span>
          </button>
          <div className="flex flex-1 justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="w-full max-w-lg lg:max-w-xs">
              <label className="sr-only" htmlFor="search">Search</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span className="material-symbols-rounded text-xl text-gray-400">search</span>
                </div>
                <input
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 py-2 pl-10 pr-3 text-sm text-gray-900 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  id="search"
                  name="search"
                  placeholder="Search doctors, drugs, or records"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            <button className="relative rounded-full p-1 text-gray-400 hover:text-primary" aria-label="Notifications">
              <span className="material-symbols-rounded">notifications</span>
              <span className="absolute right-0 top-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white dark:ring-card-dark"></span>
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto bg-background-light p-4 dark:bg-background-dark sm:p-6 lg:p-8">
          <div className="mb-8">
            <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Welcome back, Sarah</h1>
            <p className="mb-6 text-gray-600 dark:text-gray-400">Here is what is happening with your health today.</p>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                { icon: "person_search", title: "Find a Doctor", desc: "Book a new appointment", bg: "bg-blue-100", hover: "group-hover:bg-primary group-hover:text-white", text: "text-blue-600" },
                { icon: "medication", title: "Refill Prescription", desc: "Request pharmacy refill", bg: "bg-green-100", hover: "group-hover:bg-green-600 group-hover:text-white", text: "text-green-600" },
                { icon: "upload_file", title: "Upload Documents", desc: "Lab results or insurance", bg: "bg-purple-100", hover: "group-hover:bg-purple-600 group-hover:text-white", text: "text-purple-600" }
              ].map((item) => (
                <button
                  key={item.title}
                  className="group flex items-center gap-4 rounded-xl border border-gray-200 bg-card-light p-4 text-left shadow-sm transition-all hover:border-primary/50 hover:bg-primary/5 dark:border-gray-800 dark:bg-card-dark"
                >
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${item.bg} ${item.text} ${item.hover} transition-colors`}>
                    <span className="material-symbols-rounded text-2xl">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <div className="overflow-hidden rounded-xl border border-gray-200 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <div className="flex items-center justify-between border-b border-gray-100 p-6 dark:border-gray-800">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                    <span className="material-symbols-rounded text-primary">pill</span>
                    My Medications
                  </h2>
                  <a className="text-sm font-medium text-primary hover:text-primary-hover" href="#">View all</a>
                </div>
                <div className="space-y-4 p-6">
                  {[
                    { name: "Amoxicillin", detail: "500mg - 2x Daily (After meals)", status: "Active", note: "Refill in 12 days", accent: "text-blue-500", badge: "bg-green-100 text-green-800", iconBg: "bg-blue-50" },
                    { name: "Lisinopril", detail: "10mg - 1x Daily (Morning)", status: "Refill Needed", note: "Request Now", accent: "text-orange-500", badge: "bg-amber-100 text-amber-800", action: true, iconBg: "bg-orange-50" }
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between rounded-lg border border-gray-100 bg-background-light p-4 dark:border-gray-700 dark:bg-gray-800/50">
                      <div className="flex items-center gap-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.accent} ${item.iconBg} dark:bg-blue-900/20`}>
                          <span className="material-symbols-rounded">medication_liquid</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                          <p className="text-sm text-gray-500">{item.detail}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${item.badge}`}>{item.status}</span>
                        {item.action ? (
                          <button className="mt-1 block text-xs font-semibold text-primary hover:underline">{item.note}</button>
                        ) : (
                          <p className="mt-1 text-xs text-gray-400">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <div className="border-b border-gray-100 p-6 dark:border-gray-800">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                    <span className="material-symbols-rounded text-primary">history</span>
                    Recent Activity
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="border-b bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800">
                        <th className="px-6 py-3">Details</th>
                        <th className="px-6 py-3">Provider</th>
                        <th className="px-6 py-3">Date</th>
                        <th className="px-6 py-3 text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white dark:divide-gray-700 dark:bg-card-dark">
                      {[
                        { title: "General Checkup", sub: "Routine physical exam", provider: "Dr. Emily Smith", date: "Oct 24, 2023", icon: "download" },
                        { title: "Prescription Refill", sub: "Rx #998322-01", provider: "Pharmacy #42", date: "Oct 10, 2023", icon: "receipt_long" }
                      ].map((item) => (
                        <tr key={item.title} className="transition-colors hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <td className="px-6 py-4">
                            <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</p>
                            <p className="text-xs text-gray-500">{item.sub}</p>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{item.provider}</td>
                          <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">{item.date}</td>
                          <td className="px-6 py-4 text-right">
                            <button className="text-gray-400 transition-colors hover:text-primary" title="Download">
                              <span className="material-symbols-rounded">{item.icon}</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <div className="border-b border-gray-100 p-6 dark:border-gray-800">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                    <span className="material-symbols-rounded text-primary">accessibility_new</span>
                    Accessibility
                  </h2>
                </div>
                <div className="space-y-6 p-6">
                  <div>
                    <div className="mb-2 flex items-center justify-between">
                      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Text Size</label>
                      <span className="rounded bg-gray-100 px-2 py-1 text-xs text-gray-500 dark:bg-gray-800">100%</span>
                    </div>
                    <div className="flex items-center">
                      <span className="mr-2 text-xs">A</span>
                      <input className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200 accent-primary dark:bg-gray-700" max="200" min="100" type="range" value="100" readOnly />
                      <span className="ml-2 text-lg font-bold">A</span>
                    </div>
                  </div>
                  {[
                    { title: "High Contrast", desc: "Increase visual distinction" },
                    { title: "Screen Reader", desc: "Optimize layout structure" }
                  ].map((item) => (
                    <div key={item.title} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{item.title}</p>
                        <p className="text-xs text-gray-500">{item.desc}</p>
                      </div>
                      <label className="relative inline-flex cursor-pointer items-center">
                        <input className="peer sr-only" type="checkbox" />
                        <div className="peer h-6 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-primary peer-checked:after:translate-x-full peer-checked:after:border-white dark:bg-gray-700"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-gray-200 bg-card-light shadow-sm dark:border-gray-800 dark:bg-card-dark">
                <div className="border-b border-gray-100 p-6 dark:border-gray-800">
                  <h2 className="flex items-center gap-2 text-lg font-bold text-gray-900 dark:text-white">
                    <span className="material-symbols-rounded text-primary">language</span>
                    Preferences
                  </h2>
                </div>
                <div className="space-y-4 p-6">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Language</label>
                    <select className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-700 dark:bg-gray-800 sm:text-sm">
                      <option>English (US)</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">Region</label>
                    <select className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary dark:border-gray-700 dark:bg-gray-800 sm:text-sm">
                      <option>United States</option>
                      <option>Canada</option>
                      <option>United Kingdom</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="relative h-40 w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-200 dark:border-gray-800 dark:bg-gray-800">
                <img
                  alt="Map view of city streets with pins"
                  className="absolute inset-0 h-full w-full object-cover opacity-80"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCH9gcjjzJ14SRPAjCOnNsYseO0pRt8ygICtWUHyFzll5nf6C99OVec7tmmCvcJkBjgeDCDBlUXudcC0yG5TRWiBLXtOlmfkLuWSqI11bW4j519dfHjVUS2i3Osb7CLCMydRmH8dZqXui-3iYFXf8lwfLTw89F8Ys7_uLgSGoxM77LUake3vG9oyokdPoZvFgrhgUyFBB6gzyeet5mq8ZkmntoIIhd-wOrBDYK5Mph4jb5Hy8diW5dG9S7SjvIiPgrl5AuaEXbBmQ"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-sm font-semibold text-white">Nearby Pharmacies</p>
                  <p className="text-xs text-white/80">3 locations open 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
