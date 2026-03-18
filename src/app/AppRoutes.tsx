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
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return <>{children}</>;
};

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  return <>{children}</>;
};

const OnboardingRoute = ({ children }: { children: React.ReactNode }) => {
  const { isRegistering, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );
  if (isAuthenticated) return <Navigate to="/dashboard" replace />;
  if (!isRegistering) return <Navigate to="/register" replace />;
  return <>{children}</>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route
        path="/onboarding"
        element={
          <PublicRoute>
            <OnboardingPage />
          </PublicRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/register/otp"
        element={
          <OnboardingRoute>
            <OtpPage />
          </OnboardingRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
