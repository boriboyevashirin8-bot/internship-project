import { Routes, Route, Navigate } from "react-router-dom";
import { useAppSelector } from "../hooks/useAppSelector";
import SplashScreen from "./routes/index";
import OnboardingPage from "./routes/onboarding";
import LoginPage from "./routes/login";
import RegisterPage from "./routes/register";
import OtpPage from "./routes/register/otp";
import DashboardPage from "./routes/dashboard";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/register/otp" element={<OtpPage />} />

      {/* Protected route */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Noto'g'ri URL */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
