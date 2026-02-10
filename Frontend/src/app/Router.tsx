import { Suspense, lazy, type JSX } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../pages/marketing/LandingPage";
import { PlanSelectionPage } from "../pages/marketing/PlanSelectionPage";
import { FeatureComparisonPage } from "../pages/marketing/FeatureComparisonPage";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import { DrugSearchPage } from "../pages/drug/DrugSearchPage";
import { DrugDetailPage } from "../pages/drug/DrugDetailPage";
import { SymptomEducationPage } from "../pages/ai/SymptomEducationPage";
import { UploadStep1 } from "../pages/prescription/UploadStep1";
import { UploadStep2Analyzing } from "../pages/prescription/UploadStep2Analyzing";
import { UploadStep3Verify } from "../pages/prescription/UploadStep3Verify";
import { UploadStep4Confirm } from "../pages/prescription/UploadStep4Confirm";
import { Shell } from "../components/layout/Shell";
import { LoadingState } from "../components/feedback/LoadingState";
import { useAuth } from "../hooks/useAuth";

const UserDashboard = lazy(() => import("../pages/dashboards/UserDashboard"));
const DoctorDashboard = lazy(() => import("../pages/dashboards/DoctorDashboard"));
const AdminDashboard = lazy(() => import("../pages/dashboards/AdminDashboard"));

function RoleGate({
  allowed,
  children
}: {
  allowed: Array<"patient" | "clinician" | "admin">;
  children: JSX.Element;
}) {
  const { role, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowed.includes(role)) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Shell>
        <Suspense fallback={<LoadingState message="Loading" />}> 
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/plans" element={<PlanSelectionPage />} />
            <Route path="/features" element={<FeatureComparisonPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/drug-search" element={<DrugSearchPage />} />
            <Route path="/drug/:id" element={<DrugDetailPage />} />
            <Route path="/ai/education" element={<SymptomEducationPage />} />
            <Route path="/prescription/upload" element={<UploadStep1 />} />
            <Route path="/prescription/analyzing" element={<UploadStep2Analyzing />} />
            <Route path="/prescription/verify" element={<UploadStep3Verify />} />
            <Route path="/prescription/confirm" element={<UploadStep4Confirm />} />
            <Route
              path="/dashboard"
              element={
                <RoleGate allowed={["patient", "clinician", "admin"]}>
                  <UserDashboard />
                </RoleGate>
              }
            />
            <Route
              path="/dashboard/doctor"
              element={
                <RoleGate allowed={["clinician", "admin"]}>
                  <DoctorDashboard />
                </RoleGate>
              }
            />
            <Route
              path="/dashboard/admin"
              element={
                <RoleGate allowed={["admin"]}>
                  <AdminDashboard />
                </RoleGate>
              }
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Shell>
    </BrowserRouter>
  );
}
