import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/auth.service";
import { useAuth } from "../../hooks/useAuth";

export function LoginPage() {
  const navigate = useNavigate();
  const { setToken } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const response = await login(email, password);
      setToken(response.token);
      navigate("/dashboard");
    } catch (err) {
      setError((err as Error).message || "Login failed");
    }
  }

  return (
    <div className="min-h-screen bg-background-light font-display text-slate-800 dark:bg-background-dark dark:text-slate-200">
      <nav className="absolute top-0 z-10 flex w-full items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-xl font-bold text-white">
            P
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
            PHARMAWISE
          </span>
        </div>
        <a className="text-sm font-medium text-slate-500 transition-colors hover:text-primary dark:text-slate-400" href="#">
          Need help?
        </a>
      </nav>

      <main className="relative flex min-h-screen items-center justify-center p-4 md:p-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative z-10 grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="hidden flex-col gap-8 pr-8 lg:flex">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight text-slate-900 dark:text-white xl:text-5xl">
                Modern Healthcare <br />
                <span className="text-primary">Simplified &amp; Secure.</span>
              </h1>
              <p className="max-w-md text-lg text-slate-600 dark:text-slate-400">
                Join PHARMAWISE to connect with top specialists, manage
                prescriptions, and access your medical history securely from
                anywhere.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <span className="material-icons text-xl">shield</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">HIPAA Compliant</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Your data is encrypted and safe.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-800">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <span className="material-icons text-xl">schedule</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold">24/7 Access</h3>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    Healthcare on your schedule.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-slate-200 pt-8 dark:border-slate-700">
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                Trusted by professionals at
              </p>
              <div className="flex gap-6 opacity-60 grayscale transition-all duration-300 hover:grayscale-0">
                <div className="h-8 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-8 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
                <div className="h-8 w-24 animate-pulse rounded bg-slate-200 dark:bg-slate-700" />
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-md">
            <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-800">
              <div className="flex border-b border-slate-100 dark:border-slate-700">
                <button className="flex-1 border-b-2 border-primary bg-primary/5 py-4 text-sm font-semibold text-primary">
                  Log In
                </button>
                <Link
                  className="flex-1 py-4 text-center text-sm font-semibold text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-700/50 dark:hover:text-slate-200"
                  to="/register"
                >
                  Sign Up
                </Link>
              </div>
              <div className="space-y-6 p-6 sm:p-8">
                <div className="space-y-2 text-center">
                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                    Welcome Back
                  </h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Please select your role to continue
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Select User Role">
                  {[
                    { value: "patient", label: "Patient", icon: "person" },
                    { value: "doctor", label: "Doctor", icon: "medical_services" },
                    { value: "pharmacist", label: "Pharmacist", icon: "medication" },
                    { value: "admin", label: "Admin", icon: "admin_panel_settings" }
                  ].map((item) => (
                    <label key={item.value} className="group relative cursor-pointer">
                      <input
                        className="peer sr-only"
                        type="radio"
                        name="role"
                        value={item.value}
                        checked={role === item.value}
                        onChange={() => setRole(item.value)}
                      />
                      <div className="flex h-full flex-col items-center gap-2 rounded-xl border-2 border-slate-200 bg-white p-3 text-center transition-all peer-checked:border-primary peer-checked:bg-primary/5 hover:border-primary/50 dark:border-slate-700 dark:bg-slate-800">
                        <div className="rounded-full bg-slate-100 p-2 text-slate-500 transition-transform group-hover:scale-110 peer-checked:bg-white peer-checked:text-primary dark:bg-slate-700">
                          <span className="material-icons text-xl">{item.icon}</span>
                        </div>
                        <span className="text-sm font-semibold text-slate-600 peer-checked:text-primary dark:text-slate-300">
                          {item.label}
                        </span>
                      </div>
                      {role === item.value ? (
                        <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white shadow-sm">
                          <span className="material-icons text-[10px]">check</span>
                        </div>
                      ) : null}
                    </label>
                  ))}
                </div>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">
                      Email Address
                    </label>
                    <div className="relative">
                      <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        mail
                      </span>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="name@pharmawise.com"
                        className="w-full rounded-lg border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm text-slate-900 shadow-sm transition-shadow focus:border-primary focus:ring-2 focus:ring-primary dark:border-slate-600 dark:bg-slate-700/50 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">
                      Password
                    </label>
                    <div className="relative">
                      <span className="material-icons absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                        lock
                      </span>
                      <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="••••••••"
                        className="w-full rounded-lg border-slate-200 bg-slate-50 py-2.5 pl-10 pr-10 text-sm text-slate-900 shadow-sm transition-shadow focus:border-primary focus:ring-2 focus:ring-primary dark:border-slate-600 dark:bg-slate-700/50 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <label className="flex cursor-pointer items-center gap-2">
                      <input className="h-4 w-4 rounded border-slate-300 bg-slate-50 text-primary focus:ring-primary dark:border-slate-600 dark:bg-slate-700" type="checkbox" />
                      <span className="text-slate-600 dark:text-slate-400">Remember me</span>
                    </label>
                    <a className="font-medium text-primary hover:text-primary-dark hover:underline" href="#">
                      Forgot password?
                    </a>
                  </div>
                  {error ? <p className="text-sm text-red-600">{error}</p> : null}
                  <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all active:scale-[0.98] hover:bg-primary-dark" type="submit">
                    <span>Sign In to Portal</span>
                    <span className="material-icons text-sm">arrow_forward</span>
                  </button>
                </form>
                <div className="relative py-2">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-700" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-2 text-xs uppercase tracking-wider text-slate-400 dark:bg-slate-800">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700" type="button">
                    <img
                      className="h-5 w-5"
                      alt="Google Logo"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7PFjtQS5cdxoiomT9ZKIuVNDimbufThMFgmpIW5lPDAqYnW-lOH1CO4Jyn_FtvaXhOKOLl_3bb5NWXAWKXG0VDW4SFjFrz3u6L6QMOkMtXtVHiGATqnXSXlUq6PpjKutxSLlzRh_z2vdRik8inouQ04GvoZ25jrlrI1meP-sOoU0u5OhHZrym8t1fcIZxiwtIqQNeoEyaRc8rN-WDlBAf9D2hvlms16ibKP8qpexFUUQUMKfnRpuhu4FgG_nsxwDfMF3JXYDHzFg"
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Google</span>
                  </button>
                  <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 transition-colors hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700" type="button">
                    <img
                      className="h-5 w-5 dark:invert"
                      alt="Apple Logo"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxGb4FojKZecpd3G3vz7TLG5exzt0-8J3s6lQ89L_WnWJnJscm1YN9n3i-QSIJ114UuuVWIsJCtIj6duAn4-0SvG0PBglrROS8Z-uhF43lcOr5PurpB8j6HP5Aw6q1jX7v4DY6pJUpR6Ebp9ahqBjI2fVjHPf4arolsxjevR29xBYpVmZRP3oZY6rHvZTCGXdjSGdi_ZtueINjsxEBVHNNoJE-BVp2QBJmUzg89Y3t3j3a_8vSYP0AMFRHdJN_EVu_Ps4q1l0UDOM"
                    />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Apple</span>
                  </button>
                </div>
                <p className="text-center text-xs text-slate-400">
                  By continuing, you agree to PHARMAWISE&apos;s{" "}
                  <a className="underline hover:text-primary" href="#">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a className="underline hover:text-primary" href="#">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-slate-500 dark:text-slate-400">
        <div className="mb-2 flex items-center justify-center gap-6">
          <a className="transition-colors hover:text-primary" href="#">
            About Us
          </a>
          <a className="transition-colors hover:text-primary" href="#">
            Contact Support
          </a>
          <a className="transition-colors hover:text-primary" href="#">
            Legal
          </a>
        </div>
        <p>© 2023 PHARMAWISE Health Systems Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}
